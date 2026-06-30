import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, UserRound } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { pageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { BlogCard } from "@/components/shared/BlogCard";
import { PageHero } from "@/components/shared/PageHero";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return pageMetadata(post?.title ?? "Article", post?.excerpt);
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        description={post.excerpt}
        breadcrumb={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />
      <article className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-premium">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <Badge tone="blue">{post.category}</Badge>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4" />
                {post.author}
              </span>
            </div>
            <p className="mt-8 text-lg leading-8 text-slate-700">{post.content}</p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The content structure is prepared so school administrators can later publish articles
              from a dashboard with categories, images, author information, and related posts.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="mb-6 font-display text-2xl font-extrabold text-navy-900">Related Posts</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts
                .filter((item) => item.slug !== post.slug)
                .slice(0, 3)
                .map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
