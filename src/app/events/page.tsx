import type { Metadata } from "next";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { EventsTabs } from "@/components/shared/EventsTabs";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Events");

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        description="Upcoming and past campus events, academic programs, national celebrations, and co-curricular activities."
        breadcrumb={[{ label: "Events" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <EventsTabs events={events} />
        </Container>
      </section>
    </>
  );
}
