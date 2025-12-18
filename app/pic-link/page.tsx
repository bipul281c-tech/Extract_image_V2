import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Pic Link - Extract Picture Links from Any Website | Free Image URL Tool",
    description: "Get picture links from any website instantly with our free pic link extractor. Extract image URLs, convert pictures to links, and download image links in bulk. Fast, secure, and easy to use.",
    keywords: [
        "pic link",
        "picture link",
        "image link extractor",
        "get picture link",
        "extract image urls",
        "picture to link",
        "image url extractor",
        "pic link generator",
        "extract picture links",
        "image link tool"
    ],
    openGraph: {
        title: "Pic Link - Extract Picture Links from Any Website",
        description: "Get picture links from any website instantly. Extract image URLs and convert pictures to links with our free tool.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pic Link - Extract Picture Links from Any Website",
        description: "Get picture links from any website instantly. Extract image URLs and convert pictures to links.",
    },
};

const faqItems = [
    {
        question: "How do I get a picture link from a website?",
        answer: "Simply paste the website URL into our pic link tool, click scan, and we'll extract all picture links from the page. You can then copy individual image URLs or export all links at once. It's completely free and works with any website."
    },
    {
        question: "What is a pic link?",
        answer: "A pic link (picture link) is the direct URL address of an image file on the internet. Our tool extracts these URLs from any website, allowing you to access, share, or download images directly using their links."
    },
    {
        question: "Can I extract multiple picture links at once?",
        answer: "Yes! Our tool extracts all picture links from a webpage simultaneously. You can use batch mode to extract pic links from multiple URLs at once, making it perfect for large-scale image URL extraction projects."
    },
    {
        question: "What formats of picture links can I extract?",
        answer: "Our pic link extractor works with all image formats including JPG, PNG, WebP, GIF, SVG, and more. The tool preserves the original image URLs and formats, giving you direct access to the source files."
    },
    {
        question: "Is the pic link tool free to use?",
        answer: "Yes, our pic link extractor is completely free with no limitations. Extract as many picture links as you need from any website without registration, subscription, or hidden fees."
    },
    {
        question: "How is this different from downloading images?",
        answer: "Instead of downloading image files, our pic link tool extracts the direct URLs (links) to the images. This is useful for sharing, embedding, or referencing images without storing them locally. You can also use these links to download images later."
    },
    {
        question: "Can I use pic links for my website?",
        answer: "Yes, you can use extracted pic links to embed images in your website, share them on social media, or reference them in documents. However, always respect copyright and usage rights when using images from other websites."
    },
    {
        question: "Is my data safe when extracting picture links?",
        answer: "Absolutely! Our pic link tool runs entirely in your browser - no URLs or data are sent to our servers. All extraction happens locally on your device, ensuring complete privacy and security."
    }
];

export default function PicLinkPage() {
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
                            Free Picture Link Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Pic Link Extractor
                            <br />
                            Get Picture Links Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Extract <strong className="text-foreground">pic links</strong> from any website in seconds. Get direct image URLs, convert pictures to links, and export all image links with one click. Perfect for developers, designers, and content creators.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Extraction</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Image URLs</span>
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

                        <p className="text-sm text-muted-foreground pt-4">
                            Powered by <a href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer">ExtractPics.com</a> - Your trusted <a href="https://www.extractpics.com/" className="text-primary hover:underline">pic link</a> extraction tool
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Why Use Our Pic Link Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Extract picture links from any website with ease. Fast, secure, and completely free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Direct Image URLs"
                        description="Extract direct picture links from any website. Get clean, working image URLs that you can use anywhere - in your code, documents, or share with others."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced technology extracts all pic links in seconds. Process single pages or batch extract from multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Types"
                        description="Extract links for JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format or size to get exactly the picture links you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Export Links"
                        description="Export all picture links at once as a text file or CSV. Perfect for documentation, development, or archiving image URLs from websites."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All pic link extraction happens in your browser. No data sent to servers. Your URLs and extracted links remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop inspecting page source manually. Extract all picture links from a page in seconds instead of minutes with our automated tool."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Extract Pic Links
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Get picture links from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the pictures you want to extract links from. Works with any website."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button and our tool will extract all picture links from the page. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Copy or Export Links"
                            description="View all extracted pic links, copy individual URLs, or export all links at once. Use the links anywhere you need them."
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
                        Extract pic links for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Web Development"
                        description="Extract image URLs for website development, testing, or migration. Get all picture links from a page to reference in your code or documentation."
                    />
                    <UseCaseCard
                        title="Content Management"
                        description="Extract pic links for CMS platforms, blog posts, or content databases. Easily reference external images without downloading them."
                    />
                    <UseCaseCard
                        title="SEO & Marketing"
                        description="Extract image URLs for SEO analysis, competitor research, or marketing campaigns. Analyze image usage and optimize your content strategy."
                    />
                    <UseCaseCard
                        title="Data Collection"
                        description="Extract picture links for data scraping, research projects, or archival purposes. Build comprehensive image URL databases efficiently."
                    />
                    <UseCaseCard
                        title="Social Media"
                        description="Extract pic links to share images on social platforms, embed in posts, or create image galleries without hosting files."
                    />
                    <UseCaseCard
                        title="Documentation"
                        description="Extract image URLs for technical documentation, wikis, or knowledge bases. Reference external images with direct links."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Extract Pic Links the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of getting picture links are slow and tedious. Our <a href="https://www.extractpics.com/" className="text-primary hover:underline">pic link</a> extractor automates the entire process, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract all picture links instantly" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk export to text or CSV" />
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
                                            <span><strong className="text-foreground">Batch Mode:</strong> Extract from multiple URLs simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Export Options:</strong> Copy links or export as files</span>
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
                title="Pic Link Extraction FAQ"
                description="Common questions about extracting picture links from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Pic Links?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start extracting picture links from any website now. No registration, no downloads, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconLink size={20} />
                        Start Extracting Pic Links
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
