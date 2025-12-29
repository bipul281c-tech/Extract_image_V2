import { BlogPostMeta } from "@/lib/blog";
import { BlogCard } from "./blog-card";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
  title?: string;
}

export function RelatedPosts({
  posts,
  title = "Related Posts",
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 mt-8 border-t">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
