import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Pic - Free Picture Downloader from Any Website | ExtractPics",
    description: "Download pic from any website instantly. Free picture downloader tool to save images quickly and easily. No registration required. Download pics in original quality.",
    keywords: [
        "download pic",
        "pic download",
        "download picture",
        "pic downloader",
        "download pics",
        "picture download tool",
        "download pic from website",
        "free pic download",
        "save pic",
        "download pic online"
    ],
    openGraph: {
        title: "Download Pic - Free Picture Downloader from Any Website",
        description: "Download pic from any website instantly. Free tool to save pictures quickly and easily in original quality.",
        type: "website",
        url: "https://extractpics.com/download-pic",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-pic.png",
                width: 1200,
                height: 630,
                alt: "Download Pic - Free Picture Downloader"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Pic - Free Picture Downloader from Any Website",
        description: "Download pic from any website instantly. Free and easy to use.",
        images: ["https://extractpics.com/og-image-download-pic.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/download-pic",
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
        question: "How do I download pic from a website?",
        answer: "Simply paste the website URL into our tool, click scan, and all pictures will be displayed. You can then click on any pic to download it individually, or select multiple pics to download as a ZIP file. It's fast, easy, and completely free."
    },
    {
        question: "Can I download pic in original quality?",
        answer: "Yes! Our tool downloads pics in their original quality without any compression or quality loss. You get the exact same picture that appears on the website, preserving all details and resolution."
    },
    {
        question: "What formats can I download pic in?",
        answer: "You can download pic in all common formats including JPG, PNG, WebP, GIF, SVG, and more. Our tool supports every image format used on the web, and you can filter by format to download only specific types."
    },
    {
        question: "Is it free to download pic?",
        answer: "Absolutely! Our pic download tool is completely free with no limitations. Download as many pictures as you need without any registration, subscription, or hidden fees."
    },
    {
        question: "Can I download multiple pics at once?",
        answer: "Yes! After scanning a website, you can select multiple pics and download them all as a convenient ZIP archive. This is perfect when you need to download several pictures from the same page."
    },
    {
        question: "How do I download pic from social media?",
        answer: "Paste the social media page URL into our tool and scan it. Our Deep Scan mode can extract pics from dynamically loaded content on platforms like Facebook, Instagram, and Twitter (if publicly accessible)."
    },
    {
        question: "Is my privacy protected when I download pic?",
        answer: "Yes! All pic downloads happen locally in your browser. No URLs or images are sent to our servers. Your browsing activity and downloaded pictures remain completely private and secure."
    },
    {
        question: "Can I download pic on mobile devices?",
        answer: "Yes! Our pic download tool works perfectly on mobile phones and tablets. Simply open the website in your mobile browser, paste the URL, and download pics directly to your device."
    }
];

export default function DownloadPicPage() {
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
                            Download Pic
                            <br />
                            Quick & Easy
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest way to <strong className="text-foreground">download pic</strong> from any website. Save pictures instantly in original quality. Fast, simple, and completely free. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Download</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Original Quality</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
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
                        Why Download Pic with Our Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and simplest way to download pictures from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Pic Download"
                        description="Download pic from any website in seconds. Just paste the URL, scan, and save. No complicated steps or software installation needed."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="Our optimized tool scans websites and extracts pics instantly. Download pictures faster than traditional right-click methods."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Formats"
                        description="Download pic in any format: JPG, PNG, WebP, GIF, SVG, and more. Filter by format to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="Every pic is downloaded in its original quality. No compression, no quality loss. Get the best version of every picture."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private"
                        description="Download pic securely with all processing happening in your browser. No data sent to servers. Your privacy is fully protected."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Stop right-clicking and saving pics one by one. Download multiple pictures at once with our bulk download feature."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Pic
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download pictures from any website in three easy steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste URL"
                            description="Copy the website URL containing the pic you want to download and paste it into our tool. Works with any website."
                        />
                        <StepCard
                            number={2}
                            title="Scan Page"
                            description="Click the scan button and our tool will extract all pics from the website. Use Deep Scan for comprehensive extraction."
                        />
                        <StepCard
                            number={3}
                            title="Download Pic"
                            description="Preview all pics, select the ones you want, and download individually or as a ZIP file. All pics are saved in original quality."
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
                        Download pic for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Social Media Content"
                        description="Download pic from websites for your social media posts, stories, or profiles. Build your content library quickly and easily."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Download pic for wallpapers, inspiration boards, or personal archives. Save pictures before they disappear from the web."
                    />
                    <UseCaseCard
                        title="Blog & Website"
                        description="Download pic for blog posts, articles, or website content. Find and save the perfect images for your projects."
                    />
                    <UseCaseCard
                        title="Presentations"
                        description="Download pic for PowerPoint, Keynote, or Google Slides presentations. Get high-quality images for professional presentations."
                    />
                    <UseCaseCard
                        title="Design Projects"
                        description="Download pic for mood boards, design references, or creative inspiration. Build visual collections for your design work."
                    />
                    <UseCaseCard
                        title="Quick Saves"
                        description="Download pic quickly when you find something interesting online. Save pictures instantly without complicated steps."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Smart Way to Download Pic
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading pictures are slow and tedious. Our tool makes it easy to download pic from any website in seconds, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download pic in original quality" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk download multiple pics" />
                                <BenefitItem text="No registration required" />
                                <BenefitItem text="Works on all devices" />
                                <BenefitItem text="Completely free forever" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Download:</strong> Save pics in seconds</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Find all pics on the page</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple URLs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Format Filter:</strong> Filter by image type</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">ZIP Download:</strong> Package multiple pics</span>
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
                title="Download Pic FAQ"
                description="Common questions about downloading pictures"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Pic?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading pictures now with <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">download pic</a> tool. No registration, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Download Pic Now
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
