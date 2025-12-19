import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Pictures - Free Bulk Picture Downloader | ExtractPics",
    description: "Download pictures from any website in bulk. Free picture downloader to save multiple images at once. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "download pictures",
        "pictures download",
        "download multiple pictures",
        "bulk picture download",
        "picture downloader",
        "download pictures from website",
        "save pictures",
        "download all pictures",
        "pictures downloader tool",
        "download pictures online"
    ],
    openGraph: {
        title: "Download Pictures - Free Bulk Picture Downloader",
        description: "Download pictures from any website in bulk. Save multiple images at once with our free tool.",
        type: "website",
        url: "https://www.extractpics.com/download-pictures",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-download-pictures.png",
                width: 1200,
                height: 630,
                alt: "Download Pictures - Bulk Picture Downloader"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Pictures - Free Bulk Picture Downloader",
        description: "Download pictures from any website in bulk. Fast and free.",
        images: ["https://www.extractpics.com/og-image-download-pictures.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/download-pictures",
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
        question: "How do I download pictures from a website?",
        answer: "Simply paste the website URL into our tool and click scan. All pictures will be extracted and displayed. You can then select the pictures you want and download them individually or all at once as a ZIP file. It's fast, easy, and completely free."
    },
    {
        question: "Can I download multiple pictures at once?",
        answer: "Yes! Our tool is designed for bulk picture downloads. After scanning a website, you can select all pictures or choose specific ones, then download them all together as a convenient ZIP archive. Perfect for downloading entire galleries or collections."
    },
    {
        question: "What picture formats can I download?",
        answer: "You can download pictures in all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. Our tool supports every image format used on the web, and you can filter by format to download only specific types."
    },
    {
        question: "Is it free to download pictures?",
        answer: "Absolutely! Our picture download tool is completely free with unlimited downloads. No registration, no subscription, no hidden fees. Download as many pictures as you need, whenever you need them."
    },
    {
        question: "Are downloaded pictures in original quality?",
        answer: "Yes! All pictures are downloaded in their original quality without any compression or quality loss. You get the exact same images that appear on the website, preserving all details and resolution."
    },
    {
        question: "Can I download pictures from social media?",
        answer: "Yes, you can download pictures from publicly accessible social media pages. Paste the page URL into our tool and use Deep Scan to extract pictures from dynamically loaded content on platforms like Facebook, Instagram, and Twitter."
    },
    {
        question: "How do I download pictures from multiple websites?",
        answer: "Use our Batch Mode feature to download pictures from multiple websites simultaneously. Enter multiple URLs and our tool will process them all, allowing you to download all pictures in one convenient package."
    },
    {
        question: "Is my privacy protected when downloading pictures?",
        answer: "Yes! All picture downloads happen locally in your browser. No URLs or images are sent to our servers. Your browsing activity and downloaded pictures remain completely private and secure."
    }
];

export default function DownloadPicturesPage() {
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
                            Bulk Picture Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Pictures
                            <br />
                            Fast & Easy
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The best way to <strong className="text-foreground">download pictures</strong> from any website. Save multiple images at once in bulk. Fast, secure, and completely free. Powered by <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Download Pictures with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The most efficient way to download multiple pictures from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Picture Download"
                        description="Download pictures in bulk from any website. Save dozens or hundreds of images at once with a single click. Perfect for downloading entire galleries or collections."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="Download pictures faster than ever. Our optimized tool scans websites and extracts all images in seconds, saving you hours of manual work."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Download pictures in any format: JPG, PNG, WebP, GIF, SVG, and more. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All pictures are downloaded in their original quality. No compression, no quality loss. Get the best version of every image from the website."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="Download pictures securely with all processing happening in your browser. No data sent to servers. Your privacy is fully protected."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop downloading pictures one by one. Our bulk download feature lets you save entire collections in seconds instead of spending hours on manual downloads."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Pictures
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download multiple pictures from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Paste the URL of the website containing the pictures you want to download. Works with any website, blog, gallery, or online store."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Pictures"
                            description="Click scan and our tool will extract all pictures from the website. Use Deep Scan for comprehensive extraction including dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Select the pictures you want and download them individually or all at once as a ZIP file. All pictures are saved in original quality."
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
                        Download pictures for any project or personal use.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download pictures for blog posts, social media content, videos, or marketing materials. Build comprehensive image libraries quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Design & Creative Work"
                        description="Download pictures for mood boards, design references, or creative inspiration. Gather visual assets for your design projects in bulk."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Download pictures of products for catalogs, comparisons, or market research. Extract entire product galleries for competitive analysis."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download pictures for wallpapers, inspiration boards, or personal archives. Save entire collections before they disappear from the web."
                    />
                    <UseCaseCard
                        title="Academic & Research"
                        description="Download pictures for research papers, presentations, or educational materials. Gather visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Website Migration"
                        description="Download pictures when migrating websites or creating backups. Extract all images from existing websites for archival or transfer purposes."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way to Download Pictures
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Downloading pictures manually is time-consuming and inefficient. Our tool automates the entire process, allowing you to download multiple pictures in seconds instead of hours.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download pictures in original quality" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk download with ZIP archives" />
                                <BenefitItem text="Advanced filtering options" />
                                <BenefitItem text="No registration or installation" />
                                <BenefitItem text="Completely free, unlimited downloads" />
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
                title="Download Pictures FAQ"
                description="Common questions about downloading pictures from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pictures?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading pictures now with <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">download pictures</a> tool. No registration, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Download Pictures Now
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
