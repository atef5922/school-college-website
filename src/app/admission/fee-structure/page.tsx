import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Fee Structure");

const fees = [
  ["Primary Section", "Admission Fee", "BDT 18,000"],
  ["Primary Section", "Monthly Tuition", "BDT 4,500"],
  ["Secondary Section", "Admission Fee", "BDT 24,000"],
  ["Secondary Section", "Monthly Tuition", "BDT 6,000"],
  ["Higher Secondary", "Admission Fee", "BDT 32,000"],
  ["Higher Secondary", "Monthly Tuition", "BDT 7,500"],
  ["Optional", "Transport Fee", "Route based"],
  ["Optional", "Lab Fee", "Class based"]
];

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        description="Transparent demo fee table for admission, monthly tuition, lab, and transport policies."
        breadcrumb={[{ label: "Admission", href: "/admission" }, { label: "Fee Structure" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    {["Section", "Fee Type", "Amount"].map((head) => (
                      <th key={head} className="px-5 py-4 font-bold">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fees.map(([section, type, amount]) => (
                    <tr key={section + type} className="border-b border-slate-200">
                      <td className="px-5 py-4 font-bold text-navy-900">{section}</td>
                      <td className="px-5 py-4 text-slate-700">{type}</td>
                      <td className="px-5 py-4 text-slate-700">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Fees may vary by class level and selected services.", "Scholarship support may be considered for eligible students.", "Online payment integration can be added in the backend phase."].map((note) => (
              <Card key={note} className="p-5">
                <p className="text-sm leading-6 text-slate-600">{note}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
