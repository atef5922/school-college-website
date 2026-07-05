import Link from "next/link";
import { quickActions } from "@/data/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";

const actionStyles = [
  {
    card: "border-white/20 from-navy-950 via-navy-900 to-blue-800 hover:from-navy-900 hover:via-navy-800 hover:to-blue-700",
    icon: "bg-white text-navy-950 shadow-sm ring-1 ring-white/70 group-hover:scale-110",
    glow: "bg-gold-300/20 group-hover:bg-gold-300/30"
  },
  {
    card: "border-white/20 from-emerald-900 via-green-700 to-navy-950 hover:from-green-800 hover:via-green-700 hover:to-navy-900",
    icon: "bg-white text-green-700 shadow-sm ring-1 ring-white/70 group-hover:scale-110",
    glow: "bg-gold-300/20 group-hover:bg-white/25"
  },
  {
    card: "border-white/20 from-slate-950 via-navy-900 to-gold-600 hover:from-navy-950 hover:via-navy-800 hover:to-gold-600",
    icon: "bg-white text-gold-600 shadow-sm ring-1 ring-white/70 group-hover:scale-110",
    glow: "bg-white/20 group-hover:bg-gold-300/25"
  }
];

export function QuickActionCards() {
  return (
    <section className="relative z-20 -mt-14 hidden bg-transparent pb-4 sm:block">
      <Container>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            const tone = actionStyles[index % actionStyles.length];

            return (
              <Link key={action.href} href={action.href} className="group h-full">
                <Card
                  className={`relative flex h-full min-h-[132px] overflow-hidden bg-gradient-to-br p-4 text-center shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:text-white hover:shadow-premium ${tone.card}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-navy-950/10 transition group-hover:bg-navy-950/5"
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl transition duration-300 ${tone.glow}`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80 transition group-hover:via-white/60"
                  />
                  <div className="relative flex w-full flex-col items-center justify-center">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-md transition duration-300 ${tone.icon}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.4} />
                    </span>
                    <h2 className="mt-4 min-h-[2.25rem] font-display text-[15px] font-extrabold leading-tight text-white drop-shadow-sm transition duration-300 group-hover:text-white">
                      {action.title}
                    </h2>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
