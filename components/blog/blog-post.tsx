import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { IconClock, IconCalendar, IconUser, IconArrowLeft } from "@tabler/icons-react";

interface BlogPostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <IconArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        {/* Category */}
        <Link
          href={`/blog/category/${post.category.toLowerCase()}`}
          className="inline-block text-sm font-semibold text-primary uppercase tracking-wider hover:opacity-80 transition-opacity mb-4"
        >
          {post.category}
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground pb-8 border-b">
          <div className="flex items-center gap-2">
            <IconUser className="w-4 h-4" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCalendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            {updatedDate && (
              <span className="text-xs">(Updated: {updatedDate})</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <IconClock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <figure className="relative aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </figure>
      )}

      {/* Content */}
      <div className="prose-blog">
        {children}
      </div>

      {/* Keywords */}
      {post.keywords && post.keywords.length > 0 && (
        <footer className="mt-16 pt-8 border-t">
          <p className="text-sm font-medium text-muted-foreground mb-3">Topics:</p>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}
