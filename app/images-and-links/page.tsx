import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Images and Links Extractor - Extract Pictures & URLs from Websites | ExtractPics",
    description: "Extract images and links from any website instantly. Free tool to download pictures and extract URLs from web pages. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "images and links",
        "extract images and links",
        "download images and links",
        "image link extractor",
        "extract pictures and urls",
        "website image and link extractor",
        "get images and links from website",
        "extract pics and links",
        "image url extractor",
        "link and picture extractor"
    ],
    openGraph: {
        title: "Images and Links Extractor - Extract Pictures & URLs from Websites",
        description: "Extract images and links from any website instantly. Free tool to download pictures and extract URLs from web pages.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Images and Links Extractor - Extract Pictures & URLs",
        description: "Extract images and links from any website instantly. Free tool to download pictures and extract URLs.",
    },
};

const faqItems = [
    {
        question: "How do I extract images and links from a website?",
        answer: "Simply paste the website URL into our tool and click scan. Our images and links extractor will automatically extract all pictures and URLs from the page. You can then preview, filter, and download the images while viewing all extracted links. Visit https://www.extractpics.com/ for more image extraction tools."
    },
    {
        question: "Can I extract both images and links at the same time?",
        answer: "Yes! Our tool simultaneously extracts images and links from any webpage. You'll get a complete list of all pictures available for download and all URLs found on the page. This makes it perfect for comprehensive website analysis and content extraction."
    },
    {
        question: "What types of links can be extracted?",
        answer: "Our images and links extractor captures all types of links including internal links, external links, image URLs, and resource links. You can filter and sort the extracted links based on your needs. The tool works with any website accessible through your browser."
    },
    {
        question: "Is it free to extract images and links?",
        answer: "Yes, our images and links extraction tool is completely free with no limitations. Extract as many images and links as you need from any website without subscription or registration. All processing happens in your browser for maximum privacy and speed."
    },
    {
        question: "How do I extract high-quality images and their links?",
        answer: "Use the Deep Scan mode to find high-resolution images and all associated links. The tool automatically extracts images in their original quality along with their source URLs. You can filter by image dimensions to ensure you only get high-quality pictures."
    },
    {
        question: "Can I extract images and links from multiple pages?",
        answer: "Yes! Use our batch mode to extract images and links from multiple URLs simultaneously. This is perfect for analyzing multiple pages, downloading image collections, and gathering links from various sources. Learn more at https://www.extractpics.com/."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for images and links?",
        answer: "Quick Scan extracts images and links that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript to capture dynamically loaded images and links, including lazy-loaded content and modern framework resources."
    },
    {
        question: "Is my data safe when extracting images and links?",
        answer: "Absolutely! Our images and links extractor runs entirely in your browser - no URLs, images, or links are sent to our servers. All extraction happens locally on your device, ensuring complete privacy and security for your browsing data."
    }
];

export default function ImagesAndLinksPage() {
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
                            Free Images and Links Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Extract Images and Links
                            <br />
                            From Any Website Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful tool to <strong className="text-foreground">extract images and links</strong> from any website. Download pictures, capture URLs, and analyze web content in seconds. Perfect for content creators, researchers, and developers.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Extract Images</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Capture Links</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Processing</span>
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
                        Why Use Our Images and Links Extractor?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Extract images and links from any website with ease. Fast, secure, and completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Dual Extraction"
                        description="Extract both images and links simultaneously from any webpage. Get a complete overview of all visual and navigational content in one scan."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast"
                        description="Our advanced technology extracts images and links in seconds. Process single pages or batch multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats"
                        description="Extract JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download"
                        description="Download multiple images at once as a ZIP archive. Extract and save entire image galleries with their associated links."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All extraction happens in your browser. No data sent to servers. Your URLs, images, and links remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop manually collecting images and links. Extract everything from a page in seconds instead of spending minutes or hours."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Extract Images and Links
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract images and links from any website in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the images and links you want to extract. Works with any website."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Content"
                            description="Click the scan button and our tool will extract all images and links from the page. Use Deep Scan for dynamically loaded content."
                        />
                        <StepCard
                            number={3}
                            title="Download & Export"
                            description="Preview all extracted images and links. Download individual images, bulk download as ZIP, or export the link list for analysis."
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
                        Extract images and links for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Analysis"
                        description="Extract images and links for comprehensive website analysis. Understand content structure, identify resources, and analyze linking patterns."
                    />
                    <UseCaseCard
                        title="SEO Research"
                        description="Extract images and links to analyze competitor websites. Identify backlink opportunities, image optimization strategies, and content gaps."
                    />
                    <UseCaseCard
                        title="Web Scraping"
                        description="Extract images and links for data collection projects. Gather visual assets and URL structures for research or archival purposes."
                    />
                    <UseCaseCard
                        title="Content Migration"
                        description="Extract images and links when migrating websites. Ensure all assets and links are captured before moving to a new platform."
                    />
                    <UseCaseCard
                        title="Digital Marketing"
                        description="Extract images and links for campaign research. Analyze competitor content strategies and gather inspiration for your own campaigns."
                    />
                    <UseCaseCard
                        title="Academic Research"
                        description="Extract images and links for scholarly work. Collect visual data and reference URLs for academic papers and presentations."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Extract Images and Links the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of collecting images and links are slow and tedious. Our <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">images and links extractor</a> automates the entire process, saving you valuable time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract images in original quality" />
                                <BenefitItem text="Capture all link types (internal, external, resources)" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk download with ZIP archives" />
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
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction of images and links for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content and lazy-loaded resources</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Extract from multiple URLs simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter images by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Link Analysis:</strong> View and export all extracted URLs</span>
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
                title="Images and Links Extraction FAQ"
                description="Common questions about extracting images and links from websites"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Images and Links?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start extracting images and links from any website now. No registration, no downloads, completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
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
