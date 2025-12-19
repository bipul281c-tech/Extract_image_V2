import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Web Photo Download - Download Photos from Any Website | ExtractPics",
    description: "Download photos from any website instantly with our free web photo download tool. Extract and save photos from web pages in bulk. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "web photo download",
        "download web images",
        "image downloader from website",
        "website photo downloader",
        "webpage image downloader",
        "download photos from website",
        "web image download tool",
        "website image extractor",
        "download pictures from web",
        "online photo downloader"
    ],
    openGraph: {
        title: "Web Photo Download - Download Photos from Any Website",
        description: "Download photos from any website instantly. Extract and save web images in bulk with our free photo download tool.",
        type: "website",
        url: "https://www.extractpics.com/web-photo-download",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-web-photo-download.png",
                width: 1200,
                height: 630,
                alt: "Web Photo Download - Free Website Photo Downloader"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Photo Download - Download Photos from Any Website",
        description: "Download photos from any website instantly. Extract and save web images in bulk with our free tool.",
        images: ["https://www.extractpics.com/og-image-web-photo-download.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/web-photo-download",
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
        question: "How do I download photos from a website?",
        answer: "Simply paste the website URL into our web photo download tool, click scan, and all photos will be extracted from the page. You can then preview, filter, and download individual photos or download all photos as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download multiple web photos at once?",
        answer: "Yes! Our tool supports bulk photo downloading from websites. After scanning a webpage, you can select multiple photos and download them all at once as a ZIP archive. You can also use batch mode to download photos from multiple URLs simultaneously."
    },
    {
        question: "What photo formats can I download from websites?",
        answer: "Our web photo download tool supports all common image formats including JPG, PNG, WebP, GIF, SVG, and more. You can filter photos by format after extraction to download only the types you need. The tool preserves the original photo quality and format."
    },
    {
        question: "Is it free to download photos from websites?",
        answer: "Yes, our web photo download tool is completely free to use with no limitations. You can download as many photos as you need from any website without any subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy and speed."
    },
    {
        question: "How do I download high-quality photos from websites?",
        answer: "Our tool automatically extracts photos in their original quality. Use the Deep Scan mode to find high-resolution versions of photos, including those loaded dynamically. You can also filter photos by minimum dimensions to ensure you only download high-quality, large images."
    },
    {
        question: "Can I download photos from any website?",
        answer: "Yes! Our web photo download tool works with any website you can access in your browser. Whether it's a blog, portfolio, e-commerce site, or social media platform, you can extract and download photos from any webpage."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for web photos?",
        answer: "Quick Scan downloads photos that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded photos, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you download every single photo on the webpage."
    },
    {
        question: "Is my data safe when downloading web photos?",
        answer: "Absolutely! Our web photo download tool runs entirely in your browser - no URLs or photos are sent to our servers. All photo extraction and downloading happens locally on your device, ensuring complete privacy and security. Your browsing data and downloaded photos remain completely private."
    }
];

export default function WebPhotoDownloadPage() {
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
                            Free Web Photo Download Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Photo Download
                            <br />
                            From Any Website Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The fastest way to <strong className="text-foreground">download photos from websites</strong>. Extract, preview, and save web images in seconds. Download single photos or bulk download entire collections with one click. For a completely free solution, try our{" "}
                            <Link href="/image-downloader-free" className="text-primary hover:underline font-semibold">
                                free image downloader
                            </Link>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Download</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Download</span>
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
                        Why Use Our Web Photo Download Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download photos from any website with ease. Fast, secure, and completely free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Photo Download"
                        description="Download web photos instantly with a single click. No complicated steps, no software installation. Just paste a URL and download your photos from any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced technology extracts web photos in seconds. Download from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconWorld className="w-8 h-8" />}
                        title="Works with Any Website"
                        description="Download photos from blogs, portfolios, e-commerce sites, social media, and any other website. Our tool works universally across all web platforms."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Photo Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format, size, or dimensions to get exactly what you need from websites."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All web photo downloading happens in your browser. No data sent to servers. Your URLs and downloaded photos remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving photos one by one. Download all photos from a website in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Web Photos
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download photos from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the photos you want to download. Works with any website or webpage."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Web Photos"
                            description="Click the scan button and our tool will extract all photos from the webpage. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Photos"
                            description="Preview all extracted web photos, filter by format or size, and download individual photos or all photos as a ZIP file."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Perfect for Every Need
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download web photos for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download web photos for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly from any website."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download photos from websites for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download web photos for mood boards, design references, or creative projects. Build collections of inspiring visuals from across the web."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download product photos from websites for catalogs, comparisons, or market research. Extract images from competitor websites easily."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download photos from websites for backups, migrations, or testing. Extract all assets from web pages quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download web photos for personal archives, wallpapers, or collections. Save photos from websites before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Download Web Photos the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading photos from websites are slow and tedious. Our <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">web photo download tool</Link> automates the entire process, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download photos in original quality" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk download with ZIP archives" />
                                <BenefitItem text="Advanced filtering options" />
                                <BenefitItem text="No registration or installation" />
                                <BenefitItem text="Completely free, no limitations" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
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
                                            <span><strong className="text-foreground">ZIP Download:</strong> Package multiple photos for easy download</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Web Photo Download FAQ"
                description="Common questions about downloading photos from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Web Photos?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading photos from any website now with <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</Link>. No registration, no downloads, completely free.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Downloading Web Photos
                    </Link>
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
