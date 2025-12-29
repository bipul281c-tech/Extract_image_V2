import type { MDXComponents } from "mdx/types";
import { useMDXComponents as useBlogMDXComponents } from "@/components/blog/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return useBlogMDXComponents(components);
}
