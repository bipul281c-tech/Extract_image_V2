import type { Metadata } from "next";
import { ExtractPicsTool } from "@/components/extract-pics-tool";
import { FeaturesGrid } from "@/components/features-grid";
import { LandingFAQ } from "@/components/landing-faq";
import { StructuredData } from "@/components/structured-data";
import { SocialProofCounter } from "@/components/social-proof-counter";

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
        url: "https://extractpics.com/",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image.png",
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
        images: ["https://extractpics.com/og-image.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/",
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
        "url": "https://extractpics.com",
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
        "screenshot": "https://extractpics.com/screenshot-wide.png",
        "browserRequirements": "Requires JavaScript. Requires HTML5."
    };

    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ExtractPics",
        "url": "https://extractpics.com",
        "logo": "https://extractpics.com/logo.png",
        "description": "Free image extraction tool for downloading images from any website",
        "sameAs": []
    };

    // SiteNavigationElement Schema - Helps Google understand which pages to show as sitelinks
    const siteNavigationSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "SiteLinkSearchBox",
                "url": "https://extractpics.com",
                "name": "ExtractPics Image Extractor",
            },
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Image Extractor Tool",
                "description": "Extract and download images from any website",
                "url": "https://extractpics.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Bulk Image Extractor",
                "description": "Extract images from multiple websites at once",
                "url": "https://extractpics.com/bulk-extractor"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Image Downloader",
                "description": "Download images from any website",
                "url": "https://extractpics.com/image-downloader"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "About ExtractPics",
                "description": "Learn more about our free image extraction tool",
                "url": "https://extractpics.com/about"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Infographics",
                "description": "Visual guides and infographics for image extraction",
                "url": "https://extractpics.com/infographics"
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "How to Get Image URL",
                "description": "Learn how to get URLs from images",
                "url": "https://extractpics.com/how-to-get-an-image-url"
            }
        ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://extractpics.com"
            }
        ]
    };

    const faqItems = [
        {
            question: "How to extract a jpg image?",
            answer: "Visit extractpics.com and paste the website URL containing your target JPG images. The tool automatically scans the entire webpage, detecting all images including those in CSS backgrounds and dynamic content. Use the format filter to isolate JPG files specifically. Preview thumbnails display dimensions and file sizes for quick identification. Click individual download buttons or select multiple images for bulk downloading. The service requires no registration and works entirely in your browser. Extractpics.com handles complex sites with lazy-loaded images and infinite scroll, ensuring comprehensive extraction. For single images, right-click saving works, but extractpics.com excels at batch operations, saving hours of manual work when you need multiple JPGs from any public website."
        },
        {
            question: "Can I extract an image from a PDF?",
            answer: "Extractpics.com specializes in website image extraction, not PDF files. For PDF image extraction, use dedicated tools like PDFCreator Online, FreeConvert, or PDF24 Tools. Upload your PDF document to these free services, which automatically detect and extract all embedded images. The process takes seconds and delivers images in JPG or PNG format without quality loss. Unlike extractpics.com's URL-based approach, PDF extractors require file uploads. Most free tools process files up to 250MB without registration. For sensitive documents, consider offline software like Adobe Acrobat or PDF-XChange Editor. These alternatives maintain the same convenience as extractpics.com but are specifically designed for PDF content, handling complex layouts, vector graphics, and multiple image formats within documents."
        },
        {
            question: "Can I extract images from videos?",
            answer: "Extractpics.com cannot extract images from videos as it only processes website content. For video frame extraction, use specialized tools like Flixier, Miniwebtool's Video to Image Extractor, or OnlineConverter. Upload your video file and select either single frame extraction at specific timestamps or batch extraction at set intervals. These browser-based tools support MP4, AVI, MOV, and MKV formats, outputting PNG, JPG, or WebP images. The process is similar to extractpics.com's simplicity but operates on temporal rather than web data. Free services typically limit file sizes but require no installation. For professional needs, FFmpeg command-line tool offers precise control. Video extraction differs fundamentally from extractpics.com's web scraping approach, focusing on decoding video codecs rather than parsing HTML content."
        },
        {
            question: "Can Chatgpt extract data from images?",
            answer: "Yes, ChatGPT with GPT-4 vision can extract data from images through advanced OCR and visual analysis. Upload any image and request text extraction, diagram interpretation, or data summarization. The AI handles multi-column documents, handwritten notes, charts, and complex tables with high accuracy. Unlike extractpics.com which downloads images from websites, ChatGPT analyzes content within images. It can translate extracted text, interpret visual elements, and answer specific questions about image data. This works for receipts, contracts, whiteboards, and screenshots. The service processes images up to 20MB, supporting PNG, JPG, GIF, and WebP formats. While extractpics.com solves the collection problem, ChatGPT solves the comprehension problem, making them complementary tools for complete image workflows."
        },
        {
            question: "What are the three types of extraction?",
            answer: "The three primary extraction types are structured, unstructured, and web extraction. Structured extraction pulls data from databases and APIs using SQL queries or API calls, yielding organized formats like JSON or CSV. Unstructured extraction uses OCR, NLP, and text mining to parse emails, PDFs, and scanned documents where data lacks predefined schemas. Web extraction, the method used by extractpics.com, employs scraping tools to harvest images and content from websites. Extractpics.com exemplifies web extraction by parsing HTML, CSS, and JavaScript to locate image assets. Each type requires different tools: database connectors for structured, AI services for unstructured, and crawlers like extractpics.com for web content. Understanding these distinctions helps select the right approach for your specific data acquisition needs."
        },
        {
            question: "How to extract a person from a photo?",
            answer: "Extractpics.com downloads images but cannot isolate people from backgrounds. For person extraction, use AI background removal tools like Remove.bg, Adobe Express, or Canva. Upload your photo and the AI automatically detects human subjects, creating a PNG with transparent background. The process takes seconds and requires no manual selection. For batch processing, use APIs or Photoshop's Select Subject feature. Unlike extractpics.com's web-focused approach, these tools use machine learning models trained on human figures. Free tiers typically offer limited resolution; paid versions provide full-quality downloads. For precise control, combine automatic extraction with manual refinement using layer masks. This task differs fundamentally from extractpics.com's bulk downloading capability, focusing on image editing rather than content harvesting."
        },
        {
            question: "Can I convert JPG to excel for free?",
            answer: "Extractpics.com extracts images from websites but cannot convert JPG to Excel. For this task, use free OCR services like OnlineOCR, Convertio, or Google Drive. Upload your JPG image containing tables or text, select Excel (XLSX) as output format, and the tool extracts structured data. Free tiers typically limit file sizes and daily conversions. For best results, ensure your JPG has clear, high-contrast text and organized layouts. Complex tables may require manual correction after conversion. Unlike extractpics.com's direct image downloading, OCR conversion involves AI text recognition and data structuring. For sensitive data, use offline tools like Microsoft OneNote or Adobe Acrobat. These services complement extractpics.com by processing the images after you've collected them from websites."
        },
        {
            question: "How to convert a photo into JPG?",
            answer: "Extractpics.com works with JPG files but doesn't convert formats. To convert any photo to JPG, use free online converters like Convertio, CloudConvert, or FreeConvert. Upload your image (PNG, HEIC, WebP, TIFF, etc.), select JPG as output, and download the converted file. Most tools offer quality adjustment sliders to balance file size and image quality. Batch conversion saves time when processing multiple photos. Browser-based converters require no installation and work on all devices. For privacy-sensitive images, use offline software like GIMP or IrfanView. Unlike extractpics.com's web scraping function, format conversion uses image encoding algorithms to transform file structures. The process preserves visual content while changing compression methods, making JPGs universally compatible for web use, sharing, and further extraction tasks."
        },
        {
            question: "Is there a free PDF image extractor?",
            answer: "Yes, numerous free PDF image extractors exist, though extractpics.com focuses on websites, not PDFs. Tools like PDFCreator Online, FreeConvert, PDF24 Tools, and FreePDFConvert offer completely free extraction without registration. Upload your PDF file up to 250MB, and these services automatically detect all embedded images, extracting them as JPG or PNG files. The process preserves original image quality and handles multiple images simultaneously. Unlike extractpics.com's URL-based input, PDF extractors require file uploads. For offline processing, PDF-XChange Editor and Adobe Acrobat Reader provide free extraction features. These tools complement extractpics.com by covering document-based image sources. Always check privacy policies when uploading sensitive documents, though most services auto-delete files after processing, similar to extractpics.com's no-storage approach."
        },
        {
            question: "Is iLovePDF safe to use?",
            answer: "iLovePDF employs SSL encryption and automatically deletes uploaded files after processing, making it generally safe for routine documents. The service is GDPR compliant with a transparent privacy policy. However, for highly confidential files, offline alternatives like PDF24 Desktop or Adobe Acrobat provide better security. Unlike extractpics.com which only processes public website URLs, iLovePDF handles your private documents. Recent user reviews indicate reliable performance, but always verify current security status before uploading sensitive data. For image extraction specifically, iLovePDF's tool works similarly to extractpics.com's simplicity but processes PDFs instead of websites. Consider using iLovePDF's browser extension for local processing when possible. Free tier includes watermarks; paid version removes them and offers priority processing."
        },
        {
            question: "How to convert word to JPG?",
            answer: "Extractpics.com cannot convert Word documents to JPG. Use specialized converters like Convertio, CloudConvert, or Zamzar for this task. Upload your DOC or DOCX file; each page converts to a separate JPG image. Most tools allow batch processing and quality settings adjustment. The conversion preserves layouts, fonts, and images from your Word document. Free services typically limit file sizes but require no installation. Alternative workflow: save Word as PDF first, then use PDF-to-image tools. Unlike extractpics.com's web-focused extraction, Word conversion uses document rendering engines to create image snapshots of pages. For offline conversion, Microsoft Word's \"Save As\" feature can export pages as images directly. This process complements extractpics.com by preparing documents for web publishing before using extraction tools."
        }
    ];

    return (
        <>
            {/* Structured Data for SEO and Sitelinks */}
            <StructuredData data={webAppSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={siteNavigationSchema} />
            <StructuredData data={breadcrumbSchema} />

            {/* Social Proof Counter */}
            <div className="w-full flex justify-center pt-6 pb-2">
                <SocialProofCounter />
            </div>

            <ExtractPicsTool />

            {/* Main heading for SEO - Positioned after the tool */}
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Extract Images from Any Website - Free Image Extractor & Downloader
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                    Extract and download images from any website instantly. Free bulk image extractor supporting all formats. Fast, secure, and easy to use.
                </p>
            </div>

            <FeaturesGrid />
            <LandingFAQ items={faqItems} />
        </>
    );
}