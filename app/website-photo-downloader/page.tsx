import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconPhoto } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Website Photo Downloader - Download Photos from Any Website | ExtractPics",
    description: "Download photos from any website with our free website photo downloader. Extract and save photos from web pages in bulk. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "website photo downloader",
        "download photos from website",
        "website image downloader",
        "web photo downloader",
        "download website photos",
        "website picture downloader",
        "photo extractor from website",
        "download pictures from website",
        "website photo extractor",
        "online photo downloader"
    ],
    openGraph: {
        title: "Website Photo Downloader - Download Photos from Any Website",
        description: "Download photos from any website with our free website photo downloader. Extract and save photos from web pages in bulk.",
        type: "website",
        url: "https://www.extractpics.com/website-photo-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-website-photo-downloader.png",
                width: 1200,
                height: 630,
                alt: "Website Photo Downloader - Free Photo Extractor"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Photo Downloader - Download Photos from Any Website",
        description: "Download photos from any website with our free website photo downloader. Extract and save photos in bulk.",
        images: ["https://www.extractpics.com/og-image-website-photo-downloader.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/website-photo-downloader",
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
        question: "How does the website photo downloader work?",
        answer: "Our website photo downloader works by scanning the webpage you provide and extracting all photos. Simply paste the website URL, click scan, and our tool will find all photos on the page. You can then preview, filter, and download individual photos or download all photos as a ZIP file."
    },
    {
        question: "Can I download multiple photos from a website at once?",
        answer: "Yes! Our website photo downloader supports bulk downloading. After scanning a website, you can select multiple photos and download them all at once as a ZIP archive. You can also use batch mode to download photos from multiple websites simultaneously."
    },
    {
        question: "What photo formats can the website photo downloader extract?",
        answer: "Our website photo downloader supports all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter photos by format after extraction to download only the types you need. The tool preserves the original photo quality."
    },
    {
        question: "Is the website photo downloader free?",
        answer: "Yes, our website photo downloader is completely free to use with unlimited downloads. You can download as many photos as you need from any website without any subscription, registration, or hidden fees. The tool runs entirely in your browser."
    },
    {
        question: "How do I download high-quality photos from a website?",
        answer: "Our website photo downloader automatically extracts photos in their original quality. Use the Deep Scan mode to find high-resolution versions, including those loaded dynamically. You can also filter photos by minimum dimensions to ensure you only download high-quality photos."
    },
    {
        question: "Can I use the website photo downloader on password-protected sites?",
        answer: "Yes! Our website photo downloader can extract photos from any page you can access in your browser. If you're logged into a website, the tool will be able to download photos from pages that require authentication. All processing happens locally for security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan downloads photos that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded photos, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you download every single photo from the website."
    },
    {
        question: "Is it safe to use the website photo downloader?",
        answer: "Absolutely! Our website photo downloader runs entirely in your browser - no URLs or photos are sent to our servers. All photo extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function WebsitePhotoDownloaderPage() {
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
                            Free Website Photo Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Website Photo Downloader
                            <br />
                            Extract Photos Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">website photo downloader</strong> tool. Extract, preview, and save photos from any website in seconds. Download single photos or bulk download entire collections. For general image downloading, try our{" "}
                            <Link href="/image-downloader" className="text-primary hover:underline font-semibold">
                                image downloader
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
                        Why Use Our Website Photo Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download photos from any website with the most advanced photo downloader tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Download photos from websites instantly with a single click. No complicated steps, no software installation. Just paste a URL and extract photos."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced website photo downloader extracts photos in seconds. Download from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconPhoto className="w-8 h-8" />}
                        title="All Photo Types"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other photo formats from websites. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple photos from websites at once as a convenient ZIP archive. Perfect for downloading entire photo galleries or collections."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All website photo downloading happens in your browser. No data sent to servers. Your URLs and downloaded photos remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving photos one by one. Our website photo downloader extracts all photos in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use the Website Photo Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download photos from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the photos you want to download. Our website photo downloader works with any site."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Photos"
                            description="Click the scan button and our website photo downloader will extract all photos from the page. Use Deep Scan for dynamically loaded photos."
                        />
                        <StepCard
                            number={3}
                            title="Download Photos"
                            description="Preview all extracted photos, filter by format or size, and download individual photos or all photos as a ZIP file from the website."
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
                        Use our website photo downloader for any purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download photos from websites for blog posts, social media content, presentations, or marketing materials. Get high-quality photos quickly with our website photo downloader."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download photos from websites for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download photos from websites for mood boards, design references, or creative projects. Build collections of inspiring visuals with our website photo downloader."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download product photos from websites for catalogs, comparisons, or market research. Extract photos from competitor websites easily."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download photos from websites for backups, migrations, or testing. Extract all assets from web pages quickly with our website photo downloader."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download photos from websites for personal archives, wallpapers, or collections. Save photos before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Best Website Photo Downloader
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading photos from websites are slow and tedious. Our <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">website photo downloader</Link> automates the entire process, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download photos in original quality" />
                                <BenefitItem text="Support for all photo formats" />
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
                title="Website Photo Downloader FAQ"
                description="Common questions about downloading photos from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Photos from Websites?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">website photo downloader</Link> now. No registration, no downloads, completely free.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Downloading Photos
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
