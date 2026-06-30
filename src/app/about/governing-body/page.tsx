import Image from "next/image";
import type { Metadata } from "next";
import { governingBody } from "@/data/governingBody";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Governing Body");

export default function GoverningBodyPage() {
  return (
    <>
      <PageHero
        title="Governing Body"
        description="A responsible committee structure representing academic leadership, teachers, and guardians."
        breadcrumb={[{ label: "About Us", href: "/about" }, { label: "Governing Body" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {governingBody.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-extrabold text-navy-900">{member.name}</h2>
                  <p className="font-bold text-green-700">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
