import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconBolt, IconCloud, IconShield, IconClock, IconDownload, IconRefresh, IconCheck, IconSparkles, IconExternalLink } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Extraction Tool - Premium Web Image Extractor | Free Online Tool",
    description: "Use the most powerful extraction tool to capture and download images from any website. Our free online extraction tool finds all photos, icons, and assets instantly. Simple, fast, and secure image extraction.",
    keywords: [
        "extraction tool",
        "web extraction tool",
        "image extraction tool",
        "online extraction tool",
        "extract photos from website",
        "website image scraper",
        "free extraction tool",
        "bulk image extractor",
        "photo downloader",
        "asset extractor"
    ],
    openGraph: {
        title: "Extraction Tool - Premium Web Image Extractor",
        description: "Capture and download images from any website with our premium extraction tool. Free, fast, and secure.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Extraction Tool - Premium Web Image Extractor",
        description: "Capture and download images from any website with our premium extraction tool.",
    },
};

const faqItems = [
    {
        question: "What is an extraction tool and how is it used?",
        answer: "An extraction tool is a specialized software or online service designed to identify and download specific data—in this case, images—from web pages. By analyzing the source code and rendering of a website, our extraction tool can find all hosted images, icons, and background photos, allowing you to save them efficiently."
    },
    {
        question: "Is this extraction tool free to use?",
        answer: "Yes, our extraction tool is completely free. We believe in providing accessible tools for developers, designers, and researchers. There are no hidden fees, no credit card requirements, and no daily limits on how many images you can extract."
    },
    {
        question: "How do I use the web extraction tool?",
        answer: "Using our extraction tool is simple: 1) Paste the URL of the website you want to scan. 2) Click 'Quick Scan' or 'Deep Scan'. 3) Preview the results and select the images you want to keep. 4) Click 'Download' to save them to your device as a ZIP file or individual images."
    },
    {
        question: "Can I extract images from any website?",
        answer: "Our extraction tool works with the vast majority of public websites. It can find images in standard HTML tags, CSS backgrounds, and even dynamically loaded content using our Deep Scan technology. However, some sites with extreme security or anti-scraping measures might limit extraction."
    },
    {
        question: "Is my privacy protected when using this extraction tool?",
        answer: "Absolutely. Our extraction tool processes images directly in your browser whenever possible. We do not store the images you extract or the URLs you scan on our servers, ensuring your research and data collection remain private."
    },
    {
        question: "What is the difference between Quick and Deep extraction?",
        answer: "Quick extraction scans the immediate HTML source code for image tags. Deep extraction uses a headless browser to render the page fully, capturing lazy-loaded images, JavaScript-generated content, and complex CSS backgrounds that a standard scan might miss."
    }
];

export default function ExtractionToolPage() {
    return (
        <div id="top" className="min-h-screen bg-background">
            {/* Integrated Tool - Kept at the Top as requested */}
            <section className="relative px-4">
                <ExtractPicsTool />
            </section>

            {/* Content Section - No Gradients */}
            <div className="border-t border-border mt-12">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-background">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border text-primary text-xs font-bold uppercase tracking-wider mb-8">
                            <IconSparkles size={14} />
                            Professional Extraction Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            The Ultimate <span className="text-primary">Extraction Tool</span> for Images
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                            Our advanced <strong className="text-foreground">extraction tool</strong> makes it easy to capture every visual asset from any webpage in seconds. Built for speed, precision, and privacy.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>No Registration</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>Instant Download</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>High Resolution</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Link Section */}
                <section className="bg-muted border-y border-border">
                    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                        <p className="text-foreground font-medium flex items-center justify-center gap-2">
                            Looking for more tools? Visit our main site at
                            <a
                                href="https://www.extractpics.com/"
                                className="text-primary hover:underline flex items-center gap-1 font-bold"
                            >
                                ExtractPics.com <IconExternalLink size={16} />
                            </a>
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Powerful Features for Seamless Extraction
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<IconBolt className="w-6 h-6" />}
                            title="Instant Discovery"
                            description="Our extraction tool identifies all images on a page the moment you click scan. No waiting required."
                        />
                        <FeatureCard
                            icon={<IconRefresh className="w-6 h-6" />}
                            title="Format Support"
                            description="Extract PNG, JPG, WebP, SVG, and GIF files effortlessly. We support all modern web formats."
                        />
                        <FeatureCard
                            icon={<IconDownload className="w-6 h-6" />}
                            title="Batch Downloading"
                            description="Don't save images one by one. Use our tool to grab everything in a single organized ZIP archive."
                        />
                        <FeatureCard
                            icon={<IconCloud className="w-6 h-6" />}
                            title="Remote Scanning"
                            description="Access the power of our server-side extraction for difficult, JS-heavy sites using Deep Scan."
                        />
                        <FeatureCard
                            icon={<IconShield className="w-6 h-6" />}
                            title="Privacy First"
                            description="Your scans are processed in-browser. We never see your data or the images you choose to download."
                        />
                        <FeatureCard
                            icon={<IconClock className="w-6 h-6" />}
                            title="Time Saver"
                            description="Replace hours of manual right-clicking with a single tool that automates image gathering."
                        />
                    </div>
                </section>

                {/* Use Cases Section - Solid BG */}
                <section className="bg-muted py-16 sm:py-24 border-t border-border">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                Who Benefits from our Extraction Tool?
                            </h2>
                            <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
                                Versatile enough for any professional workflow.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <UseCaseItem
                                title="Content Creators"
                                description="Quickly gather visual references and assets for blog posts, videos, and social media campaigns."
                            />
                            <UseCaseItem
                                title="Web Developers"
                                description="Audit images on your sites, check for broken assets, or gather placeholders during development."
                            />
                            <UseCaseItem
                                title="Designers"
                                description="Build high-quality mood boards and inspiration libraries by extracting visuals from your favorite sites."
                            />
                            <UseCaseItem
                                title="Research Analysts"
                                description="Gather visual data for market research, competitor analysis, and scholarly reports at scale."
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <LandingFAQ
                    items={faqItems}
                    title="Extraction Tool FAQ"
                    description="Common questions about our web-based image extraction technology."
                />

                {/* CTA Section */}
                <section className="bg-primary py-16 sm:py-24 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Start Your First Scan?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Experience the speed and efficiency of our premium <strong className="text-white">extraction tool</strong> today. No strings attached.
                        </p>
                        <a
                            href="#top"
                            className="bg-white text-primary hover:bg-white/90 px-8 py-4 font-bold text-lg inline-flex items-center gap-2 transition-transform active:scale-95 no-underline"
                        >
                            <IconBolt size={20} />
                            Get Started Now
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="border border-border bg-card p-8 flex flex-col items-start gap-4 transition-colors hover:border-primary">
            <div className="p-3 bg-primary/10 text-primary border border-primary/20">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}

function UseCaseItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-card border-l-4 border-primary p-6 shadow-none">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
        </div>
    );
}
