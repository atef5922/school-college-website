import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = pageMetadata("Class Routine");

const routine = [
  ["Sunday", "English", "Mathematics", "Science", "ICT", "Bangladesh Studies"],
  ["Monday", "Bangla", "Mathematics", "English", "Physical Education", "Library"],
  ["Tuesday", "Science", "Higher Math", "English", "Religion", "Club Hour"],
  ["Wednesday", "Bangla", "ICT", "Mathematics", "Social Science", "Art"],
  ["Thursday", "English", "Science Lab", "Mathematics", "Assessment", "Assembly"]
];

export default function RoutinePage() {
  return (
    <>
      <PageHero
        title="Class Routine"
        description="Filter-ready class routine layout for future backend routine uploads."
        breadcrumb={[{ label: "Academics", href: "/academics" }, { label: "Class Routine" }]}
      />
      <section className="bg-white py-16">
        <Container>
          <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <Select aria-label="Select class">
                <option>Class X</option>
                <option>Class VIII</option>
                <option>Class XI Science</option>
              </Select>
              <Select aria-label="Select section">
                <option>Section A</option>
                <option>Section B</option>
              </Select>
              <Button type="button" variant="gold">Download PDF</Button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    {["Day", "1st Period", "2nd Period", "3rd Period", "4th Period", "5th Period"].map((head) => (
                      <th key={head} className="px-4 py-3 font-bold">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {routine.map((row) => (
                    <tr key={row[0]} className="border-b border-slate-200">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 text-slate-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-6 grid gap-4 md:hidden">
            {routine.map((row) => (
              <Card key={row[0]} className="p-4">
                <h2 className="font-display text-lg font-extrabold text-navy-900">{row[0]}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{row.slice(1).join(", ")}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
