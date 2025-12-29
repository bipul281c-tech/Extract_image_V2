"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconFolder, IconSearch } from "@tabler/icons-react";
import { BlogSearch } from "./blog-search";

interface BlogSidebarProps {
  categories: string[];
  categoryCounts?: Record<string, number>;
}

export function BlogSidebar({ categories, categoryCounts }: BlogSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Search
        </h3>
        <BlogSearch />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Categories
        </h3>
        <nav className="space-y-1">
          <Link
            href="/blog"
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
              pathname === "/blog"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <IconFolder className="w-4 h-4" />
            <span>All Posts</span>
          </Link>
          {categories.map((category) => {
            const isActive = pathname === `/blog/category/${category.toLowerCase()}`;
            const count = categoryCounts?.[category.toLowerCase()];

            return (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className={cn(
                  "flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <span className="capitalize">{category}</span>
                {count !== undefined && (
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      isActive
                        ? "bg-primary-foreground/20"
                        : "bg-muted-foreground/20"
                    )}
                  >
                    {count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
