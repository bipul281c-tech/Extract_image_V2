import { useState, useCallback, useEffect } from 'react';

interface QueueItem {
    id: string;
    execute: () => Promise<void>;
    resolve: (value: void | PromiseLike<void>) => void;
    reject: (reason?: any) => void;
}

const MAX_CONCURRENT_REQUESTS = 20;

// Singleton state to share across components
let activeCount = 0;
let queue: QueueItem[] = [];
let listeners: Array<(state: { activeCount: number, queueLength: number }) => void> = [];

const notifyListeners = () => {
    listeners.forEach(l => l({ activeCount, queueLength: queue.length }));
};

const processQueue = () => {
    if (activeCount < MAX_CONCURRENT_REQUESTS && queue.length > 0) {
        const item = queue.shift();
        if (item) {
            activeCount++;
            notifyListeners();
            item.execute()
                .then(item.resolve)
                .catch(item.reject)
                .finally(() => {
                    activeCount--;
                    notifyListeners();
                    processQueue();
                });
        }
    }
};

export const useRequestQueue = () => {
    const [stats, setStats] = useState({ activeCount, queueLength: queue.length });

    useEffect(() => {
        const listener = (newStats: { activeCount: number, queueLength: number }) => {
            setStats(newStats);
        };
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    }, []);

    const queueRequest = useCallback(async <T>(fn: () => Promise<T>): Promise<T> => {
        const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        return new Promise<T>((resolve, reject) => {
            const wrappedFn = async () => {
                try {
                    const result = await fn();
                    return result;
                } catch (error) {
                    throw error;
                }
            };

            const queueItem: QueueItem = {
                id: requestId,
                execute: async () => {
                    try {
                        const result = await wrappedFn();
                        (resolve as any)(result);
                    } catch (error) {
                        reject(error);
                    }
                },
                resolve: () => { }, // Handled in execute
                reject: () => { }, // Handled in execute
            };

            queue.push(queueItem);
            notifyListeners();
            processQueue();
        });
    }, []);

    return {
        queueRequest,
        activeCount: stats.activeCount,
        queueLength: stats.queueLength,
        isQueued: stats.activeCount >= MAX_CONCURRENT_REQUESTS
    };
};
