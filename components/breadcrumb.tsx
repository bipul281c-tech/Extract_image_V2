"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconChevronRight, IconHome } from "@tabler/icons-react";
import { StructuredData } from "./structured-data";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    /**
     * Custom page title. If not provided, will use path-based title
     */
    pageTitle?: string;
    /**
     * Custom breadcrumb items. If provided, these will be used instead of auto-generated ones
     */
    customItems?: BreadcrumbItem[];
}

// Helper function to convert URL path to readable title
function pathToTitle(path: string): string {
    return path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function Breadcrumb({ pageTitle, customItems }: BreadcrumbProps) {
    const pathname = usePathname();

    // Generate breadcrumb items from current path
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        // If custom items provided, use them
        if (customItems) {
            return [{ label: "Home", href: "/" }, ...customItems];
        }

        const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

        // Don't generate breadcrumbs for homepage
        if (pathname === "/") {
            return [];
        }

        // Split path and create breadcrumb for current page only (no intermediate levels)
        const pathSegments = pathname.split('/').filter(Boolean);

        if (pathSegments.length > 0) {
            const currentPath = pathname;
            const title = pageTitle || pathToTitle(pathSegments[pathSegments.length - 1]);

            items.push({
                label: title,
                href: currentPath
            });
        }

        return items;
    };

    const allItems = generateBreadcrumbs();

    if (allItems.length === 0) {
        return null;
    }

    // Generate BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://extractpics.com${item.href}`
        }))
    };

    return (
        <>
            {/* Breadcrumb Schema */}
            <StructuredData data={breadcrumbSchema} />

            {/* Visual Breadcrumb */}
            <nav
                aria-label="Breadcrumb"
                className="w-full mb-8"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <ol className="flex items-center gap-2 text-sm">
                        {allItems.map((item, index) => {
                            const isLast = index === allItems.length - 1;
                            const isFirst = index === 0;

                            return (
                                <li key={item.href} className="flex items-center gap-2">
                                    {index > 0 && (
                                        <span className="text-muted-foreground/40 select-none">/</span>
                                    )}

                                    {isLast ? (
                                        <span
                                            className="text-foreground/90 font-medium"
                                            aria-current="page"
                                        >
                                            {isFirst && <IconHome size={16} className="inline mr-1.5 opacity-90" aria-hidden="true" />}
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground/70 hover:text-primary transition-colors flex items-center gap-1.5 group"
                                        >
                                            {isFirst && <IconHome size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />}
                                            <span className="group-hover:underline underline-offset-2">{item.label}</span>
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </nav>
        </>
    );
}
