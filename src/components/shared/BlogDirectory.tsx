"use client";

import * as React from "react";
import type { BlogPost } from "@/types";
import { BlogCard } from "@/components/shared/BlogCard";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const PAGE_SIZE = 6;

export function BlogDirectory({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filtered = posts.filter((post) => {
    const matchesQuery = `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesQuery && matchesCategory;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const activePage = Math.min(page, totalPages);
  const pageStart = (activePage - 1) * PAGE_SIZE;
  const visiblePosts = filtered.slice(pageStart, pageStart + PAGE_SIZE);
  const paginationItems = getPaginationItems(activePage, totalPages);

  React.useEffect(() => {
    setPage(1);
  }, [query, category]);

  React.useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-[1fr_240px]">
        <Input
          placeholder="Search news and articles"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search articles"
        />
        <Select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter articles">
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {!filtered.length ? (
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="font-display text-xl font-extrabold text-navy-900">No articles found</p>
          <p className="mt-2 text-sm text-slate-600">Try another keyword or category.</p>
        </div>
      ) : null}
      {totalPages > 1 ? (
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Article pagination">
          <button
            type="button"
            className={cnPagination(false)}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={activePage === 1}
            aria-label="Previous page"
          >
            Prev
          </button>
          {paginationItems.map((item, index) =>
            item === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                className="grid h-10 min-w-10 place-items-center text-sm font-bold text-slate-400"
              >
                ...
              </span>
            ) : (
              <button
                key={item}
                type="button"
                className={cnPagination(item === activePage)}
                onClick={() => setPage(item)}
                aria-current={item === activePage ? "page" : undefined}
                aria-label={`Page ${item}`}
              >
                {item}
              </button>
            )
          )}
          <button
            type="button"
            className={cnPagination(false)}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={activePage === totalPages}
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      ) : null}
    </div>
  );
}

function cnPagination(active: boolean) {
  return active
    ? "grid h-10 min-w-10 place-items-center rounded-md bg-navy-900 px-3 text-sm font-bold text-white"
    : "grid h-10 min-w-10 place-items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-gold-500 hover:text-navy-900 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-slate-200 disabled:hover:text-slate-600";
}

function getPaginationItems(activePage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set([1, totalPages, activePage - 1, activePage, activePage + 1]);
  const sortedPages = Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  return sortedPages.flatMap((page, index) => {
    if (index === 0) return [page];
    const previous = sortedPages[index - 1];
    return page - previous > 1 ? ["ellipsis" as const, page] : [page];
  });
}
