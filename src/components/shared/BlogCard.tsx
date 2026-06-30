import Image from "next/image";
import Link from "next/link";
import { CalendarDays, UserRound } from "lucide-react";
import type { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Card className="group h-full overflow-hidden hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <Link href={`/blog/${post.slug}`} className={featured ? "grid h-full lg:grid-cols-2" : "block"}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          />
        </div>
        <div className="p-5">
          <Badge tone="blue">{post.category}</Badge>
          <h3 className="mt-3 font-display text-xl font-extrabold text-navy-900 group-hover:text-green-700">
            {post.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <UserRound className="h-4 w-4" />
              {post.author}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        </div>
      </Link>
    </Card>
  );
}
