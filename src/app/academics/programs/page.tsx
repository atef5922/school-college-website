import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Academic Programs");

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Academic Programs"
        description="Detailed academic pathways from Playgroup to HSC with Science, Business Studies, and Humanities."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Programs" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Programs"
            title="Class Levels, Subjects, and Learning Outcomes"
            description="Each program is designed for age-appropriate learning, exam readiness, values, communication, and practical skills."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
