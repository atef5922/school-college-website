"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactValues = z.infer<typeof contactSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs font-semibold text-rose-600">{message}</p>;
}

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit() {
    toast({
      title: "Thank you",
      description: "Thank you. This form is ready for backend integration."
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-navy-900">
            Name
          </label>
          <Input id="contact-name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-bold text-navy-900">
            Phone
          </label>
          <Input id="contact-phone" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-navy-900">
            Email
          </label>
          <Input id="contact-email" type="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-navy-900">
            Subject
          </label>
          <Input id="contact-subject" {...register("subject")} />
          <FieldError message={errors.subject?.message} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-navy-900">
          Message
        </label>
        <Textarea id="contact-message" {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>
      <Button type="submit" variant="gold" className="w-full sm:w-max">
        <Send className="h-4 w-4" />
        Submit Message
      </Button>
    </form>
  );
}
