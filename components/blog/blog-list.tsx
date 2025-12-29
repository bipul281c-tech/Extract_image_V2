import { BlogPostMeta, PaginationResult } from "@/lib/blog";
import { BlogCard } from "./blog-card";
import { BlogPagination } from "./blog-pagination";

interface BlogListProps {
  posts: BlogPostMeta[];
  pagination: Omit<PaginationResult<BlogPostMeta>, "items">;
  baseUrl?: string;
}

export function BlogList({ posts, pagination, baseUrl = "/blog" }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No posts found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <BlogPagination pagination={pagination} baseUrl={baseUrl} />
    </div>
  );
}
