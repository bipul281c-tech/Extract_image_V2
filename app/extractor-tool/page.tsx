import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconBolt, IconCloud, IconShield, IconClock, IconDownload, IconRefresh, IconCheck, IconSparkles, IconExternalLink } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Extractor Tool - Advanced Web Image Extractor | Free Online Tool",
    description: "Use our powerful extractor tool to download images from any website instantly. Free online extractor tool for photos, graphics, and web assets. Fast, secure, and easy to use image extractor.",
    keywords: [
        "extractor tool",
        "web extractor tool",
        "image extractor tool",
        "online extractor tool",
        "extract images from website",
        "website image extractor",
        "free extractor tool",
        "bulk image extractor",
        "photo extractor",
        "asset extractor tool"
    ],
    openGraph: {
        title: "Extractor Tool - Advanced Web Image Extractor",
        description: "Download images from any website with our powerful extractor tool. Free, fast, and secure.",
        type: "website",
        url: "https://extractpics.com/extractor-tool",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-extractor-tool.png",
                width: 1200,
                height: 630,
                alt: "Extractor Tool - Advanced Web Image Extractor"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Extractor Tool - Advanced Web Image Extractor",
        description: "Download images from any website with our powerful extractor tool.",
        images: ["https://extractpics.com/og-image-extractor-tool.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/extractor-tool",
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
        question: "What is an extractor tool and how does it work?",
        answer: "An extractor tool is a specialized application that automatically identifies and downloads images from web pages. Our extractor tool analyzes the HTML structure, CSS styling, and JavaScript content of a website to locate all visual assets including photos, icons, backgrounds, and graphics, making them available for download."
    },
    {
        question: "Is this extractor tool completely free?",
        answer: "Yes, our extractor tool is 100% free to use with no hidden costs. There are no subscription fees, no credit card requirements, and no limits on the number of images you can extract. We believe in providing accessible tools for everyone."
    },
    {
        question: "How do I use the online extractor tool?",
        answer: "Using our extractor tool is straightforward: 1) Enter the website URL in the input field. 2) Choose between 'Quick Scan' for fast extraction or 'Deep Scan' for comprehensive results. 3) Browse the extracted images and select the ones you want. 4) Click 'Download' to save them as individual files or as a ZIP archive."
    },
    {
        question: "Can the extractor tool work with any website?",
        answer: "Our extractor tool is compatible with most public websites. It can extract images from standard HTML, CSS backgrounds, and dynamically loaded content. The Deep Scan feature uses advanced browser rendering to capture lazy-loaded images and JavaScript-generated content that basic extractors might miss."
    },
    {
        question: "Is my data safe when using this extractor tool?",
        answer: "Absolutely. Our extractor tool prioritizes your privacy. Image processing happens primarily in your browser, and we do not store the URLs you scan or the images you extract on our servers. Your extraction activities remain completely private."
    },
    {
        question: "What's the difference between Quick and Deep extraction modes?",
        answer: "Quick extraction scans the page's HTML source code for standard image tags, providing fast results. Deep extraction uses a headless browser to fully render the page, capturing lazy-loaded images, dynamically generated content, and complex CSS backgrounds that require JavaScript execution."
    }
];

export default function ExtractorToolPage() {
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
                            Advanced Extractor Tool
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Professional <span className="text-primary">Extractor Tool</span> for Web Images
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
                            Our advanced <strong className="text-foreground">extractor tool</strong> enables you to download all images from any website in seconds. Built for professionals who need speed, accuracy, and reliability.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>No Limits</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <IconCheck size={18} className="text-primary" />
                                <span>Privacy Protected</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Link Section */}
                <section className="bg-muted border-y border-border">
                    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                        <p className="text-foreground font-medium flex items-center justify-center gap-2">
                            Discover more powerful tools at
                            <a
                                href="https://extractpics.com/"
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
                            Why Choose Our Extractor Tool?
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<IconBolt className="w-6 h-6" />}
                            title="Lightning Fast"
                            description="Our extractor tool processes websites instantly, delivering results in seconds rather than minutes."
                        />
                        <FeatureCard
                            icon={<IconRefresh className="w-6 h-6" />}
                            title="All Formats"
                            description="Extract PNG, JPG, WebP, SVG, GIF, and more. Our tool supports every modern image format."
                        />
                        <FeatureCard
                            icon={<IconDownload className="w-6 h-6" />}
                            title="Bulk Download"
                            description="Save time by downloading all extracted images at once in a convenient ZIP file."
                        />
                        <FeatureCard
                            icon={<IconCloud className="w-6 h-6" />}
                            title="Deep Scanning"
                            description="Advanced server-side rendering captures hidden images that other extractor tools miss."
                        />
                        <FeatureCard
                            icon={<IconShield className="w-6 h-6" />}
                            title="Secure & Private"
                            description="Your data stays private. We process images in-browser and never store your information."
                        />
                        <FeatureCard
                            icon={<IconClock className="w-6 h-6" />}
                            title="Save Hours"
                            description="Automate image collection and eliminate tedious manual downloading with our extractor tool."
                        />
                    </div>
                </section>

                {/* Use Cases Section - Solid BG */}
                <section className="bg-muted py-16 sm:py-24 border-t border-border">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                Perfect for Every Professional
                            </h2>
                            <p className="text-muted-foreground text-lg italic max-w-2xl mx-auto">
                                Our extractor tool adapts to your workflow.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <UseCaseItem
                                title="Digital Marketers"
                                description="Gather competitor visuals, analyze marketing campaigns, and build comprehensive asset libraries for presentations and reports."
                            />
                            <UseCaseItem
                                title="Web Developers"
                                description="Audit website assets, check image optimization, and collect resources for development and testing purposes."
                            />
                            <UseCaseItem
                                title="Graphic Designers"
                                description="Create mood boards, gather design inspiration, and collect reference materials from your favorite websites."
                            />
                            <UseCaseItem
                                title="Researchers"
                                description="Collect visual data for academic research, market analysis, and comprehensive documentation projects."
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <LandingFAQ
                    items={faqItems}
                    title="Extractor Tool FAQ"
                    description="Everything you need to know about our web-based image extractor tool."
                />

                {/* CTA Section */}
                <section className="bg-primary py-16 sm:py-24 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Start Extracting Images Now
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Join thousands of professionals using our <strong className="text-white">extractor tool</strong> to streamline their workflow. No signup required.
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
