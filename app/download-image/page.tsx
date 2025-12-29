import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Download Image - Free Image Downloader Tool | Extract & Save Images",
    description: "Download images from any website instantly with our free image downloader. Extract, save, and download images in bulk from web pages. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "download image",
        "image downloader",
        "download images from website",
        "save images from web",
        "free image download tool",
        "bulk image download",
        "extract and download images",
        "website image downloader",
        "download pictures online",
        "image saver tool"
    ],
    openGraph: {
        title: "Download Image - Free Image Downloader Tool",
        description: "Download images from any website instantly. Extract and save images in bulk with our free image downloader tool.",
        type: "website",
        url: "https://extractpics.com/download-image",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-image.png",
                width: 1200,
                height: 630,
                alt: "Download Image - Free Image Downloader Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Image - Free Image Downloader Tool",
        description: "Download images from any website instantly. Extract and save images in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-image.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-image",
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
        question: "How do I download images from a website?",
        answer: "Simply paste the website URL into our tool, click the scan button, and our image downloader will extract all images from the page. You can then preview, filter, and download individual images or download all images as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download multiple images at once?",
        answer: "Yes! Our tool supports bulk image downloading. After scanning a website, you can select multiple images and download them all at once as a ZIP archive. You can also use batch mode to download images from multiple URLs simultaneously, making it perfect for downloading large collections of images."
    },
    {
        question: "What image formats can I download?",
        answer: "Our image downloader supports all common image formats including JPG, PNG, WebP, GIF, SVG, and more. You can filter images by format after extraction to download only the types you need. The tool preserves the original image quality and format."
    },
    {
        question: "Is it free to download images from websites?",
        answer: "Yes, our image downloader is completely free to use with no limitations. You can download as many images as you need from any website without any subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy and speed."
    },
    {
        question: "How do I download high-quality images?",
        answer: "Our tool automatically extracts images in their original quality. Use the Deep Scan mode to find high-resolution versions of images, including those loaded dynamically. You can also filter images by minimum dimensions to ensure you only download high-quality, large images."
    },
    {
        question: "Can I download images from password-protected pages?",
        answer: "Our tool can download images from any page you can access in your browser. If you're logged into a website, the tool will be able to extract images from pages that require authentication. All processing happens locally in your browser for complete security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan downloads images that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you download every single image on the page."
    },
    {
        question: "Is my data safe when downloading images?",
        answer: "Absolutely! Our image downloader runs entirely in your browser - no URLs or images are sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security. Your browsing data and downloaded images remain completely private."
    }
];

export default function DownloadImagePage() {
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
                            Free Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Image
                            <br />
                            From Any Website Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The fastest way to <strong className="text-foreground">download images</strong> from any website. Extract, preview, and save images in seconds. Download single images or bulk download entire collections with one click. For processing multiple sites, try our{" "}
                            <Link href="/bulk-extractor" className="text-primary hover:underline font-semibold">
                                bulk extractor
                            </Link>. Need just the URLs? Use our{" "}
                            <Link href="/image-link" className="text-primary hover:underline font-semibold">
                                image link tool
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
                        Why Use Our Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download images from any website with ease. Fast, secure, and completely free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Download images instantly with a single click. No complicated steps, no software installation. Just paste a URL and download your images."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced technology extracts images in seconds. Download from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Types"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple images at once as a convenient ZIP archive. Perfect for downloading entire image galleries or collections."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image downloading happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving images one by one. Download all images from a page in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Images
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the images you want to download. Works with any website."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button and our tool will extract all images from the page. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or all images as a ZIP file."
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
                        Download images for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download images for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download images for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download images for mood boards, design references, or creative projects. Build collections of inspiring visuals."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download product images for catalogs, comparisons, or market research. Extract images from competitor websites."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download images for website backups, migrations, or testing. Extract all assets from web pages quickly."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download images for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Download Images the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading images are slow and tedious. Our image downloader automates the entire process, saving you time and effort.
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
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Image Download FAQ"
                description="Common questions about downloading images from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Images?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading images from any website now. No registration, no downloads, completely free.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all cursor-pointer">
                        <IconDownload size={20} />
                        Start Downloading Images
                    </div>
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
