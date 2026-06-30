"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Parents, Students, and Alumni Say"
        />
        <div className="mt-10">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <Card className="h-full p-6">
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-700">&quot;{item.quote}&quot;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-navy-900">{item.name}</p>
                      <p className="text-xs font-semibold text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
