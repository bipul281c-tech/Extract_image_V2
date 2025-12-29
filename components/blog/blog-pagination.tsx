import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { PaginationResult } from "@/lib/blog";

interface BlogPaginationProps {
  pagination: Omit<PaginationResult<unknown>, "items">;
  baseUrl?: string;
}

export function BlogPagination({
  pagination,
  baseUrl = "/blog",
}: BlogPaginationProps) {
  const { currentPage, totalPages, hasNextPage, hasPrevPage } = pagination;

  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}?page=${page}`;
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-8"
      aria-label="Pagination"
    >
      <Button
        variant="outline"
        size="sm"
        disabled={!hasPrevPage}
        asChild={hasPrevPage}
      >
        {hasPrevPage ? (
          <Link href={getPageUrl(currentPage - 1)}>
            <IconChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Link>
        ) : (
          <span>
            <IconChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </span>
        )}
      </Button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className="w-9 h-9 p-0"
              asChild={currentPage !== page}
            >
              {currentPage === page ? (
                <span>{page}</span>
              ) : (
                <Link href={getPageUrl(page)}>{page}</Link>
              )}
            </Button>
          )
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={!hasNextPage}
        asChild={hasNextPage}
      >
        {hasNextPage ? (
          <Link href={getPageUrl(currentPage + 1)}>
            Next
            <IconChevronRight className="w-4 h-4 ml-1" />
          </Link>
        ) : (
          <span>
            Next
            <IconChevronRight className="w-4 h-4 ml-1" />
          </span>
        )}
      </Button>
    </nav>
  );
}
