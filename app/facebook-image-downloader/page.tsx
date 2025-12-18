import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconBolt, IconCloud, IconShield, IconClock, IconDownload, IconRefresh, IconCheck, IconSparkles, IconExternalLink, IconBrandFacebook } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Facebook Image Downloader - Download Facebook Photos & Images Free | ExtractPics",
    description: "Free Facebook image downloader to download photos and images from Facebook posts, profiles, and pages. Fast, secure, and easy-to-use Facebook photo downloader. No login required.",
    keywords: [
        "facebook image downloader",
        "download facebook images",
        "facebook photo downloader",
        "save facebook pictures",
        "facebook image extractor",
        "download facebook photos",
        "facebook picture downloader",
        "free facebook image downloader",
        "facebook image saver",
        "extract facebook images"
    ],
    openGraph: {
        title: "Facebook Image Downloader - Download Facebook Photos Free",
        description: "Download images and photos from Facebook instantly. Free Facebook image downloader tool with no login required.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Facebook Image Downloader - Download Facebook Photos Free",
        description: "Download images and photos from Facebook instantly with our free tool.",
    },
};

const faqItems = [
    {
        question: "How does the Facebook image downloader work?",
        answer: "Our Facebook image downloader extracts images from Facebook posts, profiles, and pages by analyzing the page URL you provide. Simply paste the Facebook URL, choose your scan mode (Quick or Deep), and the tool will identify all available images for download. The Deep Scan mode uses advanced rendering to capture all images, including those loaded dynamically."
    },
    {
        question: "Is this Facebook image downloader free to use?",
        answer: "Yes, our Facebook image downloader is completely free with no hidden costs, subscriptions, or credit card requirements. You can download unlimited Facebook images without any restrictions or fees."
    },
    {
        question: "Do I need to log in to Facebook to download images?",
        answer: "No login is required to use our Facebook image downloader. However, the tool can only access publicly available Facebook content. Private posts, photos in closed groups, or content restricted by privacy settings cannot be downloaded."
    },
    {
        question: "Can I download multiple Facebook images at once?",
        answer: "Yes! Our Facebook image downloader supports bulk downloading. After scanning a Facebook page, you can select multiple images and download them all at once as a convenient ZIP file, saving you time and effort."
    },
    {
        question: "Is it legal to download images from Facebook?",
        answer: "You should only download Facebook images that you have permission to use or that are publicly available. Always respect copyright laws and Facebook's terms of service. Our Facebook image downloader is intended for personal use, research, or downloading your own content."
    },
    {
        question: "What image formats does the Facebook image downloader support?",
        answer: "Our Facebook image downloader supports all common image formats found on Facebook, including JPG, PNG, WebP, and GIF. The tool preserves the original image quality and format when downloading."
    },
    {
        question: "Is my privacy protected when using this Facebook image downloader?",
        answer: "Absolutely. Your privacy is our priority. The Facebook image downloader processes URLs in your browser, and we do not store the URLs you scan or the images you download on our servers. Your activity remains completely private."
    }
];

