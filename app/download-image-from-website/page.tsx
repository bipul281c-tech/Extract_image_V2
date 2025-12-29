import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Image from Website - Free Image Extractor Tool | ExtractPics",
    description: "Download image from website instantly with our free tool. Extract and save images from any webpage quickly and easily. No registration required.",
    keywords: [
        "download image from website",
        "download images from website",
        "website image download",
        "extract image from website",
        "save image from website",
        "download picture from website",
        "website image extractor",
        "get image from website",
        "download photo from website",
        "website image downloader"
    ],
    openGraph: {
        title: "Download Image from Website - Free Image Extractor Tool",
        description: "Download image from website instantly. Extract and save images from any webpage with our free tool.",
        type: "website",
        url: "https://extractpics.com/download-image-from-website",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Download Image from Website - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Image from Website - Free Image Extractor Tool",
        description: "Download image from website instantly. Extract and save images from any webpage with our free tool.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-image-from-website",
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
        question: "How do I download image from website?",
        answer: "To download image from website, simply paste the website URL into our tool, click scan, and all images will be extracted instantly. You can then preview and download individual images or save all images as a ZIP file."
    },
    {
        question: "Can I download multiple images from a website at once?",
        answer: "Yes! Our tool allows you to download image from website in bulk. After scanning, select all images and download them together as a ZIP archive for convenience."
    },
    {
        question: "What image formats can I download from websites?",
        answer: "You can download image from website in all formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. Filter by format after extraction to download only the types you need."
    },
    {
        question: "Is it free to download image from website?",
        answer: "Yes, our tool is completely free to download image from website. There are no limitations, registration requirements, or hidden fees. Download as many images as you need."
    },
    {
        question: "How do I download high-quality images from websites?",
        answer: "To download image from website in high quality, use our Deep Scan mode which extracts high-resolution versions. You can also filter images by minimum dimensions to ensure you only download large, high-quality images."
    },
    {
        question: "Is it safe to download image from website using this tool?",
        answer: "Absolutely! All processing happens locally in your browser when you download image from website. No URLs or images are sent to our servers, ensuring complete privacy and security."
    },
    {
        question: "Can I download image from website that requires login?",
        answer: "Yes, if you're logged into a website, our tool can download image from website pages that require authentication. Your login credentials remain secure as all processing is local."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan quickly extracts images from the page source, perfect for most websites. Deep Scan executes JavaScript to download image from website including dynamically loaded and lazy-loaded content."
    }
];

export default function DownloadImageFromWebsitePage() {
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
                            Free Image Download Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Image from Website
                            <br />
                            Fast & Easy
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The simplest way to <strong className="text-foreground">download image from website</strong>. Extract and save images from any webpage instantly. Download individually or in bulk. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Download Image from Website with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The most efficient way to extract and save images from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Extraction"
                        description="Download image from website in seconds. Simply paste the URL and our tool extracts all images instantly without complicated steps or software installation."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download"
                        description="Download image from website in bulk as a ZIP archive. Perfect for downloading entire galleries or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Formats Supported"
                        description="Download image from website in JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="When you download image from website, all images are saved in their original quality. Use Deep Scan to find high-resolution versions."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser when you download image from website. No data sent to servers. Your URLs and images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Stop right-clicking and saving images one by one. Download image from website in seconds instead of spending hours doing it manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Image from Website
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract and save images from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the images. Our tool works with any website to download image from website easily."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button to download image from website. Use Deep Scan for dynamically loaded images and comprehensive extraction."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download image from website individually or all as a ZIP file."
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
                        Download image from website for any use case with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download image from website for blog posts, social media, presentations, or marketing materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download image from website for academic research, educational materials, or study guides. Extract visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Design Projects"
                        description="Download image from website for mood boards, design references, or creative inspiration. Build collections of visuals for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce Research"
                        description="Download image from website for product catalogs, comparisons, or market research. Extract images for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download image from website for backups, migrations, or testing. Extract all assets from web pages quickly for development."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download image from website for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Best Way to Download Image from Website
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods are slow and tedious. Our tool to <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">download image from website</a> automates the process, saving time while ensuring original quality.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download images in original quality" />
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
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple websites simultaneously</span>
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
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Download Image from Website FAQ"
                description="Common questions about downloading images from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Image from Website?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a> to download image from website now. No registration, completely free.
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
