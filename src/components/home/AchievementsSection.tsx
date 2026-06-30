import { achievements } from "@/data/achievements";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function AchievementsSection() {
  return (
    <section className="bg-muted py-16">
      <Container>
        <SectionHeader
          eyebrow="Achievements"
          title="Results, Recognition, and Student Confidence"
          description="Bright celebrates success in board results, science, debate, sports, and leadership programs."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="p-6 hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-gold-100 text-navy-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
