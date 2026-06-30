import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import { siteInfo } from "@/data/site";
import { Logo } from "@/components/shared/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  const admissionLinks = [
    ["Admission Process", "/admission"],
    ["Admission Requirements", "/admission/requirements"],
    ["Apply Online", "/admission/apply"],
    ["Fee Structure", "/admission/fee-structure"],
    ["Scholarship", "/admission#scholarship"]
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-x-0 bottom-0 h-28 border-t border-white/5 opacity-25">
        <div className="container h-full bg-[linear-gradient(90deg,transparent_0_6%,rgba(255,255,255,.08)_6%_6.4%,transparent_6.4%_14%)]" />
      </div>
      <div className="container relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            {siteInfo.name} is committed to academic excellence, character building,
            and innovative education for a brighter future.
          </p>
          <div className="mt-5 flex gap-3 text-sm font-bold">
            {[
              ["f", siteInfo.socials.facebook],
              ["yt", siteInfo.socials.youtube],
              ["in", siteInfo.socials.linkedin],
              ["ig", siteInfo.socials.instagram]
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:border-gold-500 hover:text-gold-300"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/70 sm:grid-cols-1">
            {footerLinks.slice(0, 10).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
            Admissions
          </h2>
          <div className="space-y-2 text-sm text-white/70">
            {admissionLinks.map(([label, href]) => (
              <Link key={href} href={href} className="block hover:text-gold-300">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
            Contact Info
          </h2>
          <div className="space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 flex-none text-gold-300" />
              {siteInfo.location}
            </p>
            <p className="flex gap-3">
              <Phone className="h-5 w-5 flex-none text-gold-300" />
              {siteInfo.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="h-5 w-5 flex-none text-gold-300" />
              {siteInfo.email}
            </p>
            <p className="flex gap-3">
              <Clock className="h-5 w-5 flex-none text-gold-300" />
              {siteInfo.officeTime}
            </p>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white">
            Newsletter
          </h2>
          <p className="mb-4 text-sm leading-6 text-white/70">
            Subscribe to get the latest updates and important notices.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 {siteInfo.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-gold-300">
              Terms of Use
            </Link>
            <Link href="/admission/fee-structure" className="hover:text-gold-300">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
