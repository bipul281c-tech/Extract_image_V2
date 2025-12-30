import Link from "next/link"
import { IconDownload, IconPhoto, IconLink, IconBrandFacebook, IconStack, IconBrowser, IconPhotoDown } from "@tabler/icons-react"

interface Tool {
    name: string
    description: string
    href: string
    icon: React.ReactNode
}

const allTools: Tool[] = [
    {
        name: "Image Downloader",
        description: "Download images from any website instantly",
        href: "/image-downloader",
        icon: <IconDownload className="w-5 h-5" />
    },
    {
        name: "Bulk Extractor",
        description: "Extract images from multiple URLs at once",
        href: "/bulk-extractor",
        icon: <IconStack className="w-5 h-5" />
    },
    {
        name: "Image Saver",
        description: "Save and organize images from websites",
        href: "/image-saver",
        icon: <IconPhotoDown className="w-5 h-5" />
    },
    {
        name: "Download from Link",
        description: "Download images directly from URLs",
        href: "/download-image-from-link",
        icon: <IconLink className="w-5 h-5" />
    },
    {
        name: "Facebook Downloader",
        description: "Download images from Facebook pages",
        href: "/facebook-image-downloader",
        icon: <IconBrandFacebook className="w-5 h-5" />
    },
    {
        name: "Webpage Extractor",
        description: "Extract all images from any webpage",
        href: "/webpage-image-downloader",
        icon: <IconBrowser className="w-5 h-5" />
    },
    {
        name: "Get Image URL",
        description: "Learn how to extract image URLs",
        href: "/how-to-get-an-image-url",
        icon: <IconLink className="w-5 h-5" />
    },
    {
        name: "Extraction Tool",
        description: "Powerful image extraction utility",
        href: "/extraction-tool",
        icon: <IconPhoto className="w-5 h-5" />
    },
    {
        name: "Web Picture Download",
        description: "Download pictures from websites",
        href: "/web-picture-download",
        icon: <IconPhotoDown className="w-5 h-5" />
    },
    {
        name: "Image Link Tool",
        description: "Extract and copy image links",
        href: "/image-link",
        icon: <IconLink className="w-5 h-5" />
    }
]

interface RelatedToolsProps {
    currentPath: string
    maxTools?: number
    title?: string
    description?: string
}

export function RelatedTools({
    currentPath,
    maxTools = 4,
    title = "Related Tools",
    description = "Explore more image extraction and downloading tools"
}: RelatedToolsProps) {
    // Filter out the current page and get related tools
    const relatedTools = allTools
        .filter(tool => tool.href !== currentPath)
        .slice(0, maxTools)

    if (relatedTools.length === 0) return null

    return (
        <section className="border-t border-border bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                        {title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {relatedTools.map((tool) => (
                        <Link
                            key={tool.href}
                            href={tool.href}
                            className="group flex flex-col p-5 border border-border bg-card hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {tool.icon}
                                </div>
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {tool.name}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                        View all tools on ExtractPics
                        <IconPhoto className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
