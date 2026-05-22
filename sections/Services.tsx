"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Modern responsive interfaces built with React, Next.js and cinematic interaction systems focused on premium user experience.",
  },

  {
    number: "02",
    title: "Creative Development",
    description:
      "Immersive digital experiences blending motion, typography, visual hierarchy and smooth frontend animations.",
  },

  {
    number: "03",
    title: "Full Stack Systems",
    description:
      "Production-level MERN stack applications including authentication, APIs, databases and real-time architectures.",
  },

  {
    number: "04",
    title: "Real-Time Experiences",
    description:
      "Interactive systems powered by WebRTC, Socket.io and live collaboration technologies for modern web platforms.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--bg)] px-6 py-28 md:px-14"
    >

      {/* FORCE BG LAYER */}
      <div className="absolute inset-0 bg-[var(--bg)]"></div>

      {/* Ambient */}
      <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--purple-glow)] opacity-70 blur-[140px]"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] [background-size:80px_80px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[0.2fr_1fr]">

          {/* LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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

            <div className="sticky top-28">

              <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
                What I Create
              </p>

              <div className="mt-5 h-16 w-[1px] bg-gradient-to-b from-[var(--text)]/30 to-transparent"></div>

            </div>

          </motion.div>

          {/* HEADING */}
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
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="mb-8 flex items-center gap-4">

              <div className="h-[1px] w-14 bg-[var(--text)]/20"></div>

              <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
                Premium Development
              </span>

            </div>

            <h2 className="max-w-5xl text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.08em] text-[var(--text)] md:text-[5.2rem] lg:text-[5.8rem]">

              Designing
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}immersive{" "}
              </span>

              digital products with cinematic frontend systems.

            </h2>

          </motion.div>

        </div>

        {/* SERVICES */}
        <div className="mt-24 space-y-6">

          {services.map((service, index) => (

            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-10 backdrop-blur-2xl transition duration-700"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10 opacity-0 transition duration-700 group-hover:opacity-100"></div>

              {/* HUGE BG NUMBER */}
              <div className="absolute -bottom-5 right-5 select-none text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/[0.03] dark:text-white/[0.03]">
                {service.number}
              </div>

              <div className="relative z-10 grid gap-10 md:grid-cols-[0.15fr_1fr_1fr]">

                {/* NUMBER */}
                <div className="text-sm text-[var(--muted)]">
                  {service.number}
                </div>

                {/* TITLE */}
                <div>

                  <h3 className="text-3xl font-semibold tracking-[-0.06em] text-[var(--text)] transition duration-500 group-hover:text-[var(--muted)] md:text-[2.6rem]">
                    {service.title}
                  </h3>

                </div>

                {/* DESC */}
                <div>

                  <p className="max-w-lg text-[15px] leading-[1.9] text-[var(--muted)] md:text-[16px]">
                    {service.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}