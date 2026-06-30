"use client";

import * as React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { Teacher } from "@/types";
import { TeacherCard } from "@/components/shared/TeacherCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function TeachersDirectory({ teachers }: { teachers: Teacher[] }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState("All");
  const [selected, setSelected] = React.useState<Teacher | null>(null);
  const departments = ["All", ...Array.from(new Set(teachers.map((teacher) => teacher.department)))];
  const filtered = teachers.filter((teacher) => {
    const matchesQuery =
      teacher.name.toLowerCase().includes(query.toLowerCase()) ||
      teacher.department.toLowerCase().includes(query.toLowerCase());
    const matchesDepartment = department === "All" || teacher.department === department;
    return matchesQuery && matchesDepartment;
  });

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-[1fr_240px]">
        <Input
          placeholder="Search teacher or department"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search teachers"
        />
        <Select value={department} onChange={(event) => setDepartment(event.target.value)} aria-label="Filter department">
          {departments.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} onClick={() => setSelected(teacher)} />
        ))}
      </div>
      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-navy-950/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-5 shadow-premium">
            {selected ? (
              <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image src={selected.image} alt={selected.name} fill className="object-cover" />
                </div>
                <div>
                  <Dialog.Title className="font-display text-2xl font-extrabold text-navy-900">
                    {selected.name}
                  </Dialog.Title>
                  <p className="mt-1 font-bold text-green-700">{selected.designation}</p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-600">
                    <p>
                      <strong className="text-navy-900">Department:</strong> {selected.department}
                    </p>
                    <p>
                      <strong className="text-navy-900">Experience:</strong> {selected.experience}
                    </p>
                    <p>
                      <strong className="text-navy-900">Education:</strong> {selected.education}
                    </p>
                    <p className="leading-6">{selected.tagline}</p>
                  </div>
                </div>
              </div>
            ) : null}
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" className="absolute right-3 top-3" aria-label="Close teacher details">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
