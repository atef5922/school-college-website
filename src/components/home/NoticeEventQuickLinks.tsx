"use client";

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  Clock3,
  ExternalLink,
  Link as LinkIcon,
  type LucideIcon
} from "lucide-react";
import type { BadgeTone } from "@/types";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { events } from "@/data/events";
import { notices } from "@/data/notices";
import { quickLinks } from "@/data/quickLinks";
import { Container } from "@/components/shared/Container";
import { formatDate, getDateParts } from "@/lib/utils";

const quickLinkTone: Record<BadgeTone, string> = {
  blue: "from-navy-950 via-navy-800 to-blue-800 text-white",
  green: "from-emerald-900 via-green-800 to-navy-950 text-white",
  gold: "from-amber-700 via-gold-600 to-navy-950 text-white",
  purple: "from-indigo-950 via-navy-900 to-green-800 text-white",
  red: "from-red-900 via-red-800 to-navy-950 text-white",
  navy: "from-navy-950 via-navy-900 to-slate-800 text-white"
};

const panelClass =
  "flex min-h-[500px] min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white";

const listViewportClass = "h-[392px]";

function PanelHeader({
  icon: Icon,
  title,
  href
}: {
  icon: LucideIcon;
  title: string;
  href: string;
}) {
  return (
    <div className="flex flex-none items-center justify-between gap-3 border-b border-white/10 bg-navy-950 px-5 py-4 text-white">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-gold-500 text-navy-950">
          <Icon className="h-5 w-5" strokeWidth={2.4} />
        </span>
        <h2 className="truncate font-display text-lg font-extrabold">{title}</h2>
      </div>
      <Link
        href={href}
        className="inline-flex flex-none items-center gap-1 text-xs font-extrabold uppercase tracking-[0.12em] text-gold-200 transition hover:text-white"
      >
        View All
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

export function NoticeEventQuickLinks() {
  const upcomingEvents = events.filter((event) => event.status === "Upcoming").slice(0, 6);
  const latestNotices = notices.slice(0, 7);

  return (
    <section className="bg-muted py-16">
      <Container>
        <div className="mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-green-700">
              Campus Desk
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Notices, Events & Quick Links
            </h2>
          </div>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_1fr_0.92fr]">
          <div className={panelClass}>
            <PanelHeader icon={BellRing} title="Latest Notices" href="/notice" />
            <div className="flex-1 p-3 sm:p-4">
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                  0: { slidesPerView: 5, spaceBetween: 8 },
                  768: { slidesPerView: 5, spaceBetween: 8 }
                }}
                loop={latestNotices.length > 5}
                spaceBetween={8}
                slidesPerView={5}
                speed={650}
                className={listViewportClass}
              >
                {latestNotices.map((notice) => {
                  const parts = getDateParts(notice.date);

                  return (
                    <SwiperSlide key={notice.slug}>
                      <Link
                        href={`/notice/${notice.slug}`}
                        className="group flex h-full min-h-[70px] items-center gap-3 overflow-hidden rounded-md border border-slate-200 bg-gradient-to-br from-white via-navy-50 to-gold-100/70 p-2.5 transition hover:border-gold-300 hover:from-gold-100 hover:via-white hover:to-navy-50"
                      >
                        <div className="grid h-12 w-11 flex-none content-center justify-items-center rounded-md bg-navy-950 text-center text-white">
                          <span className="block text-base font-extrabold leading-none">
                            {parts.day}
                          </span>
                          <span className="text-[9px] font-bold uppercase text-gold-200">
                            {parts.month}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-1 font-display text-[13.5px] font-extrabold leading-snug text-navy-900 transition group-hover:text-green-700">
                            {notice.title}
                          </h3>
                          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                            <span className="text-[10.5px] font-bold text-slate-500">
                              {formatDate(notice.date)}
                            </span>
                            <span className="inline-flex flex-none items-center gap-1 text-[11px] font-extrabold text-navy-800 group-hover:text-green-700">
                              Details
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className={panelClass}>
            <PanelHeader icon={CalendarDays} title="Upcoming Events" href="/events" />
            <div className="flex-1 p-3 sm:p-4">
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                  0: { slidesPerView: 5, spaceBetween: 8 },
                  768: { slidesPerView: 5, spaceBetween: 8 }
                }}
                loop={upcomingEvents.length > 5}
                spaceBetween={8}
                slidesPerView={5}
                speed={650}
                className={listViewportClass}
              >
                {upcomingEvents.map((event) => {
                  const parts = getDateParts(event.date);

                  return (
                    <SwiperSlide key={event.slug}>
                      <Link
                        href={`/events/${event.slug}`}
                        className="group flex h-full min-h-[70px] items-center gap-3 overflow-hidden rounded-md border border-slate-200 bg-gradient-to-br from-white via-green-50 to-navy-50 p-2.5 transition hover:border-green-600 hover:from-green-50 hover:via-white hover:to-gold-100"
                      >
                        <div className="grid h-12 w-11 flex-none content-center justify-items-center rounded-md bg-green-700 text-center text-white">
                          <span className="block text-base font-extrabold leading-none">
                            {parts.day}
                          </span>
                          <span className="text-[9px] font-bold uppercase text-gold-100">
                            {parts.month}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-1 font-display text-[13.5px] font-extrabold leading-snug text-navy-900 transition group-hover:text-green-700">
                            {event.title}
                          </h3>
                          <div className="mt-1.5 flex items-center justify-between gap-2 text-[10.5px] font-bold text-slate-600">
                            <p className="flex min-w-0 items-center gap-2">
                              <Clock3 className="h-3 w-3 flex-none text-gold-600" />
                              <span className="truncate">{event.time}</span>
                            </p>
                            <ArrowRight className="h-3 w-3 flex-none text-navy-700 transition group-hover:translate-x-1 group-hover:text-green-700" />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className={panelClass}>
            <PanelHeader icon={LinkIcon} title="Quick Links" href="/contact" />
            <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-5 lg:grid-cols-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={`group flex h-full min-h-[78px] items-center rounded-md bg-gradient-to-br p-3 shadow-sm ring-1 ring-white/15 transition hover:-translate-y-1 hover:shadow-md last:col-span-2 sm:last:col-span-1 lg:last:col-span-2 ${quickLinkTone[link.tone]}`}
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-md bg-white text-navy-950 shadow-sm ring-1 ring-white/70 transition group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                    <span className="ml-3 min-w-0 flex-1 text-[13px] font-extrabold leading-tight text-white drop-shadow-sm">
                      {link.label}
                    </span>
                    <ExternalLink className="ml-2 h-3.5 w-3.5 flex-none text-white/85 transition group-hover:text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
