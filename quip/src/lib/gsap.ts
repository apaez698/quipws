"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function useGsapReveal() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;

    // Kill any existing ScrollTriggers before creating new ones
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      const els = ref.current?.querySelectorAll(".reveal");
      if (!els) return;

      els.forEach((el) => {
        // Set initial state immediately
        gsap.set(el, { opacity: 0, y: 30 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });

      // Force refresh after setup
      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, [pathname]);

  return ref;
}
