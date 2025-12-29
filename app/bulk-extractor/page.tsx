import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconBolt, IconCloud, IconShield, IconClock, IconDownload, IconRefresh, IconCheck, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
    title: "Bulk Extractor - Extract Images from Multiple Websites | Free Tool",
    description: "Powerful bulk image extractor to download images from multiple websites simultaneously. Extract, batch process, and save thousands of images with our free bulk extractor tool. Fast, secure, and easy to use.",
    keywords: [
        "bulk extractor",
        "bulk image extractor",
        "batch image download",
        "multiple website scraper",
        "bulk photo downloader",
        "mass image extractor",
        "batch image scraper",
        "bulk download images",
        "extract images bulk",
        "website image extractor bulk"
    ],
    openGraph: {
        title: "Bulk Extractor - Extract Images from Multiple Websites",
        description: "Extract and download images from multiple websites simultaneously with our powerful bulk extractor tool. Free, fast, and secure.",
        type: "website",
        url: "https://extractpics.com/bulk-extractor",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-bulk-extractor.png",
                width: 1200,
                height: 630,
                alt: "Bulk Extractor - Extract Images from Multiple Websites"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bulk Extractor - Extract Images from Multiple Websites",
        description: "Extract and download images from multiple websites simultaneously with our powerful bulk extractor tool.",
        images: ["https://extractpics.com/og-image-bulk-extractor.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/bulk-extractor",
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
        question: "What is a bulk extractor and how does it work?",
        answer: "A bulk extractor is a powerful tool that allows you to extract and download images from multiple websites simultaneously. Simply paste multiple URLs, and our tool will scan all pages concurrently, find all images, remove duplicates, and let you download everything in one click. It's perfect for researchers, designers, and content creators who need to gather images from various sources quickly."
    },
    {
        question: "How many URLs can I process with the bulk extractor at once?",
        answer: "Our bulk extractor can process multiple URLs simultaneously with intelligent queue management. While there's no strict limit, we recommend batching URLs in groups for optimal performance. The tool automatically manages concurrent requests to ensure fast processing without overwhelming your browser or the target servers."
    },
    {
        question: "Does the bulk extractor remove duplicate images automatically?",
        answer: "Yes! Our bulk extractor includes advanced deduplication technology. When extracting images from multiple websites, the tool automatically identifies and removes duplicate images based on their content, ensuring you only download unique images. This saves storage space and makes organizing your downloads much easier."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan in bulk mode?",
        answer: "Quick Scan extracts images that are immediately visible in the HTML source code of each page, making it faster for bulk operations. Deep Scan goes further by executing JavaScript and capturing dynamically loaded images, lazy-loaded content, and images loaded through frameworks. For bulk extraction, Quick Scan is recommended for speed, while Deep Scan ensures maximum image discovery."
    },
    {
        question: "Can I filter and select specific images before bulk downloading?",
        answer: "Absolutely! After the bulk extraction completes, you can filter images by format (JPG, PNG, WebP, etc.), minimum size, and source URL. You can also manually select or deselect individual images. The bulk download feature supports both single image downloads and ZIP archives for multiple selections, giving you complete control over what you download."
    },
    {
        question: "Is the bulk extractor free to use? Are there any limitations?",
        answer: "Yes, our bulk extractor is completely free to use with no hidden costs. You can extract images from as many websites as you need. The tool runs entirely in your browser, ensuring your privacy and security. There are no account requirements, no watermarks, and no download limits."
    },
    {
        question: "How does bulk extraction save time compared to manual downloading?",
        answer: "Bulk extraction can save hours of manual work. Instead of visiting each website individually, right-clicking images, and saving them one by one, our bulk extractor processes all URLs simultaneously, automatically finds all images, removes duplicates, and packages everything for download. What might take hours manually can be done in minutes with bulk extraction."
    },
    {
        question: "Is my data secure when using the bulk extractor?",
        answer: "Yes, your data is completely secure. Our bulk extractor runs entirely in your browser - no URLs or images are sent to our servers. All processing happens locally on your device, ensuring complete privacy. The extracted images are downloaded directly to your computer without any intermediate storage on our end."
    }
];

