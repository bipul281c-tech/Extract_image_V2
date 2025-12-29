import type { Metadata } from "next";
import seoImages from "@/data/seo-images.json";
import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
    title: "Infographics - Visual Guides | ExtractPics - Free Image Extraction Tips & Tricks",
    description: "Explore comprehensive visual guides and infographics about downloading images from websites, bulk extraction techniques, and image optimization. Free resources for web developers and content creators.",
    keywords: [
        "image extraction infographic",
        "download images guide",
        "bulk image downloader",
        "web scraping guide",
        "image optimization tips",
        "website image download tutorial"
    ],
    openGraph: {
        title: "Infographics - Visual Guides | ExtractPics",
        description: "Comprehensive visual guides for image extraction, bulk downloading, and website image management.",
        type: "website",
        url: "https://extractpics.com/infographics",
        siteName: "ExtractPics",
    },
    twitter: {
        card: "summary_large_image",
        title: "Infographics - Visual Guides | ExtractPics",
        description: "Visual guides for image extraction and bulk downloading techniques.",
    },
    alternates: {
        canonical: "https://extractpics.com/infographics"
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

export default function InfographicsPage() {
    // CollectionPage Schema
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Image Extraction Infographics",
        "url": "https://extractpics.com/infographics",
        "description": "Visual guides about downloading images from websites and bulk extraction techniques",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": seoImages.images.map((img, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                    "@type": "ImageObject",
                    "contentUrl": img.imageUrl,
                    "name": img.title,
                    "description": img.description,
                    "keywords": img.mainKeyword,
                    "datePublished": img.datePublished
                }
            }))
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                Visual Guides & Infographics
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg lg:text-xl">
                                Explore comprehensive visual guides about image extraction, bulk downloading techniques,
                                and best practices for managing website images.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infographics Grid Section */}
            <section className="w-full py-12 md:py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                                Browse Our Collection
                            </h2>
                            <p className="text-muted-foreground max-w-[600px] mx-auto">
                                Free downloadable infographics to help you master image extraction and management
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {seoImages.images.map((image) => (
                                <article
                                    key={image.id}
                                    itemScope
                                    itemType="https://schema.org/ImageObject"
                                    className="group bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
                                >
                                    {/* Image */}
                                    <a
                                        href={image.imageUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative aspect-[4/3] overflow-hidden bg-muted"
                                    >
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.altText}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            itemProp="contentUrl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    {/* Content */}
                                    <div className="p-5 space-y-2">
                                        {/* Keyword Badge */}
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                                {image.mainKeyword}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors" itemProp="name">
                                            {image.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground line-clamp-2" itemProp="description">
                                            {image.description}
                                        </p>

                                        {/* Date */}
                                        <time
                                            className="text-xs text-muted-foreground flex items-center gap-1"
                                            itemProp="datePublished"
                                            dateTime={image.datePublished}
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {new Date(image.datePublished).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </time>

                                        <meta itemProp="keywords" content={image.mainKeyword} />
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Empty State */}
                        {seoImages.images.length === 0 && (
                            <div className="text-center py-16">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">No infographics available</h3>
                                <p className="text-muted-foreground">Check back soon for new visual guides</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="flex flex-col items-center text-center space-y-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-12">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                            Ready to Extract Images?
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-lg">
                            Try our free image extraction tool and download images from any website in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Try ExtractPics Now
                            </a>
                            <a
                                href="/blog"
                                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
                            >
                                Read Our Blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
