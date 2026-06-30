import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PortalPlaceholder } from "@/components/shared/PortalPlaceholder";

export const metadata: Metadata = pageMetadata("Student Portal");

export default function StudentPortalPage() {
  return (
    <>
      <PageHero
        title="Student Portal"
        description="Student dashboard placeholder prepared for result, routine, notice, and download modules."
        breadcrumb={[{ label: "Student Portal" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <PortalPlaceholder title="Student Portal" role="student" />
        </Container>
      </section>
    </>
  );
}
