import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Image to Image URL - Convert Images to URLs | Free Online Tool",
    description: "Convert images to image URLs instantly. Extract image URLs from any website, get direct links to images, and convert pictures to shareable URLs. Free online image to URL converter tool.",
    keywords: [
        "image to image url",
        "convert image to url",
        "image url converter",
        "get image url from website",
        "extract image urls",
        "image link extractor",
        "picture to url converter",
        "image url generator",
        "get image link",
        "image url finder"
    ],
    openGraph: {
        title: "Image to Image URL - Convert Images to URLs",
        description: "Convert images to image URLs instantly. Extract image URLs from any website and get direct links to images.",
        type: "website",
        url: "https://www.extractpics.com/image-to-image-url",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-image-to-image-url.png",
                width: 1200,
                height: 630,
                alt: "Image to Image URL - Convert Images to URLs"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Image to Image URL - Convert Images to URLs",
        description: "Convert images to image URLs instantly. Extract image URLs from any website.",
        images: ["https://www.extractpics.com/og-image-image-to-image-url.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/image-to-image-url",
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
        question: "How do I convert an image to an image URL?",
        answer: "Simply paste the website URL into our image to image URL tool, click scan, and all images will be extracted with their direct URLs. You can then copy individual image URLs or export all URLs as a list. Our tool works with any website and requires no registration."
    },
    {
        question: "Can I get multiple image URLs at once?",
        answer: "Yes! Our image to image URL converter supports bulk extraction. After scanning a website, you can get URLs for all images at once. You can also use batch mode to extract image URLs from multiple web pages simultaneously."
    },
    {
        question: "What types of image URLs can I extract?",
        answer: "Our tool extracts direct URLs for all image formats including JPG, PNG, WebP, GIF, SVG, and more. You can filter images by format after extraction to get URLs only for the types you need. Both absolute and relative URLs are converted to full direct links."
    },
    {
        question: "Is this image to URL converter free?",
        answer: "Yes, our image to image URL tool is completely free with no limitations. Extract as many image URLs as you need from any website without subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy."
    },
    {
        question: "How do I get high-quality image URLs?",
        answer: "Our image to image URL tool automatically extracts the original image URLs in their highest quality. Use Deep Scan mode to find high-resolution image URLs, including those loaded dynamically. Filter by minimum dimensions to get URLs only for high-quality images."
    },
    {
        question: "Is my data safe when extracting image URLs?",
        answer: "Absolutely! Our image to image URL converter runs entirely in your browser - no URLs or data are sent to our servers. All image URL extraction happens locally on your device, ensuring complete privacy and security."
    },
    {
        question: "Can I extract image URLs from password-protected pages?",
        answer: "Yes, our tool can extract image URLs from any page you can access in your browser. If you're logged into a website, the image to image URL tool will be able to extract URLs from pages that require authentication."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for image URLs?",
        answer: "Quick Scan extracts image URLs that are immediately visible in the page source, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded image URLs, lazy-loaded content, and images from modern frameworks."
    }
];

export default function ImageToImageURLPage() {
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
                            Free Image to URL Converter
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image to Image URL
                            <br />
                            Convert Images to Direct URLs
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">image to image URL</strong> converter to extract image URLs from any website instantly. Get direct links to images, convert pictures to shareable URLs in seconds. For downloading images instead of URLs, use our{" "}
                            <Link href="/image-downloader" className="text-primary hover:underline font-semibold">
                                image downloader
                            </Link>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant URLs</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>All Formats</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk Extract</span>
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
                        Why Use Our Image to Image URL Tool?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Convert images to URLs from any website with ease. Fast, secure, and completely free. Visit <Link href="https://www.extractpics.com/" className="text-primary hover:underline">ExtractPics</Link> for more tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="One-Click URL Extraction"
                        description="Extract image URLs instantly with a single click. No complicated steps, no software installation. Just paste a URL and get all image URLs with our image to image URL tool."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Conversion"
                        description="Our advanced image to image URL technology extracts URLs in seconds. Convert from single pages or batch process multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Types"
                        description="Get URLs for JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format, size, or dimensions to extract exactly the URLs you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk URL Export"
                        description="Extract multiple image URLs at once and export them as a list. Perfect for getting URLs from entire image galleries or collections with our image to image URL converter."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image URL extraction happens in your browser. No data sent to servers. Your URLs remain completely private with our secure image to image URL tool."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop inspecting elements and copying URLs one by one. Get all image URLs from a page in seconds instead of minutes with our efficient converter."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Convert Image to Image URL
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract image URLs from any website in three simple steps using our image to image URL tool.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy and paste the URL of the website containing the images. Our image to image URL converter works with any website."
                        />
                        <StepCard
                            number={2}
                            title="Scan for Images"
                            description="Click the scan button and our tool will extract all images and their URLs from the page. Use Deep Scan for dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Copy Image URLs"
                            description="Preview all extracted images with their URLs, filter by format or size, and copy individual URLs or export all URLs as a list."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Perfect Image to URL Tool for Every Need
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Extract image URLs for any purpose with our versatile image to image URL converter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation"
                        description="Get image URLs for blog posts, social media content, presentations, or marketing materials. Extract shareable links quickly with our image to image URL tool."
                    />
                    <UseCaseCard
                        title="Web Development"
                        description="Extract image URLs for website development, migrations, or testing. Get all image links from web pages quickly with our converter."
                    />
                    <UseCaseCard
                        title="SEO & Marketing"
                        description="Get image URLs for SEO analysis, competitor research, or content audits. Extract image links efficiently with our image to image URL tool."
                    />
                    <UseCaseCard
                        title="Data Collection"
                        description="Extract image URLs for datasets, research, or analysis. Get structured lists of image links from multiple sources."
                    />
                    <UseCaseCard
                        title="API Integration"
                        description="Get image URLs for API integrations, automated workflows, or data processing. Extract direct links programmatically."
                    />
                    <UseCaseCard
                        title="Documentation"
                        description="Extract image URLs for documentation, tutorials, or guides. Get shareable links to reference images with our image to image URL converter."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Convert Image to URL the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of getting image URLs are slow and tedious. Our <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">image to image URL</Link> tool automates the entire process, saving you time and effort.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract direct image URLs" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk URL extraction" />
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
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast URL extraction for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic URLs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Extract URLs from multiple pages simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">URL Export:</strong> Export all image URLs as a convenient list</span>
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
                title="Image to Image URL FAQ"
                description="Common questions about converting images to URLs"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Extract Image URLs?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start converting images to URLs now with our free <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">image to image URL</Link> tool. No registration, no downloads, completely free.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconLink size={20} />
                        Start Extracting URLs
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
