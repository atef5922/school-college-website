import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import chairmanPhoto from "../../../chairman.webp";
import principalPhoto from "../../../principle.webp";
import { siteInfo } from "@/data/site";
import { Container } from "@/components/shared/Container";

const leadershipMessages = [
  {
    title: "Message From Chairman",
    name: "Mr. Md. Abdul Karim",
    role: "Chairman",
    image: chairmanPhoto,
    href: "/about/governing-body",
    note:
      "Our priority is to maintain a disciplined, caring, and well-managed campus where students can learn with confidence. We continue to invest in academic planning, teacher support, and a safe environment for every learner.",
    accentClass: "from-navy-950 via-navy-800 to-gold-500",
    badgeClass: "bg-navy-950 text-white"
  },
  {
    title: "Message From Principal",
    name: "Dr. Farhana Rahman",
    role: "Principal",
    image: principalPhoto,
    href: "/about/principal-message",
    note:
      "Education at Bright means academic excellence with character. Our teachers work closely with students and guardians so every child can grow with discipline, creativity, responsibility, and purpose.",
    accentClass: "from-green-700 via-navy-800 to-gold-500",
    badgeClass: "bg-green-700 text-white"
  }
];

export function PrincipalMessage() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mb-8 max-w-3xl">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-green-700">
              Leadership Messages
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Chairman & Principal Messages
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {leadershipMessages.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium"
            >
              <div className={`h-1.5 bg-gradient-to-r ${item.accentClass}`} />
              <div className="grid min-h-[350px] lg:grid-cols-[220px_1fr]">
                <div className="relative min-h-[220px] overflow-hidden bg-navy-50 lg:min-h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 220px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
                </div>

                <div className="flex min-w-0 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-green-700">
                        {item.role}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-navy-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="grid h-11 w-11 flex-none place-items-center rounded-md bg-gold-100 text-navy-900">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 border-l-4 border-gold-500 pl-4">
                    <h4 className="font-display text-2xl font-extrabold leading-tight text-navy-900">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm font-bold text-slate-500">{siteInfo.name}</p>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{item.note}</p>

                  <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span
                      className={`inline-flex w-fit items-center rounded-md px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] ${item.badgeClass}`}
                    >
                      {item.role}
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-950 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-green-700"
                    >
                      View Message
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
