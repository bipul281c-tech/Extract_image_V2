import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { IconStack, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.extractpics.com'),
  title: {
    default: "ExtractPics - Web Image Extractor",
    template: "%s | ExtractPics"
  },
  description: "Extract images from any website instantly. Free, fast, and secure image extraction tool.",
  keywords: ["image extractor", "download images", "web scraper", "bulk downloader"],
  authors: [{ name: "ExtractPics" }],
  creator: "ExtractPics",
  publisher: "ExtractPics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.extractpics.com',
    siteName: "ExtractPics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ExtractPics - Image Extractor Tool"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@extractpics",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ExtractPics",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground min-h-screen flex flex-col bg-grid selection:bg-selection selection:text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation */}
          <Navigation />

          <main className="flex-grow flex flex-col items-center pt-32 px-4 relative z-10 w-full">
            <Breadcrumb />
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border/40 bg-background py-12 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto px-6">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand Column */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="ExtractPics Logo"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <span className="text-foreground font-bold text-sm">ExtractPics</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Free image extraction tool for downloading images from any website. Fast, secure, and easy to use.
                  </p>
                </div>

                {/* Tools Column */}
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-3">Tools</h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <a href="/bulk-extractor" className="text-muted-foreground hover:text-foreground transition-colors">
                        Bulk Extractor
                      </a>
                    </li>
                    <li>
                      <a href="/image-downloader" className="text-muted-foreground hover:text-foreground transition-colors">
                        Image Downloader
                      </a>
                    </li>
                    <li>
                      <a href="/extraction-tool" className="text-muted-foreground hover:text-foreground transition-colors">
                        Extraction Tool
                      </a>
                    </li>
                    <li>
                      <a href="/image-saver" className="text-muted-foreground hover:text-foreground transition-colors">
                        Image Saver
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources Column */}
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-3">Resources</h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/infographics" className="text-muted-foreground hover:text-foreground transition-colors">
                        Infographics
                      </a>
                    </li>
                    <li>
                      <a href="/how-to-get-an-image-url" className="text-muted-foreground hover:text-foreground transition-colors">
                        How to Get Image URL
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-3">Legal</h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                        GitHub <IconArrowUpRight size={10} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-6 border-t border-border/40">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="text-muted-foreground text-xs font-medium">
                    © {new Date().getFullYear()} ExtractPics. All rights reserved.
                  </span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Made with ❤️ for developers</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
