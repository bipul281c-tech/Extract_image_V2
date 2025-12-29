import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Website Photo Download - Download Photos from Any Website | ExtractPics",
    description: "Download photos from any website instantly with our free tool. Extract and save all photos from websites in bulk. Fast, secure, and easy to use.",
    keywords: [
        "website photo download",
        "download photos from website",
        "website photo downloader",
        "bulk photo download from website",
        "extract photos from website",
        "save photos from website",
        "download all photos from website",
        "website photo extractor",
        "download pictures from website",
        "web photo download"
    ],
    openGraph: {
        title: "Website Photo Download - Download Photos from Any Website",
        description: "Download photos from any website instantly. Extract and save all photos from websites in bulk with our free tool.",
        type: "website",
        url: "https://extractpics.com/website-photo-download",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Website Photo Download - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Photo Download - Download Photos from Any Website",
        description: "Download photos from any website instantly. Extract and save all photos in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/website-photo-download",
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
        answer: "Simply paste the website URL into our tool, click scan, and all photos will be extracted instantly. You can then preview, filter, and download individual photos or download all photos as a ZIP file. Our website photo download tool works with any website."
    },
    {
        question: "Can I download all photos from a website at once?",
        answer: "Yes! Our tool allows you to download all photos from a website in bulk. After scanning, you can select all photos and download them as a convenient ZIP archive. Perfect for downloading entire photo galleries."
    },
    {
        question: "What photo formats can I download from websites?",
        answer: "Our website photo download tool supports all image formats including JPG, PNG, WebP, GIF, and more. You can filter photos by format after extraction to download only the types you need."
    },
    {
        question: "Is it safe to download photos from websites?",
        answer: "Yes! All photo extraction happens locally in your browser. No URLs or photos are sent to our servers. Your data remains completely private and secure when using our website photo download tool."
    },
    {
        question: "Can I download high-quality photos from websites?",
        answer: "Absolutely! Use our Deep Scan mode to extract high-resolution versions of photos. You can also filter photos by minimum dimensions to ensure you only download large, high-quality photos."
    },
    {
        question: "Do I need to install software for website photo download?",
        answer: "No installation required! Our website photo download tool works directly in your browser. Just visit our website, paste the URL, and start downloading photos immediately."
    },
    {
        question: "How many photos can I download from a website?",
        answer: "There's no limit! Our tool can extract and download hundreds or even thousands of photos from a website. Use bulk download to save all photos as a ZIP file."
    },
    {
        question: "Is website photo download legal?",
        answer: "While our tool makes it easy to download photos from websites, you must respect copyright laws and terms of service. Only download photos you have permission to use."
    }
];

export default function WebsitePhotoDownloadPage() {
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
                            Free Website Photo Download Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Website Photo Download
                            <br />
                            Save Photos from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest <strong className="text-foreground">website photo download</strong> solution. Extract and save all photos from any website in seconds. Download individually or in bulk. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Download</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>High Quality</span>
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
                        Why Choose Our Website Photo Download Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The most efficient way to download photos from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Photo Extraction"
                        description="Our website photo download tool extracts all photos in seconds. Simply paste the URL and get instant access to all photos on any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Photo Download"
                        description="Download all photos from a website at once as a ZIP archive. Perfect for downloading entire photo galleries or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Photo Formats"
                        description="Download JPG, PNG, WebP, GIF, and all other photo formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All photos are downloaded in their original quality. Use Deep Scan to find high-resolution versions and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and downloaded photos remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Stop downloading photos one by one. Our website photo download tool saves all photos in seconds instead of spending hours manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How Website Photo Download Works
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download photos from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the photos you want to download. Works with any website or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Photos"
                            description="Click the scan button and our website photo download tool will extract all photos instantly. Use Deep Scan for dynamically loaded photos."
                        />
                        <StepCard
                            number={3}
                            title="Download Photos"
                            description="Preview all extracted photos, filter by format or size, and download individual photos or download all photos as a ZIP file."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Perfect for Every Purpose
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download photos from websites for any use case with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Social Media & Marketing"
                        description="Download photos from websites for social media posts, marketing campaigns, or promotional materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Academic Research"
                        description="Download photos from websites for academic research, educational materials, or presentations. Extract visual data efficiently."
                    />
                    <UseCaseCard
                        title="Creative Projects"
                        description="Download photos from websites for mood boards, design references, or creative inspiration. Build collections for your projects."
                    />
                    <UseCaseCard
                        title="Product Catalogs"
                        description="Download product photos from websites for catalogs, comparisons, or market research. Extract photos for competitive analysis."
                    />
                    <UseCaseCard
                        title="Website Backups"
                        description="Download photos from websites for backups, migrations, or archiving. Extract all photo assets quickly for preservation."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download photos from websites for personal archives or collections. Save photos before they disappear from the web."
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Website Photo Download FAQ"
                description="Common questions about downloading photos from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Photos from Websites?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">website photo download</a> tool now. No registration, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Downloading Now
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
