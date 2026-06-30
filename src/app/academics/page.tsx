import Link from "next/link";
import type { Metadata } from "next";
import { facilities } from "@/data/facilities";
import { programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { FacilityCard } from "@/components/shared/FacilityCard";
import { PageHero } from "@/components/shared/PageHero";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Academics");

export default function AcademicsPage() {
  const supports = ["Class teacher mentoring", "Weekly assessment", "Exam preparation", "Guardian feedback"];
  return (
    <>
      <PageHero
        title="Academics"
        description="A structured academic environment for primary, secondary, and higher secondary learners in Bangladesh."
        breadcrumb={[{ label: "Academics" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Curriculum Approach"
            title="Board-Aligned Learning With Practical Support"
            description="Bright combines national curriculum expectations, English-language presentation, disciplined routines, and active classroom support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {supports.map((support) => (
              <Card key={support} className="p-5 text-center">
                <h2 className="font-display text-lg font-extrabold text-navy-900">{support}</h2>
                <p className="mt-2 text-sm text-slate-600">Prepared for academic workflow integration.</p>
              </Card>
            ))}
          </div>
          <div id="facilities" className="mt-16">
            <SectionHeader
              eyebrow="Facilities"
              title="Learning Facilities"
              description="Academic support extends into labs, ICT rooms, library, auditorium, and safety systems."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.slice(0, 8).map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="gold">
              <Link href="/academics/programs">Explore Academic Programs</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
