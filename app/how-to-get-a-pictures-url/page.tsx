import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { LandingFAQ } from "@/components/landing-faq";
import { IconDownload, IconShield, IconClock, IconCheck, IconBolt, IconCloud, IconSparkles, IconLink } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "How to Get a Pictures URL - Extract Image URLs Instantly | ExtractPics",
    description: "Learn how to get a pictures URL from any website. Free tool to extract and copy image URLs instantly. Step-by-step guide to find picture URLs easily.",
    keywords: [
        "how to get a pictures url",
        "get picture url",
        "find picture url",
        "extract picture url",
        "copy picture url",
        "picture url finder",
        "get image url from website",
        "find pictures url",
        "extract pictures url",
        "picture url extractor"
    ],
    openGraph: {
        title: "How to Get a Pictures URL - Extract Image URLs Instantly",
        description: "Learn how to get a pictures URL from any website. Free tool to extract and copy image URLs instantly.",
        type: "website",
        url: "https://extractpics.com/how-to-get-a-pictures-url",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-picture-url.png",
                width: 1200,
                height: 630,
                alt: "How to Get a Pictures URL - Tutorial"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Get a Pictures URL - Extract Image URLs Instantly",
        description: "Learn how to get a pictures URL from any website. Free and easy.",
        images: ["https://extractpics.com/og-image-picture-url.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/how-to-get-a-pictures-url",
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
        question: "What is a pictures URL?",
        answer: "A pictures URL is the direct web address (link) to an image file hosted on the internet. It typically ends with an image extension like .jpg, .png, or .webp. This URL can be used to embed the picture in websites, share it, or download it directly."
    },
    {
        question: "How do I get a pictures URL from a website?",
        answer: "The easiest way is to use our tool. Simply paste the website URL, scan the page, and all pictures will be extracted with their URLs displayed. You can then copy any picture URL with a single click. This is much faster than manually inspecting page source code."
    },
    {
        question: "Can I get multiple pictures URLs at once?",
        answer: "Yes! Our tool extracts all pictures from a website and displays their URLs. You can copy individual URLs or export all URLs as a list. This is perfect when you need to get URLs for multiple pictures from the same page."
    },
    {
        question: "Why would I need a pictures URL?",
        answer: "Pictures URLs are useful for embedding images in websites, sharing images via links, using images in applications, creating image galleries, or referencing images in documents. They're essential for web development and content creation."
    },
    {
        question: "How do I get a pictures URL from social media?",
        answer: "Paste the social media page URL into our tool and use Deep Scan to extract pictures and their URLs. This works for publicly accessible content on platforms like Facebook, Instagram, and Twitter."
    },
    {
        question: "Can I get the URL of a high-resolution picture?",
        answer: "Yes! Use our Deep Scan mode to find high-resolution versions of pictures. Our tool often discovers larger, higher-quality versions of images and provides their URLs, which you might not find through manual inspection."
    },
    {
        question: "Is it safe to get pictures URLs?",
        answer: "Yes! All processing happens locally in your browser. No data is sent to our servers. Getting a pictures URL simply means finding the web address where the image is hosted, which is publicly available information."
    },
    {
        question: "What's the difference between a picture URL and downloading a picture?",
        answer: "A picture URL is just the web address of the image, while downloading saves the actual image file to your device. URLs are useful for linking or embedding, while downloads are for offline use or editing."
    }
];

