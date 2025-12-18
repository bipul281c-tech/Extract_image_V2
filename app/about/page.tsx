import type { Metadata } from "next";
import { IconBrain, IconCode, IconPalette, IconRocket, IconTrendingUp, IconHeart, IconBrandGithub, IconBrandInstagram, IconMail } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "About Boopul | AI Creator & No-Code Explorer",
    description: "Learn about Boopul - an AI-powered creator, no-code explorer, and disciplined builder focused on AI workflows, automation, and personal development.",
    keywords: ["AI creator", "no-code", "web development", "automation", "personal development", "fitness", "discipline"],
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                    <div className="space-y-6 max-w-3xl">
                        <div className="inline-block">
                            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                    Hi, I'm Boopul
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                            I'm an <strong className="text-foreground">AI-powered creator</strong>, <strong className="text-foreground">no-code explorer</strong>, and <strong className="text-foreground">disciplined builder</strong> who believes that consistency beats talent and action beats intention.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            My journey hasn't been smooth or privileged. I grew up with limited resources, struggled academically in my early years, and paid my own college fees through persistence and self-learning. Those experiences shaped how I think, work, and build today — with <strong className="text-foreground">clarity, resilience, and focus on long-term growth</strong>.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I enjoy working at the intersection of <strong className="text-foreground">AI, no-code tools, design, automation, and personal development</strong>. I build things not just to ship them, but to understand systems deeply and improve myself in the process.
                        </p>
                    </div>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        What I Do
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCard
                        icon={<IconCode className="w-8 h-8" />}
                        title="Build & Ship"
                        description="Small apps, tools, and websites using AI, no-code, and lightweight tech"
                    />

                    <SkillCard
                        icon={<IconBrain className="w-8 h-8" />}
                        title="AI Workflows"
                        description="Experiment with AI workflows to automate ideas and simplify complex tasks"
                    />

                    <SkillCard
                        icon={<IconPalette className="w-8 h-8" />}
                        title="Design & Create"
                        description="Design and contribute to digital assets and creative projects"
                    />

                    <SkillCard
                        icon={<IconRocket className="w-8 h-8" />}
                        title="Content Creation"
                        description="Create content around discipline, fitness, self-improvement, and stoic thinking"
                    />

                    <SkillCard
                        icon={<IconTrendingUp className="w-8 h-8" />}
                        title="Continuous Growth"
                        description="Continuously improve English communication and clarity of thought"
                    />

                    <SkillCard
                        icon={<IconHeart className="w-8 h-8" />}
                        title="Philosophy"
                        description="Practical execution over theory, clean systems over noise, steady progress over shortcuts"
                    />
                </div>
            </section>

            {/* Discipline & Growth Section */}
            <section className="border-y border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Discipline & Growth
                        </span>
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        <p>
                            Fitness and discipline play a big role in my life. I train regularly, follow structured routines, and treat physical health as a foundation for mental clarity and consistency.
                        </p>
                        <p className="text-foreground font-medium">
                            The same mindset applies to my work — <strong>show up daily, improve incrementally, and trust the process</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        Personal Philosophy
                    </span>
                </h2>

                <blockquote className="relative border-l-4 border-primary pl-8 py-6 space-y-3">
                    <div className="absolute -left-1 top-0 w-2 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                    <p className="text-2xl sm:text-3xl font-medium text-foreground">Start small.</p>
                    <p className="text-2xl sm:text-3xl font-medium text-foreground">Stay consistent.</p>
                    <p className="text-2xl sm:text-3xl font-medium text-foreground">Build quietly.</p>
                    <p className="text-2xl sm:text-3xl font-medium text-foreground">Let results make the noise.</p>
                </blockquote>

                <p className="mt-12 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    This page connects everything I'm building, learning, and sharing. If you're interested in <strong className="text-foreground">AI, no-code tools, creative technology, fitness discipline, or personal growth</strong>, welcome — you're in the right place.
                </p>
            </section>

            {/* Links & Contact Section */}
            <section className="border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                        <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <LinkCard
                            icon={<IconBrandGithub className="w-8 h-8" />}
                            title="GitHub"
                            description="Projects, experiments, and code"
                            href="https://github.com/boopul22"
                        />

                        <LinkCard
                            icon={<IconBrandInstagram className="w-8 h-8" />}
                            title="Instagram"
                            description="No-code, AI experiments, creator life"
                            href="https://www.instagram.com/no.code_boopul"
                        />

                        <LinkCard
                            icon={<IconMail className="w-8 h-8" />}
                            title="Email"
                            description="blog.boopul@gmail.com"
                            href="mailto:blog.boopul@gmail.com"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="group relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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

function LinkCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative space-y-4">
                <div className="inline-flex p-3 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {icon}
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        {title}
                        <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">→</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed break-all">{description}</p>
                </div>
            </div>
        </a>
    );
}
