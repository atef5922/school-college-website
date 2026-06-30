"use client";

import * as React from "react";

export function AnimatedCounter({
  value,
  suffix = "+"
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1100;
        const start = performance.now();
        const tick = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const decimals = Number.isInteger(value) ? 0 : 1;
          setCount(Number((value * progress).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
        maximumFractionDigits: Number.isInteger(value) ? 0 : 1
      })}
      {suffix}
    </span>
  );
}
