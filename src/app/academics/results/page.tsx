import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ResultSearchForm } from "@/components/shared/ResultSearchForm";

export const metadata: Metadata = pageMetadata("Results");

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Results"
        description="Search-ready results interface for SSC, HSC, and internal assessment archives."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Results" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <ResultSearchForm />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["SSC Result Archive", "HSC Result Archive", "Internal Assessment"].map((item) => (
              <Card key={item} className="p-5">
                <h2 className="font-display text-xl font-extrabold text-navy-900">{item}</h2>
                <p className="mt-2 text-sm text-slate-600">Backend integration pending for official data upload and lookup.</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
