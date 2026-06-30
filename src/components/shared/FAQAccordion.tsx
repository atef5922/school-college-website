"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="rounded-lg border border-slate-200 bg-white shadow-soft">
          <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-extrabold text-navy-900">
            {item.question}
            <ChevronDown className="h-5 w-5 flex-none text-gold-600 transition group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="px-5 pb-5 text-sm leading-7 text-slate-600">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
