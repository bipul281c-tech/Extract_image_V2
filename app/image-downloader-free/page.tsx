import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Image Downloader Free - Download Images from Any Website | ExtractPics",
    description: "Free image downloader tool to download images from any website instantly. Extract, save, and download images in bulk. No registration, no limits, 100% free forever. Try our image downloader free tool now!",
    keywords: [
        "image downloader free",
        "free image downloader",
        "download images free",
        "free image download tool",
        "image downloader online free",
        "bulk image downloader free",
        "free website image downloader",
        "download images from website free",
        "free image extractor",
        "image saver free tool"
    ],
    openGraph: {
        title: "Image Downloader Free - Download Images from Any Website",
        description: "Free image downloader tool to download images from any website instantly. Extract and save images in bulk. 100% free forever.",
        type: "website",
        url: "https://www.extractpics.com/image-downloader-free",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-image-downloader-free.png",
                width: 1200,
                height: 630,
                alt: "Image Downloader Free - Download Images from Any Website"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Downloader Free - Download Images from Any Website",
        description: "Free image downloader tool to download images from any website instantly. 100% free forever.",
        images: ["https://www.extractpics.com/og-image-image-downloader-free.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/image-downloader-free",
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
        question: "Is this image downloader really free?",
        answer: "Yes! Our image downloader is 100% free with no hidden costs, subscriptions, or limitations. You can download unlimited images from any website without paying anything. There are no premium features or paywalls - everything is completely free forever."
    },
    {
        question: "Do I need to register to use the free image downloader?",
        answer: "No registration required! You can start downloading images immediately without creating an account, providing an email, or signing up for anything. Just paste a URL and start downloading images for free."
    },
    {
        question: "Can I download images in bulk for free?",
        answer: "Absolutely! Our free image downloader supports bulk downloading. You can download multiple images at once as a ZIP file, or use batch mode to extract images from multiple URLs simultaneously - all completely free."
    },
    {
        question: "What image formats does the free downloader support?",
        answer: "Our free image downloader supports all common image formats including JPG, JPEG, PNG, WebP, GIF, SVG, BMP, and more. You can download any image format without restrictions or additional costs."
    },
    {
        question: "Are there any download limits on the free version?",
        answer: "No limits whatsoever! Unlike other tools that restrict free users, our image downloader is completely unlimited. Download as many images as you need from as many websites as you want - all for free."
    },
    {
        question: "How does the free image downloader work?",
        answer: "Simply paste any website URL into our tool, click scan, and our free image downloader will extract all images from that page. You can then preview, filter, and download individual images or all images as a ZIP file. All processing happens in your browser for maximum privacy and speed."
    },
    {
        question: "Is the free image downloader safe to use?",
        answer: "Yes, completely safe! Our free image downloader runs entirely in your browser - no data is sent to our servers. Your URLs and downloaded images remain completely private. There's no malware, no tracking, and no data collection."
    },
    {
        question: "Can I use this free tool for commercial purposes?",
        answer: "Yes, you can use our free image downloader for both personal and commercial purposes. However, please ensure you have the right to use the images you download and respect copyright laws."
    }
];

export default function ImageDownloaderFreePage() {
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
                            100% Free Forever
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image Downloader Free
                            <br />
                            Download Images from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The best <strong className="text-foreground">image downloader free</strong> tool to extract and download images from any website. No registration, no limits, no hidden costs. Download images in bulk, filter by format, and save time with our powerful <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">free image downloader</Link>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>No Registration</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Unlimited Downloads</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Why Choose Our Free Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The most powerful <Link href="https://www.extractpics.com/" className="text-primary hover:underline">image downloader free</Link> tool with premium features at zero cost.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Completely Free Forever"
                        description="No hidden costs, no subscriptions, no premium versions. Our image downloader is 100% free with unlimited downloads. Download as many images as you need without paying a cent."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Downloads"
                        description="Download images instantly with our optimized free image downloader. Extract images in seconds, not minutes. Batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other formats for free. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple images at once as a ZIP archive - completely free. Perfect for downloading entire galleries or collections without clicking each image."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image downloading happens in your browser. No data sent to servers. Your URLs and images remain completely private with our free tool."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="No Registration Required"
                        description="Start downloading images immediately without creating an account. No email required, no sign-up forms. Just paste a URL and download for free."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use Our Free Image Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images for free in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of any website containing images you want to download. Works with all websites - no restrictions."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button and our free image downloader will extract all images. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download for Free"
                            description="Preview all extracted images, apply filters, and download individual images or all images as a ZIP file - completely free."
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            The Best Free Image Downloader Online
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Unlike other tools that charge for premium features, our <Link href="https://www.extractpics.com/" className="text-primary hover:underline">image downloader</Link> is completely free with no limitations. Get all the features you need without spending a dime.
                        </p>
                        <div className="space-y-4">
                            <BenefitItem text="Download unlimited images for free" />
                            <BenefitItem text="No registration or account required" />
                            <BenefitItem text="Bulk download with ZIP archives" />
                            <BenefitItem text="Support for all image formats" />
                            <BenefitItem text="Advanced filtering options" />
                            <BenefitItem text="No watermarks or branding" />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-card border border-border p-8 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-foreground">Free Premium Features</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction for immediate results</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple URLs simultaneously</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-foreground">ZIP Download:</strong> Package multiple images for easy download</span>
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
                            Free Image Downloader for Every Need
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images for free for any purpose with our versatile tool.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <UseCaseCard
                            title="Content Creators"
                            description="Download images for free for blog posts, social media, presentations, or marketing. Get high-quality images without paying for stock photos."
                        />
                        <UseCaseCard
                            title="Students & Educators"
                            description="Download images for free for research papers, educational materials, or study guides. Extract visual data and infographics at no cost."
                        />
                        <UseCaseCard
                            title="Designers & Artists"
                            description="Download images for free for mood boards, design references, or creative projects. Build inspiration collections without subscriptions."
                        />
                        <UseCaseCard
                            title="E-commerce & Business"
                            description="Download product images for free for catalogs, comparisons, or market research. Extract competitor images without paying for tools."
                        />
                        <UseCaseCard
                            title="Web Developers"
                            description="Download images for free for website backups, migrations, or testing. Extract all assets from web pages quickly and freely."
                        />
                        <UseCaseCard
                            title="Personal Use"
                            description="Download images for free for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Free Image Downloader FAQ"
                description="Common questions about our free image downloader tool"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Start Downloading Images for Free Now
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust our <Link href="https://www.extractpics.com/" className="text-primary hover:underline">free image downloader</Link>. No registration, no limits, completely free forever.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Download Images Free Now
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
