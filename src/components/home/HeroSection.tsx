"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner10 from "../../../banner10.webp";
import banner11 from "../../../banner11.webp";
import banner12 from "../../../banner12.webp";
import banner13 from "../../../banner13.webp";
import banner14 from "../../../banner14.webp";
import { Button } from "@/components/ui/button";

type HeroSlide = {
  id: string;
  image: StaticImageData;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  objectPosition: string;
};

const slides: HeroSlide[] = [
  {
    id: "morning-assembly",
    image: banner10,
    title: "Assembly",
    ctaLabel: "Admission Open 2026",
    ctaHref: "/admission/apply",
    objectPosition: "center"
  },
  {
    id: "main-campus",
    image: banner11,
    title: "Green Campus",
    ctaLabel: "Admission Details",
    ctaHref: "/admission",
    objectPosition: "center"
  },
  {
    id: "faculty-excellence",
    image: banner12,
    title: "Faculty Excellence",
    ctaLabel: "Meet Our Teachers",
    ctaHref: "/teachers",
    objectPosition: "center"
  },
  {
    id: "modern-campus",
    image: banner13,
    title: "Modern Campus",
    ctaLabel: "View Academics",
    ctaHref: "/academics",
    objectPosition: "center"
  },
  {
    id: "global-innovation",
    image: banner14,
    title: "Innovation Summit",
    ctaLabel: "Explore Events",
    ctaHref: "/events",
    objectPosition: "center"
  }
];

export function HeroSection() {
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      <div className="relative w-full">
        <div className="relative w-full overflow-hidden bg-navy-950">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={850}
            autoplay={{
              delay: 5200,
              disableOnInteraction: false
            }}
            onSwiper={setSwiper}
            onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
            className="h-[540px] sm:h-[600px] lg:h-[660px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-[6200ms] ease-out"
                    style={{ objectPosition: slide.objectPosition }}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="container flex h-full items-center justify-center px-6 pb-14 sm:px-20 lg:px-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.62, ease: "easeOut" }}
                  className="pointer-events-auto flex w-full max-w-3xl flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18, scaleX: 0.9 }}
                    animate={{ opacity: 1, y: 0, scaleX: 1 }}
                    transition={{ duration: 0.56, delay: 0.08, ease: "easeOut" }}
                    className="max-w-[calc(100vw-3rem)] border border-white/25 bg-black/50 px-8 py-5 backdrop-blur-[2px] sm:px-12 sm:py-6"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                      className="max-w-full break-words font-display text-[2.35rem] font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl"
                    >
                      {activeSlide.title}
                    </motion.h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, delay: 0.34 }}
                    className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"
                  >
                    <Button asChild variant="gold" size="lg" className="shadow-none">
                      <Link href={activeSlide.ctaHref}>
                        {activeSlide.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white bg-white text-navy-900 shadow-none hover:border-gold-300 hover:bg-gold-100 hover:text-navy-900"
                    >
                      <Link href="/gallery">
                        Explore Campus
                        <PlayCircle className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiper?.slidePrev()}
            className="absolute left-4 top-[46%] z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-navy-950/38 text-white shadow-none backdrop-blur-sm transition hover:border-gold-300 hover:bg-gold-500 hover:text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-300 sm:left-8 sm:h-14 sm:w-14 lg:left-10"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiper?.slideNext()}
            className="absolute right-4 top-[46%] z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-navy-950/38 text-white shadow-none backdrop-blur-sm transition hover:border-gold-300 hover:bg-gold-500 hover:text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-300 sm:right-8 sm:h-14 sm:w-14 lg:right-10"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
}
