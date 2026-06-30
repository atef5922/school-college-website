import { stats } from "@/data/home";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Container } from "@/components/shared/Container";

export function StatsBar() {
  return (
    <section className="mt-8 bg-navy-radial py-7 text-white">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 lg:border-r lg:border-white/20 lg:last:border-r-0"
              >
                <Icon className="h-9 w-9 flex-none text-gold-500" />
                <div>
                  <p className="font-display text-3xl font-extrabold leading-none">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix ?? "+"} />
                  </p>
                  <p className="mt-1 text-sm text-white/75">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
