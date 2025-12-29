import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost, BlogPostMeta, PaginationResult } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");
const POSTS_PER_PAGE = 12;

// Cache for build optimization
let postsCache: BlogPost[] | null = null;

/**
 * Get all blog posts from the content directory
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (postsCache) return postsCache;

  const posts: BlogPost[] = [];

  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    return posts;
  }

  const categories = fs.readdirSync(CONTENT_DIR);

  for (const category of categories) {
    const categoryPath = path.join(CONTENT_DIR, category);

    // Skip if not a directory
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      const stats = readingTime(content);

      posts.push({
        slug: data.slug || file.replace(/\.mdx?$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        category: data.category || category,
        author: data.author || "ExtractPics Team",
        publishedAt: data.publishedAt || new Date().toISOString(),
        updatedAt: data.updatedAt,
        featured: data.featured || false,
        featuredImage: data.featuredImage,
        featuredImageAlt: data.featuredImageAlt,
        keywords: data.keywords || [],
        content,
        readingTime: Math.ceil(stats.minutes),
        wordCount: stats.words,
      });
    }
  }

  // Sort by date descending (newest first)
  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  postsCache = posts;
  return posts;
}

/**
 * Get all post metadata (without content) for listings
 */
export async function getAllPostsMeta(): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts();
  return posts.map(({ content, ...meta }) => meta);
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Get posts by category with pagination
 */
export async function getPostsByCategory(
  category: string,
  page = 1
): Promise<PaginationResult<BlogPostMeta>> {
  const allPosts = await getAllPostsMeta();
  const filtered = allPosts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  return paginatePosts(filtered, page);
}

/**
 * Get paginated posts for the main blog listing
 */
export async function getPaginatedPosts(
  page = 1
): Promise<PaginationResult<BlogPostMeta>> {
  const posts = await getAllPostsMeta();
  return paginatePosts(posts, page);
}

/**
 * Get featured posts
 */
export async function getFeaturedPosts(limit = 3): Promise<BlogPostMeta[]> {
  const posts = await getAllPostsMeta();
  return posts.filter((p) => p.featured).slice(0, limit);
}

/**
 * Get related posts by category (excluding current post)
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<BlogPostMeta[]> {
  const posts = await getAllPostsMeta();
  return posts
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, limit);
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];
  return categories.sort();
}

/**
 * Get category post counts
 */
export async function getCategoryCounts(): Promise<Record<string, number>> {
  const posts = await getAllPosts();
  const counts: Record<string, number> = {};

  for (const post of posts) {
    const cat = post.category.toLowerCase();
    counts[cat] = (counts[cat] || 0) + 1;
  }

  return counts;
}

/**
 * Get all post slugs for static generation
 */
export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

/**
 * Get recent posts
 */
export async function getRecentPosts(limit = 5): Promise<BlogPostMeta[]> {
  const posts = await getAllPostsMeta();
  return posts.slice(0, limit);
}

/**
 * Helper: Paginate posts
 */
function paginatePosts<T>(
  posts: T[],
  page: number
): PaginationResult<T> {
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  const start = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    items: posts.slice(start, start + POSTS_PER_PAGE),
    currentPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

/**
 * Clear the posts cache (useful for development)
 */
export function clearPostsCache(): void {
  postsCache = null;
}
