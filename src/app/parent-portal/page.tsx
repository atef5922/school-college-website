import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PortalPlaceholder } from "@/components/shared/PortalPlaceholder";

export const metadata: Metadata = pageMetadata("Parent Portal");

export default function ParentPortalPage() {
  return (
    <>
      <PageHero
        title="Parent Portal"
        description="Parent dashboard placeholder for attendance, payment, communication, and progress modules."
        breadcrumb={[{ label: "Parent Portal" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <PortalPlaceholder title="Parent Portal" role="parent" />
        </Container>
      </section>
    </>
  );
}
