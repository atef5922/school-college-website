import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/Container";
import { LoginForm } from "@/components/shared/LoginForm";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Login");

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Login"
        description="Role-based login interface prepared for admin, teacher, student, and parent authentication."
        breadcrumb={[{ label: "Login" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <LoginForm />
        </Container>
      </section>
    </>
  );
}
