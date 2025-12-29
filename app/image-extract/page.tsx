import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Image Extract - Extract Images from Any Website Instantly | ExtractPics",
    description: "Extract images from any website instantly with our free image extract tool. Download and save all images in bulk. Fast, secure, and easy to use.",
    keywords: [
        "image extract",
        "extract images",
        "image extraction tool",
        "extract images from website",
        "bulk image extract",
        "extract all images",
        "image extractor",
        "extract pictures",
        "extract photos",
        "web image extract"
    ],
    openGraph: {
        title: "Image Extract - Extract Images from Any Website Instantly",
        description: "Extract images from any website instantly. Download and save all images in bulk with our free image extract tool.",
        type: "website",
        url: "https://extractpics.com/image-extract",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-download-images.png",
                width: 1200,
                height: 630,
                alt: "Image Extract - Free Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Extract - Extract Images from Any Website Instantly",
        description: "Extract images from any website instantly. Download and save all images in bulk with our free tool.",
        images: ["https://extractpics.com/og-image-download-images.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/image-extract",
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
        question: "What is image extract?",
        answer: "Image extract is the process of automatically finding and downloading all images from a website. Our image extract tool scans any webpage and retrieves all images in seconds, allowing you to download them individually or in bulk as a ZIP file."
    },
    {
        question: "How do I extract images from a website?",
        answer: "Simply paste the website URL into our image extract tool, click scan, and all images will be extracted instantly. You can then preview, filter by format or size, and download individual images or extract all images as a ZIP archive."
    },
    {
        question: "Can I extract all images from a website at once?",
        answer: "Yes! Our image extract tool allows you to extract all images from a website in bulk. After scanning, you can select all images and download them as a convenient ZIP file."
    },
    {
        question: "What types of images can I extract?",
        answer: "Our image extract tool supports all image formats including JPG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only the types you need."
    },
    {
        question: "Is it safe to extract images from websites?",
        answer: "Absolutely! All image extraction happens locally in your browser. No URLs or images are sent to our servers. Your data remains completely private and secure when using our image extract tool."
    },
    {
        question: "Can I extract high-quality images?",
        answer: "Yes! Use our Deep Scan mode to extract high-resolution versions of images. You can also filter images by minimum dimensions to ensure you only extract large, high-quality images."
    },
    {
        question: "Do I need to install software to extract images?",
        answer: "No installation required! Our image extract tool works directly in your browser. Just visit our website, paste the URL, and start extracting images immediately."
    },
    {
        question: "How many images can I extract from a website?",
        answer: "There's no limit! Our image extract tool can find and download hundreds or even thousands of images from a website. Use bulk download to save all extracted images as a ZIP file."
    }
];

export default function ImageExtractPage() {
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
                            Free Image Extract Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image Extract
                            <br />
                            Extract Images from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">image extract</strong> tool to find and download all images from any website. Extract images in seconds with bulk download support. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
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
                        Why Use Our Image Extract Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most efficient way to extract images from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Instant Image Extract"
                        description="Our image extract tool finds all images in seconds. Simply paste the URL and get instant access to all images on any website."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Bulk Extract & Download"
                        description="Extract all images from a website at once and download them as a ZIP archive. Perfect for extracting entire galleries with a single click."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Extract JPG, PNG, WebP, GIF, SVG, and all other formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Original Quality"
                        description="All images are extracted in their original quality. Use Deep Scan to find high-resolution versions and ensure the best quality."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and extracted images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="Stop extracting images manually. Our image extract tool finds and saves all images in seconds instead of spending hours."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Extract Images from Websites
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract images from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the images you want to extract. Works with any website or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract All Images"
                            description="Click the scan button and our image extract tool will find all images instantly. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or extract all images as a ZIP file."
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
                        Extract images from websites for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Extract images from websites for blog posts, social media content, presentations, or marketing materials. Build visual libraries quickly."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Extract images from websites for academic research, educational materials, or study guides. Find visual data efficiently."
                    />
                    <UseCaseCard
                        title="Design Projects"
                        description="Extract images from websites for mood boards, design references, or creative inspiration. Build collections for your projects."
                    />
                    <UseCaseCard
                        title="E-commerce"
                        description="Extract product images from websites for catalogs, comparisons, or market research. Find images for competitive analysis."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Extract images from websites for backups, migrations, or testing. Find all assets from web pages quickly for development."
                    />
                    <UseCaseCard
                        title="Personal Archives"
                        description="Extract images from websites for personal archives or collections. Save images before they disappear from the web."
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Image Extract FAQ"
                description="Common questions about extracting images from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Images from Websites?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">image extract</a> tool now. No registration, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Extracting Now
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
