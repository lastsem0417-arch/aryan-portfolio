"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "MERN",
    label: "Full Stack Focus",
  },
  {
    number: "UI/UX",
    label: "Creative Direction",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-36 md:px-14"
    >

      {/* PREMIUM AMBIENT */}
      <div className="absolute left-[10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--purple-glow)] opacity-70 blur-[140px]" />

      <div className="absolute bottom-[0%] right-[5%] h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[0.18fr_1fr_0.7fr]">

          {/* LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="sticky top-32">

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.55em] text-[var(--muted)]">
                About
              </p>

              <div className="h-20 w-[1px] bg-gradient-to-b from-[var(--text)]/40 to-transparent" />

            </div>

          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >

            {/* SMALL TEXT */}
            <div className="mb-8 flex items-center gap-4">

              <div className="h-[1px] w-16 bg-[var(--text)]/30" />

              <span className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
                Creative Developer
              </span>

            </div>

            {/* MAIN HEADING */}
           {/* MAIN HEADING */}
<h2 className="max-w-4xl text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-[var(--text)] md:text-[5.5rem] lg:text-[5.8rem]">

  Crafting
  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
    {" "}cinematic{" "}
  </span>

  digital experiences with modern interaction systems.

</h2>

            {/* BOTTOM TEXT */}
           {/* BOTTOM TEXT */}
<div className="mt-10 max-w-xl">

  <p className="text-[15px] leading-[1.9] text-[var(--muted)] md:text-[17px]">

    I’m Aryan Singh — a creative full stack developer focused on
    premium frontend systems, immersive UI architecture and
    next-generation digital experiences using React, Next.js and
    motion-driven interaction design.

  </p>

  <p className="mt-6 text-[15px] leading-[1.9] text-[var(--muted)] md:text-[17px]">

    Passionate about blending aesthetics with performance,
    I engineer interfaces that feel emotional, fluid and
    visually unforgettable across both desktop and mobile.

  </p>

</div>

          </motion.div>

          {/* SIDE CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-end"
          >

            <div className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-2xl">

              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10" />

              {/* top */}
              <div className="relative z-10 flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                    Experience
                  </p>

                  <h3 className="mt-4 text-6xl font-semibold tracking-[-0.08em]">
                    3+
                  </h3>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl">
                  ✦
                </div>

              </div>

              {/* bottom */}
              <p className="relative z-10 mt-10 text-base leading-relaxed text-[var(--muted)]">

                Building immersive interfaces, scalable systems and modern web
                products with cinematic motion and premium frontend engineering.

              </p>

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        {/* STATS */}
<div className="mt-24 grid gap-5 md:grid-cols-3">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-10 backdrop-blur-2xl transition duration-700"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-700 group-hover:opacity-100" />

              {/* HUGE BG TEXT */}
              <div className="absolute -bottom-5 right-2 text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/[0.03]">
                0{index + 1}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                <h3 className="text-5xl font-semibold tracking-[-0.07em] text-[var(--text)]">
                  {item.number}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                  {item.label}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}