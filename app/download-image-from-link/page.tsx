import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconLink, IconSparkles, IconPhoto } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Download Image from Link - Free Online Image Downloader | ExtractPics",
    description: "Download images from any link instantly with our free online tool. Paste any URL to extract and save images from websites. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "download image from link",
        "download image from url",
        "image downloader from link",
        "save image from link",
        "extract image from url",
        "download picture from link",
        "url image downloader",
        "link to image downloader",
        "download images from website link",
        "online image downloader from link"
    ],
    openGraph: {
        title: "Download Image from Link - Free Online Image Downloader",
        description: "Download images from any link instantly. Paste a URL and extract all images from the website. Free, fast, and secure.",
        type: "website",
        url: "https://www.extractpics.com/download-image-from-link",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image-download-image-from-link.png",
                width: 1200,
                height: 630,
                alt: "Download Image from Link - Free Online Image Downloader"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Download Image from Link - Free Online Image Downloader",
        description: "Download images from any link instantly. Paste a URL and extract all images from the website.",
        images: ["https://www.extractpics.com/og-image-download-image-from-link.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/download-image-from-link",
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
        question: "How do I download an image from a link?",
        answer: "Simply paste the website link (URL) into our tool and click the scan button. Our image downloader will automatically extract all images from that link. You can then preview the images and download them individually or all at once as a ZIP file. It's completely free and works with any website link."
    },
    {
        question: "Can I download multiple images from a single link?",
        answer: "Yes! When you paste a link into our tool, it will extract ALL images found on that webpage. You can then select which images you want to download individually, or download all of them at once as a convenient ZIP archive. This is perfect for downloading entire image galleries or collections from a single link."
    },
    {
        question: "What types of links can I use to download images?",
        answer: "Our tool works with any valid website URL or link. This includes blog posts, product pages, image galleries, social media posts (that are publicly accessible), portfolio websites, and more. Simply paste the complete URL (starting with http:// or https://) and our tool will extract all images from that link."
    },
    {
        question: "Is it free to download images from links?",
        answer: "Yes, our image downloader is 100% free to use with no limitations. You can download images from as many links as you want without any subscription, registration, or hidden fees. The tool runs entirely in your browser for maximum privacy and speed."
    },
    {
        question: "How do I download high-quality images from a link?",
        answer: "Our tool automatically extracts images in their original quality from any link. Use the Deep Scan mode to ensure you capture high-resolution versions, including images that are loaded dynamically. You can also filter images by minimum dimensions after extraction to ensure you only download high-quality, large images."
    },
    {
        question: "Can I download images from password-protected links?",
        answer: "If you can access the link in your browser (meaning you're logged in or have the necessary permissions), our tool can extract images from that page. All processing happens locally in your browser, so your authentication and session data remain secure and private."
    },
    {
        question: "What's the difference between Quick Scan and Deep Scan for link downloads?",
        answer: "Quick Scan downloads images that are immediately visible in the page source from your link, making it faster for most websites. Deep Scan executes JavaScript and captures dynamically loaded images, lazy-loaded content, and images from modern web frameworks. Use Deep Scan when you want to ensure you download every single image from the link."
    },
    {
        question: "Is my data safe when downloading images from links?",
        answer: "Absolutely! Our image downloader runs entirely in your browser - the links you paste and images you download are never sent to our servers. All image extraction and downloading happens locally on your device, ensuring complete privacy and security. Your browsing data remains completely private."
    },
    {
        question: "Can I download images from multiple links at once?",
        answer: "Yes! Our tool supports batch mode where you can paste multiple links (URLs) separated by commas or new lines. The tool will process all links simultaneously, extract images from each one, remove duplicates, and let you download everything together. This is perfect for downloading images from multiple pages or websites at once."
    },
    {
        question: "What image formats can I download from links?",
        answer: "Our tool supports all common image formats including JPG, JPEG, PNG, WebP, GIF, SVG, BMP, and more. After extracting images from your link, you can filter by format to download only the types you need. The tool preserves the original image quality and format from the source link."
    }
];

