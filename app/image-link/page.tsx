import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Image Link - Extract Image Links from Any Website | ExtractPics",
    description: "Extract image links from any website instantly. Get direct image URLs, download images from links, and save image links in bulk. Free image link extractor tool with no registration required.",
    keywords: [
        "image link",
        "image link extractor",
        "get image link",
        "extract image links",
        "image url extractor",
        "download image from link",
        "image link finder",
        "get image url from website",
        "extract image urls",
        "image link tool"
    ],
    openGraph: {
        title: "Image Link - Extract Image Links from Any Website",
        description: "Extract image links from any website instantly. Get direct image URLs and download images from links. Free image link extractor tool.",
        type: "website",
        url: "https://www.extractpics.com/image-link",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-image-link.png",
                width: 1200,
                height: 630,
                alt: "Image Link - Extract Image Links from Any Website"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Link - Extract Image Links from Any Website",
        description: "Extract image links from any website instantly. Get direct image URLs and download images from links.",
        images: ["https://www.extractpics.com/og-image-image-link.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/image-link",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const faqItems = [
    {
        question: "How do I extract image links from a website?",
        answer: "Simply paste the website URL into our image link extractor tool, click scan, and we'll extract all image links from the page. You can then copy individual image URLs or export all image links at once. Our tool finds both visible and hidden image links."
    },
    {
        question: "Can I download images directly from image links?",
        answer: "Yes! Our tool not only extracts image links but also allows you to download images directly from those links. After extracting image URLs, you can preview and download individual images or download all images as a ZIP file."
    },
    {
        question: "What types of image links can be extracted?",
        answer: "Our image link extractor finds all types of image URLs including direct image links (JPG, PNG, WebP, GIF, SVG), CDN links, data URLs, and dynamically loaded image links. Use Deep Scan mode to find image links loaded via JavaScript."
    },
    {
        question: "How do I get the direct URL of an image?",
        answer: "Paste the webpage URL into our tool and scan it. Our image link extractor will display all images with their direct URLs. Click on any image to copy its direct link, or export all image links to a file for bulk processing."
    },
    {
        question: "Can I extract image links from multiple pages?",
        answer: "Yes! Use our batch mode to extract image links from multiple URLs simultaneously. Simply paste multiple website URLs (one per line) and our tool will extract all image links from all pages at once."
    },
    {
        question: "Is the image link extractor free to use?",
        answer: "Absolutely! Our image link extractor is completely free with no limitations. Extract unlimited image links from any website without registration, subscriptions, or hidden fees. All features are free forever."
    },
    {
        question: "Are the extracted image links permanent?",
        answer: "The image links we extract are the actual URLs hosted on the source website. As long as the source website keeps the images online, the links will work. We recommend downloading important images rather than just saving links."
    },
    {
        question: "Can I use image links for my website?",
        answer: "While you can technically use image links, we recommend downloading images and hosting them yourself for better performance and reliability. Hotlinking to images on other websites can break if they move or delete the images, and may violate their terms of service."
    }
];

export default function ImageLinkPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Main Tool - Positioned at Top */}
            <section className="relative">
                <ExtractPicsTool />
            </section>

            {/* Hero Section */}
            <section className="relative overflow-hidden border-t border-border">
                <div className="absolute inset-0 bg-grid opacity-50" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center space-y-6 max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            <IconSparkles size={14} />
                            Free Image Link Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image Link Extractor
                            <br />
                            Get Image URLs from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Extract <strong className="text-foreground">image links</strong> from any website instantly. Get direct image URLs, copy image links, and download images from links with our powerful <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">image link extractor</Link>. Free, fast, and easy to use.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Extract All Links</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Direct URLs</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Export</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>100% Free</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Powerful Image Link Extraction
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Extract image links from any website with our advanced <Link href="https://www.extractpics.com/" className="text-primary hover:underline">image link tool</Link>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Extract All Image Links"
                        description="Get direct URLs for all images on any webpage. Our image link extractor finds every image URL including those in galleries, sliders, and lazy-loaded content."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Instant Link Extraction"
                        description="Extract image links in seconds with our optimized tool. Get image URLs instantly from any website without manual inspection or browser developer tools."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image URL Types"
                        description="Extract links for JPG, PNG, WebP, GIF, SVG, and all other image formats. Get CDN URLs, direct links, and data URLs from any source."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Download from Links"
                        description="Not only extract image links but also download images directly from those URLs. Preview images and download individually or in bulk as ZIP."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image link extraction happens in your browser. No data sent to servers. Your URLs and extracted image links remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Copy & Export Links"
                        description="Copy individual image links with one click or export all image URLs to a file. Perfect for bulk processing or sharing image links."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Extract Image Links
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Get image URLs from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing images. Our image link extractor works with any website or webpage."
                        />
                        <StepCard
                            number={2}
                            title="Extract Image Links"
                            description="Click scan and our tool will extract all image links from the page. Use Deep Scan to find dynamically loaded image URLs."
                        />
                        <StepCard
                            number={3}
                            title="Copy or Download"
                            description="Copy individual image links, export all URLs, or download images directly from the extracted links. All options are free."
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            The Best Image Link Extractor
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Stop manually inspecting page source or using browser developer tools. Our <Link href="https://www.extractpics.com/" className="text-primary hover:underline">image link extractor</Link> automates the entire process of finding and extracting image URLs.
                        </p>
                        <div className="space-y-4">
                            <BenefitItem text="Extract unlimited image links for free" />
                            <BenefitItem text="Get direct image URLs instantly" />
                            <BenefitItem text="Support for all image formats" />
                            <BenefitItem text="Batch extract from multiple pages" />
                            <BenefitItem text="Copy or export image links" />
                            <BenefitItem text="Download images from links" />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-card border border-border p-8 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-foreground">Advanced Features</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction of visible image links</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Deep Scan:</strong> Find hidden and dynamic image URLs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Batch Mode:</strong> Extract links from multiple URLs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Smart Filters:</strong> Filter image links by format and size</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Link Export:</strong> Export all image URLs to file</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            Image Link Extraction for Every Purpose
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract image links for any use case with our versatile tool.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <UseCaseCard
                            title="Web Scraping & Data Collection"
                            description="Extract image links for web scraping projects, data collection, or automated workflows. Get structured image URL data for processing."
                        />
                        <UseCaseCard
                            title="SEO & Content Analysis"
                            description="Extract image links to analyze competitor content, audit image optimization, or build comprehensive site maps with image URLs."
                        />
                        <UseCaseCard
                            title="Development & Testing"
                            description="Extract image links for website migrations, testing, or development. Get all image URLs for backup or replication purposes."
                        />
                        <UseCaseCard
                            title="Research & Documentation"
                            description="Extract image links for academic research, documentation, or archiving. Get permanent URLs for citation and reference."
                        />
                        <UseCaseCard
                            title="Bulk Image Processing"
                            description="Extract image links to process images in bulk with external tools. Get all image URLs for batch downloading or conversion."
                        />
                        <UseCaseCard
                            title="Content Migration"
                            description="Extract image links when migrating content between platforms. Get all image URLs to ensure nothing is lost during migration."
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Image Link Extractor FAQ"
                description="Common questions about extracting image links from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Start Extracting Image Links Now
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Extract image links from any website with our powerful <Link href="https://www.extractpics.com/" className="text-primary hover:underline">image link tool</Link>. No registration required, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconLink size={20} />
                        Extract Image Links Now
                    </a>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="group relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
            <div className="relative space-y-4">
                <div className="inline-flex p-3 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
    return (
        <div className="relative border border-border bg-card p-6 space-y-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl font-bold">{number}</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="border border-border bg-card p-6 space-y-3">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <IconCheck size={16} className="text-primary" />
            </div>
            <span className="text-foreground font-medium">{text}</span>
        </div>
    );
}
