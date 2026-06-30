import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Admission Requirements");

export default function AdmissionRequirementsPage() {
  const requirements = [
    ["Documents", "Birth certificate, recent photographs, previous academic transcript, transfer certificate if applicable."],
    ["Assessment", "Written assessment or interview may be arranged depending on class level."],
    ["Guardian Info", "Guardian NID, contact number, email, and current address are required."],
    ["HSC Admission", "SSC marksheet, testimonial, group preference, and subject counseling confirmation."]
  ];
  return (
    <>
      <PageHero
        title="Admission Requirements"
        description="Clear requirements for guardians preparing school or HSC admission documents."
        breadcrumb={[{ label: "Admission", href: "/admission" }, { label: "Requirements" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Requirements"
            title="Documents and Eligibility"
            description="The admission desk verifies documents before final confirmation and payment."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {requirements.map(([title, text]) => (
              <Card key={title} className="p-6">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
