import { IconBolt, IconStack, IconArchive } from "@tabler/icons-react"

export function FeaturesGrid() {
    const features = [
        {
            title: "Quick & Deep Scan",
            description: "Toggle between surface-level image grabbing or recursive scanning to find nested assets within CSS and JS files.",
            icon: <IconBolt size={20} />,
            colorClass: "bg-primary/10 text-primary border-primary/20"
        },
        {
            title: "Batch Processing",
            description: "Input up to 5 URLs simultaneously. Our queue system processes them in parallel for maximum efficiency.",
            icon: <IconStack size={20} />,
            colorClass: "bg-primary/10 text-primary border-primary/20"
        },
        {
            title: "Smart Export",
            description: "Filter results by file type (JPG, PNG, SVG) or dimensions, then download everything as a structured ZIP file.",
            icon: <IconArchive size={20} />,
            colorClass: "bg-primary/10 text-primary border-primary/20"
        }
    ]

    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="p-8 rounded-2xl border border-border/60 bg-background transition-all group">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-border/50 ${feature.colorClass}`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-foreground font-bold mb-3 text-base">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
