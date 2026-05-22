"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {

      setLoading(false);

      document.body.style.overflow = "auto";

    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{
            y: 0,
          }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 1.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[999999] overflow-hidden bg-[#111111]"
        >

          {/* GRAIN */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* WRAPPER */}
          <div className="relative h-full w-full overflow-hidden">

            {/* NAME BLOCK */}
            <div className="absolute bottom-2 left-3 md:bottom-0 md:left-8">

              {/* ARYAN */}
              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[4.6rem] font-[300] uppercase leading-[0.82] tracking-[-0.09em] text-[#f5f5f5] md:text-[14rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Aryan
                </motion.h1>

              </div>

              {/* SINGH */}
              <div className="overflow-hidden -mt-3 md:-mt-10">

                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[4.6rem] font-[300] uppercase leading-[0.82] tracking-[-0.09em] text-[#f5f5f5] md:text-[14rem]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Singh
                </motion.h1>

              </div>

            </div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.3,
                duration: 1,
              }}
              className="absolute bottom-7 right-3 flex flex-col items-start md:bottom-14 md:right-12"
            >

              {/* Creative Developer */}
              <div className="mb-1 md:mb-4">

                <p className="text-[10px] font-light leading-[0.92] text-white md:text-[2rem]">
                  Creative
                </p>

                <p className="text-[10px] font-light leading-[0.92] text-white md:text-[2rem]">
                  Developer
                </p>

              </div>

              {/* Portfolio */}
              <p className="pl-[1px] text-[8px] uppercase tracking-[0.16em] text-zinc-400 md:text-sm">
                Portfolio ↗
              </p>

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}   