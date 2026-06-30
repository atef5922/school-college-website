import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { siteInfo } from "@/data/site";

export function PageHero({
  title,
  description,
  breadcrumb
}: {
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-navy-radial py-16 text-white sm:py-20">
      <Container>
        <Breadcrumb items={breadcrumb} />
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-gold-300">
            {siteInfo.name}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
