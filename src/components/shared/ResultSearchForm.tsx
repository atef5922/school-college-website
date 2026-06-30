"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/components/ui/toast";

const resultSchema = z.object({
  roll: z.string().min(2, "Student ID or roll is required"),
  className: z.string().min(1, "Select class"),
  exam: z.string().min(1, "Select exam"),
  year: z.string().min(4, "Year is required")
});

type ResultValues = z.infer<typeof resultSchema>;

export function ResultSearchForm() {
  const { toast } = useToast();
  const [result, setResult] = React.useState<ResultValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResultValues>({
    resolver: zodResolver(resultSchema),
    defaultValues: { roll: "", className: "", exam: "", year: "2025" }
  });

  function onSubmit(values: ResultValues) {
    setResult(values);
    toast({
      title: "Demo result generated",
      description: "Thank you. This form is ready for backend integration."
    });
  }

  return (
    <div className="space-y-6">
      <Card className="p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-5">
          <div className="md:col-span-1">
            <label htmlFor="roll" className="mb-2 block text-sm font-bold text-navy-900">
              Student ID / Roll
            </label>
            <Input id="roll" {...register("roll")} />
            {errors.roll ? <p className="mt-1 text-xs text-rose-600">{errors.roll.message}</p> : null}
          </div>
          <div>
            <label htmlFor="className" className="mb-2 block text-sm font-bold text-navy-900">
              Class
            </label>
            <Select id="className" {...register("className")}>
              <option value="">Select</option>
              {["Class V", "Class VIII", "Class X", "Class XI", "Class XII"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="exam" className="mb-2 block text-sm font-bold text-navy-900">
              Exam
            </label>
            <Select id="exam" {...register("exam")}>
              <option value="">Select</option>
              {["Half Yearly", "Annual", "SSC Test", "HSC Test"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="year" className="mb-2 block text-sm font-bold text-navy-900">
              Year
            </label>
            <Input id="year" {...register("year")} />
          </div>
          <div className="flex items-end">
            <Button type="submit" variant="gold" className="w-full">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </form>
      </Card>
      {result ? (
        <Card className="p-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
            Demo result preview
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {[
              ["Roll", result.roll],
              ["Class", result.className],
              ["Exam", result.exam],
              ["GPA", "5.00"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-navy-50 p-4">
                <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
                <p className="mt-1 font-display text-xl font-extrabold text-navy-900">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Result data is static for the frontend demo. The lookup is ready for backend integration.
          </p>
        </Card>
      ) : null}
    </div>
  );
}
