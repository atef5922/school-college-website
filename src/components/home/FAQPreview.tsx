import Link from "next/link";
import { faqs } from "@/data/faqs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FAQPreview() {
  return (
    <section id="faq" className="bg-muted py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Common Questions From Guardians"
              description="Admission, routine, result, transport, and portal details are organized for quick decision making."
              className="mx-0"
            />
            <Button asChild variant="gold" className="mt-6">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}
