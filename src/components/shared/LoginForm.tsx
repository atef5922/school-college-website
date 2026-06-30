"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { LockKeyhole, LogIn, UserRound } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";

const loginSchema = z.object({
  userId: z.string().min(2, "User ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type LoginValues = z.infer<typeof loginSchema>;

const tabs = ["Admin Login", "Teacher Login", "Student Login", "Parent Login"];

export function LoginForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { userId: "", password: "" }
  });

  function onSubmit() {
    toast({
      title: "Login interface ready",
      description: "Authentication backend will be connected later."
    });
    reset();
  }

  return (
    <Card className="mx-auto max-w-xl p-5">
      <Tabs.Root defaultValue={tabs[0]}>
        <Tabs.List className="grid gap-2 sm:grid-cols-4">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab}
              value={tab}
              className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 data-[state=active]:border-gold-500 data-[state=active]:bg-gold-100 data-[state=active]:text-navy-900"
            >
              {tab.replace(" Login", "")}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content key={tab} value={tab} className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor={`${tab}-id`} className="mb-2 block text-sm font-bold text-navy-900">
                  User ID
                </label>
                <div className="relative">
                  <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input id={`${tab}-id`} className="pl-9" {...register("userId")} />
                </div>
                {errors.userId ? <p className="mt-1 text-xs text-rose-600">{errors.userId.message}</p> : null}
              </div>
              <div>
                <label htmlFor={`${tab}-password`} className="mb-2 block text-sm font-bold text-navy-900">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input id={`${tab}-password`} type="password" className="pl-9" {...register("password")} />
                </div>
                {errors.password ? (
                  <p className="mt-1 text-xs text-rose-600">{errors.password.message}</p>
                ) : null}
              </div>
              <Button type="submit" variant="gold" className="w-full">
                <LogIn className="h-4 w-4" />
                {tab}
              </Button>
            </form>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Card>
  );
}
