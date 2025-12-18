import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

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
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "ExtractPics - Web Image Extractor",
  description: "Extract images from any website instantly.",
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
          <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground">
                  <IconStack size={14} />
                </div>
                <span className="text-foreground font-bold tracking-tight text-sm">ExtractPics</span>
              </div>
              <div className="flex items-center gap-6 text-xs font-medium">
                <a href="#" className="hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="hover:text-primary transition-colors">API</a>
                <ThemeToggle />
                <a href="#" className="text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-full transition-all border border-transparent">
                  Sign In
                </a>
              </div>
            </div>
          </nav>

          <main className="flex-grow flex flex-col items-center pt-32 px-4 relative z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border/40 bg-background py-8 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-muted flex items-center justify-center text-muted-foreground">
                  <IconStack size={12} />
                </div>
                <span className="text-muted-foreground text-xs font-medium">© {new Date().getFullYear()} ExtractPics</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  GitHub <IconArrowUpRight size={10} />
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
