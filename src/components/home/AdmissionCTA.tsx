import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { siteInfo } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { normalizePhoneNumber } from "@/lib/utils";

export function AdmissionCTA() {
  return (
    <section className="bg-navy-radial py-16 text-white">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold-300">
              Admission Open
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold">Admission Open for 2026</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              Give your child the best start for a bright future.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-lg font-bold text-gold-300">
              <PhoneCall className="h-5 w-5" />
              {siteInfo.admissionPhone}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link href="/admission/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-navy-900">
              <a href={`tel:${normalizePhoneNumber(siteInfo.admissionPhone)}`}>Call Admission Office</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
