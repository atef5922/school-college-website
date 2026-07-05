import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

const description =
  "Bright School & College is a modern educational institution in Dhaka, Bangladesh, focused on academic excellence, discipline, creativity, leadership, and holistic student development.";

export const baseKeywords = [
  "school in Dhaka",
  "school and college Bangladesh",
  "admission open 2026",
  "SSC result",
  "HSC admission",
  "best school in Bangladesh",
  "English version school website",
  "modern school website",
  "academic excellence"
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://bright-demo.vercel.app"),
  title: {
    default: "Bright School & College - Premium School & College in Dhaka",
    template: "%s | Bright School & College"
  },
  description,
  keywords: baseKeywords,
  openGraph: {
    title: "Bright School & College - Premium School & College in Dhaka",
    description,
    url: "https://bright-demo.vercel.app",
    siteName: siteInfo.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Bright School & College campus"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright School & College",
    description,
    images: [
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=85"
    ]
  }
};

export function pageMetadata(title: string, pageDescription?: string): Metadata {
  return {
    title,
    description: pageDescription ?? description,
    openGraph: {
      title,
      description: pageDescription ?? description
    },
    twitter: {
      title,
      description: pageDescription ?? description
    }
  };
}

export const educationalOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteInfo.name,
  slogan: siteInfo.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 36-37 Umesh Datta Road, Bakshibazar",
    addressLocality: "Dhaka",
    postalCode: "1211",
    addressCountry: "BD"
  },
  telephone: siteInfo.phone,
  email: siteInfo.email,
  url: "https://bright-demo.vercel.app"
};
