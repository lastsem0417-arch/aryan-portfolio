"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Animation",
    skills: ["Framer Motion", "GSAP", "Smooth Scroll"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "Creative",
    skills: ["UI/UX", "Creative Dev", "Cinematic Interfaces"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 md:px-14"
    >

      {/* Ambient */}
      <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[var(--purple-glow)] blur-[140px]"></div>

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[0.2fr_1fr]">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              Skills
            </p>

          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl lg:text-[6rem]">
              Engineering modern digital experiences through creative frontend systems.
            </h2>

          </motion.div>

        </div>

        {/* SKILLS WALL */}
        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)] p-10 transition duration-700"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-700 group-hover:opacity-100"></div>

              {/* Huge bg text */}
              <div className="absolute bottom-0 right-0 select-none text-[7rem] font-bold tracking-[-0.08em] text-black/[0.04] dark:text-white/[0.03]">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-3xl font-semibold tracking-[-0.05em]">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="relative z-10 mt-10 flex flex-wrap gap-4">

                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      scale: 1.06,
                    }}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-3 text-sm text-[var(--text)] transition duration-500 hover:opacity-80"
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}