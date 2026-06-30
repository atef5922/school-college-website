import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({
  items
}: {
  items: {
    label: string;
    href?: string;
  }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm">
      <Link href="/" className="inline-flex items-center gap-1 text-white/80 hover:text-gold-300">
        <Home className="h-4 w-4" />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-white/50" />
          {item.href ? (
            <Link href={item.href} className="text-white/80 hover:text-gold-300">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
