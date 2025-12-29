export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  featuredImage?: string;
  featuredImageAlt?: string;
  keywords?: string[];
  content: string;
  readingTime: number;
  wordCount: number;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface PaginationResult<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface SearchDocument {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  category: string;
  score: number;
}
