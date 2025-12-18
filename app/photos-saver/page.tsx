import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconPhotoScan } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Photos Saver - Save Multiple Photos from Websites | Bulk Photo Saver Tool",
    description: "Save multiple photos from any website with our free photos saver tool. Bulk save and download photos from web pages. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "photos saver",
        "save photos",
        "save multiple photos",
        "bulk photos saver",
        "save photos from website",
        "download multiple photos",
        "free photos saver",
        "batch photo saver",
        "save all photos",
        "photos saving tool"
    ],
    openGraph: {
        title: "Photos Saver - Save Multiple Photos from Websites",
        description: "Save multiple photos from any website with our free photos saver tool. Bulk save and download photos from web pages.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Photos Saver - Save Multiple Photos from Websites",
        description: "Save multiple photos from any website. Free bulk photos saver tool.",
    },
};

const faqItems = [
    {
        question: "How do I save multiple photos from a website?",
        answer: "Simply paste the website URL into our photos saver tool and click scan. Our tool will extract all photos from the page, allowing you to select and save multiple photos at once. You can save them individually or bulk save all photos as a ZIP file. Visit https://www.extractpics.com/ for more photo tools."
    },
    {
        question: "Can I save all photos from a page at once?",
        answer: "Yes! Our photos saver is designed for bulk saving. After scanning a website, you can select all photos and save them together as a ZIP archive. You can also use batch mode to save photos from multiple websites simultaneously, making it perfect for saving large photo collections."
    },
    {
        question: "What photo formats does the photos saver support?",
        answer: "Our photos saver tool supports all common photo formats including JPG, PNG, WebP, GIF, SVG, and more. You can filter photos by format after extraction to save only the types you need. The tool preserves the original photo quality and format for all saved photos."
    },
    {
        question: "Is it free to save photos from websites?",
        answer: "Yes, our photos saver is completely free to use with no limitations. You can save as many photos as you need from any website without any subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy and speed."
    },
    {
        question: "How do I save high-quality photos in bulk?",
        answer: "Our photos saver automatically extracts photos in their original quality. Use the Deep Scan mode to find high-resolution versions of photos, including those loaded dynamically. You can also filter photos by minimum dimensions to ensure you only save high-quality, large photos."
    },
    {
        question: "Can I save photos from password-protected websites?",
        answer: "Our photos saver can save photos from any page you can access in your browser. If you're logged into a website, the tool will be able to extract and save photos from pages that require authentication. All processing happens locally in your browser for complete security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for saving photos?",
        answer: "Quick Scan saves photos that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded photos, lazy-loaded content, and photos from modern frameworks. Use Deep Scan when you want to ensure you save every single photo on the page."
    },
    {
        question: "Is my data safe when using the photos saver?",
        answer: "Absolutely! Our photos saver runs entirely in your browser - no URLs or photos are sent to our servers. All photo extraction and saving happens locally on your device, ensuring complete privacy and security. Your browsing data and saved photos remain completely private. Learn more at https://www.extractpics.com/."
    }
];

export default function PhotosSaverPage() {
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
                            Free Photos Saver Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Photos Saver
                            <br />
                            Save Multiple Photos Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">photos saver</strong> to save multiple photos from any website. Extract, preview, and bulk save photos in seconds. Perfect for saving entire photo galleries and collections.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Save</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>ZIP Download</span>
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
                        Why Use Our Photos Saver?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Save multiple photos from any website with ease. Fast, secure, and completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconPhotoScan className="w-8 h-8" />}
                        title="Bulk Photos Saving"
                        description="Save multiple photos at once with our powerful photos saver. Select all photos and save them together as a ZIP archive for easy downloading."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced photos saver technology extracts all photos in seconds. Save from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Photo Types"
                        description="Save JPG, PNG, WebP, GIF, SVG, and all other photo formats. Filter by format, size, or dimensions to save exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="ZIP Archive Download"
                        description="Save multiple photos as a convenient ZIP archive. Perfect for saving entire photo galleries, portfolios, or collections from websites."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All photos saving happens in your browser. No data sent to servers. Your URLs and saved photos remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop saving photos one by one. Save all photos from a page in seconds instead of minutes with our bulk photos saver."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Save Multiple Photos
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Save photos from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the photos you want to save. Works with any website or photo gallery."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Photos"
                            description="Click the scan button and our photos saver will extract all photos from the page. Use Deep Scan for dynamically loaded photos."
                        />
                        <StepCard
                            number={3}
                            title="Bulk Save Photos"
                            description="Preview all extracted photos, filter by format or size, and save individual photos or save all photos together as a ZIP file."
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
                        Save multiple photos for any purpose with our versatile photos saver tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Photo Gallery Backup"
                        description="Save entire photo galleries from websites for backup purposes. Our photos saver makes it easy to preserve complete photo collections."
                    />
                    <UseCaseCard
                        title="Portfolio Collection"
                        description="Save multiple photos from portfolios, lookbooks, or showcases. Build your inspiration library with our bulk photos saver."
                    />
                    <UseCaseCard
                        title="Product Catalogs"
                        description="Save product photos in bulk for catalogs, comparisons, or market research. Extract all product images from e-commerce sites."
                    />
                    <UseCaseCard
                        title="Social Media Archives"
                        description="Save photos from social media profiles, feeds, or albums. Preserve memories and content before they disappear."
                    />
                    <UseCaseCard
                        title="Event Photography"
                        description="Save photos from event galleries, wedding albums, or photo sharing sites. Download entire collections with one click."
                    />
                    <UseCaseCard
                        title="Research Collections"
                        description="Save multiple photos for academic research, presentations, or educational materials. Gather visual data efficiently with our photos saver."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Save Photos in Bulk the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of saving photos are slow and tedious. Our <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">photos saver</a> automates the entire process, saving you valuable time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Save multiple photos in original quality" />
                                <BenefitItem text="Support for all photo formats" />
                                <BenefitItem text="Bulk save with ZIP archives" />
                                <BenefitItem text="Advanced filtering and sorting options" />
                                <BenefitItem text="No registration or installation required" />
                                <BenefitItem text="Completely free with no limitations" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction of all photos for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content and lazy-loaded photos</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Save photos from multiple URLs simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter photos by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Bulk ZIP Save:</strong> Package all photos for easy downloading</span>
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
                title="Photos Saver FAQ"
                description="Common questions about saving multiple photos from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Save Multiple Photos?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start saving photos in bulk from any website now. No registration, no downloads, completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Saving Photos
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
