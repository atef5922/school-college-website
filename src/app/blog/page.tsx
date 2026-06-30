import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import { pageMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/shared/BlogCard";
import { BlogDirectory } from "@/components/shared/BlogDirectory";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("News & Articles");

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        title="News & Articles"
        description="Academic guidance, admission updates, campus life, and guardian communication articles."
        breadcrumb={[{ label: "News & Articles" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <BlogCard post={featured} featured />
          <div className="mt-10">
            <BlogDirectory posts={rest.length ? rest : blogPosts} />
          </div>
        </Container>
      </section>
    </>
  );
}
