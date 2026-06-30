import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { AdmissionForm } from "@/components/shared/AdmissionForm";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Apply Online");

export default function ApplyOnlinePage() {
  return (
    <>
      <PageHero
        title="Apply Online"
        description="Frontend-only admission inquiry form prepared for future backend and admin panel integration."
        breadcrumb={[{ label: "Admission", href: "/admission" }, { label: "Apply Online" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="mx-auto max-w-4xl p-5 sm:p-7">
            <AdmissionForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
