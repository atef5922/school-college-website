import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <Card className="group overflow-hidden hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-navy-900 text-gold-500 shadow-soft">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold-600">
          {program.level}
        </p>
        <h3 className="mt-2 font-display text-xl font-extrabold text-navy-900">{program.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {program.subjects.slice(0, 4).map((subject) => (
            <span key={subject} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-800">
              {subject}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-5">
          <Link href={`/academics/programs#details-${program.id}`} aria-label={`Learn more about ${program.title}`}>
            Learn More
          </Link>
        </Button>
      </div>
    </Card>
  );
}
