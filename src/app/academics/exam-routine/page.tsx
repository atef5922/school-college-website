import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Exam Routine");

const exams = [
  ["20 Jun", "English 1st Paper", "10:00 AM - 1:00 PM", "Room 301"],
  ["23 Jun", "Mathematics", "10:00 AM - 1:00 PM", "Room 301"],
  ["26 Jun", "Science", "10:00 AM - 1:00 PM", "Science Block"],
  ["29 Jun", "ICT Practical", "11:00 AM - 1:00 PM", "ICT Lab"]
];

export default function ExamRoutinePage() {
  return (
    <>
      <PageHero
        title="Exam Routine"
        description="Exam schedule, upcoming notices, and download-ready structure."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Exam Routine" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <Select aria-label="Select exam">
                <option>Half Yearly Examination</option>
                <option>Annual Examination</option>
                <option>SSC Test Examination</option>
              </Select>
              <Select aria-label="Select class">
                <option>Class X</option>
                <option>Class XI</option>
              </Select>
              <Button type="button" variant="gold">Download PDF</Button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    {["Date", "Subject", "Time", "Venue"].map((head) => (
                      <th key={head} className="px-4 py-3 font-bold">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exams.map((row) => (
                    <tr key={row[0] + row[1]} className="border-b border-slate-200">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 text-slate-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Bring admit card", "Arrive 30 minutes early", "Mobile phones are not allowed"].map((notice) => (
              <Card key={notice} className="p-5">
                <h2 className="font-display text-lg font-extrabold text-navy-900">{notice}</h2>
                <p className="mt-2 text-sm text-slate-600">Instruction prepared for future exam notice management.</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
