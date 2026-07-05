import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/data/site";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/ContactForm";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function HomeContactSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Visit or Contact the Admission Desk"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Card className="p-5">
              <div className="space-y-4 text-sm text-slate-700">
                <p className="flex min-w-0 gap-3">
                  <MapPin className="h-5 w-5 flex-none text-gold-600" />
                  <span className="min-w-0 break-words">{siteInfo.location}</span>
                </p>
                <p className="flex min-w-0 gap-3">
                  <Phone className="h-5 w-5 flex-none text-gold-600" />
                  <span className="min-w-0 break-words">{siteInfo.phone} / {siteInfo.admissionPhone}</span>
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
            <Card className="overflow-hidden">
              <iframe
                title="Bright School & College map"
                src="https://www.google.com/maps?q=3rd%20Floor%2036-37%20Umesh%20Datta%20Road%20Bakshibazar%20Dhaka%201211%20Bangladesh&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </Card>
          </div>
          <Card className="p-5 sm:p-6">
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
