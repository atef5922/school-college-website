import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
          <div className="mt-14">
            <SectionHeader
              eyebrow="Details"
              title="Program Details"
              description="Review levels, subject focus, and expected learning support before choosing the right academic pathway."
            />
            <div className="mt-8 grid gap-5">
              {programs.map((program) => {
                const Icon = program.icon;

                return (
                  <Card
                    key={program.id}
                    id={`details-${program.id}`}
                    className="scroll-mt-32 p-5 target:border-gold-500 target:bg-gold-100/35 target:ring-2 target:ring-gold-300 sm:p-6"
                  >
                    <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                      <div className="grid h-12 w-12 place-items-center rounded-md bg-navy-900 text-gold-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-600">
                          {program.level}
                        </p>
                        <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight text-navy-900">
                          {program.title}
                        </h2>
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                          {program.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {program.subjects.map((subject) => (
                            <span
                              key={`${program.id}-${subject}`}
                              className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-800"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button asChild variant="gold" className="w-full lg:w-max">
                        <Link href="/admission/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
