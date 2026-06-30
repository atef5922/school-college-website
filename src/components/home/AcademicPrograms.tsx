import { programs } from "@/data/programs";
import { Container } from "@/components/shared/Container";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function AcademicPrograms() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeader
          eyebrow="Academic Programs"
          title="Structured Learning From Early Years to HSC"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
