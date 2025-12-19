import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconPhoto } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Link Picture - Extract & Download Images from URLs | Free Picture Link Tool",
    description: "Extract pictures from links instantly with our free link picture tool. Download images from any URL or website. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "link picture",
        "picture link",
        "extract picture from link",
        "download picture from link",
        "image from url",
        "picture url extractor",
        "link to picture converter",
        "get picture from link",
        "url to image",
        "picture link downloader"
    ],
    openGraph: {
        title: "Link Picture - Extract & Download Images from URLs",
        description: "Extract pictures from links instantly. Free tool to download images from any URL or website.",
        type: "website",
        url: "https://www.extractpics.com/link-picture",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-link-picture.png",
                width: 1200,
                height: 630,
                alt: "Link Picture - Extract & Download Images from URLs"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Link Picture - Extract & Download Images from URLs",
        description: "Extract pictures from links instantly. Free tool to download images from any URL.",
        images: ["https://www.extractpics.com/og-image-link-picture.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/link-picture",
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
        question: "How do I get a picture from a link?",
        answer: "Simply paste the URL or link into our tool and click scan. Our link picture extractor will automatically extract all pictures from the URL. You can then preview and download the images you need. Visit https://www.extractpics.com/ for more picture extraction tools."
    },
    {
        question: "Can I extract multiple pictures from one link?",
        answer: "Yes! Our tool extracts all pictures found at any link or URL. Whether it's a webpage with multiple images or a single picture link, our extractor will find and display all available pictures for download."
    },
    {
        question: "What types of picture links are supported?",
        answer: "Our link picture tool supports all types of URLs including direct image links, webpage URLs, social media links, and more. It works with JPG, PNG, WebP, GIF, SVG, and all other image formats."
    },
    {
        question: "Is it free to extract pictures from links?",
        answer: "Yes, our link picture extractor is completely free with no limitations. Extract and download as many pictures from links as you need without subscription or registration. All processing happens in your browser for maximum privacy."
    },
    {
        question: "How do I download high-quality pictures from links?",
        answer: "Our tool automatically extracts pictures in their original quality from any link. Use Deep Scan mode to find high-resolution versions and dynamically loaded images. Filter by dimensions to ensure you only download high-quality pictures."
    },
    {
        question: "Can I extract pictures from password-protected links?",
        answer: "Our tool can extract pictures from any link you can access in your browser. If you're logged into a website, the tool will be able to extract pictures from links that require authentication. All processing happens locally for complete security."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for picture links?",
        answer: "Quick Scan extracts pictures that are immediately visible at the link, making it faster for most URLs. Deep Scan executes JavaScript to capture dynamically loaded pictures, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you extract every picture from a link."
    },
    {
        question: "Is my data safe when extracting pictures from links?",
        answer: "Absolutely! Our link picture extractor runs entirely in your browser - no URLs or pictures are sent to our servers. All extraction happens locally on your device, ensuring complete privacy and security. Your links and downloaded pictures remain completely private."
    }
];

export default function LinkPicturePage() {
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
                            Free Link Picture Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Link Picture Extractor
                            <br />
                            Get Images from Any URL
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest way to <strong className="text-foreground">extract pictures from links</strong>. Paste any URL and instantly download all pictures. Perfect for saving images from websites, social media, and more.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Extraction</span>
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
                        Why Use Our Link Picture Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Extract pictures from any link with ease. Fast, secure, and completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconPhoto className="w-8 h-8" />}
                        title="One-Click Picture Extraction"
                        description="Extract pictures from any link instantly with a single click. No complicated steps, no software installation. Just paste a URL and get your pictures."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Processing"
                        description="Our advanced technology extracts pictures from links in seconds. Process single URLs or batch multiple links for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Picture Types"
                        description="Extract JPG, PNG, WebP, GIF, SVG, and all other picture formats from links. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Picture Download"
                        description="Download multiple pictures at once as a convenient ZIP archive. Perfect for extracting entire picture galleries from links."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All picture extraction happens in your browser. No data sent to servers. Your links and downloaded pictures remain completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop manually saving pictures one by one. Extract all pictures from a link in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Extract Pictures from Links
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Get pictures from any link in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Your Link"
                            description="Copy and paste the URL or link containing the pictures you want to extract. Works with any website, social media, or direct image link."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Pictures"
                            description="Click the scan button and our tool will extract all pictures from the link. Use Deep Scan for dynamically loaded pictures."
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
                        Extract pictures from links for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Social Media Content"
                        description="Extract pictures from social media links for content creation, inspiration, or archiving. Save images from Instagram, Facebook, Twitter, and more."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Extract pictures from links for academic research, educational materials, or study guides. Gather visual data and infographics efficiently."
                    />
                    <UseCaseCard
                        title="Design & Inspiration"
                        description="Extract pictures from links for mood boards, design references, or creative projects. Build collections of inspiring visuals from any URL."
                    />
                    <UseCaseCard
                        title="E-commerce & Products"
                        description="Extract product pictures from links for catalogs, comparisons, or market research. Gather product images from competitor websites."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Extract pictures from links for website backups, migrations, or testing. Download all picture assets from web pages quickly."
                    />
                    <UseCaseCard
                        title="Personal Collections"
                        description="Extract pictures from links for personal archives, wallpapers, or collections. Save pictures before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Extract Pictures from Links the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of saving pictures from links are slow and tedious. Our <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">link picture extractor</a> automates the entire process, saving you valuable time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract pictures in original quality" />
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
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction of pictures from links for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content and lazy-loaded pictures</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Extract pictures from multiple links simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter pictures by format, size, and dimensions</span>
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
                title="Link Picture Extraction FAQ"
                description="Common questions about extracting pictures from links"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Pictures from Links?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start extracting pictures from any link now. No registration, no downloads, completely free. Visit <a href="https://www.extractpics.com/" className="text-primary hover:underline font-medium">ExtractPics.com</a> for more tools.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconDownload size={20} />
                        Start Extracting Pictures
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
