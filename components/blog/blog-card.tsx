import Image from "next/image";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IconClock, IconCalendar, IconFolder } from "@tabler/icons-react";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.featuredImage ? (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <IconFolder className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )}
      </Link>

      <CardHeader className="pb-2">
        <Link
          href={`/blog/category/${post.category.toLowerCase()}`}
          className="text-xs font-medium text-primary uppercase tracking-wide hover:underline"
        >
          {post.category}
        </Link>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-semibold leading-tight hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="flex-grow pb-2">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.description}
        </p>
      </CardContent>

      <CardFooter className="pt-2 border-t">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <IconCalendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconClock className="w-3.5 h-3.5" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
