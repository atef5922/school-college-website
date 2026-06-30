import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function GalleryPreview() {
  const [featured, ...previewItems] = galleryItems;

  return (
    <section className="bg-muted py-16">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Gallery"
            title="Moments From Campus Life"
            className="mx-0"
          />
          <Button asChild variant="gold">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          {featured ? (
            <Link
              href="/gallery"
              className="group relative min-h-[360px] overflow-hidden rounded-lg bg-navy-950 shadow-soft sm:min-h-[460px]"
            >
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-300">
                  {featured.category}
                </p>
                <h3 className="mt-2 max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {featured.title}
                </h3>
              </div>
            </Link>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            {previewItems.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative min-h-[210px] overflow-hidden rounded-lg bg-navy-950 shadow-soft"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-300">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-extrabold leading-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
