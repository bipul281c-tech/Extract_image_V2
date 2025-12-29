import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-10 mb-5 text-2xl sm:text-3xl font-semibold tracking-tight scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 mb-4 text-xl sm:text-2xl font-semibold tracking-tight scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-lg sm:text-xl font-medium scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-6 mb-3 text-base sm:text-lg font-medium scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-5 mb-2 text-base font-medium scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-5 mb-2 text-sm font-medium scroll-mt-20",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        "my-6 text-base sm:text-lg leading-relaxed sm:leading-8 text-foreground/90",
        className
      )}
      {...props}
    />
  ),
  a: ({ href, className, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    const linkClasses = cn(
      "text-primary hover:opacity-80 transition-opacity",
      className
    );

    if (isExternal) {
      return (
        <a
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href || "#"} className={linkClasses} {...props}>
        {children}
      </Link>
    );
  },
  img: ({ src, alt, ...props }) => (
    <span className="block my-8">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={450}
        className="rounded-xl border shadow-sm"
        {...props}
      />
    </span>
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "my-6 ml-6 list-disc space-y-3 marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "my-6 ml-6 list-decimal space-y-3 marker:text-muted-foreground marker:font-medium",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={cn("pl-2 text-base sm:text-lg leading-relaxed", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-8 border-l-4 border-primary bg-muted/30 pl-6 pr-4 py-4 italic text-muted-foreground rounded-r-lg",
        "[&>p]:my-2 [&>p]:text-base",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-12 border-t-2 border-border" {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-8 w-full overflow-x-auto rounded-lg border">
      <table
        className={cn("w-full border-collapse text-sm sm:text-base", className)}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={cn("bg-muted", className)} {...props} />
  ),
  tbody: ({ className, ...props }) => (
    <tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn(
        "border-b border-border transition-colors hover:bg-muted/50",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "px-4 py-3 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "px-4 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-8 overflow-x-auto rounded-xl bg-muted/70 p-5 text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => {
    const isInline = !className?.includes("hljs");
    if (isInline) {
      return (
        <code
          className={cn(
            "relative rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm font-medium",
            className
          )}
          {...props}
        />
      );
    }
    return (
      <code className={cn("font-mono text-sm", className)} {...props} />
    );
  },
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
  em: ({ className, ...props }) => (
    <em className={cn("italic", className)} {...props} />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
