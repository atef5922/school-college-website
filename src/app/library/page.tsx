import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, Clock3, FileText, Search } from "lucide-react";
import { downloads } from "@/data/downloads";
import { facilities } from "@/data/facilities";
import { galleryItems } from "@/data/gallery";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Library");

const libraryFacility = facilities.find((facility) => facility.id === "library");
const libraryImage = galleryItems.find((item) => item.category === "Library");
const libraryResources = downloads.filter((item) =>
  ["Academics", "Routine", "Exam", "Result"].includes(item.category)
);

const services = [
  {
    title: "Reading Support",
    description: "Quiet reading guidance, class-wise book suggestions, and supervised study periods.",
    icon: BookOpenCheck
  },
  {
    title: "Catalog Assistance",
    description: "Book search, issue tracking, and reading list management are ready for backend integration.",
    icon: Search
  },
  {
    title: "Library Hours",
    description: "Students can use the library during routine slots and approved break periods.",
    icon: Clock3
  }
];

export default function LibraryPage() {
  return (
    <>
      <PageHero
        title="Library"
        description="Curated books, journals, reading support, and academic resources for every class level."
        breadcrumb={[{ label: "Resources", href: "/downloads" }, { label: "Library" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-600">
                Knowledge Center
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
                Library Resources & Reading Support
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {libraryFacility?.description ??
                  "Curated books, journals, and quiet reading support for every class level."}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["6,500+ Books", "Class-wise Lists", "Quiet Study Zone"].map((item) => (
                  <Card key={item} className="p-4">
                    <p className="font-display text-lg font-extrabold text-navy-900">{item}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold">
                  <Link href="/downloads">
                    Download Resources
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Ask Librarian</Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-navy-50">
              {libraryImage ? (
                <Image
                  src={libraryImage.image}
                  alt={libraryImage.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-green-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-700">
                  Academic Files
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-900">
                  Useful Library Downloads
                </h2>
              </div>
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-navy-900 transition hover:text-green-700"
              >
                View Download Center
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {libraryResources.map((item) => (
                <Card key={item.id} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 flex-none place-items-center rounded-md bg-navy-900 text-gold-500">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 font-display text-base font-extrabold leading-tight text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                        {item.fileType} - {item.size}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
