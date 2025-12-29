import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPostsByCategory,
  getAllCategories,
  getCategoryCounts,
} from "@/lib/blog";
import { BlogList, BlogSidebar } from "@/components/blog";
import { StructuredData } from "@/components/structured-data";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extractpics.com";

  return {
    title: `${title} - ExtractPics Blog`,
    description: `Browse all ${title.toLowerCase()} articles on ExtractPics. Learn about image extraction, web scraping, and more.`,
    alternates: {
      canonical: `${baseUrl}/blog/category/${category}`,
    },
    openGraph: {
      title: `${title} - ExtractPics Blog`,
      description: `Browse all ${title.toLowerCase()} articles on ExtractPics.`,
      type: "website",
      url: `${baseUrl}/blog/category/${category}`,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page } = await searchParams;
  const pageNum = parseInt(page || "1", 10);

  const result = await getPostsByCategory(category, pageNum);

  if (result.items.length === 0 && pageNum === 1) {
    notFound();
  }

  const allCategories = await getAllCategories();
  const categoryCounts = await getCategoryCounts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extractpics.com";

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryTitle} - ExtractPics Blog`,
    url: `${baseUrl}/blog/category/${category}`,
    description: `Browse all ${categoryTitle.toLowerCase()} articles on ExtractPics`,
    isPartOf: {
      "@type": "Blog",
      name: "ExtractPics Blog",
      url: `${baseUrl}/blog`,
    },
  };

  return (
    <>
      <StructuredData data={collectionSchema} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2 capitalize">
            {categoryTitle}
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse all {categoryTitle.toLowerCase()} articles.
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <BlogList
              posts={result.items}
              pagination={result}
              baseUrl={`/blog/category/${category}`}
            />
          </main>
          <aside className="lg:col-span-1">
            <BlogSidebar
              categories={allCategories}
              categoryCounts={categoryCounts}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
