import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Website Images - Free Bulk Website Image Downloader | ExtractPics",
    description: "Download website images instantly with our free tool. Extract and save all images from any website in bulk. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "download website images",
        "website image downloader",
        "download images from website",
        "bulk website image download",
        "extract website images",
        "save website images",
        "download all website images",
        "website image extractor",
        "download pictures from website",
        "website image saver"
    ],
    openGraph: {
        title: "Download Website Images - Free Bulk Website Image Downloader",
        description: "Download website images instantly. Extract and save all images from any website in bulk with our free tool.",
        type: "website",
        url: "https://extractpics.com/download-website-images",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-website-images.png",
                width: 1200,
                height: 630,
                alt: "Download Website Images - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Website Images - Free Bulk Website Image Downloader",
        description: "Download website images instantly. Extract and save all images from any website in bulk.",
        images: ["https://extractpics.com/og-image-website-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-website-images",
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
        question: "How do I download website images?",
        answer: "Simply paste the website URL into our tool, click scan, and all images will be extracted instantly. You can then preview, filter, and download individual images or download all website images as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download all images from a website at once?",
        answer: "Yes! Our tool allows you to download website images in bulk. After scanning, you can select all images and download them as a convenient ZIP archive. This is perfect for downloading entire image galleries or collections from any website."
    },
    {
        question: "What image formats can I download from websites?",
        answer: "Our tool supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need when you download website images."
    },
    {
        question: "Is it free to download website images?",
        answer: "Yes, our tool to download website images is completely free to use with no limitations. You can download as many images as you need from any website without any subscription, registration, or hidden fees."
    },
    {
        question: "How do I download high-quality images from websites?",
        answer: "Our tool automatically extracts images in their original quality when you download website images. Use the Deep Scan mode to find high-resolution versions of images, including those loaded dynamically. You can also filter images by minimum dimensions."
    },
    {
        question: "Can I download website images from password-protected sites?",
        answer: "Yes, if you're logged into a website, our tool can extract images from pages that require authentication. All processing happens locally in your browser when you download website images, so your login credentials remain secure."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan when I download website images?",
        answer: "Quick Scan downloads website images that are immediately visible in the page source, making it faster. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks for comprehensive extraction."
    },
    {
        question: "Is my data safe when I download website images?",
        answer: "Absolutely! Our tool runs entirely in your browser when you download website images - no URLs or images are sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function DownloadWebsiteImagesPage() {
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
                            Free Website Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Website Images
                            <br />
                            Quickly & Efficiently
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The best way to <strong className="text-foreground">download website images</strong>. Extract all images from any website in seconds. Download individually or in bulk as a ZIP file. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Download Website Images with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download website images.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Download website images instantly with a single click. No complicated steps or software installation. Just paste a URL and download images from any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="Our advanced technology extracts images in seconds when you download website images. Process single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Download website images in JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download website images in bulk as a convenient ZIP archive. Perfect for downloading entire image galleries or collections from websites."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser when you download website images. No data sent to servers. Your URLs and images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving images one by one. Download website images in seconds instead of spending hours doing it manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Website Images
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download website images in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the images you want to download. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Images"
                            description="Click scan to download website images. Our tool will extract all images instantly. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download website images individually or all at once as a ZIP file."
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
                        Download website images for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download website images for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download website images for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download website images for mood boards, design references, or creative projects. Build collections of inspiring visuals from any website."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download website images for product catalogs, comparisons, or market research. Extract images from competitor websites easily."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download website images for backups, migrations, or testing. Extract all assets from websites quickly for development purposes."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download website images for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way to Download Website Images
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods to download website images are slow and tedious. Our tool automates the entire process, saving you time and effort while ensuring you get all images in original quality.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download website images in original quality" />
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
                title="Download Website Images FAQ"
                description="Common questions about downloading website images"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Website Images?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading website images now with <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>. No registration, completely free.
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
