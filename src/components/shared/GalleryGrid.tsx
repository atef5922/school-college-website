"use client";

import * as React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { GalleryItem } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = React.useState("All");
  const [selected, setSelected] = React.useState<GalleryItem | null>(null);
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = category === "All" ? items : items.filter((item) => item.category === category);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-bold transition",
              category === item
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-gold-500 hover:text-navy-900"
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className={cn(
              "group relative overflow-hidden rounded-lg bg-white text-left shadow-soft",
              index % 5 === 0 ? "sm:col-span-2" : ""
            )}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
                  {item.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-extrabold text-white">{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-navy-950/85 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-2 shadow-premium outline-none sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)] sm:p-3">
            {selected ? (
              <div className="min-h-0">
                <Dialog.Title className="sr-only">{selected.title}</Dialog.Title>
                <div className="relative h-[58dvh] min-h-[220px] overflow-hidden rounded-md bg-navy-950 sm:h-[68dvh] sm:max-h-[680px]">
                  <Image src={selected.image} alt={selected.alt} fill className="object-contain" sizes="100vw" />
                </div>
                <div className="px-2 py-3 sm:p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                    {selected.category}
                  </p>
                  <p className="mt-1 break-words font-display text-lg font-extrabold leading-tight text-navy-900 sm:text-xl">
                    {selected.title}
                  </p>
                </div>
              </div>
            ) : null}
            <Dialog.Close asChild>
              <Button variant="gold" size="icon" className="absolute right-3 top-3 shadow-premium sm:right-5 sm:top-5" aria-label="Close image">
                <X className="h-5 w-5" />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
