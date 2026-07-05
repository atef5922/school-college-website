import { stats } from "@/data/home";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Container } from "@/components/shared/Container";

export function StatsBar() {
  return (
    <section className="bg-white py-5 text-navy-900 sm:mt-8 sm:bg-navy-radial sm:py-7 sm:text-white">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5 xl:grid-cols-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm sm:border-white/15 sm:bg-white/10 sm:text-white sm:shadow-none md:min-h-[152px] md:justify-between md:p-5 xl:min-h-0 xl:rounded-none xl:border-y-0 xl:border-l-0 xl:border-r xl:bg-transparent xl:p-0 xl:last:border-r-0"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-500 sm:bg-white sm:text-navy-900 xl:h-auto xl:w-auto xl:bg-transparent xl:text-gold-500">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 xl:h-9 xl:w-9" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[1.45rem] font-extrabold leading-none sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix ?? "+"} />
                  </p>
                  <p className="mt-2 max-w-[15ch] text-[11px] font-semibold leading-snug text-slate-600 sm:text-sm sm:font-normal sm:text-white/80 xl:max-w-none">
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
