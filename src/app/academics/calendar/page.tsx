import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Academic Calendar");

const months = [
  ["January", "New session orientation, book distribution, class routine finalization"],
  ["February", "International Mother Language Day program and first class tests"],
  ["March", "Half-yearly preparation, science club workshop, Eid holiday notice"],
  ["May", "Parent-teacher meeting, SSC result archive, HSC admission counseling"],
  ["June", "Annual Sports, half-yearly examination, HSC routine publication"],
  ["December", "Victory Day celebration, annual examination result, prize giving"]
];

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero
        title="Academic Calendar"
        description="Month-wise academic events, exams, holidays, parent meetings, and national programs."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Academic Calendar" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {months.map(([month, details]) => (
              <Card key={month} className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold-600">2025</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-900">{month}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{details}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
