import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SearchDocument } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");
const OUTPUT_PATH = path.join(process.cwd(), "public/search-index.json");

async function generateSearchIndex(): Promise<void> {
  console.log("Generating blog search index...");

  const searchDocs: SearchDocument[] = [];

  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log("No content directory found. Creating empty search index.");
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify([]));
    return;
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

      // Clean content for search (remove markdown syntax)
      const cleanContent = content
        .replace(/```[\s\S]*?```/g, "") // Remove code blocks
        .replace(/`[^`]*`/g, "") // Remove inline code
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // Replace links with text
        .replace(/[#*_~`]/g, "") // Remove markdown symbols
        .replace(/\n+/g, " ") // Replace newlines with spaces
        .trim()
        .slice(0, 500); // Limit to 500 chars

      searchDocs.push({
        slug: data.slug || file.replace(/\.mdx?$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        category: data.category || category,
        content: cleanContent,
      });
    }
  }

  // Write search index
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(searchDocs, null, 2));

  console.log(`Search index generated with ${searchDocs.length} documents.`);
}

generateSearchIndex().catch(console.error);
