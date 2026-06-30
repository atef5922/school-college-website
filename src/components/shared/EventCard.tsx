import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import type { Event } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getDateParts } from "@/lib/utils";

export function EventCard({ event }: { event: Event }) {
  const parts = getDateParts(event.date);
  return (
    <Card className="group overflow-hidden hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <Link href={`/events/${event.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute left-4 top-4 grid h-16 w-14 place-items-center rounded-md bg-white text-center shadow-soft">
            <span className="block text-lg font-extrabold leading-none text-navy-900">{parts.day}</span>
            <span className="text-[10px] font-bold uppercase text-green-700">{parts.month}</span>
          </div>
          <Badge tone={event.status === "Upcoming" ? "green" : "navy"} className="absolute right-4 top-4">
            {event.status}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-extrabold text-navy-900 group-hover:text-green-700">
            {event.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{event.excerpt}</p>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-600" />
              {event.time}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-600" />
              {event.location}
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold-600" />
              {parts.day} {parts.month}, {parts.year}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
