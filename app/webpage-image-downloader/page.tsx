import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconBrowser } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Webpage Image Downloader - Download Images from Web Pages | ExtractPics",
    description: "Download images from any webpage with our free webpage image downloader. Extract and save images from web pages in bulk. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "webpage image downloader",
        "download images from webpage",
        "web page image downloader",
        "webpage photo downloader",
        "download webpage images",
        "webpage image extractor",
        "download pictures from webpage",
        "web page photo downloader",
        "webpage downloader",
        "online image downloader"
    ],
    openGraph: {
        title: "Webpage Image Downloader - Download Images from Web Pages",
        description: "Download images from any webpage with our free webpage image downloader. Extract and save images from web pages in bulk.",
        type: "website",
        url: "https://extractpics.com/webpage-image-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-webpage-image-downloader.png",
                width: 1200,
                height: 630,
                alt: "Webpage Image Downloader - Free Web Page Image Extractor"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Webpage Image Downloader - Download Images from Web Pages",
        description: "Download images from any webpage with our free webpage image downloader. Extract and save images in bulk.",
        images: ["https://extractpics.com/og-image-webpage-image-downloader.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/webpage-image-downloader",
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
        question: "How does the webpage image downloader work?",
        answer: "Our webpage image downloader works by scanning the web page you provide and extracting all images. Simply paste the webpage URL, click scan, and our tool will find all images on the page. You can then preview, filter, and download individual images or download all images as a ZIP file."
    },
    {
        question: "Can I download multiple images from a webpage at once?",
        answer: "Yes! Our webpage image downloader supports bulk downloading. After scanning a web page, you can select multiple images and download them all at once as a ZIP archive. You can also use batch mode to download images from multiple web pages simultaneously."
    },
    {
        question: "What image formats can the webpage image downloader extract?",
        answer: "Our webpage image downloader supports all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need. The tool preserves the original image quality."
    },
    {
        question: "Is the webpage image downloader free?",
        answer: "Yes, our webpage image downloader is completely free to use with unlimited downloads. You can download as many images as you need from any web page without any subscription, registration, or hidden fees. The tool runs entirely in your browser."
    },
    {
        question: "How do I download high-quality images from a webpage?",
        answer: "Our webpage image downloader automatically extracts images in their original quality. Use the Deep Scan mode to find high-resolution versions, including those loaded dynamically. You can also filter images by minimum dimensions to ensure you only download high-quality images."
    },
    {
        question: "Can I use the webpage image downloader on password-protected pages?",
        answer: "Yes! Our webpage image downloader can extract images from any page you can access in your browser. If you're logged into a website, the tool will be able to download images from web pages that require authentication. All processing happens locally for security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan downloads images that are immediately visible in the page source, making it faster for most web pages. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you download every single image from the webpage."
    },
    {
        question: "Is it safe to use the webpage image downloader?",
        answer: "Absolutely! Our webpage image downloader runs entirely in your browser - no URLs or images are sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function WebpageImageDownloaderPage() {
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
                            Free Webpage Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Webpage Image Downloader
                            <br />
                            Extract Images from Any Page
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">webpage image downloader</strong> tool. Extract, preview, and save images from any web page in seconds. Download single images or bulk download entire collections. For extracting from multiple pages at once, try our{" "}
                            <Link href="/bulk-extractor" className="text-primary hover:underline font-semibold">
                                bulk extractor
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
                        Why Use Our Webpage Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download images from any web page with the most advanced image downloader tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Download images from web pages instantly with a single click. No complicated steps, no software installation. Just paste a URL and extract images."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced webpage image downloader extracts images in seconds. Download from single pages or batch process multiple web pages for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconBrowser className="w-8 h-8" />}
                        title="Works with Any Webpage"
                        description="Download images from blogs, portfolios, e-commerce sites, social media, and any other web page. Our webpage image downloader works universally."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Types"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other image formats from web pages. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All webpage image downloading happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving images one by one. Our webpage image downloader extracts all images in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use the Webpage Image Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any web page in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Webpage URL"
                            description="Copy and paste the URL of the web page containing the images you want to download. Our webpage image downloader works with any page."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button and our webpage image downloader will extract all images from the page. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or all images as a ZIP file from the webpage."
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
                        Use our webpage image downloader for any purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download images from web pages for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly with our webpage image downloader."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download images from web pages for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download images from web pages for mood boards, design references, or creative projects. Build collections of inspiring visuals with our webpage image downloader."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download product images from web pages for catalogs, comparisons, or market research. Extract images from competitor web pages easily."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download images from web pages for backups, migrations, or testing. Extract all assets from pages quickly with our webpage image downloader."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download images from web pages for personal archives, wallpapers, or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Best Webpage Image Downloader
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading images from web pages are slow and tedious. Our <Link href="https://extractpics.com/" className="text-primary hover:underline font-semibold">webpage image downloader</Link> automates the entire process, saving you time and effort.
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
                title="Webpage Image Downloader FAQ"
                description="Common questions about downloading images from web pages"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Images from Web Pages?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <Link href="https://extractpics.com/" className="text-primary hover:underline font-semibold">webpage image downloader</Link> now. No registration, no downloads, completely free.
                    </p>
                    <Link href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Downloading Images
                    </Link>
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
