"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { siteInfo } from "@/data/site";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [hidden, setHidden] = React.useState(false);
  const previousY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > 80 && currentY > previousY.current);
      previousY.current = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "hidden overflow-hidden border-b border-white/10 bg-navy-950 text-xs text-white/85 transition-all duration-300 lg:block",
        hidden ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
      )}
    >
      <div className="container flex h-10 items-center justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-300" />
            {siteInfo.location}
          </span>
          <a href={`tel:${siteInfo.phone}`} className="inline-flex items-center gap-2 hover:text-gold-300">
            <Phone className="h-4 w-4 text-gold-300" />
            {siteInfo.phone}
          </a>
          <a
            href={`mailto:${siteInfo.email}`}
            className="inline-flex items-center gap-2 hover:text-gold-300"
          >
            <Mail className="h-4 w-4 text-gold-300" />
            {siteInfo.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold-300" />
            {siteInfo.officeTime}
          </span>
        </div>
        <div className="flex flex-none items-center gap-4">
          {[
            ["Student Portal", "/student-portal"],
            ["Parent Portal", "/parent-portal"],
            ["Staff Portal", "/staff-portal"]
          ].map(([label, href]) => (
            <Link key={href} href={href} className="inline-flex items-center gap-2 hover:text-gold-300">
              <UserRound className="h-4 w-4" />
              {label}
            </Link>
          ))}
          <span className="h-4 w-px bg-white/25" />
          <div className="flex items-center gap-2 font-bold">
            <a href={siteInfo.socials.facebook} aria-label="Facebook" className="hover:text-gold-300">
              f
            </a>
            <a href={siteInfo.socials.youtube} aria-label="YouTube" className="hover:text-gold-300">
              yt
            </a>
            <a href={siteInfo.socials.linkedin} aria-label="LinkedIn" className="hover:text-gold-300">
              in
            </a>
            <span className="rounded-sm border border-white/20 px-1.5 py-0.5">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
