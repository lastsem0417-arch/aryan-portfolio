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
      className="relative overflow-hidden px-6 py-28 md:px-14"
    >

      {/* Ambient Glow */}
      <div className="absolute left-[20%] top-[20%] h-[350px] w-[350px] rounded-full bg-[var(--purple-glow)] blur-[120px]"></div>

      {/* TOP */}
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.2fr_1fr_0.7fr]">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              About
            </p>

          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.07em] md:text-6xl lg:text-7xl">
              Crafting cinematic digital experiences with modern interaction design.
            </h2>

          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-end"
          >

            <div className="max-w-md">

              <p className="text-base leading-relaxed text-[var(--muted)]">
                I’m Aryan Singh, a creative full stack developer focused on
                premium frontend systems and immersive UI experiences using
                React & Next.js.
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Passionate about blending aesthetics with performance, I build
                elegant digital products that feel modern, responsive and
                emotionally engaging.
              </p>

            </div>

          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-24 grid gap-5 md:grid-cols-3">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-xl transition duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-700 group-hover:opacity-100"></div>

              <h3 className="relative z-10 text-4xl font-semibold tracking-[-0.05em]">
                {item.number}
              </h3>

              <p className="relative z-10 mt-3 text-sm text-[var(--muted)]">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}