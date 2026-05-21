"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll(
      "a, button, input, textarea"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {

      window.removeEventListener("mousemove", moveCursor);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

    };

  }, []);

  return (
    <>
      {/* OUTER */}
      <motion.div
        animate={{
          x: position.x - (isHovering ? 40 : 18),
          y: position.y - (isHovering ? 40 : 18),

          width: isHovering ? 80 : 36,
          height: isHovering ? 80 : 36,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
          mass: 0.5,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-black/10 bg-white/10 backdrop-blur-md mix-blend-difference dark:border-white/20 lg:block"
      />

      {/* INNER DOT */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,

          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-white mix-blend-difference lg:block"
      />
    </>
  );
}