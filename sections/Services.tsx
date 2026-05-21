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
      className="relative overflow-hidden bg-[#f5f1ea] dark:bg-[var(--bg)] px-6 py-28"
    >

      {/* Ambient */}
      <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--purple-glow)] blur-[140px]"></div>

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[0.2fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              What I Create
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl lg:text-[5.5rem]">
              Designing immersive digital products with cinematic frontend systems.
            </h2>

          </motion.div>

        </div>

        {/* SERVICES */}
        <div className="mt-28 space-y-6">

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
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[#fcfaf6] dark:bg-[var(--card)] p-10 transition duration-700"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-700 group-hover:opacity-100"></div>

              <div className="relative z-10 grid gap-10 md:grid-cols-[0.15fr_1fr_1fr]">

                {/* NUMBER */}
                <div className="text-sm text-[var(--muted)]">
                  {service.number}
                </div>

                {/* TITLE */}
                <div>

                  <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    {service.title}
                  </h3>

                </div>

                {/* DESC */}
                <div>

                  <p className="max-w-lg leading-relaxed text-zinc-700 dark:text-zinc-400">
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