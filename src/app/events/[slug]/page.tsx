import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { EventCard } from "@/components/shared/EventCard";
import { PageHero } from "@/components/shared/PageHero";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return pageMetadata(event?.title ?? "Event Details", event?.excerpt);
}

export default async function SingleEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <>
      <PageHero
        title={event.title}
        description={event.excerpt}
        breadcrumb={[{ label: "Events", href: "/events" }, { label: event.title }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-premium">
                <Image src={event.image} alt={event.title} fill className="object-cover" priority />
              </div>
              <Card className="mt-6 p-6">
                <Badge tone={event.status === "Upcoming" ? "green" : "navy"}>{event.status}</Badge>
                <p className="mt-5 text-base leading-8 text-slate-700">{event.content}</p>
              </Card>
            </div>
            <Card className="h-max p-5">
              <h2 className="font-display text-xl font-extrabold text-navy-900">Event Schedule</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <p className="flex gap-3">
                  <CalendarDays className="h-5 w-5 text-gold-600" />
                  {formatDate(event.date)}
                </p>
                <p className="flex gap-3">
                  <Clock className="h-5 w-5 text-gold-600" />
                  {event.time}
                </p>
                <p className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold-600" />
                  {event.location}
                </p>
              </div>
              <Button asChild variant="gold" className="mt-6 w-full">
                <Link href="/contact">Contact Event Office</Link>
              </Button>
            </Card>
          </div>
          <div className="mt-12">
            <h2 className="mb-5 font-display text-2xl font-extrabold text-navy-900">Related Events</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {events
                .filter((item) => item.slug !== event.slug)
                .slice(0, 3)
                .map((item) => (
                  <EventCard key={item.slug} event={item} />
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
