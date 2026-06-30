"use client";

import * as Tabs from "@radix-ui/react-tabs";
import type { Event } from "@/types";
import { EventCard } from "@/components/shared/EventCard";

export function EventsTabs({ events }: { events: Event[] }) {
  const groups = {
    Upcoming: events.filter((event) => event.status === "Upcoming"),
    Past: events.filter((event) => event.status === "Past")
  };

  return (
    <Tabs.Root defaultValue="Upcoming">
      <Tabs.List className="mb-8 inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-soft">
        {Object.keys(groups).map((tab) => (
          <Tabs.Trigger
            key={tab}
            value={tab}
            className="rounded-md px-5 py-2 text-sm font-bold text-slate-600 data-[state=active]:bg-navy-900 data-[state=active]:text-white"
          >
            {tab}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {Object.entries(groups).map(([tab, items]) => (
        <Tabs.Content key={tab} value={tab}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
