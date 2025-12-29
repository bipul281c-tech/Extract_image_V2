import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Web Image Download - Free Web Image Downloader Tool | ExtractPics",
    description: "Web image download made easy. Download images from any web page instantly with our free tool. Extract and save web images in bulk. Fast, secure, and easy to use.",
    keywords: [
        "web image download",
        "web image downloader",
        "download web images",
        "web picture download",
        "web photo download",
        "download images from web",
        "web image extractor",
        "bulk web image download",
        "save web images",
        "web image saver"
    ],
    openGraph: {
        title: "Web Image Download - Free Web Image Downloader Tool",
        description: "Web image download made easy. Download images from any web page instantly with our free tool.",
        type: "website",
        url: "https://extractpics.com/web-image-download",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-web-download.png",
                width: 1200,
                height: 630,
                alt: "Web Image Download - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Image Download - Free Web Image Downloader Tool",
        description: "Web image download made easy. Download images from any web page instantly with our free tool.",
        images: ["https://extractpics.com/og-image-web-download.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/web-image-download",
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
        question: "How do I download web images?",
        answer: "Simply paste the web page URL into our tool, click scan, and all images will be extracted instantly. You can then preview, filter, and download individual images or download all web images as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download multiple web images at once?",
        answer: "Yes! Our web image download tool supports bulk downloading. After scanning a web page, you can select multiple images and download them all at once as a ZIP archive. You can also use batch mode to download images from multiple web pages simultaneously."
    },
    {
        question: "What web image formats can I download?",
        answer: "Our web image download tool supports all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need. All images are preserved in their original quality."
    },
    {
        question: "Is web image download free?",
        answer: "Yes, our web image download tool is completely free to use with no limitations. You can download as many web images as you need without any subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy."
    },
    {
        question: "How do I download high-quality web images?",
        answer: "Our tool automatically extracts web images in their original quality. Use the Deep Scan mode to find high-resolution versions of images, including those loaded dynamically. You can also filter images by minimum dimensions to ensure you only download high-quality web images."
    },
    {
        question: "Can I download web images from password-protected pages?",
        answer: "Yes, if you're logged into a website, our tool can extract images from pages that require authentication. All processing happens locally in your browser, so your login credentials and session remain completely secure during web image download."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for web image download?",
        answer: "Quick Scan downloads web images that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want comprehensive web image download."
    },
    {
        question: "Is my data safe when using web image download?",
        answer: "Absolutely! Our web image download tool runs entirely in your browser - no URLs or images are sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function WebImageDownloadPage() {
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
                            Free Web Image Download Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Image Download
                            <br />
                            Made Simple & Fast
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The ultimate <strong className="text-foreground">web image download</strong> tool. Extract and download images from any web page in seconds. Download individually or in bulk as a ZIP file. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Web Image Download Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download web images.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Web image download has never been easier. Simply paste a URL and download your images instantly. No complicated steps or software installation required."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced technology extracts web images in seconds. Download from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other web image formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple web images at once as a convenient ZIP archive. Perfect for downloading entire image galleries or collections."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All web image download processing happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving web images one by one. Download all images from a web page in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How Web Image Download Works
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download web images in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Web Page URL"
                            description="Copy and paste the URL of the web page containing the images you want to download. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract Web Images"
                            description="Click the scan button and our tool will extract all web images. Use Deep Scan for dynamically loaded images and comprehensive extraction."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted web images, filter by format or size, and download individual images or all images as a ZIP file."
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
                        Web image download for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Use web image download for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Web image download for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download web images for mood boards, design references, or creative projects. Build collections of inspiring visuals."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Web image download for product catalogs, comparisons, or market research. Extract images from competitor websites."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Use web image download for backups, migrations, or testing. Extract all assets from web pages quickly."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Web image download for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way for Web Image Download
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of web image download are slow and tedious. Our tool automates the entire process, saving you time and effort while ensuring you get all images in original quality.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download web images in original quality" />
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
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast web image extraction</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple web pages</span>
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
                title="Web Image Download FAQ"
                description="Common questions about web image download"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready for Web Image Download?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start web image download now with <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>. No registration, completely free.
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