export default function FacebookImageDownloaderPage() {
    return (
        <div id="top" className="min-h-screen bg-background">
            {/* Integrated Tool - Kept at the Top */}
            <section className="relative px-4">
                <ExtractPicsTool />
            </section>

            {/* Content Section - Blended UI */}
            <div className="mt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                            <IconBrandFacebook size={14} />
                            Facebook Image Downloader
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Download <span className="text-primary">Facebook Images</span> Instantly
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                            The most powerful <strong className="text-foreground">Facebook image downloader</strong> to save photos and images from Facebook posts, profiles, and pages. Fast, free, and secure with no login required.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>No Login Required</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>Bulk Download</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>Original Quality</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Link Section */}
                <section className="bg-muted/30">
                    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                        <p className="text-foreground font-medium flex items-center justify-center gap-2">
                            Powered by
                            <a
                                href="https://www.extractpics.com/"
                                className="text-primary hover:underline flex items-center gap-1 font-bold"
                                rel="noopener noreferrer"
                            >
                                ExtractPics.com <IconExternalLink size={16} />
                            </a>
                            - Your trusted image extraction platform
                        </p>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How to Use Our Facebook Image Downloader
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <StepCard
                            number="1"
                            title="Paste Facebook URL"
                            description="Copy the URL of any Facebook post, profile, or page containing the images you want to download."
                        />
                        <StepCard
                            number="2"
                            title="Scan for Images"
                            description="Choose Quick Scan for fast results or Deep Scan to capture all images, including dynamically loaded content."
                        />
                        <StepCard
                            number="3"
                            title="Download Images"
                            description="Select the Facebook images you want and download them individually or all at once as a ZIP file."
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-muted/20 py-16 sm:py-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                Why Choose Our Facebook Image Downloader?
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                The most advanced <strong className="text-foreground">Facebook image downloader</strong> with powerful features.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<IconBolt className="w-6 h-6" />}
                                title="Lightning Fast"
                                description="Download Facebook images in seconds with our optimized Facebook image downloader technology."
                            />
                            <FeatureCard
                                icon={<IconDownload className="w-6 h-6" />}
                                title="Bulk Download"
                                description="Save multiple Facebook images at once with our convenient ZIP download feature."
                            />
                            <FeatureCard
                                icon={<IconCloud className="w-6 h-6" />}
                                title="Deep Scanning"
                                description="Advanced rendering captures all Facebook images, including lazy-loaded and dynamic content."
                            />
                            <FeatureCard
                                icon={<IconShield className="w-6 h-6" />}
                                title="100% Secure"
                                description="Your privacy is protected. We don't store your Facebook URLs or downloaded images."
                            />
                            <FeatureCard
                                icon={<IconRefresh className="w-6 h-6" />}
                                title="All Formats"
                                description="Supports JPG, PNG, WebP, GIF, and all image formats used on Facebook."
                            />
                            <FeatureCard
                                icon={<IconClock className="w-6 h-6" />}
                                title="No Login Required"
                                description="Download Facebook images instantly without logging in or creating an account."
                            />
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Perfect for Every Facebook User
                        </h2>
                        <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
                            Our Facebook image downloader serves diverse needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <UseCaseItem
                            title="Social Media Managers"
                            description="Download Facebook images for content analysis, competitor research, and campaign planning. Save time with bulk downloads."
                        />
                        <UseCaseItem
                            title="Content Creators"
                            description="Collect inspiration, save reference images, and build mood boards from Facebook content for your creative projects."
                        />
                        <UseCaseItem
                            title="Marketers & Advertisers"
                            description="Analyze Facebook ad creatives, study competitor campaigns, and gather visual assets for market research."
                        />
                        <UseCaseItem
                            title="Personal Use"
                            description="Save your own Facebook photos, download images from events, and preserve memories from Facebook posts."
                        />
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="bg-muted/10 py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            About Our Facebook Image Downloader
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Our <strong className="text-foreground">Facebook image downloader</strong> is a professional-grade tool designed to help you download images from Facebook quickly and securely. Whether you need to save photos from Facebook posts, download images from Facebook pages, or extract pictures from Facebook profiles, our tool makes it effortless.
                            </p>
                            <p>
                                Unlike other Facebook image downloaders, our tool offers both Quick Scan and Deep Scan modes. The Quick Scan mode provides instant results for standard Facebook images, while the Deep Scan mode uses advanced browser rendering to capture all images, including those loaded dynamically through JavaScript. This makes our <strong className="text-foreground">Facebook image downloader</strong> the most comprehensive solution available.
                            </p>
                            <p>
                                We understand the importance of privacy and security when downloading Facebook images. That's why our <strong className="text-foreground">Facebook image downloader</strong> processes everything in your browser without storing your data on our servers. Your Facebook URLs and downloaded images remain completely private.
                            </p>
                            <p>
                                For more powerful image extraction tools and features, visit{" "}
                                <a
                                    href="https://www.extractpics.com/"
                                    className="text-primary hover:underline font-semibold"
                                    rel="noopener noreferrer"
                                >
                                    ExtractPics.com
                                </a>
                                {" "}where you'll find additional tools for downloading images from various platforms and websites.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <LandingFAQ
                    items={faqItems}
                    title="Facebook Image Downloader FAQ"
                    description="Common questions about downloading images from Facebook."
                />

                {/* CTA Section */}
                <section className="bg-primary py-16 sm:py-24 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Start Downloading Facebook Images Now
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of users who trust our <strong className="text-white">Facebook image downloader</strong> for fast, secure, and reliable downloads. No signup required.
                        </p>
                        <a
                            href="#top"
                            className="bg-white text-primary hover:bg-white/90 px-8 py-4 font-bold text-lg inline-flex items-center gap-2 transition-transform active:scale-95 no-underline"
                        >
                            <IconBolt size={20} />
                            Try It Free Now
                        </a>
                    </div>
                </section>

                {/* Footer Backlink Section */}
                <section className="bg-background/50 py-8">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <p className="text-muted-foreground text-sm">
                            Looking for more image extraction tools?{" "}
                            <a
                                href="https://www.extractpics.com/"
                                className="text-primary hover:underline font-semibold"
                                rel="noopener noreferrer"
                            >
                                Visit ExtractPics.com
                            </a>
                            {" "}for comprehensive image downloading solutions.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-primary/90 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {number}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-card/50 backdrop-blur-sm p-8 flex flex-col items-start gap-4 transition-all hover:bg-card/80">
            <div className="p-3 bg-primary/10 text-primary">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}

function UseCaseItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-card/30 border-l-2 border-primary/60 p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
    );
}
