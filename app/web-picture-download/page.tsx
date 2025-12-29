import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Web Picture Download - Download Pictures from Websites Free | ExtractPics",
    description: "Free web picture download tool to download pictures from any website instantly. Extract and save all pictures from webpages in bulk. Fast, secure, and easy to use.",
    keywords: [
        "web picture download",
        "download pictures from website",
        "web picture downloader",
        "download pictures from web",
        "website picture download",
        "bulk picture download",
        "extract pictures from website",
        "save pictures from web",
        "download all pictures from webpage",
        "web image download"
    ],
    openGraph: {
        title: "Web Picture Download - Download Pictures from Websites Free",
        description: "Free web picture download tool to download pictures from any website instantly. Extract and save all pictures in bulk.",
        type: "website",
        url: "https://extractpics.com/web-picture-download",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Web Picture Download - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Picture Download - Download Pictures from Websites Free",
        description: "Free web picture download tool to download pictures from any website instantly. Extract and save all pictures in bulk.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/web-picture-download",
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
        question: "What is web picture download?",
        answer: "Web picture download is the process of extracting and saving pictures from websites to your device. Our tool makes web picture download easy by automatically extracting all pictures from any webpage with a single click."
    },
    {
        question: "How do I use this web picture download tool?",
        answer: "Using our web picture download tool is simple: paste the website URL, click scan to extract all pictures, preview the results, and download individual pictures or all pictures as a ZIP file. No registration required."
    },
    {
        question: "Can I do bulk web picture download?",
        answer: "Yes! Our tool supports bulk web picture download. After scanning a website, you can select all pictures and download them together as a convenient ZIP archive, saving you time and effort."
    },
    {
        question: "What picture formats are supported for web picture download?",
        answer: "Our web picture download tool supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter pictures by format after extraction to download only the types you need."
    },
    {
        question: "Is web picture download free?",
        answer: "Yes, our web picture download tool is completely free with no limitations. Download as many pictures as you need from any website without registration, subscriptions, or hidden fees."
    },
    {
        question: "Is web picture download safe?",
        answer: "Absolutely! All web picture download processing happens locally in your browser. No URLs or pictures are sent to our servers, ensuring your privacy and security."
    },
    {
        question: "Can I download high-quality pictures with web picture download?",
        answer: "Yes! Our web picture download tool preserves original image quality. Use Deep Scan mode to find high-resolution versions of pictures, including those loaded dynamically."
    },
    {
        question: "Does web picture download work on all websites?",
        answer: "Our web picture download tool works on most websites. It can extract pictures from blogs, portfolios, e-commerce sites, social media, and more. For websites with dynamic content, use Deep Scan mode."
    }
];

export default function WebPictureDownloadPage() {
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
                            Free Web Picture Download
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Web Picture Download
                            <br />
                            Download Pictures Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">web picture download</strong> tool to extract and save pictures from any website. Download individually or in bulk with our free tool. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Web Picture Download Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way for web picture download from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Picture Extraction"
                        description="Web picture download in seconds with our tool. Simply paste the URL and extract all pictures instantly without complicated steps or software installation."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Download Support"
                        description="Bulk web picture download as a ZIP archive. Perfect for downloading entire galleries or collections with a single click using our tool."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Web picture download in JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All pictures are saved in their original quality with web picture download. Use Deep Scan to find high-resolution versions and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All web picture download processing happens in your browser. No data sent to servers. Your URLs and downloaded pictures remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop right-clicking and saving pictures one by one. Web picture download in seconds instead of hours with our automated tool."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use Web Picture Download
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Web picture download from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the pictures. Our web picture download tool works with any website or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Pictures"
                            description="Click the scan button for web picture download. Our tool will extract all pictures from the website. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Pictures"
                            description="Preview all extracted pictures, filter by format or size, and complete web picture download individually or all as a ZIP file."
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
                        Use our web picture download tool for any purpose with versatile features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation & Marketing"
                        description="Web picture download for blog posts, social media content, presentations, or marketing materials. Build visual libraries quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Research & Academic Work"
                        description="Web picture download for academic research, educational materials, or study guides. Extract visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Design & Creative Projects"
                        description="Web picture download for mood boards, design references, or creative inspiration. Build collections of visuals for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Web picture download for product catalogs, comparisons, or market research. Extract images for competitive analysis and documentation."
                    />
                    <UseCaseCard
                        title="Web Development & Testing"
                        description="Web picture download for backups, migrations, or testing. Extract all assets from web pages quickly for development purposes."
                    />
                    <UseCaseCard
                        title="Personal Archives & Collections"
                        description="Web picture download for personal archives, wallpapers, or collections. Save pictures before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way for Web Picture Download
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods are slow and tedious. Our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">web picture download</a> tool automates the entire process, saving you time while ensuring original quality.
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
                title="Web Picture Download FAQ"
                description="Common questions about web picture download"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready for Web Picture Download?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a> for web picture download now. No registration, completely free.
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
