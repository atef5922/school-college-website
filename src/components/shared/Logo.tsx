import Link from "next/link";
import { BookOpen, GraduationCap, Shield, Star } from "lucide-react";
import { siteInfo } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)} aria-label={`${siteInfo.name} home`}>
      <div className="relative grid h-12 w-12 flex-none place-items-center rounded-md border border-gold-300/70 bg-navy-900 text-gold-500 shadow-soft">
        <Shield className="absolute h-10 w-10" strokeWidth={1.4} />
        <BookOpen className="h-5 w-5 text-white" strokeWidth={2.1} />
        <GraduationCap className="absolute -bottom-1 h-5 w-5 text-gold-500" />
        <Star className="absolute -right-1 -top-1 h-4 w-4 fill-gold-500 text-gold-500" />
      </div>
      {!compact ? (
        <div className="min-w-0 leading-none">
          <p className="font-display text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
            {siteInfo.name.split(" ")[0]}
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
            School & College
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {siteInfo.tagline}
          </p>
        </div>
      ) : null}
    </Link>
  );
}
