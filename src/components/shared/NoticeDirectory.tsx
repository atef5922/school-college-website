"use client";

import * as React from "react";
import type { Notice } from "@/types";
import { NoticeCard } from "@/components/shared/NoticeCard";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const categories = ["All", "Admission", "Exam", "Result", "Holiday", "Event", "General"];

export function NoticeDirectory({ notices }: { notices: Notice[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const filtered = notices.filter((notice) => {
    const matchesQuery = `${notice.title} ${notice.excerpt}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || notice.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-[1fr_220px]">
        <Input
          placeholder="Search notices"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search notices"
        />
        <Select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter notices">
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((notice) => (
          <NoticeCard key={notice.slug} notice={notice} />
        ))}
      </div>
    </div>
  );
}
