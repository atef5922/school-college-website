import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import principalPhoto from "../../../../principle.webp";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Principal Message");

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHero
        title="Principal Message"
        description="A message from Dr. Farhana Rahman on discipline, creativity, leadership, and moral values."
        breadcrumb={[{ label: "About Us", href: "/about" }, { label: "Principal Message" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={principalPhoto} alt="Dr. Farhana Rahman" fill className="object-cover object-top" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">Dr. Farhana Rahman</h2>
                <p className="font-bold text-green-700">Principal</p>
                <p className="mt-2 text-sm text-slate-600">PhD in Education</p>
              </div>
            </Card>
            <Card className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-slate-700">
                At Bright School & College, we believe education is not only about academic
                success, but also about discipline, creativity, leadership, and moral values. Our
                goal is to prepare every student to become confident, responsible, and future-ready.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Our teachers work closely with guardians so every learner receives guidance inside
                and outside the classroom. We value respectful behavior, punctuality, curiosity,
                teamwork, and communication skills because these habits shape the future of a
                student as much as examination results do.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                The institution is ready for modern digital management, but our core commitment
                remains deeply human: to know our students, support their growth, and help them
                serve Bangladesh with knowledge and integrity.
              </p>
              <p className="mt-8 font-display text-2xl text-navy-900">Farhana Rahman</p>
              <Button asChild variant="gold" className="mt-6">
                <Link href="/admission/apply">Apply for Admission</Link>
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
