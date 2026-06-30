import Link from "next/link";
import { teachers } from "@/data/teachers";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeacherCard } from "@/components/shared/TeacherCard";

export function TeachersPreview() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Our Teachers"
            title="Qualified Educators With a Caring Approach"
            description="Featured faculty members represent the academic culture, mentoring mindset, and practical classroom support of Bright."
            className="mx-0"
          />
          <Button asChild variant="outline">
            <Link href="/teachers">View All Teachers</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.slice(0, 4).map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
