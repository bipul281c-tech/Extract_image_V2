import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Site Image Downloader - Download All Images from Any Site | ExtractPics",
    description: "Download images from any site instantly with our free site image downloader. Extract and save all images from websites in bulk. Fast, secure, and easy to use.",
    keywords: [
        "site image downloader",
        "download images from site",
        "site image extractor",
        "download all images from site",
        "website image downloader",
        "bulk site image download",
        "extract images from site",
        "save images from site",
        "site photo downloader",
        "download site images"
    ],
    openGraph: {
        title: "Site Image Downloader - Download All Images from Any Site",
        description: "Download images from any site instantly. Extract and save all images from websites in bulk with our free tool.",
        type: "website",
        url: "https://www.extractpics.com/site-image-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Site Image Downloader - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Site Image Downloader - Download All Images from Any Site",
        description: "Download images from any site instantly. Extract and save all images in bulk with our free tool.",
        images: ["https://www.extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/site-image-downloader",
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
        question: "What is a site image downloader?",
        answer: "A site image downloader is a tool that automatically extracts and downloads all images from any website. Simply paste the site URL, and our tool will scan and retrieve all images in seconds, allowing you to download them individually or in bulk as a ZIP file."
    },
    {
        question: "How do I download all images from a site?",
        answer: "Enter the site URL into our tool, click scan, and all images will be extracted instantly. You can then preview, filter by format or size, and download individual images or download all images from the site as a convenient ZIP archive."
    },
    {
        question: "Is it safe to use a site image downloader?",
        answer: "Yes! All image extraction happens locally in your browser. No URLs or images are sent to our servers. Your data remains completely private and secure when using our site image downloader."
    },
    {
        question: "Can I download images from password-protected sites?",
        answer: "Yes, if you're logged into a site, our tool can extract images from pages that require authentication. All processing happens in your browser, so your login credentials remain secure."
    },
    {
        question: "What image formats can I download from sites?",
        answer: "Our site image downloader supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need."
    },
    {
        question: "How many images can I download from a site?",
        answer: "There's no limit! Our site image downloader can extract and download hundreds or even thousands of images from a site. Use bulk download to save all images as a ZIP file for convenience."
    },
    {
        question: "Do I need to install software to download images from sites?",
        answer: "No installation required! Our site image downloader works directly in your browser. Just visit our website, paste the URL, and start downloading images immediately."
    },
    {
        question: "Can I use this tool for commercial purposes?",
        answer: "While our tool is free to use, you must respect copyright laws and terms of service. Only download images you have permission to use, such as royalty-free images or your own content."
    }
];

export default function SiteImageDownloaderPage() {
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
                            Free Site Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Site Image Downloader
                            <br />
                            Extract Images from Any Site
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">site image downloader</strong> to extract and download all images from any website. Save time with bulk downloads. Powered by <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Site Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest way to download images from any site with advanced features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Extraction"
                        description="Our site image downloader extracts all images in seconds. Simply paste the URL and get instant access to all images on any site."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download"
                        description="Download all images from a site at once as a ZIP archive. Perfect for downloading entire galleries or collections with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All images are downloaded in their original quality. Use Deep Scan to find high-resolution versions and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop downloading images one by one. Our site image downloader saves all images in seconds instead of spending hours manually."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use the Site Image Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any site in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Site URL"
                            description="Copy and paste the URL of the site containing the images you want to download. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Images"
                            description="Click the scan button and our site image downloader will extract all images instantly. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or download all images as a ZIP file."
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
                        Download images from sites for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download images from sites for blog posts, social media, presentations, or marketing materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download images from sites for academic research, educational materials, or study guides. Extract visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Design Projects"
                        description="Download images from sites for mood boards, design references, or creative inspiration. Build collections for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce Research"
                        description="Download product images from sites for catalogs, comparisons, or market research. Extract images for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download images from sites for backups, migrations, or testing. Extract all assets from web pages quickly for development."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download images from sites for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Site Image Downloader FAQ"
                description="Common questions about downloading images from sites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Images from Any Site?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">site image downloader</a> now. No registration, completely free.
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