export default function DownloadImageFromLinkPage() {
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
                            Free Online Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            Download Image from Link
                            <br />
                            Extract Images from Any URL
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            The easiest way to <strong className="text-foreground">download images from any link</strong>. Simply paste a URL and extract all images instantly. Download single images or bulk download entire collections with one click.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Paste Any Link</span>
                            </div>
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
                        Why Download Images from Links with ExtractPics?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The most powerful and easiest way to download images from any website link.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Paste Any Link"
                        description="Works with any website URL. Just paste the link and our tool will automatically extract all images from that webpage. No complicated steps required."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="Lightning Fast Extraction"
                        description="Download images from links in seconds. Our advanced technology quickly scans the URL and extracts all images, saving you time and effort."
                    />
                    <FeatureCard
                        icon={<IconPhoto className="w-8 h-8" />}
                        title="All Image Types Supported"
                        description="Download JPG, PNG, WebP, GIF, SVG, and all other image formats from any link. Filter by format, size, or dimensions to get exactly what you need."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="Bulk Download from Links"
                        description="Extract and download multiple images from a single link or process multiple links at once. Download everything as a convenient ZIP archive."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private & Secure"
                        description="All image downloading happens in your browser. The links you paste and images you download are never sent to our servers. Complete privacy guaranteed."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time & Effort"
                        description="Stop right-clicking and saving images one by one. Download all images from any link in seconds instead of minutes with our automated tool."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Download Images from a Link
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Download images from any website link in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste the Link"
                            description="Copy the URL of the webpage containing the images you want to download and paste it into the input field above. Works with any website link."
                        />
                        <StepCard
                            number={2}
                            title="Scan the Link"
                            description="Click the scan button and our tool will extract all images from the link. Use Deep Scan for dynamically loaded images and comprehensive extraction."
                        />
                        <StepCard
                            number={3}
                            title="Download Images"
                            description="Preview all extracted images, filter by format or size, and download individual images or all images from the link as a ZIP file."
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
                        Download images from links for any purpose with our versatile tool.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Content Creation & Blogging"
                        description="Download images from links for blog posts, articles, social media content, or marketing materials. Quickly gather visual assets from various sources."
                    />
                    <UseCaseCard
                        title="Research & Education"
                        description="Extract images from educational links, research papers, or reference materials. Download visual data, diagrams, and infographics for academic work."
                    />
                    <UseCaseCard
                        title="Design & Creative Projects"
                        description="Download images from links to build mood boards, collect design inspiration, or gather reference materials for creative projects and presentations."
                    />
                    <UseCaseCard
                        title="E-commerce & Product Research"
                        description="Download product images from competitor links, supplier websites, or marketplace listings. Perfect for catalog creation and market research."
                    />
                    <UseCaseCard
                        title="Web Development & Testing"
                        description="Extract images from website links for backups, migrations, or testing purposes. Download all assets from web pages quickly and efficiently."
                    />
                    <UseCaseCard
                        title="Personal Collections & Archives"
                        description="Download images from links to create personal archives, save wallpapers, or build collections. Preserve images before they disappear from the web."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Download Images from Links the Smart Way
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods of downloading images from links are slow and tedious. Our image downloader automates the entire process, making it fast and effortless to extract images from any URL.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Download images in original quality from any link" />
                                <BenefitItem text="Support for all image formats and file types" />
                                <BenefitItem text="Bulk download with ZIP archives for convenience" />
                                <BenefitItem text="Advanced filtering by format, size, and dimensions" />
                                <BenefitItem text="No registration, installation, or software required" />
                                <BenefitItem text="Completely free with unlimited downloads" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Quick Scan:</strong> Fast extraction from any link for immediate results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Deep Scan:</strong> Comprehensive extraction including dynamic content from links</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Batch Mode:</strong> Download from multiple links simultaneously</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <IconCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span><strong className="text-foreground">Smart Filters:</strong> Filter images by format, size, and dimensions</span>
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

            {/* FAQ Section */}
            <LandingFAQ
                items={faqItems}
                title="Download Image from Link FAQ"
                description="Common questions about downloading images from website links"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Download Images from Links?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Start downloading images from any website link now. No registration, no software, completely free.
                    </p>
                    <a
                        href="https://www.extractpics.com/"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all"
                    >
                        <IconDownload size={20} />
                        Start Downloading from Links
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
