import * as React from "react";
import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/types";

const toneClass: Record<BadgeTone, string> = {
  gold: "bg-gold-100 text-navy-900 ring-gold-300",
  green: "bg-emerald-50 text-green-700 ring-emerald-200",
  blue: "bg-blue-50 text-navy-700 ring-blue-200",
  purple: "bg-violet-50 text-violet-700 ring-violet-200",
  red: "bg-rose-50 text-rose-700 ring-rose-200",
  navy: "bg-navy-50 text-navy-900 ring-navy-100"
};

export function Badge({
  className,
  tone = "navy",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ring-1",
        toneClass[tone],
        className
      )}
      {...props}
    />
  );
}
