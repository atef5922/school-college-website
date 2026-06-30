import type { Metadata } from "next";
import { notices } from "@/data/notices";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { NoticeDirectory } from "@/components/shared/NoticeDirectory";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Notice Board");

export default function NoticePage() {
  return (
    <>
      <PageHero
        title="Notice Board"
        description="Search and filter admission, exam, result, holiday, event, and general notices."
        breadcrumb={[{ label: "Notice Board" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <NoticeDirectory notices={notices} />
        </Container>
      </section>
    </>
  );
}
