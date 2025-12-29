import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Image Extraction Tool - Extract Images from Any Website | ExtractPics",
    description: "Advanced image extraction tool to extract images from any website instantly. Extract all image formats, filter by size, and download in bulk. Free, fast, and secure image extraction.",
    keywords: [
        "image extraction",
        "extract images",
        "image extraction tool",
        "extract images from website",
        "bulk image extraction",
        "web image extraction",
        "extract pictures from website",
        "image extractor online",
        "extract photos from webpage",
        "website image extraction"
    ],
    openGraph: {
        title: "Image Extraction Tool - Extract Images from Any Website",
        description: "Advanced image extraction tool to extract images from any website instantly. Extract all formats, filter by size, and download in bulk.",
        type: "website",
        url: "https://extractpics.com/image-extraction",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-extraction.png",
                width: 1200,
                height: 630,
                alt: "Image Extraction Tool - Free Online"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Extraction Tool - Extract Images from Any Website",
        description: "Advanced image extraction tool to extract images from any website instantly. Free and secure.",
        images: ["https://extractpics.com/og-image-extraction.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/image-extraction",
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
        question: "What is image extraction?",
        answer: "Image extraction is the process of automatically identifying and extracting all images from a website or webpage. Our tool scans the HTML, CSS, and JavaScript to find every image, including those loaded dynamically, and makes them available for download in their original quality."
    },
    {
        question: "How does the image extraction tool work?",
        answer: "Our image extraction tool analyzes the webpage structure to locate all image elements. It supports Quick Scan for fast extraction from HTML source, and Deep Scan which executes JavaScript to capture dynamically loaded images, lazy-loaded content, and images from modern web frameworks."
    },
    {
        question: "What image formats can be extracted?",
        answer: "Our image extraction tool supports all web image formats including JPG, PNG, WebP, GIF, SVG, BMP, AVIF, and more. You can filter extracted images by format after extraction to download only the types you need."
    },
    {
        question: "Can I extract images from multiple websites at once?",
        answer: "Yes! Use our Batch Mode to extract images from multiple websites simultaneously. Simply enter multiple URLs and our tool will process them all, allowing you to download images from all sources in one convenient ZIP file."
    },
    {
        question: "Is image extraction legal?",
        answer: "Image extraction itself is a technical process. However, you must respect copyright laws and website terms of service when using extracted images. Only use images you have permission to use, such as royalty-free content, your own images, or properly licensed materials."
    },
    {
        question: "How do I extract high-quality images?",
        answer: "Use Deep Scan mode for comprehensive image extraction, including high-resolution versions. You can also set minimum dimension filters to extract only large, high-quality images. Our tool preserves the original image quality during extraction."
    },
    {
        question: "Can I extract images from password-protected pages?",
        answer: "Yes, if you're logged into a website, our image extraction tool can extract images from authenticated pages. All processing happens locally in your browser, so your credentials remain completely secure."
    },
    {
        question: "Is my data safe during image extraction?",
        answer: "Absolutely! All image extraction happens locally in your browser. No URLs, images, or data are sent to our servers. Your privacy is fully protected throughout the entire extraction process."
    }
];

export default function ImageExtractionPage() {
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
                            Advanced Image Extraction Technology
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image Extraction Tool
                            <br />
                            Extract Images Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Powerful <strong className="text-foreground">image extraction</strong> technology to extract all images from any website. Advanced scanning, smart filtering, and bulk download capabilities. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Quick & Deep Scan</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Extraction</span>
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
                        Advanced Image Extraction Features
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professional-grade image extraction technology for every use case.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Quick Scan Extraction"
                        description="Fast image extraction from HTML source code. Perfect for static websites and quick extraction tasks. Get results in seconds with our optimized scanning algorithm."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Deep Scan Technology"
                        description="Advanced image extraction that executes JavaScript to capture dynamically loaded images, lazy-loaded content, and images from modern web frameworks like React and Vue."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Image Extraction"
                        description="Extract and download hundreds of images at once. Our batch extraction mode processes multiple URLs simultaneously, saving you hours of manual work."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Smart Filtering"
                        description="Filter extracted images by format, dimensions, file size, and more. Extract only the images you need with our advanced filtering system."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="Secure Extraction"
                        description="All image extraction happens locally in your browser. No data sent to servers. Your URLs, images, and browsing data remain completely private and secure."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Extract hundreds of images in seconds instead of manually saving them one by one. Our image extraction tool automates the entire process efficiently."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How Image Extraction Works
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract images from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter URL"
                            description="Paste the website URL into our image extraction tool. Works with any website, blog, e-commerce site, or online gallery."
                        />
                        <StepCard
                            number={2}
                            title="Extract Images"
                            description="Click scan to start image extraction. Choose Quick Scan for fast results or Deep Scan for comprehensive extraction including dynamic content."
                        />
                        <StepCard
                            number={3}
                            title="Download"
                            description="Preview all extracted images, apply filters, and download individually or as a ZIP file. All images are extracted in original quality."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Image Extraction Use Cases
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professional image extraction for every industry and purpose.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Web Development & Design"
                        description="Extract images for website migrations, backups, or competitive analysis. Perfect for developers who need to extract assets from existing websites quickly."
                    />
                    <UseCaseCard
                        title="Content Creation"
                        description="Extract images for blog posts, social media, presentations, or marketing materials. Build visual libraries efficiently with bulk image extraction."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Extract product images for catalogs, comparisons, or market research. Analyze competitor products by extracting their image galleries."
                    />
                    <UseCaseCard
                        title="Academic Research"
                        description="Extract images for research papers, presentations, or educational materials. Gather visual data and reference images efficiently."
                    />
                    <UseCaseCard
                        title="Digital Marketing"
                        description="Extract images for ad campaigns, social media content, or competitor analysis. Build visual assets libraries for marketing projects."
                    />
                    <UseCaseCard
                        title="Data Collection"
                        description="Extract images for machine learning datasets, image analysis, or archival purposes. Automate large-scale image collection tasks."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Why Choose Our Image Extraction Tool?
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Manual image extraction is time-consuming and inefficient. Our advanced image extraction tool automates the entire process, providing professional-grade results in seconds.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract images in original quality" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Quick and Deep Scan modes" />
                                <BenefitItem text="Advanced filtering capabilities" />
                                <BenefitItem text="Batch extraction from multiple URLs" />
                                <BenefitItem text="Completely free, unlimited use" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Extraction Modes</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction from page source</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction with JavaScript execution</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Extract from multiple websites simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">ZIP Download:</strong> Package extracted images for easy download</span>
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
                title="Image Extraction FAQ"
                description="Common questions about image extraction technology"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Start Extracting Images Now
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Use our advanced <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">image extraction</a> tool to extract images from any website. No registration, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Extract Images Now
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
