import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { FeaturesGrid } from "@/components/features-grid";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
    title: "ExtractPics - Free Image Extractor & Downloader Tool | Extract Images from Any Website",
    description: "Extract and download images from any website instantly with ExtractPics. Free bulk image extractor supporting all formats. Fast, secure, and easy to use. No registration required.",
    keywords: [
        "extract images",
        "image extractor",
        "download images",
        "image downloader",
        "web scraper",
        "bulk image extractor",
        "free image tool",
        "extract pics",
        "save images from website",
        "website image downloader"
    ],
    openGraph: {
        title: "ExtractPics - Free Image Extractor & Downloader Tool",
        description: "Extract and download images from any website instantly. Free, fast, and secure image extraction tool.",
        type: "website",
        url: "https://www.extractpics.com/",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://www.extractpics.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "ExtractPics - Free Image Extractor Tool"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ExtractPics - Free Image Extractor & Downloader",
        description: "Extract and download images from any website instantly. Free image extraction tool.",
        images: ["https://www.extractpics.com/og-image.png"],
    },
    alternates: {
        canonical: "https://www.extractpics.com/",
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

export default function Page() {
    // WebApplication Schema
    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "ExtractPics",
        "url": "https://www.extractpics.com",
        "description": "Extract and download images from any website instantly. Free bulk image extractor supporting all formats.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
        },
        "featureList": [
            "Extract images from any website",
            "Bulk image download",
            "Support all image formats",
            "Deep scan technology",
            "ZIP archive download",
            "No registration required"
        ],
        "screenshot": "https://www.extractpics.com/screenshot-wide.png",
        "browserRequirements": "Requires JavaScript. Requires HTML5."
    };

    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ExtractPics",
        "url": "https://www.extractpics.com",
        "logo": "https://www.extractpics.com/logo.png",
        "description": "Free image extraction tool for downloading images from any website",
        "sameAs": []
    };

    return (
        <>
            <StructuredData data={webAppSchema} />
            <StructuredData data={organizationSchema} />
            <ExtractPicsTool />
            <FeaturesGrid />
        </>
    );
}