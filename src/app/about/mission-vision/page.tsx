import type { Metadata } from "next";
import { innerValueCards } from "@/data/home";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Mission & Vision");

export default function MissionVisionPage() {
  const goals = [
    "Prepare students for SSC and HSC success with structured academic mentoring.",
    "Build responsible citizens with moral values, leadership, and respect for Bangladesh.",
    "Use digital tools to improve communication, learning support, and school operations.",
    "Encourage creativity through clubs, science fair, sports, debate, and cultural programs."
  ];

  return (
    <>
      <PageHero
        title="Mission & Vision"
        description="A Bangladesh-focused education philosophy for academic success, character, leadership, and responsible citizenship."
        breadcrumb={[{ label: "About Us", href: "/about" }, { label: "Mission & Vision" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-600">Mission</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900">
                Educate With Discipline, Care, and Excellence
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Our mission is to provide a safe, organized, and inspiring academic environment
                where students develop knowledge, confidence, moral values, and communication skills.
              </p>
            </Card>
            <Card className="p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-600">Vision</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900">
                Future Leaders for Bangladesh and Beyond
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Our vision is to become a trusted school and college known for strong results,
                digital readiness, guardian confidence, and holistic student development.
              </p>
            </Card>
          </div>
          <SectionHeader
            eyebrow="Core Values"
            title="Values That Shape the Campus"
            description="Students are guided through daily routines that connect academic success with character."
            className="mt-16"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {innerValueCards.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6">
                  <Icon className="h-10 w-10 text-green-600" />
                  <h3 className="mt-5 font-display text-xl font-extrabold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {goals.map((goal, index) => (
              <Card key={goal} className="p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold-600">
                  Goal {index + 1}
                </p>
                <p className="mt-2 text-slate-700">{goal}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
