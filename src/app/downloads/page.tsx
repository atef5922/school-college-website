import type { Metadata } from "next";
import { downloads } from "@/data/downloads";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { DownloadCard } from "@/components/shared/DownloadCard";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = pageMetadata("Downloads");

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        description="Forms, prospectus, academic calendar, routine, syllabus, exam routine, result guideline, and fee structure."
        breadcrumb={[{ label: "Downloads" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Resources"
            title="Download Center"
            description="Download official forms, routines, calendars, guidelines, and academic documents in PDF format."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((item) => (
              <DownloadCard key={item.id} item={item} />
            ))}
          </div>
          <div id="library" className="mt-12 rounded-lg border border-slate-200 bg-navy-50 p-6">
            <h2 className="font-display text-2xl font-extrabold text-navy-900">Library Resources</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Digital catalog, issue tracking, and reading lists can be connected later through the library module.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
