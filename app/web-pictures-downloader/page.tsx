import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Web Pictures Downloader - Download Pictures from Websites | ExtractPics",
    description: "Download pictures from any website instantly with our free web pictures downloader. Extract and save all pictures in bulk. Fast, secure, and easy to use.",
    keywords: [
        "web pictures downloader",
        "download pictures from web",
        "web picture downloader",
        "bulk pictures download",
        "extract pictures from web",
        "save pictures from web",
        "download all pictures from web",
        "web pictures extractor",
        "download web pictures",
        "web picture download tool"
    ],
    openGraph: {
        title: "Web Pictures Downloader - Download Pictures from Websites",
        description: "Download pictures from any website instantly. Extract and save all pictures in bulk with our free web pictures downloader.",
        type: "website",
        url: "https://extractpics.com/web-pictures-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Web Pictures Downloader - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Pictures Downloader - Download Pictures from Websites",
        description: "Download pictures from any website instantly. Extract and save all pictures in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/web-pictures-downloader",
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
        question: "What is a web pictures downloader?",
        answer: "A web pictures downloader is a tool that automatically extracts and downloads all pictures from any website. Simply paste the URL, and our tool will scan and retrieve all pictures in seconds, allowing you to download them individually or in bulk as a ZIP file."
    },
    {
        question: "How do I download pictures from the web?",
        answer: "Enter the website URL into our web pictures downloader, click scan, and all pictures will be extracted instantly. You can then preview, filter by format or size, and download individual pictures or download all pictures as a ZIP archive."
    },
    {
        question: "Can I download all pictures from a website at once?",
        answer: "Yes! Our web pictures downloader allows you to download all pictures from a website in bulk. After scanning, select all pictures and download them as a convenient ZIP file."
    },
    {
        question: "What picture formats can I download from the web?",
        answer: "Our web pictures downloader supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter pictures by format after extraction to download only the types you need."
    },
    {
        question: "Is it safe to use a web pictures downloader?",
        answer: "Absolutely! All picture extraction happens locally in your browser. No URLs or pictures are sent to our servers. Your data remains completely private and secure when using our web pictures downloader."
    },
    {
        question: "Can I download high-quality pictures from the web?",
        answer: "Yes! Use our Deep Scan mode to extract high-resolution versions of pictures. You can also filter pictures by minimum dimensions to ensure you only download large, high-quality pictures."
    },
    {
        question: "Do I need to install software to download web pictures?",
        answer: "No installation required! Our web pictures downloader works directly in your browser. Just visit our website, paste the URL, and start downloading pictures immediately."
    },
    {
        question: "How many pictures can I download from the web?",
        answer: "There's no limit! Our web pictures downloader can extract and download hundreds or even thousands of pictures. Use bulk download to save all pictures as a ZIP file for convenience."
    }
];

export default function WebPicturesDownloaderPage() {
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
                            Free Web Pictures Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Pictures Downloader
                            <br />
                            Extract Pictures from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">web pictures downloader</strong> to extract and save all pictures from any website. Download individually or in bulk. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                                <span>No Limits</span>
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
                        Why Use Our Web Pictures Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download pictures from the web.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Extraction"
                        description="Our web pictures downloader extracts all pictures in seconds. Simply paste the URL and get instant access to all pictures on any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download"
                        description="Download all pictures from the web at once as a ZIP archive. Perfect for downloading entire galleries or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All pictures are downloaded in their original quality. Use Deep Scan to find high-resolution versions and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and downloaded pictures remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop downloading pictures one by one. Our web pictures downloader saves all pictures in seconds instead of spending hours manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use the Web Pictures Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download pictures from the web in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the pictures you want to download. Works with any website or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Pictures"
                            description="Click the scan button and our web pictures downloader will extract all pictures instantly. Use Deep Scan for dynamically loaded pictures."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Preview all extracted pictures, filter by format or size, and download individual pictures or download all pictures as a ZIP file."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Perfect for Every Use Case
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download pictures from the web for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download pictures from the web for blog posts, social media content, presentations, or marketing materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download pictures from the web for academic research, educational materials, or study guides. Extract visual data efficiently."
                    />
                    <UseCaseCard
                        title="Design & Creative"
                        description="Download pictures from the web for mood boards, design references, or creative inspiration. Build collections for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce"
                        description="Download product pictures from the web for catalogs, comparisons, or market research. Extract pictures for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download pictures from the web for backups, migrations, or testing. Extract all assets from web pages quickly for development."
                    />
                    <UseCaseCard
                        title="Personal Archives"
                        description="Download pictures from the web for personal archives or collections. Save pictures before they disappear from the web."
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Web Pictures Downloader FAQ"
                description="Common questions about downloading pictures from the web"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pictures from the Web?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">web pictures downloader</a> now. No registration, completely free.
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
