import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/ContactForm";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Contact");

export default function ContactPage() {
  const departments = [
    ["Admission Office", siteInfo.admissionPhone],
    ["Accounts Office", siteInfo.phone],
    ["Academic Office", siteInfo.email]
  ];

  return (
    <>
      <PageHero
        title="Contact"
        description="Reach the admission desk, academic office, accounts office, or visit the Bakshibazar campus."
        breadcrumb={[{ label: "Contact" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <Card className="p-6">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">Contact Info</h2>
                <div className="mt-5 space-y-4 text-sm text-slate-700">
                  <p className="flex min-w-0 gap-3">
                    <MapPin className="h-5 w-5 flex-none text-gold-600" />
                    <span className="min-w-0 break-words">{siteInfo.location}</span>
                  </p>
                  <p className="flex min-w-0 gap-3">
                    <Phone className="h-5 w-5 flex-none text-gold-600" />
                    <span className="min-w-0 break-words">{siteInfo.phone}</span>
                  </p>
                  <p className="flex min-w-0 gap-3">
                    <Mail className="h-5 w-5 flex-none text-gold-600" />
                    <span className="min-w-0 break-words">{siteInfo.email}</span>
                  </p>
                  <p className="flex min-w-0 gap-3">
                    <Clock className="h-5 w-5 flex-none text-gold-600" />
                    <span className="min-w-0 break-words">{siteInfo.officeTime}</span>
                  </p>
                </div>
              </Card>
              <Card className="p-6">
                <h2 className="font-display text-2xl font-extrabold text-navy-900">Department Contacts</h2>
                <div className="mt-5 space-y-3">
                  {departments.map(([name, contact]) => (
                    <div key={name} className="rounded-md bg-navy-50 p-4">
                      <p className="font-bold text-navy-900">{name}</p>
                      <p className="text-sm text-slate-600">{contact}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="overflow-hidden">
                <iframe
                  title="Bright map"
                  src="https://www.google.com/maps?q=3rd%20Floor%2036-37%20Umesh%20Datta%20Road%20Bakshibazar%20Dhaka%201211%20Bangladesh&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                />
              </Card>
            </div>
            <Card className="h-max p-5 sm:p-7">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