export default function HowToGetPicturesUrlPage() {
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
                            Picture URL Extractor
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            How to Get a Pictures URL
                            <br />
                            Quick & Easy Guide
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Learn <strong className="text-foreground">how to get a pictures URL</strong> from any website instantly. Extract and copy image URLs with our free tool. No technical knowledge required. Powered by <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">ExtractPics</a>.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Instant URL Extraction</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Copy with One Click</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <IconCheck size={16} className="text-primary" />
                                <span>Bulk URL Export</span>
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
                        Easy Ways to Get a Pictures URL
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Multiple methods to extract and copy picture URLs from any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<IconLink className="w-8 h-8" />}
                        title="Instant URL Extraction"
                        description="Get a pictures URL instantly by scanning any webpage. Our tool extracts all image URLs and displays them in an easy-to-copy format."
                    />
                    <FeatureCard
                        icon={<IconBolt className="w-8 h-8" />}
                        title="One-Click Copy"
                        description="Copy any pictures URL with a single click. No need to manually select and copy long URLs. Quick and efficient URL extraction."
                    />
                    <FeatureCard
                        icon={<IconCloud className="w-8 h-8" />}
                        title="Bulk URL Export"
                        description="Get URLs for all pictures on a page at once. Export them as a list for easy use in spreadsheets, databases, or applications."
                    />
                    <FeatureCard
                        icon={<IconDownload className="w-8 h-8" />}
                        title="High-Res URL Discovery"
                        description="Find high-resolution versions of pictures. Our Deep Scan discovers larger image URLs that aren't immediately visible on the page."
                    />
                    <FeatureCard
                        icon={<IconShield className="w-8 h-8" />}
                        title="100% Private"
                        description="Get pictures URLs securely with all processing happening locally. No data sent to servers. Your browsing remains completely private."
                    />
                    <FeatureCard
                        icon={<IconClock className="w-8 h-8" />}
                        title="Save Time"
                        description="Stop manually inspecting page source code. Get a pictures URL in seconds instead of spending minutes searching through HTML."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                            How to Get a Pictures URL in 3 Steps
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Extract picture URLs from any website quickly and easily.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StepCard
                            number={1}
                            title="Paste Website URL"
                            description="Copy the URL of the webpage containing the picture you want. Paste it into our tool above. Works with any website or blog."
                        />
                        <StepCard
                            number={2}
                            title="Scan the Page"
                            description="Click scan to extract all pictures and their URLs. Use Deep Scan for comprehensive extraction including dynamically loaded images."
                        />
                        <StepCard
                            number={3}
                            title="Copy Picture URL"
                            description="Browse the extracted pictures and click to copy any URL. You can also export all URLs as a list for bulk use."
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                        Why Get a Pictures URL?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Common use cases for extracting picture URLs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <UseCaseCard
                        title="Web Development"
                        description="Get pictures URLs to embed images in your websites, applications, or HTML emails. Essential for developers who need direct image links."
                    />
                    <UseCaseCard
                        title="Content Management"
                        description="Extract picture URLs for CMS platforms, databases, or content migration. Organize and reference images efficiently using their URLs."
                    />
                    <UseCaseCard
                        title="Social Media Sharing"
                        description="Get a pictures URL to share images via links on social media, forums, or messaging apps. Share without uploading files."
                    />
                    <UseCaseCard
                        title="Documentation"
                        description="Include picture URLs in technical documentation, wikis, or markdown files. Reference images without storing them locally."
                    />
                    <UseCaseCard
                        title="API Integration"
                        description="Get pictures URLs for use in API calls, webhooks, or automated workflows. Programmatically reference images using their URLs."
                    />
                    <UseCaseCard
                        title="Image Galleries"
                        description="Extract URLs to create image galleries, slideshows, or portfolios. Build collections using direct image links."
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                The Easiest Way to Get Pictures URLs
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Traditional methods like inspecting page source or right-clicking are slow and technical. Our tool makes it easy to get a pictures URL instantly, even if you have no coding experience.
                            </p>
                            <div className="space-y-4">
                                <BenefitItem text="Extract URLs from any website" />
                                <BenefitItem text="Copy URLs with one click" />
                                <BenefitItem text="Find high-resolution versions" />
                                <BenefitItem text="Export bulk URL lists" />
                                <BenefitItem text="No technical knowledge needed" />
                                <BenefitItem text="Completely free, unlimited use" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-card border border-border p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">URL Extraction Features</h3>
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
                title="Pictures URL FAQ"
                description="Common questions about getting picture URLs"
            />

            {/* CTA Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                        Ready to Get Pictures URLs?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Learn <a href="https://extractpics.com/" className="text-primary hover:underline font-semibold">how to get a pictures URL</a> with our free tool. Extract and copy image URLs instantly.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 font-bold text-lg transition-all">
                        <IconLink size={20} />
                        Get Pictures URL Now
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
