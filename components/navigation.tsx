"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";
import { SoundToggle } from "./sound-toggle";

const tools = [
    { label: "Image Downloader", href: "/image-downloader" },
    { label: "Bulk Extractor", href: "/bulk-extractor" },
    { label: "Image Saver", href: "/image-saver" },
    { label: "Download from Link", href: "/download-image-from-link" },
    { label: "Facebook Downloader", href: "/facebook-image-downloader" },
];

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="ExtractPics"
                        width={28}
                        height={28}
                        className="rounded"
                        priority
                    />
                    <span className="font-semibold text-sm">ExtractPics</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {/* Tools Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setToolsOpen(true)}
                        onMouseLeave={() => setToolsOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                            Tools
                            <IconChevronDown size={14} />
                        </button>

                        {toolsOpen && (
                            <div className="absolute top-full left-0 pt-2">
                                <div className="bg-popover border border-border rounded-md shadow-lg py-1 min-w-[180px]">
                                    {tools.map((tool) => (
                                        <Link
                                            key={tool.href}
                                            href={tool.href}
                                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                        >
                                            {tool.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/infographics" className="text-muted-foreground hover:text-foreground transition-colors">
                        Infographics
                    </Link>

                    <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                        Blog
                    </Link>

                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-2">
                        <SoundToggle />
                        <ThemeToggle />
                    </div>

                    <button
                        className="md:hidden p-2 hover:bg-accent rounded-md"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-4 py-3 space-y-1">
                        <button
                            onClick={() => setToolsOpen(!toolsOpen)}
                            className="flex items-center justify-between w-full py-2 text-sm"
                        >
                            Tools
                            <IconChevronDown size={14} className={toolsOpen ? "rotate-180" : ""} />
                        </button>

                        {toolsOpen && (
                            <div className="pl-4 space-y-1">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.href}
                                        href={tool.href}
                                        className="block py-2 text-sm text-muted-foreground"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {tool.label}
                                    </Link>
                                ))}
                            </div>
                        )}

                        <Link
                            href="/infographics"
                            className="block py-2 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Infographics
                        </Link>

                        <Link
                            href="/blog"
                            className="block py-2 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>

                        <Link
                            href="/about"
                            className="block py-2 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>

                        <div className="flex items-center gap-4 pt-3 border-t border-border">
                            <SoundToggle />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
