import { stats } from "@/data/home";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Container } from "@/components/shared/Container";

export function StatsBar() {
  return (
    <section className="bg-white py-5 text-navy-900 sm:mt-8 sm:bg-navy-radial sm:py-7 sm:text-white">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-md border border-slate-200 bg-slate-50/80 p-3 shadow-sm sm:flex sm:items-center sm:gap-4 sm:border-white/15 sm:bg-white/10 sm:p-4 sm:shadow-none lg:rounded-none lg:border-y-0 lg:border-l-0 lg:border-r lg:bg-transparent lg:p-0 lg:last:border-r-0"
              >
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-md bg-navy-900 text-gold-500 sm:mb-0 sm:bg-white sm:text-navy-900 lg:bg-transparent lg:text-gold-500">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-9 lg:w-9" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[1.45rem] font-extrabold leading-none sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix ?? "+"} />
                  </p>
                  <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-600 sm:text-sm sm:font-normal sm:text-white/75">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
