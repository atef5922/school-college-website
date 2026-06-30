import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { campusImage } from "@/data/site";
import { whyChoosePoints } from "@/data/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Choose Bright"
              title="Trusted by Guardians for Academic Discipline and Care"
              description="The institution is designed for families who expect strong academics, transparent communication, safe routines, and confident student development."
              className="mx-0"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyChoosePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-600" />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={campusImage} alt="Bright campus building" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              {[
                ["98.6%", "SSC Pass"],
                ["96.4%", "HSC Pass"],
                ["25+", "Awards"]
              ].map(([value, label]) => (
                <div key={label} className="p-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-navy-900">{value}</p>
                  <p className="text-xs font-bold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
