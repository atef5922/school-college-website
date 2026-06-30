import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PortalPlaceholder } from "@/components/shared/PortalPlaceholder";

export const metadata: Metadata = pageMetadata("Staff Portal");

export default function StaffPortalPage() {
  return (
    <>
      <PageHero
        title="Staff Portal"
        description="Staff dashboard placeholder for teacher panel, notice drafts, routine upload, and records."
        breadcrumb={[{ label: "Staff Portal" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <PortalPlaceholder title="Staff Portal" role="staff" />
        </Container>
      </section>
    </>
  );
}
