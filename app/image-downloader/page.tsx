import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconPhoto } from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Image Downloader - Free Online Tool to Download Images from Any Website",
    description: "Download images from any website with our free image downloader tool. Extract and save images in bulk, support all formats (JPG, PNG, WebP, GIF). Fast, secure, and easy to use. No registration required.",
    keywords: [
        "image downloader",
        "download images from website",
        "free image downloader",
        "bulk image downloader",
        "website image extractor",
        "save images from web",
        "download pictures online",
        "image saver tool",
        "extract images from url",
        "batch image downloader"
    ],
    openGraph: {
        title: "Image Downloader - Free Online Tool to Download Images",
        description: "Download images from any website instantly. Extract and save images in bulk with our free image downloader tool.",
        type: "website",
        url: "https://www.extractpics.com/image-downloader",
    },
    twitter: {
        card: "summary_large_image",
        title: "Image Downloader - Free Online Tool",
        description: "Download images from any website instantly. Extract and save images in bulk with our free tool.",
    },
    alternates: {
        canonical: "https://www.extractpics.com/image-downloader",
    },
};

const faqItems = [
    {
        question: "What is an image downloader?",
        answer: "An image downloader is a tool that allows you to extract and download images from any website. Our image downloader scans web pages, finds all images, and lets you download them individually or in bulk as a ZIP file. It's perfect for saving images from websites quickly without manually right-clicking each one."
    },
    {
        question: "How do I use this image downloader?",
        answer: "Using our image downloader is simple: 1) Paste the website URL into the input field, 2) Click the scan button to extract all images, 3) Preview the extracted images and filter by format or size if needed, 4) Download individual images or all images as a ZIP archive. The entire process takes just seconds."
    },
    {
        question: "Can I download images in bulk?",
        answer: "Yes! Our image downloader supports bulk downloading. After scanning a website, you can select multiple images and download them all at once as a convenient ZIP file. You can also use batch mode to process multiple URLs simultaneously, making it the perfect bulk image downloader for large projects."
    },
    {
        question: "What image formats does this downloader support?",
        answer: "Our image downloader supports all common image formats including JPG, JPEG, PNG, WebP, GIF, SVG, BMP, and more. You can filter images by format after extraction to download only specific types. The tool preserves the original image quality and format."
    },
    {
        question: "Is this image downloader free?",
        answer: "Yes, our image downloader is completely free to use with no limitations. You can download as many images as you need from any website without any subscription, registration, or hidden fees. There are no daily limits or restrictions on the number of images you can download."
    },
    {
        question: "Do I need to install software to download images?",
        answer: "No installation required! Our image downloader is a web-based tool that runs entirely in your browser. Simply visit our website, paste a URL, and start downloading images immediately. No software downloads, no browser extensions, no registration needed."
    },
    {
        question: "Can I download high-resolution images?",
        answer: "Absolutely! Our image downloader extracts images in their original quality and resolution. Use the Deep Scan mode to find high-resolution versions of images, including those loaded dynamically. You can also filter images by minimum dimensions to ensure you only download high-quality, large images."
    },
    {
        question: "Is it safe to use this image downloader?",
        answer: "Yes, our image downloader is completely safe and secure. All image extraction and downloading happens locally in your browser - no URLs or images are sent to our servers. Your browsing data and downloaded images remain completely private. We don't store, track, or share any of your data."
    },
    {
        question: "Can I download images from social media?",
        answer: "Yes, our image downloader works with most websites including social media platforms. You can download images from publicly accessible pages. For pages that require login, make sure you're logged in to your account, and the tool will be able to extract images from those pages as well."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan?",
        answer: "Quick Scan is faster and downloads images that are immediately visible in the page source. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern frameworks. Use Deep Scan when you want to ensure you download every single image on the page, including hidden or dynamically loaded ones."
    }
];

