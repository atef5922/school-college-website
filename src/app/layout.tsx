import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { MainNavbar } from "@/components/layout/MainNavbar";
import { NoticeTicker } from "@/components/layout/NoticeTicker";
import { ScrollRestoration } from "@/components/shared/ScrollRestoration";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { SiteMotion } from "@/components/shared/SiteMotion";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { ToastProvider } from "@/components/ui/toast";
import { defaultMetadata, educationalOrganizationJsonLd } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${sora.variable} antialiased`} suppressHydrationWarning>
        <ToastProvider>
          <ScrollRestoration />
          <SiteMotion />
          <header className="sticky top-0 z-40">
            <MainNavbar />
            <NoticeTicker />
          </header>
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </ToastProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationJsonLd) }}
        />
      </body>
    </html>
  );
}
