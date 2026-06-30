"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";

const schema = z.object({
  email: z.string().email("Enter a valid email address")
});

type NewsletterValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    toast({
      title: "Subscription ready",
      description: "Thank you. This form is ready for backend integration."
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="relative">
        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
        <Input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
          className="border-white/20 bg-white/5 pl-9 text-white placeholder:text-white/50 focus:border-gold-500"
          {...register("email")}
        />
      </div>
      {errors.email ? <p className="text-xs text-gold-300">{errors.email.message}</p> : null}
      <Button type="submit" variant="gold" className="w-full">
        Subscribe
      </Button>
    </form>
  );
}
