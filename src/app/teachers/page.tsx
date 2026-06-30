import type { Metadata } from "next";
import { teachers } from "@/data/teachers";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { TeachersDirectory } from "@/components/shared/TeachersDirectory";

export const metadata: Metadata = pageMetadata("Teachers");

export default function TeachersPage() {
  return (
    <>
      <PageHero
        title="Teachers"
        description="Search and filter qualified teachers by department, experience, and academic role."
        breadcrumb={[{ label: "Teachers" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <TeachersDirectory teachers={teachers} />
        </Container>
      </section>
    </>
  );
}
