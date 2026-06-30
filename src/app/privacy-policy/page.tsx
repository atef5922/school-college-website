import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Privacy Policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Professional demo privacy policy for school website data handling and future backend integration."
        breadcrumb={[{ label: "Privacy Policy" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="mx-auto max-w-4xl p-6 sm:p-8">
            <div className="space-y-6 text-sm leading-7 text-slate-700">
              <p>
                Bright School & College respects the privacy of students, guardians, teachers,
                and visitors. This demo frontend does not store personal data or connect to a live
                backend.
              </p>
              <p>
                Future backend integration may collect admission inquiries, contact messages,
                portal login details, payment status, academic records, and communication logs for
                official institutional use.
              </p>
              <p>
                Personal information should be protected through secure authentication, role-based
                access, encrypted transport, responsible retention policies, and administrative
                controls.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
