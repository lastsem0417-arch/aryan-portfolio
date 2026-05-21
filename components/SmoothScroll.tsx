"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    function raf(time: number) {

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    // smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

      anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");

        if (!targetId) return;

        const target = document.querySelector(targetId);

        if (target) {

          lenis.scrollTo(target, {
            offset: -40,
            duration: 1.6,
            easing: (t: number) =>
              Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });

        }

      });

    });

    return () => {

      lenis.destroy();

    };

  }, []);

  return null;
}