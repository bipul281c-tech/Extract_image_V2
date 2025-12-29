"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { IconSearch, IconLoader2 } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchDocument {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export function BlogSearch() {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchDocument[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load search index on first focus
  const loadIndex = async () => {
    if (index.length > 0 || isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch("/search-index.json");
      if (res.ok) {
        const data = await res.json();
        setIndex(data);
      }
    } catch (error) {
      console.error("Failed to load search index:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create Fuse instance
  const fuse = useMemo(
    () =>
      new Fuse(index, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "description", weight: 0.3 },
          { name: "content", weight: 0.2 },
          { name: "category", weight: 0.1 },
        ],
        threshold: 0.3,
        includeScore: true,
        minMatchCharLength: 2,
      }),
    [index]
  );

  // Search results
  const results = useMemo(() => {
    if (query.length < 2) return [];
    return fuse.search(query).slice(0, 8);
  }, [fuse, query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && results.length > 0) {
      router.push(`/blog/${results[0].item.slug}`);
      setIsOpen(false);
      setQuery("");
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            loadIndex();
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="pl-9"
        />
        {isLoading && (
          <IconLoader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />
        )}
      </div>

      {/* Results dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-md shadow-lg z-50 overflow-hidden">
          {results.length > 0 ? (
            <ul className="py-1">
              {results.map(({ item, score }) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="block px-4 py-3 hover:bg-muted transition-colors"
                  >
                    <div className="font-medium text-sm line-clamp-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {item.description}
                    </div>
                    <div className="text-xs text-primary mt-1 capitalize">
                      {item.category}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
