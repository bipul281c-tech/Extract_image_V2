"use client"

import React from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface FAQItem {
    question: string
    answer: string
}

interface LandingFAQProps {
    items: FAQItem[]
    title?: string
    description?: string
}

export function LandingFAQ({ items, title = "Frequently Asked Questions", description }: LandingFAQProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    // JSON-LD for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }

    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="group border border-border bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                            <span className="font-bold text-lg text-foreground pr-8">
                                {item.question}
                            </span>
                            <IconChevronDown
                                className={cn(
                                    "text-muted-foreground transition-transform duration-300 flex-shrink-0",
                                    openIndex === index ? "rotate-180" : ""
                                )}
                                size={24}
                            />
                        </button>
                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed font-medium">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
