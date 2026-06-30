import { facilities } from "@/data/facilities";
import { Container } from "@/components/shared/Container";
import { FacilityCard } from "@/components/shared/FacilityCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-muted py-16">
      <Container>
        <SectionHeader
          eyebrow="Campus Facilities"
          title="A Safe, Smart, and Supportive Campus"
          description="Facilities are designed for academic practice, digital learning, safety, creativity, and everyday student wellbeing."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.slice(0, 10).map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Container>
    </section>
  );
}
