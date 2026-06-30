import Link from "next/link";
import { LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PortalPlaceholder({
  title,
  role
}: {
  title: string;
  role: "student" | "parent" | "staff";
}) {
  const features = {
    student: ["Class routine", "Result archive", "Notices", "Downloads"],
    parent: ["Attendance update", "Payment status", "Teacher message", "Progress report"],
    staff: ["Teacher panel", "Notice drafts", "Routine upload", "Student records"]
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="p-6">
        <div className="grid h-14 w-14 place-items-center rounded-md bg-navy-900 text-gold-500">
          <LockKeyhole className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-display text-3xl font-extrabold text-navy-900">{title}</h2>
        <p className="mt-3 leading-7 text-slate-600">
          This portal interface is ready for backend integration.
        </p>
        <Button asChild variant="gold" className="mt-6 w-full sm:w-max">
          <Link href="/login">Open Login</Link>
        </Button>
      </Card>
      <div className="grid gap-5 sm:grid-cols-2">
        {features[role].map((feature) => (
          <Card key={feature} className="p-5">
            <UserRound className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 font-display text-lg font-extrabold text-navy-900">{feature}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Frontend-ready module prepared for secure dashboard integration.
            </p>
          </Card>
        ))}
        <Card className="p-5 sm:col-span-2">
          <ShieldCheck className="h-8 w-8 text-gold-600" />
          <h3 className="mt-4 font-display text-lg font-extrabold text-navy-900">Secure Access Planned</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Authentication, role permissions, SMS/email notifications, and dashboards can be connected in the backend phase.
          </p>
        </Card>
      </div>
    </div>
  );
}
