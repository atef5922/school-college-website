import Image from "next/image";
import type { Metadata } from "next";
import { campusImage } from "@/data/site";
import { innerValueCards } from "@/data/home";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata(
  "About School",
  "Learn about Bright School & College, a modern school and college in Dhanmondi, Dhaka."
);

export default function AboutPage() {
  const timeline = [
    ["1997", "Founded with a commitment to disciplined, student-centered education."],
    ["2008", "Expanded secondary section with science lab and ICT learning support."],
    ["2016", "Higher Secondary section launched for Science, Business Studies, and Humanities."],
    ["2025", "Digital-ready frontend prepared for full school management integration."]
  ];

  return (
    <>
      <PageHero
        title="About Bright School & College"
        description="A premium demo school and college identity built around academic excellence, discipline, values, and Bangladesh-relevant learning."
        breadcrumb={[{ label: "About School" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Our Story"
                title="A Dhaka Institution Built for Future-Ready Learners"
                description="Bright School & College supports students from early years to HSC through strong routines, responsible guidance, updated curriculum, and active guardian communication."
                className="mx-0"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["28+", "Years"],
                  ["8,600+", "Students"],
                  ["520+", "Teachers"]
                ].map(([value, label]) => (
                  <Card key={label} className="p-5 text-center">
                    <p className="font-display text-3xl font-extrabold text-navy-900">{value}</p>
                    <p className="text-sm font-bold text-slate-500">{label}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-premium">
              <Image src={campusImage} alt="Bright campus" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-muted py-16">
        <Container>
          <SectionHeader
            eyebrow="History"
            title="Journey of Excellence"
            description="The demo story is structured for a real school to replace with authentic milestones later."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {timeline.map(([year, text]) => (
              <Card key={year} className="p-5">
                <p className="font-display text-3xl font-extrabold text-gold-600">{year}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Core Values"
            title="Why Parents Trust Bright"
            description="The school culture emphasizes discipline, academic care, communication, safety, and leadership."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {innerValueCards.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6">
                  <Icon className="h-10 w-10 text-green-600" />
                  <h2 className="mt-5 font-display text-xl font-extrabold text-navy-900">{value.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
