import type { Facility } from "@/types";
import { Card } from "@/components/ui/card";

export function FacilityCard({ facility }: { facility: Facility }) {
  const Icon = facility.icon;
  return (
    <Card className="h-full p-5 hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <div className="grid h-12 w-12 place-items-center rounded-md bg-green-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-extrabold text-navy-900">{facility.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{facility.description}</p>
    </Card>
  );
}