export default function BulkExtractorPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Integrated Tool - Moved to Top */}
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
                            Free Bulk Image Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Bulk Extractor
                            <br />
                            Extract Images from Multiple Websites
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">bulk image extractor</strong> to download images from multiple websites simultaneously. Process hundreds of URLs, extract thousands of images, and save everything with one click. For single-site extraction, use our{" "}
                            <Link href="/image-downloader" className="text-primary hover:underline font-semibold">
                                image downloader
                            </Link>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Batch Processing</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Auto Deduplication</span>
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
                        Why Use Our Bulk Extractor?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Built for speed, efficiency, and ease of use. Extract images from multiple websites in seconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Bulk Processing"
                        description="Process multiple URLs simultaneously with intelligent queue management. Extract images from dozens of websites in parallel for maximum speed."
                    />
                    <FeatureCard
                        icon={<IconRefresh className="w-8 h-8" />}
                        title="Automatic Deduplication"
                        description="Smart duplicate detection removes identical images across all sources, saving storage space and keeping your downloads organized."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click ZIP Download"
                        description="Download all extracted images as a single ZIP archive. Perfect for bulk operations with hundreds or thousands of images."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Deep Scan Technology"
                        description="Extract images from dynamic content, lazy-loaded elements, and JavaScript-rendered pages. No image left behind."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All processing happens in your browser. No data sent to servers. Your URLs and images remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Hours of Time"
                        description="What takes hours manually takes minutes with bulk extraction. Perfect for research, content creation, and data collection."
                    />
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            Perfect For Every Use Case
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From research to design, our bulk extractor handles it all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <UseCaseCard
                            title="Research & Data Collection"
                            description="Gather images from multiple sources for academic research, market analysis, or competitive intelligence. Extract product images, infographics, and visual data at scale. Need just the URLs? Try our <Link href='/image-link' className='text-primary hover:underline'>image link extractor</Link>."
                        />
                        <UseCaseCard
                            title="Design & Creative Work"
                            description="Build mood boards, collect design inspiration, or gather reference images from multiple websites. Perfect for designers, artists, and creative professionals."
                        />
                        <UseCaseCard
                            title="Content Creation"
                            description="Collect images for blog posts, social media content, or presentations. Extract images from multiple sources and organize them efficiently."
                        />
                        <UseCaseCard
                            title="E-commerce & Product Research"
                            description="Extract product images from competitor websites, supplier catalogs, or marketplace listings. Perfect for dropshipping and product research."
                        />
                        <UseCaseCard
                            title="Web Development & Testing"
                            description="Download all images from websites for backup, migration, or testing purposes. Extract assets from multiple pages quickly."
                        />
                        <UseCaseCard
                            title="Digital Archiving"
                            description="Preserve images from multiple websites for archival purposes. Create backups of visual content before it disappears."
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Bulk Extraction Made Simple
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Traditional methods of downloading images from multiple websites are tedious and time-consuming. Our bulk extractor automates the entire process, letting you focus on what matters. For a completely free single-site solution, check out our{" "}
                            <Link href="/image-downloader-free" className="text-primary hover:underline">
                                free image downloader
                            </Link>.
                        </p>
                        <div className="space-y-4">
                            <BenefitItem text="Process unlimited URLs simultaneously" />
                            <BenefitItem text="Extract thousands of images in minutes" />
                            <BenefitItem text="Automatic duplicate removal saves storage" />
                            <BenefitItem text="Advanced filtering by format, size, and source" />
                            <BenefitItem text="Download everything as organized ZIP files" />
                            <BenefitItem text="No installation, no registration required" />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-card border border-border p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Paste Multiple URLs</h3>
                                    <p className="text-muted-foreground text-sm">Enter all the website URLs you want to extract images from, separated by commas or new lines.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Choose Scan Mode</h3>
                                    <p className="text-muted-foreground text-sm">Select Quick Scan for speed or Deep Scan for comprehensive extraction including dynamic content.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Download in Bulk</h3>
                                    <p className="text-muted-foreground text-sm">Review, filter, and download all extracted images as individual files or a convenient ZIP archive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Bulk Extractor FAQ"
                description="Everything you need to know about bulk image extraction"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Images in Bulk?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start using our powerful bulk extractor now. No registration, no downloads, completely free.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all cursor-pointer">
                        <IconBolt size={20} />
                        Start Bulk Extraction
                    </div>
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
