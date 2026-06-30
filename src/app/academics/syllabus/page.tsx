import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Syllabus");

const syllabus = [
  ["Primary", "English, Bangla, Mathematics, Science, Art"],
  ["Class VI-VIII", "English, Bangla, Mathematics, Science, ICT, Bangladesh Studies"],
  ["Class IX-X", "Science, Business Studies, Humanities subject sets"],
  ["Class XI-XII", "HSC group-wise syllabus with practical and board exam alignment"]
];

export default function SyllabusPage() {
  return (
    <>
      <PageHero
        title="Syllabus"
        description="Class-wise syllabus cards with download placeholders for future admin uploads."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Syllabus" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Syllabus"
            title="Subject Lists by Academic Level"
            description="Static syllabus cards are prepared so uploaded PDFs can be connected later."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {syllabus.map(([level, subjects]) => (
              <Card key={level} className="p-6">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">{level}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{subjects}</p>
                <Button type="button" variant="outline" className="mt-5">Download Syllabus</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
