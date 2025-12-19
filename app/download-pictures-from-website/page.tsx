import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Pictures from Website - Free Bulk Picture Downloader | ExtractPics",
    description: "Download pictures from website instantly with our free tool. Extract and save all pictures from any webpage in bulk. Fast, secure, and easy to use.",
    keywords: [
        "download pictures from website",
        "download pictures from websites",
        "website picture downloader",
        "bulk picture download",
        "extract pictures from website",
        "save pictures from website",
        "download all pictures from webpage",
        "website picture extractor",
        "download photos from website",
        "web picture downloader"
    ],
    openGraph: {
        title: "Download Pictures from Website - Free Bulk Picture Downloader",
        description: "Download pictures from website instantly. Extract and save all pictures from any webpage in bulk with our free tool.",
        type: "website",
        url: "https://www.extractpics.com/download-pictures-from-website",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Download Pictures from Website - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Pictures from Website - Free Bulk Picture Downloader",
        description: "Download pictures from website instantly. Extract and save all pictures in bulk with our free tool.",
        images: ["https://www.extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/download-pictures-from-website",
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
        question: "How can I download pictures from website?",
        answer: "To download pictures from website, simply paste the website URL into our tool, click scan, and all pictures will be extracted instantly. You can then preview, filter, and download individual pictures or download all pictures as a ZIP file."
    },
    {
        question: "Can I download all pictures from a website at once?",
        answer: "Yes! Our tool allows you to download pictures from website in bulk. After scanning, you can select all pictures and download them as a convenient ZIP archive. Perfect for downloading entire galleries."
    },
    {
        question: "What types of pictures can I download from websites?",
        answer: "You can download pictures from website in all formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. Filter pictures by format after extraction to download only the types you need."
    },
    {
        question: "Is it legal to download pictures from website?",
        answer: "While our tool makes it easy to download pictures from website, you must respect copyright laws and terms of service. Only download pictures you have permission to use or that are royalty-free."
    },
    {
        question: "How do I download high-quality pictures from websites?",
        answer: "To download pictures from website in high quality, use our Deep Scan mode to extract high-resolution versions. You can also filter pictures by minimum dimensions to ensure you only download large, high-quality images."
    },
    {
        question: "Can I download pictures from password-protected websites?",
        answer: "Yes, if you're logged into a website, our tool can download pictures from website pages that require authentication. All processing happens locally in your browser for security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan quickly extracts pictures from the page source. Deep Scan executes JavaScript to download pictures from website including dynamically loaded content and lazy-loaded images."
    },
    {
        question: "Is my data safe when I download pictures from website?",
        answer: "Absolutely! All picture extraction happens locally in your browser when you download pictures from website. No URLs or images are sent to our servers. Your data remains completely private."
    }
];

export default function DownloadPicturesFromWebsitePage() {
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
                            Free Website Picture Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Pictures from Website
                            <br />
                            Instantly & Effortlessly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest way to <strong className="text-foreground">download pictures from website</strong>. Extract all pictures from any webpage in seconds. Download individually or in bulk as a ZIP file. Powered by <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                                <span>Original Quality</span>
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
                        Why Download Pictures from Websites with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download pictures from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Extraction"
                        description="Download pictures from website in seconds. Simply paste the URL and our tool extracts all pictures instantly. No complicated steps required."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download Support"
                        description="Download pictures from website in bulk as a ZIP archive. Perfect for downloading entire galleries, portfolios, or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Download pictures from website in JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All pictures are downloaded in their original quality when you download pictures from website. Use Deep Scan to find high-resolution versions."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser when you download pictures from website. No data sent to servers. Your URLs and pictures remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop right-clicking and saving pictures one by one. Download pictures from website in seconds instead of spending hours doing it manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Pictures from Website
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download pictures from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the pictures you want to download. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Pictures"
                            description="Click the scan button to download pictures from website. Our tool will extract all pictures. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Preview all extracted pictures, filter by format or size, and download pictures from website individually or all as a ZIP file."
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
                        Download pictures from websites for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation & Marketing"
                        description="Download pictures from websites for blog posts, social media content, presentations, or marketing materials. Build visual libraries quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Research & Academic Work"
                        description="Download pictures from websites for academic research, educational materials, or study guides. Extract visual data, infographics, and reference images."
                    />
                    <UseCaseCard
                        title="Design & Creative Projects"
                        description="Download pictures from websites for mood boards, design references, or creative inspiration. Build collections of visuals for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Download pictures from websites for product catalogs, comparisons, or market research. Extract images for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development & Testing"
                        description="Download pictures from websites for backups, migrations, or testing. Extract all assets from web pages quickly for development purposes."
                    />
                    <UseCaseCard
                        title="Personal Archives & Collections"
                        description="Download pictures from websites for personal archives, wallpapers, or collections. Save pictures before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way to Download Pictures from Websites
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading pictures are slow and tedious. Our tool to <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">download pictures from website</a> automates the entire process, saving you time and effort while ensuring original quality.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download pictures in original quality" />
                                <BenefitItem text="Support for all picture formats" />
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
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple websites simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">ZIP Download:</strong> Package multiple pictures for easy download</span>
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
                title="Download Pictures from Website FAQ"
                description="Common questions about downloading pictures from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pictures from Websites?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a> to download pictures from website now. No registration, completely free.
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
