import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Images from Page - Extract Images from Any Webpage | ExtractPics",
    description: "Download images from page instantly with our free tool. Extract and save all images from any webpage in bulk. Fast, secure, and easy to use.",
    keywords: [
        "download images from page",
        "download images from webpage",
        "page image downloader",
        "extract images from page",
        "save images from page",
        "download all images from page",
        "webpage image downloader",
        "page image extractor",
        "download page images",
        "web page image download"
    ],
    openGraph: {
        title: "Download Images from Page - Extract Images from Any Webpage",
        description: "Download images from page instantly. Extract and save all images from any webpage in bulk with our free tool.",
        type: "website",
        url: "https://extractpics.com/download-images-from-page",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Download Images from Page - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Images from Page - Extract Images from Any Webpage",
        description: "Download images from page instantly. Extract and save all images in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-images-from-page",
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
        question: "How do I download images from a page?",
        answer: "Simply paste the page URL into our tool, click scan, and all images will be extracted instantly. You can then preview, filter, and download individual images or download all images from the page as a ZIP file."
    },
    {
        question: "Can I download all images from a page at once?",
        answer: "Yes! Our tool allows you to download all images from a page in bulk. After scanning, you can select all images and download them as a convenient ZIP archive. Perfect for downloading entire image galleries."
    },
    {
        question: "What types of images can I download from pages?",
        answer: "Our tool supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need from the page."
    },
    {
        question: "Is it safe to download images from pages?",
        answer: "Absolutely! All image extraction happens locally in your browser. No URLs or images are sent to our servers. Your data remains completely private and secure when downloading images from pages."
    },
    {
        question: "Can I download high-quality images from pages?",
        answer: "Yes! Use our Deep Scan mode to extract high-resolution versions of images from pages. You can also filter images by minimum dimensions to ensure you only download large, high-quality images."
    },
    {
        question: "Do I need to install software to download images from pages?",
        answer: "No installation required! Our tool works directly in your browser. Just visit our website, paste the page URL, and start downloading images immediately."
    },
    {
        question: "How many images can I download from a page?",
        answer: "There's no limit! Our tool can extract and download hundreds or even thousands of images from a page. Use bulk download to save all images as a ZIP file for convenience."
    },
    {
        question: "Can I download images from password-protected pages?",
        answer: "Yes, if you're logged into a website, our tool can extract images from pages that require authentication. All processing happens in your browser, so your login credentials remain secure."
    }
];

export default function DownloadImagesFromPagePage() {
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
                            Free Page Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Images from Page
                            <br />
                            Extract Images Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest way to <strong className="text-foreground">download images from page</strong>. Extract all images from any webpage in seconds. Download individually or in bulk as a ZIP file. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Extract</span>
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
                        Why Download Images from Pages with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download images from any page.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Extraction"
                        description="Download images from page in seconds. Simply paste the URL and our tool extracts all images instantly from any webpage."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download Support"
                        description="Download all images from a page at once as a ZIP archive. Perfect for downloading entire galleries or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other formats from pages. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All images are downloaded in their original quality. Use Deep Scan to find high-resolution versions from pages and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop downloading images one by one. Download all images from a page in seconds instead of spending hours doing it manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Images from a Page
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any page in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Page URL"
                            description="Copy and paste the URL of the page containing the images you want to download. Works with any webpage or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Images"
                            description="Click the scan button and our tool will extract all images from the page instantly. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or download all images from the page as a ZIP file."
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
                        Download images from pages for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download images from pages for blog posts, social media content, presentations, or marketing materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download images from pages for academic research, educational materials, or study guides. Extract visual data efficiently."
                    />
                    <UseCaseCard
                        title="Design Projects"
                        description="Download images from pages for mood boards, design references, or creative inspiration. Build collections for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce"
                        description="Download product images from pages for catalogs, comparisons, or market research. Extract images for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download images from pages for backups, migrations, or testing. Extract all assets from web pages quickly for development."
                    />
                    <UseCaseCard
                        title="Personal Archives"
                        description="Download images from pages for personal archives or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Download Images from Page FAQ"
                description="Common questions about downloading images from pages"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Images from Pages?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">downloading images from page</a> now. No registration, completely free.
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
