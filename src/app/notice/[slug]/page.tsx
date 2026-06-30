import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { notices } from "@/data/notices";
import { pageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { RelatedNotices } from "@/components/shared/NoticeCard";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return notices.map((notice) => ({ slug: notice.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const notice = notices.find((item) => item.slug === slug);
  return pageMetadata(notice?.title ?? "Notice Details", notice?.excerpt);
}

export default async function SingleNoticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = notices.find((item) => item.slug === slug);
  if (!notice) notFound();

  return (
    <>
      <PageHero
        title={notice.title}
        description={notice.excerpt}
        breadcrumb={[{ label: "Notice", href: "/notice" }, { label: notice.title }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <Card className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="green">{notice.category}</Badge>
                <span className="text-sm font-semibold text-slate-500">{formatDate(notice.date)}</span>
              </div>
              <div className="mt-8 flex items-start gap-4">
                <FileText className="mt-1 h-8 w-8 flex-none text-gold-600" />
                <p className="text-base leading-8 text-slate-700">{notice.content}</p>
              </div>
              {notice.attachment ? (
                <Button type="button" variant="gold" className="mt-8">
                  <Download className="h-4 w-4" />
                  Download Attachment
                </Button>
              ) : null}
            </Card>
            <Card className="p-5">
              <h2 className="font-display text-xl font-extrabold text-navy-900">Notice Support</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Attachments and official notice PDFs can later be managed from the admin panel.
              </p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link href="/contact">Contact Office</Link>
              </Button>
            </Card>
          </div>
          <div className="mt-12">
            <h2 className="mb-5 font-display text-2xl font-extrabold text-navy-900">Related Notices</h2>
            <RelatedNotices currentSlug={notice.slug} />
          </div>
        </Container>
      </section>
    </>
  );
}
