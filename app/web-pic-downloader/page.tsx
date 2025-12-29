import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Web Pic Downloader - Download Pictures from Any Website Free | ExtractPics",
    description: "Free web pic downloader tool to download pictures from any website instantly. Extract and save all images from webpages in bulk. Fast, secure, and easy to use.",
    keywords: [
        "web pic downloader",
        "download pictures from website",
        "web picture downloader",
        "download pics from web",
        "website pic downloader",
        "bulk pic download",
        "extract pics from website",
        "save pictures from web",
        "download all pics from webpage",
        "web image downloader"
    ],
    openGraph: {
        title: "Web Pic Downloader - Download Pictures from Any Website Free",
        description: "Free web pic downloader tool to download pictures from any website instantly. Extract and save all images in bulk.",
        type: "website",
        url: "https://extractpics.com/web-pic-downloader",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Web Pic Downloader - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Pic Downloader - Download Pictures from Any Website Free",
        description: "Free web pic downloader tool to download pictures from any website instantly. Extract and save all images in bulk.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/web-pic-downloader",
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
        question: "What is a web pic downloader?",
        answer: "A web pic downloader is a tool that allows you to download pictures from any website quickly and easily. Simply paste the URL, and our tool extracts all images from the webpage, allowing you to download them individually or in bulk as a ZIP file."
    },
    {
        question: "How do I use this web pic downloader?",
        answer: "Using our web pic downloader is simple: paste the website URL into the tool, click scan to extract all pictures, preview the results, and download individual images or all pictures as a ZIP file. No registration or software installation required."
    },
    {
        question: "Can I download all pictures from a website at once?",
        answer: "Yes! Our web pic downloader supports bulk downloading. After scanning a website, you can select all pictures and download them together as a convenient ZIP archive, saving you time and effort."
    },
    {
        question: "What picture formats does the web pic downloader support?",
        answer: "Our web pic downloader supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter pictures by format after extraction to download only the types you need."
    },
    {
        question: "Is this web pic downloader free to use?",
        answer: "Yes, our web pic downloader is completely free with no limitations. Download as many pictures as you need from any website without registration, subscriptions, or hidden fees."
    },
    {
        question: "Is it safe to use a web pic downloader?",
        answer: "Absolutely! All picture extraction and downloading happens locally in your browser. No URLs or images are sent to our servers, ensuring your privacy and security when using our web pic downloader."
    },
    {
        question: "Can I download high-quality pictures from websites?",
        answer: "Yes! Our web pic downloader preserves original image quality. Use Deep Scan mode to find high-resolution versions of pictures, including those loaded dynamically or hidden in the page source."
    },
    {
        question: "Does the web pic downloader work on all websites?",
        answer: "Our web pic downloader works on most websites. It can extract pictures from blogs, portfolios, e-commerce sites, social media, and more. For websites with dynamic content, use Deep Scan mode for comprehensive extraction."
    }
];

export default function WebPicDownloaderPage() {
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
                            Free Web Pic Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Pic Downloader
                            <br />
                            Download Pictures Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">web pic downloader</strong> to extract and save pictures from any website. Download individually or in bulk with our free tool. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Web Pic Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to download pictures from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Picture Extraction"
                        description="Download pictures from websites in seconds with our web pic downloader. Simply paste the URL and extract all images instantly without complicated steps."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download Support"
                        description="Download all pictures from a website at once as a ZIP archive. Perfect for downloading entire galleries or collections with a single click using our web pic downloader."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need with our web pic downloader."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All pictures are downloaded in their original quality. Use Deep Scan to find high-resolution versions and ensure you get the best quality with our web pic downloader."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and downloaded pictures remain completely private with our web pic downloader."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop right-clicking and saving pictures one by one. Download all pictures from websites in seconds instead of hours with our web pic downloader."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use Our Web Pic Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download pictures from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the pictures you want to download. Our web pic downloader works with any website or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Pictures"
                            description="Click the scan button and our web pic downloader will extract all pictures from the website. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Preview all extracted pictures, filter by format or size, and download individual images or all pictures as a ZIP file with our web pic downloader."
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
                        Use our web pic downloader for any purpose with versatile features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation & Marketing"
                        description="Download pictures from websites for blog posts, social media content, presentations, or marketing materials using our web pic downloader."
                    />
                    <UseCaseCard
                        title="Research & Academic Work"
                        description="Download pictures from websites for academic research, educational materials, or study guides. Extract visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Design & Creative Projects"
                        description="Download pictures from websites for mood boards, design references, or creative inspiration. Build collections of visuals for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Download product pictures from websites for catalogs, comparisons, or market research using our powerful web pic downloader."
                    />
                    <UseCaseCard
                        title="Web Development & Testing"
                        description="Download pictures from websites for backups, migrations, or testing. Extract all assets from web pages quickly for development purposes."
                    />
                    <UseCaseCard
                        title="Personal Archives & Collections"
                        description="Download pictures from websites for personal archives, wallpapers, or collections. Save images before they disappear from the web."
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
                                Traditional methods of downloading pictures are slow and tedious. Our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">web pic downloader</a> automates the entire process, saving you time while ensuring original quality.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download pictures in original quality" />
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
                title="Web Pic Downloader FAQ"
                description="Common questions about downloading pictures from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pictures from Websites?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">web pic downloader</a> now. No registration, completely free.
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
