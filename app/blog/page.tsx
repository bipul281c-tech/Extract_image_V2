import type { Metadata } from "next";
import { getPaginatedPosts, getAllCategories, getCategoryCounts } from "@/lib/blog";
import { BlogList, BlogSidebar } from "@/components/blog";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Blog - Image Extraction Tips, Tutorials & Guides",
  description:
    "Learn about image extraction, web scraping best practices, bulk downloading techniques, and optimization tips from the ExtractPics team.",
  keywords: [
    "image extraction blog",
    "web scraping tutorials",
    "bulk image download",
    "image optimization",
    "extractpics guides",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog - Image Extraction Tips, Tutorials & Guides",
    description:
      "Learn about image extraction, web scraping best practices, and optimization tips.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Image Extraction Tips & Guides",
    description:
      "Learn about image extraction, web scraping best practices, and optimization tips.",
  },
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const { items: posts, ...pagination } = await getPaginatedPosts(page);
  const categories = await getAllCategories();
  const categoryCounts = await getCategoryCounts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ExtractPics Blog",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    description:
      "Tips, tutorials, and guides for image extraction and web scraping",
    publisher: {
      "@type": "Organization",
      name: "ExtractPics",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <>
      <StructuredData data={blogSchema} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Tips, tutorials, and guides for image extraction and web scraping.
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <BlogList posts={posts} pagination={pagination} />
          </main>
          <aside className="lg:col-span-1">
            <BlogSidebar
              categories={categories}
              categoryCounts={categoryCounts}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
