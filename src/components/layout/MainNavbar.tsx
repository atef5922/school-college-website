"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  BriefcaseBusiness,
  ChevronDown,
  GraduationCap,
  Home,
  LogIn,
  Menu,
  ShieldCheck,
  Star,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AutoHideHeader } from "@/components/layout/AutoHideHeader";
import { siteInfo } from "@/data/site";
import { cn } from "@/lib/utils";

const collegeNav = [
  {
    label: "About",
    href: "/about",
    items: [
      { label: "About School", href: "/about" },
      { label: "Principal Message", href: "/about/principal-message" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Governing Body", href: "/about/governing-body" }
    ]
  },
  {
    label: "Academic",
    href: "/academics",
    items: [
      { label: "Academic Programs", href: "/academics/programs" },
      { label: "Class Routine", href: "/academics/routine" },
      { label: "Exam Routine", href: "/academics/exam-routine" },
      { label: "Syllabus", href: "/academics/syllabus" },
      { label: "Results", href: "/academics/results" },
      { label: "Academic Calendar", href: "/academics/calendar" }
    ]
  },
  {
    label: "Admission",
    href: "/admission",
    items: [
      { label: "Admission Process", href: "/admission" },
      { label: "Apply Online", href: "/admission/apply" },
      { label: "Requirements", href: "/admission/requirements" },
      { label: "Fee Structure", href: "/admission/fee-structure" }
    ]
  },
  {
    label: "All Clubs of BSC",
    href: "/events",
    items: [
      { label: "Science Club", href: "/events/science-fair-2025" },
      { label: "Debate Club", href: "/blog/science-fair-builds-confidence" },
      { label: "Sports Club", href: "/events/annual-sports-2025" }
    ]
  },
  {
    label: "Teachers & Staffs",
    href: "/teachers",
    items: [
      { label: "Teachers", href: "/teachers" },
      { label: "Staff Portal", href: "/staff-portal" },
      { label: "Governing Body", href: "/about/governing-body" }
    ]
  },
  { label: "Library", href: "/library" },
  {
    label: "Departments",
    href: "/academics/programs",
    items: [
      { label: "Science Group", href: "/academics/programs" },
      { label: "Business Studies", href: "/academics/programs" },
      { label: "Humanities", href: "/academics/programs" }
    ]
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Notice Board",
    href: "/notice",
    items: [
      { label: "All Notices", href: "/notice" },
      { label: "SSC Result", href: "/notice/ssc-result-2024-published" },
      { label: "HSC Admission", href: "/notice/hsc-admission-2026-apply-now" }
    ]
  },
  {
    label: "Downloads",
    href: "/downloads",
    items: [
      { label: "Forms", href: "/downloads" },
      { label: "Academic Calendar", href: "/downloads" },
      { label: "Fee Structure", href: "/admission/fee-structure" }
    ]
  },
  { label: "Alumni", href: "/blog" }
];

function isActive(pathname: string, href: string) {
  const cleanHref = href.split("#")[0];
  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

function HeaderBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${siteInfo.name} home`}>
      <div className="relative grid h-14 w-14 flex-none place-items-center rounded-full border-[3px] border-red-600 bg-white shadow-soft sm:h-16 sm:w-16">
        <div className="absolute inset-1 rounded-full border-2 border-green-600" />
        <div className="relative grid h-9 w-9 place-items-center rounded-full bg-navy-900 text-gold-500 sm:h-10 sm:w-10">
          <ShieldCheck className="h-5 w-5" />
          <Star className="absolute -right-1 -top-1 h-3.5 w-3.5 fill-red-600 text-red-600" />
        </div>
      </div>
      {!compact ? (
        <div className="min-w-0">
          <p className="truncate font-display text-2xl font-extrabold leading-tight text-[#1437c5] sm:text-3xl">
            {siteInfo.name}
          </p>
          <p className="mt-1 text-sm font-extrabold leading-none text-green-800 sm:text-lg">
            Education | Discipline | Morality
          </p>
        </div>
      ) : null}
    </Link>
  );
}

function DesktopNavItem({
  item,
  pathname
}: {
  item: (typeof collegeNav)[number];
  pathname: string;
}) {
  if ("items" in item && item.items) {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className={cn(
              "group inline-flex h-10 items-center gap-1 px-3 text-sm font-bold text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70",
              isActive(pathname, item.href) && "bg-white/10"
            )}
          >
            {item.label}
            <ChevronDown className="h-3.5 w-3.5 transition group-data-[state=open]:rotate-180" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="start"
          className="z-50 min-w-56 rounded-md border border-slate-200 bg-white p-2 text-slate-900 shadow-premium"
        >
          <DropdownMenu.Item asChild>
            <Link
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-bold text-navy-900 outline-none hover:bg-navy-50"
            >
              {item.label}
            </Link>
          </DropdownMenu.Item>
          {item.items.map((child) => (
            <DropdownMenu.Item key={`${item.label}-${child.href}-${child.label}`} asChild>
              <Link
                href={child.href}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 outline-none hover:bg-navy-50 hover:text-navy-900"
              >
                {child.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex h-10 items-center px-3 text-sm font-bold text-white transition hover:bg-white/10",
        isActive(pathname, item.href) && "bg-white/10"
      )}
    >
      {item.label}
    </Link>
  );
}

export function MainNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-200 bg-white shadow-sm">
      <AutoHideHeader>
        <div className="container flex min-h-[82px] items-center justify-between gap-4 py-2">
          <HeaderBrand />
          <div className="hidden flex-none items-center gap-3 md:flex">
            <Button asChild className="rounded-full bg-sky-500 px-5 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-600">
              <Link href="/admission/apply">
                <GraduationCap className="h-4 w-4" />
                Admission
              </Link>
            </Button>
            <Button asChild className="rounded-full bg-red-500 px-5 text-white shadow-lg shadow-red-500/25 hover:bg-red-600">
              <Link href="/blog">
                <BriefcaseBusiness className="h-4 w-4" />
                Career Corner
              </Link>
            </Button>
            <Button asChild className="rounded-full bg-emerald-500 px-5 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600">
              <Link href="/login">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>
          </div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="gold" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 z-[70] h-full w-[88vw] max-w-sm overflow-y-auto bg-white p-5 shadow-premium">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <HeaderBrand compact />
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <div className="mt-5 grid gap-2">
                  {[
                    ["Admission", "/admission/apply", GraduationCap],
                    ["Career Corner", "/blog", BriefcaseBusiness],
                    ["Login", "/login", LogIn]
                  ].map(([label, href, Icon]) => (
                    <Button key={href as string} asChild variant="outline" className="justify-start">
                      <Link href={href as string} onClick={() => setOpen(false)}>
                        {React.createElement(Icon as typeof GraduationCap, { className: "h-4 w-4" })}
                        {label as string}
                      </Link>
                    </Button>
                  ))}
                </div>
                <nav className="mt-5 space-y-2" aria-label="Mobile navigation">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-bold text-navy-900 hover:bg-navy-50",
                      pathname === "/" && "bg-gold-100"
                    )}
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  {collegeNav.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-navy-900 hover:bg-navy-50",
                          isActive(pathname, item.href) && "bg-gold-100"
                        )}
                      >
                        {item.label}
                      </Link>
                      {"items" in item && item.items ? (
                        <div className="ml-3 mt-1 border-l border-slate-200 pl-3">
                          {item.items.map((child) => (
                            <Link
                              key={`${item.label}-${child.href}-${child.label}`}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="flex min-h-10 items-center rounded-md px-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </AutoHideHeader>
      <div className="hidden bg-[#4b0082] lg:block">
        <div className="container flex h-10 items-center">
          <Link
            href="/"
            className={cn(
              "grid h-10 w-12 place-items-center text-white transition hover:bg-white/10",
              pathname === "/" && "bg-white/10"
            )}
            aria-label="Home"
          >
            <Home className="h-5 w-5 fill-white" />
          </Link>
          <nav className="flex min-w-0 flex-1 items-center justify-between" aria-label="Main navigation">
            {collegeNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
