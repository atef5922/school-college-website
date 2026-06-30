"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";

const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  applyingClass: z.string().min(1, "Select a class"),
  previousInstitution: z.string().min(2, "Previous institution is required"),
  parentName: z.string().min(2, "Parent name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  address: z.string().min(8, "Address is required")
});

type AdmissionValues = z.infer<typeof admissionSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-semibold text-rose-600">{message}</p>;
}

export function AdmissionForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AdmissionValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: "",
      applyingClass: "",
      previousInstitution: "",
      parentName: "",
      phone: "",
      email: "",
      address: ""
    }
  });

  function onSubmit() {
    toast({
      title: "Application received",
      description: "Thank you. This form is ready for backend integration."
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="student-name" className="mb-2 block text-sm font-bold text-navy-900">
            Student Name
          </label>
          <Input id="student-name" {...register("studentName")} />
          <FieldError message={errors.studentName?.message} />
        </div>
        <div>
          <label htmlFor="applying-class" className="mb-2 block text-sm font-bold text-navy-900">
            Class Applying For
          </label>
          <Select id="applying-class" {...register("applyingClass")}>
            <option value="">Select class</option>
            {["Playgroup", "Nursery", "Class I", "Class VI", "Class IX", "Class XI Science", "Class XI Business Studies", "Class XI Humanities"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FieldError message={errors.applyingClass?.message} />
        </div>
      </div>
      <div>
        <label htmlFor="previous-institution" className="mb-2 block text-sm font-bold text-navy-900">
          Previous Institution
        </label>
        <Input id="previous-institution" {...register("previousInstitution")} />
        <FieldError message={errors.previousInstitution?.message} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="parent-name" className="mb-2 block text-sm font-bold text-navy-900">
            Parent Name
          </label>
          <Input id="parent-name" {...register("parentName")} />
          <FieldError message={errors.parentName?.message} />
        </div>
        <div>
          <label htmlFor="admission-phone" className="mb-2 block text-sm font-bold text-navy-900">
            Phone
          </label>
          <Input id="admission-phone" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="admission-email" className="mb-2 block text-sm font-bold text-navy-900">
            Email
          </label>
          <Input id="admission-email" type="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-bold text-navy-900">
          Address
        </label>
        <Textarea id="address" {...register("address")} />
        <FieldError message={errors.address?.message} />
      </div>
      <Button type="submit" variant="gold" className="w-full md:w-max">
        <Send className="h-4 w-4" />
        Submit Application
      </Button>
    </form>
  );
}
