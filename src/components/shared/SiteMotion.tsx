"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardSelector = [
  "article",
  ".shadow-soft",
  ".shadow-premium",
  ".rounded-lg.border"
].join(",");

function uniqueOuterElements(elements: HTMLElement[]) {
  return elements
    .filter((element, index, list) => list.indexOf(element) === index)
    .filter((element, _index, list) => !list.some((candidate) => candidate !== element && candidate.contains(element)));
}

function animateSection(section: HTMLElement, index: number) {
  const isHomeHero = index === 0 && Boolean(section.querySelector(".swiper"));
  if (isHomeHero) return;

  const headingTargets = Array.from(
    section.querySelectorAll<HTMLElement>("h1, h2, [data-motion-heading]")
  ).slice(0, 3);

  if (headingTargets.length) {
    gsap.from(headingTargets, {
      autoAlpha: 0,
      y: 22,
      duration: 0.72,
      ease: "power3.out",
      stagger: 0.08,
      clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: section,
        start: "top 84%",
        once: true
      }
    });
  }

  const cards = uniqueOuterElements(Array.from(section.querySelectorAll<HTMLElement>(cardSelector))).slice(0, 18);

  if (cards.length) {
    gsap.from(cards, {
      autoAlpha: 0,
      y: 26,
      scale: 0.985,
      duration: 0.68,
      ease: "power3.out",
      stagger: 0.055,
      clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        once: true
      }
    });
    return;
  }

  const fallback = section.querySelector<HTMLElement>(".container") ?? section.firstElementChild;
  if (fallback instanceof HTMLElement) {
    gsap.from(fallback, {
      autoAlpha: 0,
      y: 24,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "transform,opacity,visibility",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true
      }
    });
  }
}

function animateFloatingActions() {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[aria-label^='Chat with'], [aria-label='Scroll to top']")
  );

  targets.forEach((target, index) => {
    gsap.fromTo(
      target,
      { y: 0 },
      {
        y: index % 2 === 0 ? -5 : -4,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.16
      }
    );
  });
}

export function SiteMotion() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const main = document.querySelector("main");
      if (!main) return;

      const sections = Array.from(main.querySelectorAll<HTMLElement>(":scope > section"));
      sections.forEach((section, index) => animateSection(section, index));
      animateFloatingActions();
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 420);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [pathname]);

  return null;
}
