import type { Metadata } from "next";
import { galleryItems } from "@/data/gallery";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Campus, classroom, science lab, computer lab, library, sports, cultural program, and assembly photos."
        breadcrumb={[{ label: "Gallery" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <GalleryGrid items={galleryItems} />
        </Container>
      </section>
    </>
  );
}
