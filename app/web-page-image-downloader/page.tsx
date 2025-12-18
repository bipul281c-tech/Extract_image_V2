import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Web Page Image Downloader - Free Tool to Download Images | ExtractPics",
    description: "Web page image downloader - download images from any web page instantly. Extract and save all images in bulk. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "web page image downloader",
        "webpage image downloader",
        "download images from web page",
        "web page image extractor",
        "download webpage images",
        "web page picture downloader",
        "extract images from web page",
        "bulk web page image download",
        "save web page images",
        "web page image saver"
    ],
    openGraph: {
        title: "Web Page Image Downloader - Free Tool to Download Images",
        description: "Web page image downloader - download images from any web page instantly. Extract and save all images in bulk.",
        type: "website",
        url: "https://www.extractpics.com/web-page-image-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-webpage-downloader.png",
                width: 1200,
                height: 630,
                alt: "Web Page Image Downloader - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Page Image Downloader - Free Tool to Download Images",
        description: "Web page image downloader - download images from any web page instantly. Extract and save all images in bulk.",
        images: ["https://www.extractpics.com/og-image-webpage-downloader.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/web-page-image-downloader",
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
        question: "How do I use a web page image downloader?",
        answer: "Simply paste the web page URL into our web page image downloader, click scan, and all images will be extracted instantly. You can then preview, filter, and download individual images or download all images as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download multiple images from a web page at once?",
        answer: "Yes! Our web page image downloader supports bulk downloading. After scanning a web page, you can select multiple images and download them all at once as a ZIP archive. You can also use batch mode to download images from multiple web pages simultaneously."
    },
    {
        question: "What image formats does the web page image downloader support?",
        answer: "Our web page image downloader supports all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need. All images are preserved in their original quality."
    },
    {
        question: "Is the web page image downloader free?",
        answer: "Yes, our web page image downloader is completely free to use with no limitations. You can download as many images as you need from any web page without any subscription, registration, or hidden fees. The tool runs entirely in your browser."
    },
    {
        question: "How do I download high-quality images from web pages?",
        answer: "Our web page image downloader automatically extracts images in their original quality. Use the Deep Scan mode to find high-resolution versions of images, including those loaded dynamically. You can also filter images by minimum dimensions."
    },
    {
        question: "Can the web page image downloader access password-protected pages?",
        answer: "Yes, if you're logged into a website, our web page image downloader can extract images from pages that require authentication. All processing happens locally in your browser, so your login credentials remain secure."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan in the web page image downloader?",
        answer: "Quick Scan downloads images that are immediately visible in the page source, making it faster. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks. Use Deep Scan for comprehensive extraction."
    },
    {
        question: "Is my data safe when using the web page image downloader?",
        answer: "Absolutely! Our web page image downloader runs entirely in your browser - no URLs or images are sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function WebPageImageDownloaderPage() {
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
                            Free Web Page Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Page Image Downloader
                            <br />
                            Extract Images Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">web page image downloader</strong>. Extract and download all images from any web page in seconds. Download individually or in bulk as a ZIP file. Powered by <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Extraction</span>
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
                        Why Use Our Web Page Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient web page image downloader available.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Extraction"
                        description="Our web page image downloader extracts all images instantly with a single click. No complicated steps or software installation required."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="The fastest web page image downloader available. Extract images in seconds from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Our web page image downloader supports JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple images at once as a ZIP archive with our web page image downloader. Perfect for downloading entire galleries."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="Our web page image downloader runs entirely in your browser. No data sent to servers. Your URLs and images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop saving images one by one. Our web page image downloader extracts all images from a page in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How the Web Page Image Downloader Works
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from web pages in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Web Page URL"
                            description="Copy and paste the URL of the web page into our web page image downloader. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Images"
                            description="Click scan and our web page image downloader will extract all images. Use Deep Scan for dynamically loaded images."
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
                        Perfect for Every Use Case
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Use our web page image downloader for any purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Use our web page image downloader for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Our web page image downloader is perfect for academic research, educational materials, or study guides. Extract visual data efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Use the web page image downloader for mood boards, design references, or creative projects. Build collections of inspiring visuals."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Our web page image downloader helps download product images for catalogs, comparisons, or market research."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Use our web page image downloader for backups, migrations, or testing. Extract all assets from web pages quickly."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Our web page image downloader is great for personal archives, wallpapers, or collections. Save images before they disappear."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Web Page Image Downloader
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading images from web pages are slow and tedious. Our web page image downloader automates the entire process, saving you time and effort.
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
                title="Web Page Image Downloader FAQ"
                description="Common questions about our web page image downloader"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Use Our Web Page Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our web page image downloader now with <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>. No registration, completely free.
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
