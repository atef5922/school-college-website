import Link from "next/link";
import type { Metadata } from "next";
import { admissionSteps, policyHighlights } from "@/data/home";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Admission");

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission"
        description="Admission Open for 2026 with a transparent process for school and college sections."
        breadcrumb={[{ label: "Admission" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Admission Process"
            title="Simple Steps From Inquiry to Enrollment"
            description="The process is designed for clear guardian communication and later backend admission management."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {admissionSteps.map((step, index) => (
              <Card key={step} className="p-5 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-500 font-display text-xl font-extrabold text-navy-900">
                  {index + 1}
                </div>
                <h2 className="mt-4 font-display text-lg font-extrabold text-navy-900">{step}</h2>
              </Card>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h2 className="font-display text-2xl font-extrabold text-navy-900">Eligibility</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Age and previous class completion must match the target class level.</li>
                <li>HSC applicants must provide SSC marksheet or equivalent document.</li>
                <li>Admission test or interview may be required depending on class and seat availability.</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-2xl font-extrabold text-navy-900">Important Dates</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Application starts: 1 November 2025</li>
                <li>Admission assessment: 10 December 2025</li>
                <li>Confirmation and payment: 18 December 2025</li>
              </ul>
            </Card>
          </div>
          <div id="scholarship" className="mt-12 grid gap-4 md:grid-cols-4">
            {policyHighlights.map((item) => (
              <Card key={item} className="p-5">
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="gold" size="lg">
              <Link href="/admission/apply">Apply Online</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
