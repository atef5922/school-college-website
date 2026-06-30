import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featureCards } from "@/data/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";

export function FeatureCards() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid gap-5 lg:grid-cols-4">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.href} className="group overflow-hidden hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                  <div className="absolute bottom-0 left-5 grid h-12 w-12 translate-y-1/2 place-items-center rounded-full bg-navy-900 text-gold-500 shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-5 pt-10">
                  <h2 className="font-display text-lg font-extrabold text-navy-900">{card.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                  <Link href={card.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-navy-900">
                    {card.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
