"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";
import { SoundToggle } from "./sound-toggle";

interface NavItem {
    label: string;
    href: string;
}

interface NavGroup {
    label: string;
    items: NavItem[];
}

const navigationGroups: NavGroup[] = [
    {
        label: "Image Downloaders",
        items: [
            { label: "Image Downloader", href: "/image-downloader" },
            { label: "Free Image Downloader", href: "/image-downloader-free" },
            { label: "Download Image", href: "/download-image" },
            { label: "Download from Link", href: "/download-image-from-link" },
            { label: "Facebook Downloader", href: "/facebook-image-downloader" },
        ],
    },
    {
        label: "Image Extractors",
        items: [
            { label: "Bulk Extractor", href: "/bulk-extractor" },
            { label: "Extraction Tool", href: "/extraction-tool" },
            { label: "Extractor Tool", href: "/extractor-tool" },
        ],
    },
    {
        label: "Image Savers",
        items: [
            { label: "Image Saver", href: "/image-saver" },
            { label: "Photo Saver", href: "/photo-saver" },
            { label: "Photos Saver", href: "/photos-saver" },
            { label: "Save Image", href: "/save-image" },
        ],
    },
    {
        label: "Image Links & URLs",
        items: [
            { label: "Image Link", href: "/image-link" },
            { label: "Image to URL", href: "/image-to-image-url" },
            { label: "Images and Links", href: "/images-and-links" },
            { label: "Link Picture", href: "/link-picture" },
            { label: "Pic Link", href: "/pic-link" },
        ],
    },
];

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-background shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="ExtractPics Logo"
                        width={32}
                        height={32}
                        className="rounded"
                        priority
                    />
                    <span className="text-foreground font-bold tracking-tight text-sm">ExtractPics</span>
                </Link>

                {/* Desktop Navigation - Centered */}
                <div className="hidden lg:flex items-center gap-1 text-sm font-medium absolute left-1/2 -translate-x-1/2">
                    {navigationGroups.map((group) => (
                        <div
                            key={group.label}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(group.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 whitespace-nowrap">
                                {group.label}
                                <IconChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${openDropdown === group.label
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <div className="p-1">
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        href="/infographics"
                        className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 whitespace-nowrap"
                    >
                        Infographics
                    </Link>

                    <Link
                        href="/about"
                        className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                    >
                        About
                    </Link>
                </div>

                {/* Theme & Sound Toggle - Right Side */}
                <div className="hidden lg:flex items-center gap-2">
                    <SoundToggle />
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-background border-t border-border overflow-y-auto">
                    <div className="px-4 py-4 space-y-4">
                        {navigationGroups.map((group) => (
                            <div key={group.label}>
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === group.label ? null : group.label)
                                    }
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                                >
                                    {group.label}
                                    <IconChevronDown
                                        size={16}
                                        className={`transition-transform ${openDropdown === group.label ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openDropdown === group.label && (
                                    <div className="mt-2 ml-4 space-y-1">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/infographics"
                            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Infographics
                        </Link>

                        <Link
                            href="/about"
                            className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>

                        <div className="px-3 py-2 flex items-center justify-between border-t border-border/50 mt-4 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Sound:</span>
                                <SoundToggle />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Theme:</span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
