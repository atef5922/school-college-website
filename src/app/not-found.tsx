import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-100 text-navy-900">
            <SearchX className="h-10 w-10" />
          </div>
          <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.24em] text-gold-600">
            Page not found
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-navy-900">
            The page you requested is unavailable.
          </h1>
          <p className="mt-4 text-slate-600">
            Please return to the homepage or use the navigation menu to find the right section.
          </p>
          <Button asChild variant="gold" className="mt-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
