"use client"

import * as React from "react"
import Image from "next/image"

interface SocialProofCounterProps {
    baseCount?: number
    className?: string
}

export function SocialProofCounter({
    baseCount = 4527,
    className
}: SocialProofCounterProps) {
    const [count, setCount] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    React.useEffect(() => {
        if (!mounted) return

        // Initial animation on mount - count up from 0
        let startCount = 0
        const targetCount = baseCount
        const duration = 1500
        const steps = 40
        const increment = targetCount / steps
        const stepDuration = duration / steps

        const countUpInterval = setInterval(() => {
            startCount += increment
            if (startCount >= targetCount) {
                setCount(targetCount)
                clearInterval(countUpInterval)
            } else {
                setCount(Math.floor(startCount))
            }
        }, stepDuration)

        return () => clearInterval(countUpInterval)
    }, [baseCount, mounted])

    React.useEffect(() => {
        if (!mounted) return

        // Periodic increment to simulate live activity
        const incrementInterval = setInterval(() => {
            setIsAnimating(true)
            setCount(prev => prev + Math.floor(Math.random() * 2) + 1)

            setTimeout(() => setIsAnimating(false), 300)
        }, 8000 + Math.random() * 4000) // Random interval between 8-12 seconds

        return () => clearInterval(incrementInterval)
    }, [mounted])

    const formattedCount = count.toLocaleString()

    if (!mounted) {
        return null
    }

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            {/* Logo */}
            <Image
                src="/logo.png"
                alt="ExtractPics"
                width={24}
                height={24}
                className="w-6 h-6"
            />

            {/* Counter text */}
            <p className="text-sm text-muted-foreground">
                <span
                    className={`font-bold text-foreground tabular-nums transition-all duration-300 ${
                        isAnimating ? 'scale-105 text-primary' : ''
                    }`}
                    style={{ display: 'inline-block' }}
                >
                    {formattedCount}
                </span>
                {" "}users extracted images in the last 7 days
            </p>
        </div>
    )
}
