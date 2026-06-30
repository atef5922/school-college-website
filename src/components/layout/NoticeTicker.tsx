import Link from "next/link";
import { notices } from "@/data/notices";
import { Button } from "@/components/ui/button";

export function NoticeTicker() {
  const items = notices.slice(0, 4);
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container flex min-h-14 items-center gap-3 py-2">
        <Link
          href="/notice"
          className="flex-none rounded-md bg-green-600 px-4 py-2 text-xs font-extrabold uppercase text-white shadow-soft"
        >
          Latest Notice
        </Link>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-ticker gap-8 hover:[animation-play-state:paused]">
            {[...items, ...items].map((notice, index) => (
              <Link
                key={`${notice.slug}-${index}`}
                href={`/notice/${notice.slug}`}
                className="inline-flex items-center gap-3 text-sm font-semibold text-navy-900 hover:text-green-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-navy-900" />
                {notice.title}
              </Link>
            ))}
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="hidden flex-none sm:inline-flex">
          <Link href="/notice">View All Notices</Link>
        </Button>
      </div>
    </div>
  );
}
