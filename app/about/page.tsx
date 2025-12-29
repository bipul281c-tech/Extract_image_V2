import type { Metadata } from "next";
import {
    IconSparkles,
    IconBook,
    IconBooks,
    IconBolt,
    IconCpu,
    IconBrandOpenai,
    IconPalette,
    IconTrendingUp,
    IconBarbell,
    IconMessageCircle,
    IconBulb,
    IconRocket,
    IconDownload,
    IconPhoto,
    IconLanguage,
    IconBrandGithub,
    IconBrandInstagram,
    IconMail,
    IconWorld,
    IconExternalLink
} from "@tabler/icons-react";
import Link from "next/link";


export const metadata: Metadata = {
    title: "About Boopul | AI Creator & No-Code Explorer",
    description: "Learn about Boopul - an AI-powered creator, no-code explorer, and disciplined builder focused on AI workflows, automation, and personal development.",
    keywords: ["AI creator", "no-code", "web development", "automation", "personal development", "fitness", "discipline"],
    openGraph: {
        title: "About Boopul | AI Creator & No-Code Explorer",
        description: "Learn about Boopul - an AI-powered creator, no-code explorer, and disciplined builder focused on AI workflows, automation, and personal development.",
        type: "website",
        url: "https://extractpics.com/about",
        siteName: "ExtractPics",
        images: [
            {
                url: "https://extractpics.com/og-image-about.png",
                width: 1200,
                height: 630,
                alt: "About Boopul - AI Creator & No-Code Explorer"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Boopul | AI Creator & No-Code Explorer",
        description: "Learn about Boopul - an AI-powered creator, no-code explorer, and disciplined builder.",
        images: ["https://extractpics.com/og-image-about.png"],
    },
    alternates: {
        canonical: "https://extractpics.com/about",
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

export default function AboutPage() {
    return (
        <div className="min-h-[calc(100vh-200px)] px-4 py-12 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                        <IconSparkles size={16} />
                        <span className="font-medium">Built with passion</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Hi, I'm Boopul 👋
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        I'm an AI-powered creator, no-code explorer, and disciplined builder who believes that consistency beats talent and action beats intention.
                    </p>
                </div>

                {/* My Story Section */}
                <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <IconBook size={24} className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">My Story</h2>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">The journey that shaped who I am today</p>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                        My journey hasn't been smooth or privileged. I grew up with limited resources, struggled academically in my early years, and paid my own college fees through persistence and self-learning. Those experiences shaped how I think, work, and build today — with clarity, resilience, and focus on long-term growth.
                    </p>
                </div>

                {/* What I Do Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <IconBolt size={24} className="text-primary" />
                        What I Do
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6">
                        I enjoy working at the intersection of AI, no-code tools, design, automation, and personal development
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <WhatIDoCard
                            icon={<IconCpu size={20} />}
                            title="Apps & Tools"
                            description="Build small apps, tools, and websites using AI, no-code, and lightweight tech"
                            color="primary"
                        />
                        <WhatIDoCard
                            icon={<IconBrandOpenai size={20} />}
                            title="AI Workflows"
                            description="Experiment with AI workflows to automate ideas and simplify complex tasks"
                            color="blue"
                        />
                        <WhatIDoCard
                            icon={<IconPalette size={20} />}
                            title="Digital Assets"
                            description="Design and contribute to digital assets and creative projects"
                            color="purple"
                        />
                        <WhatIDoCard
                            icon={<IconTrendingUp size={20} />}
                            title="Self-Improvement"
                            description="Create content around discipline, fitness, self-improvement, and stoic thinking"
                            color="orange"
                        />
                        <WhatIDoCard
                            icon={<IconBarbell size={20} />}
                            title="Discipline & Fitness"
                            description="Train regularly, follow structured routines, and treat physical health as a foundation"
                            color="red"
                        />
                        <WhatIDoCard
                            icon={<IconMessageCircle size={20} />}
                            title="Communication"
                            description="Continuously improve English communication and clarity of thought"
                            color="cyan"
                        />
                    </div>
                    <p className="text-muted-foreground text-sm mt-6 italic">
                        I prefer practical execution over theory, clean systems over noise, and steady progress over shortcuts.
                    </p>
                </div>

                {/* Personal Philosophy Section */}
                <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <IconBulb size={24} className="text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">Personal Philosophy</h2>
                    </div>
                    <div className="space-y-3">
                        <p className="text-foreground/90 text-lg font-medium">Start small.</p>
                        <p className="text-foreground/90 text-lg font-medium">Stay consistent.</p>
                        <p className="text-foreground/90 text-lg font-medium">Build quietly.</p>
                        <p className="text-foreground/90 text-lg font-medium">Let results make the noise.</p>
                    </div>
                </div>



                {/* My Other Projects Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <IconRocket size={24} className="text-primary" />
                        My Other Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <ProjectCard
                            icon={<IconDownload size={24} />}
                            title="ExtractPics"
                            description="Extract and download images from any website instantly. Supports batch processing of up to 5 URLs, quick & deep scan modes, smart filtering by file type and dimensions."
                            href="https://extractpics.com/"
                            color="primary"
                        />
                        <ProjectCard
                            icon={<IconPhoto size={24} />}
                            title="ImageToURL"
                            description="Convert any image to URL instantly. Free image hosting with no signup. Upload JPG, PNG, GIF, SVG, WebP up to 10MB with global CDN delivery."
                            href="https://imagetourl.cloud/"
                            color="blue"
                        />
                        <ProjectCard
                            icon={<IconBooks size={24} />}
                            title="StoriesPDF"
                            description="Discover captivating stories for all ages. Download and enjoy beautifully crafted PDF stories anytime, anywhere. Perfect for bedtime reading and storytelling."
                            href="https://storiespdf.com/"
                            color="purple"
                        />
                        <ProjectCard
                            icon={<IconLanguage size={24} />}
                            title="TamilKathai"
                            description="Welcome to Tamil Kathai - A collection of wonderful Tamil stories. Explore rich cultural narratives and traditional tales in Tamil language."
                            href="https://tamilkathai.in/"
                            color="orange"
                        />
                    </div>
                </div>

                {/* Let's Connect Section */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20">
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <IconWorld size={24} className="text-primary" />
                        Let's Connect
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                        If you're interested in AI, no-code tools, creative technology, fitness discipline, or personal growth — welcome, you're in the right place.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <ConnectCard
                            icon={<IconBrandGithub size={20} />}
                            title="GitHub"
                            description="Projects, experiments, and code"
                            href="https://github.com/boopul22"
                            color="purple"
                        />
                        <ConnectCard
                            icon={<IconBrandInstagram size={20} />}
                            title="Personal Instagram"
                            description="Life, fitness, and everyday moments"
                            href="https://www.instagram.com/boopul"
                            color="pink"
                        />
                        <ConnectCard
                            icon={<IconBrandInstagram size={20} />}
                            title="Developer Instagram"
                            description="No-code, AI experiments, creator life"
                            href="https://www.instagram.com/no.code_boopul"
                            color="pink"
                        />
                        <ConnectCard
                            icon={<IconMail size={20} />}
                            title="Email"
                            description="blog.boopul@gmail.com"
                            href="mailto:blog.boopul@gmail.com"
                            color="blue"
                            isEmail
                        />
                        <ConnectCard
                            icon={<IconWorld size={20} />}
                            title="Portfolio"
                            description="View my complete work and projects"
                            href="https://www.bipul.online/"
                            color="primary"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>
        </div>
    );
}

function WhatIDoCard({
    icon,
    title,
    description,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'primary' | 'blue' | 'purple' | 'orange' | 'red' | 'cyan';
}) {
    const colorClasses = {
        primary: 'bg-primary/10 text-primary',
        blue: 'bg-blue-500/10 text-blue-500',
        purple: 'bg-purple-500/10 text-purple-500',
        orange: 'bg-orange-500/10 text-orange-500',
        red: 'bg-red-500/10 text-red-500',
        cyan: 'bg-cyan-500/10 text-cyan-500',
    };

    return (
        <div className="p-6 rounded-2xl bg-card border border-border">
            <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h3 className="text-foreground font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    );
}

function ProjectCard({
    icon,
    title,
    description,
    href,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    color: 'primary' | 'blue' | 'purple' | 'orange';
}) {
    const colorClasses = {
        primary: {
            icon: 'bg-primary/20 text-primary',
            button: 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20',
        },
        blue: {
            icon: 'bg-blue-500/20 text-blue-500',
            button: 'bg-blue-500/10 border-blue-500/30 text-blue-500 hover:bg-blue-500/20',
        },
        purple: {
            icon: 'bg-purple-500/20 text-purple-500',
            button: 'bg-purple-500/10 border-purple-500/30 text-purple-500 hover:bg-purple-500/20',
        },
        orange: {
            icon: 'bg-orange-500/20 text-orange-500',
            button: 'bg-orange-500/10 border-orange-500/30 text-orange-500 hover:bg-orange-500/20',
        },
    };

    return (
        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${colorClasses[color].icon} flex items-center justify-center flex-shrink-0`}>
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4 text-sm">{description}</p>
                    <Link
                        href={href}
                        target="_blank"
                        rel="dofollow"
                        className={`inline-flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors text-sm ${colorClasses[color].button}`}
                    >
                        <IconExternalLink size={16} />
                        <span>Visit {title}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ConnectCard({
    icon,
    title,
    description,
    href,
    color,
    isEmail = false
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    color: 'primary' | 'blue' | 'purple' | 'pink';
    isEmail?: boolean;
}) {
    const colorClasses = {
        primary: 'bg-primary/10 text-primary group-hover:bg-primary/20',
        blue: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20',
        purple: 'bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20',
        pink: 'bg-pink-500/10 text-pink-500 group-hover:bg-pink-500/20',
    };

    return (
        <Link
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "dofollow"}
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
        >
            <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${colorClasses[color]}`}>
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm">{description}</p>
                </div>
                {!isEmail && (
                    <IconExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                )}
            </div>
        </Link>
    );
}
