"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function AutoHideHeader({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = React.useState(false);
  const hiddenRef = React.useRef(false);
  const previousY = React.useRef(0);
  const directionRef = React.useRef(0);
  const directionStartY = React.useRef(0);
  const lastToggleAt = React.useRef(0);
  const frame = React.useRef<number | null>(null);

  React.useEffect(() => {
    const updateHeader = () => {
      const currentY = Math.max(window.scrollY, 0);
      const delta = currentY - previousY.current;

      if (Math.abs(delta) < 4) {
        previousY.current = currentY;
        frame.current = null;
        return;
      }

      const direction = delta > 0 ? 1 : -1;

      if (direction !== directionRef.current) {
        directionRef.current = direction;
        directionStartY.current = previousY.current;
      }

      const distanceInDirection = Math.abs(currentY - directionStartY.current);
      const canToggle = performance.now() - lastToggleAt.current > 650;

      if (!hiddenRef.current && direction === 1 && currentY > 140 && distanceInDirection > 28 && canToggle) {
        hiddenRef.current = true;
        lastToggleAt.current = performance.now();
        directionStartY.current = currentY;
        setHidden(true);
      }

      if (
        hiddenRef.current &&
        canToggle &&
        (currentY < 60 || (direction === -1 && distanceInDirection > 130))
      ) {
        hiddenRef.current = false;
        lastToggleAt.current = performance.now();
        directionStartY.current = currentY;
        setHidden(false);
      }

      previousY.current = currentY;
      frame.current = null;
    };

    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(updateHeader);
      }
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[max-height,opacity,transform]",
        hidden ? "max-h-0 -translate-y-2 opacity-0" : "max-h-28 translate-y-0 opacity-100"
      )}
    >
      {children}
    </div>
  );
}
