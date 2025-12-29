import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Picture from Website - Free Picture Downloader Tool | ExtractPics",
    description: "Download pictures from any website instantly with our free tool. Extract and save pictures in bulk from web pages. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "download picture from website",
        "download pictures from website",
        "website picture downloader",
        "bulk picture download",
        "extract pictures from website",
        "save pictures from website",
        "download all pictures from webpage",
        "website picture extractor",
        "picture saver tool",
        "web picture downloader"
    ],
    openGraph: {
        title: "Download Picture from Website - Free Picture Downloader Tool",
        description: "Download pictures from any website instantly. Extract and save pictures in bulk with our free tool.",
        type: "website",
        url: "https://extractpics.com/download-picture-from-website",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-picture.png",
                width: 1200,
                height: 630,
                alt: "Download Picture from Website - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Picture from Website - Free Picture Downloader Tool",
        description: "Download pictures from any website instantly. Extract and save pictures in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-picture.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-picture-from-website",
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
        question: "How do I download a picture from a website?",
        answer: "Simply paste the website URL into our tool, click scan, and all pictures will be extracted instantly. You can then preview, filter, and download individual pictures or download all pictures as a ZIP file. It's completely free and requires no registration."
    },
    {
        question: "Can I download multiple pictures from a website at once?",
        answer: "Yes! Our tool supports bulk picture downloading. After scanning a website, you can select multiple pictures and download them all at once as a ZIP archive. You can also use batch mode to download pictures from multiple URLs simultaneously."
    },
    {
        question: "What picture formats can I download?",
        answer: "Our picture downloader supports all common formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter pictures by format after extraction to download only the types you need. All pictures are preserved in their original quality."
    },
    {
        question: "Is it free to download pictures from websites?",
        answer: "Yes, our picture downloader is completely free to use with no limitations. You can download as many pictures as you need from any website without any subscription, registration, or hidden fees. The tool runs entirely in your browser."
    },
    {
        question: "How do I download high-quality pictures from websites?",
        answer: "Our tool automatically extracts pictures in their original quality. Use the Deep Scan mode to find high-resolution versions of pictures, including those loaded dynamically. You can also filter pictures by minimum dimensions to ensure you only download high-quality, large pictures."
    },
    {
        question: "Can I download pictures from password-protected websites?",
        answer: "Yes, if you're logged into a website, our tool can extract pictures from pages that require authentication. All processing happens locally in your browser, so your login credentials and session remain completely secure."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan downloads pictures that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded pictures, lazy-loaded content, and pictures from modern frameworks. Use Deep Scan when you want to ensure you download every picture on the page."
    },
    {
        question: "Is my data safe when downloading pictures from websites?",
        answer: "Absolutely! Our picture downloader runs entirely in your browser - no URLs or pictures are sent to our servers. All picture extraction and downloading happens locally on your device, ensuring complete privacy and security."
    }
];

export default function DownloadPictureFromWebsitePage() {
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
                            Free Picture Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Picture from Website
                            <br />
                            Fast & Easy
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The simplest way to <strong className="text-foreground">download pictures from websites</strong>. Extract all pictures from any webpage in seconds. Download individually or in bulk. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Picture Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Download pictures from any website with ease. Fast, secure, and completely free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Download"
                        description="Download pictures instantly with a single click. No complicated steps, no software installation. Just paste a URL and download your pictures from any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="Our advanced technology extracts pictures in seconds. Download from single pages or batch process multiple URLs for maximum efficiency when downloading pictures."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Types"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other picture formats. Filter by format, size, or dimensions to get exactly what you need from websites."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download as ZIP"
                        description="Download multiple pictures at once as a convenient ZIP archive. Perfect for downloading entire picture galleries or collections from websites."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All picture downloading happens in your browser. No data sent to servers. Your URLs and downloaded pictures remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving pictures one by one. Download all pictures from a website in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Pictures from Websites
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download pictures from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the pictures you want to download. Works with any website, blog, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Pictures"
                            description="Click the scan button and our tool will extract all pictures from the website. Use Deep Scan for dynamically loaded pictures."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Preview all extracted pictures, filter by format or size, and download individual pictures or all pictures as a ZIP file."
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
                        Download pictures from websites for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Download pictures from websites for blog posts, social media content, presentations, or marketing materials. Get high-quality pictures quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download pictures from websites for academic research, educational materials, or study guides. Extract visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Download pictures from websites for mood boards, design references, or creative projects. Build collections of inspiring visuals."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Download product pictures from websites for catalogs, comparisons, or market research. Extract pictures from competitor websites."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Download pictures from websites for backups, migrations, or testing. Extract all assets from web pages quickly."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download pictures from websites for personal archives, wallpapers, or collections. Save pictures before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Download Pictures the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading pictures from websites are slow and tedious. Our picture downloader automates the entire process, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download pictures in original quality" />
                                <BenefitItem text="Support for all picture formats" />
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
                title="Download Picture from Website FAQ"
                description="Common questions about downloading pictures from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pictures?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading pictures from any website now with <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>. No registration, completely free.
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
