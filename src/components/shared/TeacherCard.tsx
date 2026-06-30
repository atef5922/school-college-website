import Image from "next/image";
import type { Teacher } from "@/types";
import { Card } from "@/components/ui/card";

export function TeacherCard({
  teacher,
  onClick
}: {
  teacher: Teacher;
  onClick?: () => void;
}) {
  const content = (
    <Card className="h-full overflow-hidden hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-extrabold text-navy-900">{teacher.name}</h3>
        <p className="mt-1 text-sm font-bold text-green-700">{teacher.designation}</p>
        <p className="mt-2 text-sm text-slate-600">{teacher.department} - {teacher.experience}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{teacher.tagline}</p>
      </div>
    </Card>
  );

  if (!onClick) return content;

  return (
    <button type="button" onClick={onClick} className="h-full w-full text-left">
      {content}
    </button>
  );
}
