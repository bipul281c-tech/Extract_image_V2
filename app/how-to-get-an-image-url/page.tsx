import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Get an Image URL - Extract Image Links Instantly | ExtractPics",
    description: "Learn how to get an image URL from any website. Free tool to extract and copy image URLs instantly. Complete guide to finding image links easily.",
    keywords: [
        "how to get an image url",
        "get image url",
        "find image url",
        "extract image url",
        "copy image url",
        "image url finder",
        "get image link",
        "find image link",
        "extract image link",
        "image url extractor"
    ],
    openGraph: {
        title: "How to Get an Image URL - Extract Image Links Instantly",
        description: "Learn how to get an image URL from any website. Free tool to extract and copy image URLs instantly.",
        type: "website",
        url: "https://www.extractpics.com/how-to-get-an-image-url",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-url.png",
                width: 1200,
                height: 630,
                alt: "How to Get an Image URL - Complete Guide"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Get an Image URL - Extract Image Links Instantly",
        description: "Learn how to get an image URL from any website. Free and easy.",
        images: ["https://www.extractpics.com/og-image-url.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/how-to-get-an-image-url",
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
        question: "What is an image URL?",
        answer: "An image URL is the direct web address (link) to an image file on the internet. It's the location where the image is hosted and typically ends with an image file extension like .jpg, .png, .webp, or .gif. This URL can be used to display, share, or download the image."
    },
    {
        question: "How do I get an image URL from a website?",
        answer: "The easiest method is to use our tool. Simply paste the website URL, click scan, and all images will be extracted with their URLs displayed. You can then copy any image URL with one click. This is much faster and easier than traditional methods like right-clicking or inspecting page source."
    },
    {
        question: "Can I get image URLs in bulk?",
        answer: "Yes! Our tool extracts all images from a website and displays their URLs. You can copy individual URLs or export all URLs as a list. This is perfect when you need to get URLs for multiple images from the same webpage."
    },
    {
        question: "Why do I need an image URL?",
        answer: "Image URLs are essential for web development (embedding images), content creation (linking to images), API integration (referencing images programmatically), documentation (including images in markdown), and sharing (sending image links without uploading files)."
    },
    {
        question: "How do I get an image URL from Google Images?",
        answer: "While you can right-click on Google Images, our tool provides a better way. Visit the source website of the image, paste the URL into our tool, and extract the original high-quality image URL directly from the source."
    },
    {
        question: "Can I get the URL of a high-resolution image?",
        answer: "Yes! Our Deep Scan mode finds high-resolution versions of images that may not be immediately visible. We often discover larger, higher-quality image URLs that you wouldn't find through manual inspection."
    },
    {
        question: "What's the difference between an image URL and downloading an image?",
        answer: "An image URL is the web address pointing to where the image is hosted online. Downloading saves the actual image file to your device. URLs are useful for linking, embedding, or referencing images, while downloads are for offline use or editing."
    },
    {
        question: "Is it safe to get image URLs?",
        answer: "Yes! Getting an image URL simply means finding the publicly available web address where the image is hosted. All processing in our tool happens locally in your browser, so no data is sent to our servers."
    }
];

export default function HowToGetImageUrlPage() {
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
                            Image URL Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            How to Get an Image URL
                            <br />
                            Complete Guide
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Master <strong className="text-foreground">how to get an image URL</strong> from any website instantly. Extract, copy, and export image URLs with our free tool. Simple, fast, and effective. Want to download images instead? Use our{" "}
                            <Link href="/image-downloader" className="text-primary hover:underline font-semibold">
                                image downloader
                            </Link>. For advanced URL extraction, try our{" "}
                            <Link href="/image-link" className="text-primary hover:underline font-semibold">
                                image link tool
                            </Link>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Extraction</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>One-Click Copy</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Export</span>
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
                        Best Ways to Get an Image URL
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professional tools and methods to extract image URLs from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Instant URL Extraction"
                        description="Get an image URL instantly by scanning any webpage. Our tool extracts all image URLs and displays them in a clean, easy-to-use interface."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="One-Click Copy"
                        description="Copy any image URL with a single click. No need to manually select and copy long URLs. Quick, efficient, and error-free URL extraction."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Bulk URL Export"
                        description="Get URLs for all images on a page at once. Export them as a formatted list for use in spreadsheets, databases, or development projects."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="High-Resolution URLs"
                        description="Discover high-resolution image URLs. Our Deep Scan finds larger, higher-quality versions of images that aren't immediately visible."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="Get image URLs securely with all processing happening locally in your browser. No data sent to servers. Your privacy is fully protected."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Stop manually inspecting page source code or right-clicking images. Get an image URL in seconds instead of minutes of searching."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Get an Image URL in 3 Simple Steps
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract image URLs from any website quickly and easily.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy the URL of the webpage containing the image you need. Paste it into our tool above. Works with any website, blog, or online platform."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click scan to extract all images and their URLs. Use Quick Scan for fast results or Deep Scan for comprehensive extraction including dynamic content."
                        />
                        <StepCard
                            number={3}
                            title="Copy Image URL"
                            description="Browse the extracted images and click to copy any URL instantly. You can also export all URLs as a list for bulk processing."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Why Get an Image URL?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Common scenarios where image URLs are essential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Web Development"
                        description="Get image URLs to embed images in websites, web applications, or HTML emails. Essential for developers who need direct image links for their projects. For downloading images instead, use our <Link href='/image-downloader' className='text-primary hover:underline'>image downloader</Link>."
                    />
                    <UseCaseCard
                        title="Content Management Systems"
                        description="Extract image URLs for CMS platforms like WordPress, Drupal, or custom systems. Organize and reference images efficiently using their URLs."
                    />
                    <UseCaseCard
                        title="API & Automation"
                        description="Get image URLs for use in API calls, webhooks, or automated workflows. Programmatically reference images in your applications and scripts."
                    />
                    <UseCaseCard
                        title="Documentation & Wikis"
                        description="Include image URLs in technical documentation, wikis, or markdown files. Reference images without storing them in your repository."
                    />
                    <UseCaseCard
                        title="Social Media & Sharing"
                        description="Get an image URL to share images via links on social media, forums, or messaging apps. Share without uploading files repeatedly."
                    />
                    <UseCaseCard
                        title="Data Collection & Analysis"
                        description="Extract image URLs for data science projects, machine learning datasets, or image analysis. Collect image references at scale."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Professional Way to Get Image URLs
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods like right-clicking or inspecting page source are slow and require technical knowledge. Our tool makes it easy to get an image URL instantly, whether you're a developer or complete beginner. For bulk URL extraction from multiple sites, check out our{" "}
                                <Link href="/bulk-extractor" className="text-primary hover:underline">
                                    bulk extractor
                                </Link>.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract URLs from any website" />
                                <BenefitItem text="Copy URLs with one click" />
                                <BenefitItem text="Find high-resolution versions" />
                                <BenefitItem text="Export bulk URL lists" />
                                <BenefitItem text="No technical knowledge required" />
                                <BenefitItem text="Completely free, unlimited use" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Advanced Features</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast URL extraction from page source</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Find URLs of dynamically loaded images</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Get URLs from multiple websites</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">URL Preview:</strong> See thumbnails with URLs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Export Options:</strong> Copy individual or bulk URLs</span>
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
                title="Image URL FAQ"
                description="Common questions about getting image URLs"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Get Image URLs?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Learn <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">how to get an image URL</a> with our free tool. Extract and copy image URLs instantly.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconLink size={20} />
                        Get Image URL Now
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
