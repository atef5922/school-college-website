import Link from "next/link";
import { FileText } from "lucide-react";
import { notices } from "@/data/notices";
import type { Notice } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDate, getDateParts } from "@/lib/utils";

const categoryTone: Record<Notice["category"], "gold" | "green" | "blue" | "purple" | "red" | "navy"> = {
  Admission: "green",
  Exam: "purple",
  Result: "gold",
  Holiday: "red",
  Event: "blue",
  General: "navy"
};

export function NoticeCard({ notice, compact = false }: { notice: Notice; compact?: boolean }) {
  const parts = getDateParts(notice.date);
  return (
    <Link href={`/notice/${notice.slug}`} className="group block">
      <Card className="h-full p-4 hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
        <div className="flex gap-4">
          <div className="grid h-16 w-14 flex-none place-items-center rounded-md border border-slate-200 bg-navy-50 text-center">
            <span className="block text-lg font-extrabold leading-none text-navy-900">{parts.day}</span>
            <span className="text-[10px] font-bold uppercase text-slate-500">{parts.month}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge tone={categoryTone[notice.category]}>{notice.category}</Badge>
              {notice.isNew ? <Badge tone="green">New</Badge> : null}
            </div>
            <h3 className="font-display text-base font-extrabold text-navy-900 group-hover:text-green-700">
              {notice.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-500">{formatDate(notice.date)}</p>
            {!compact ? <p className="mt-2 text-sm leading-6 text-slate-600">{notice.excerpt}</p> : null}
            {notice.attachment ? (
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-navy-700">
                <FileText className="h-4 w-4" />
                Attachment available
              </span>
            ) : null}
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function RelatedNotices({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {notices
        .filter((notice) => notice.slug !== currentSlug)
        .slice(0, 3)
        .map((notice) => (
          <NoticeCard key={notice.slug} notice={notice} compact />
        ))}
    </div>
  );
}
