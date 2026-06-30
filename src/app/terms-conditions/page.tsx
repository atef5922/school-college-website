import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Terms & Conditions");

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description="Professional demo terms for website usage, admission information, notices, and future portals."
        breadcrumb={[{ label: "Terms & Conditions" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="mx-auto max-w-4xl p-6 sm:p-8">
            <div className="space-y-6 text-sm leading-7 text-slate-700">
              <p>
                This website is a frontend demo for Bright School & College. Information,
                notices, events, fees, and academic content are sample data prepared for client
                presentation and future backend integration.
              </p>
              <p>
                Official school policies, payment terms, admission decisions, and result records
                should be verified by the institution before publication in production.
              </p>
              <p>
                Portal access, online payments, admission processing, SMS/email notification, and
                admin dashboard features will require secure backend services before public use.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