export default function ImageDownloaderPage() {
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
                            Free Image Downloader Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Image Downloader
                            <br />
                            Download Images from Any Website
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The most powerful <strong className="text-foreground">image downloader</strong> to extract and save images from any website. Download single images or bulk download entire collections instantly. Visit{" "}
                            <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">
                                ExtractPics.com
                            </Link>{" "}
                            for the best image extraction experience.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant Download</span>
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
                        Why Choose Our Image Downloader?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The fastest and most reliable way to download images from websites. Trusted by thousands of users worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="One-Click Image Download"
                        description="Download images instantly with a single click. Our image downloader makes it effortless to save images from any website without complicated steps or software installation."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Our advanced image downloader technology extracts images in seconds. Process single pages or batch download from multiple URLs for maximum efficiency."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="All Image Formats Supported"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other image formats. Filter by format, size, or dimensions to get exactly what you need from any website."
                    />
                    <FeatureCard
                        icon={<IconPhoto className="w-8 h-8" />}
                        title="Bulk Image Downloader"
                        description="Download multiple images at once as a convenient ZIP archive. Perfect for downloading entire image galleries, portfolios, or product catalogs in one go."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image downloading happens in your browser. No data sent to servers. Your URLs and downloaded images remain completely private with our secure image downloader."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving images one by one. Our image downloader lets you download all images from a page in seconds instead of minutes."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Use Our Image Downloader
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any website in three simple steps with our powerful image downloader.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Enter Website URL"
                            description="Copy and paste the URL of the website containing the images you want to download. Our image downloader works with any website or web page."
                        />
                        <StepCard
                            number={2}
                            title="Scan & Extract Images"
                            description="Click the scan button and our image downloader will extract all images from the page. Use Deep Scan for dynamically loaded images and hidden content."
                        />
                        <StepCard
                            number={3}
                            title="Download Your Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or all images as a ZIP file with our bulk image downloader."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Perfect Image Downloader for Every Need
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you're a designer, marketer, researcher, or content creator, our image downloader has you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation & Marketing"
                        description="Download images for blog posts, social media content, presentations, or marketing materials. Get high-quality images quickly with our image downloader."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Download images for academic research, educational materials, or study guides. Extract visual data and infographics efficiently for your projects."
                    />
                    <UseCaseCard
                        title="Design & Creative Work"
                        description="Download images for mood boards, design references, or creative projects. Build collections of inspiring visuals with our bulk image downloader."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Download product images for catalogs, comparisons, or market research. Extract images from competitor websites for analysis and inspiration."
                    />
                    <UseCaseCard
                        title="Web Development & Testing"
                        description="Download images for website backups, migrations, or testing. Extract all assets from web pages quickly with our developer-friendly image downloader."
                    />
                    <UseCaseCard
                        title="Personal Collections & Archives"
                        description="Download images for personal archives, wallpapers, or collections. Save images before they disappear from the web with our reliable image downloader."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Ultimate Image Downloader
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading images are slow and tedious. Our image downloader automates the entire process, making it the fastest way to save images from any website. Experience the power of{" "}
                                <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">
                                    ExtractPics.com
                                </Link>
                                .
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download images in original quality" />
                                <BenefitItem text="Support for all image formats" />
                                <BenefitItem text="Bulk download with ZIP archives" />
                                <BenefitItem text="Advanced filtering options" />
                                <BenefitItem text="No registration or installation" />
                                <BenefitItem text="Completely free, no limitations" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Image Downloader Features</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast image extraction for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple URLs simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter by format, size, and dimensions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">ZIP Download:</strong> Package multiple images for easy download</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">About Our Image Downloader</h2>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            Our <strong className="text-foreground">image downloader</strong> is the most efficient tool for extracting and downloading images from any website. Whether you need to download a single image or perform bulk image downloads from multiple pages, our tool makes the process simple, fast, and secure.
                        </p>

                        <p>
                            As a professional <strong className="text-foreground">image downloader</strong>, we support all major image formats including JPG, PNG, WebP, GIF, and SVG. Our advanced scanning technology can detect images in the page source as well as dynamically loaded content, ensuring you never miss an image you want to download.
                        </p>

                        <p>
                            Visit{" "}
                            <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">
                                ExtractPics.com
                            </Link>{" "}
                            for the most reliable <strong className="text-foreground">image downloader</strong> experience. Our platform is trusted by designers, marketers, researchers, and content creators worldwide for its speed, reliability, and ease of use.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Use an Image Downloader?</h3>

                        <p>
                            An <strong className="text-foreground">image downloader</strong> saves you countless hours of manual work. Instead of right-clicking and saving images one by one, our bulk image downloader lets you extract and download all images from a website in seconds. This is especially useful for:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Downloading product images for e-commerce research</li>
                            <li>Extracting images for design inspiration and mood boards</li>
                            <li>Saving images for academic research and presentations</li>
                            <li>Backing up website images before redesigns</li>
                            <li>Creating image archives and collections</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Best Image Downloader Features</h3>

                        <p>
                            Our <strong className="text-foreground">image downloader</strong> stands out from other tools with its comprehensive feature set. The Quick Scan mode provides instant results for most websites, while the Deep Scan mode ensures you capture every image, including those loaded via JavaScript or lazy loading. The batch processing feature makes our tool the perfect <strong className="text-foreground">bulk image downloader</strong> for large projects.
                        </p>

                        <p>
                            Security and privacy are paramount. Unlike other image downloaders that send your data to remote servers, our tool processes everything locally in your browser. This means your URLs, browsing data, and downloaded images remain completely private and secure.
                        </p>

                        <p>
                            Start using the best <strong className="text-foreground">image downloader</strong> today at{" "}
                            <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">
                                ExtractPics.com
                            </Link>
                            . No registration, no installation, completely free forever.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Image Downloader FAQ"
                description="Common questions about our image downloader tool"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Start Using Our Image Downloader Now
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Download images from any website instantly with the most powerful image downloader available. Visit{" "}
                        <Link href="https://www.extractpics.com/" className="text-primary hover:underline font-semibold">
                            ExtractPics.com
                        </Link>{" "}
                        for the best experience.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all"
                    >
                        <IconDownload size={20} />
                        Start Downloading Images Free
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
