"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Smart Grocery",
    category: "AI Powered Grocery Platform",
    image: "/Project1.png",

    description:
      "An intelligent grocery platform built for a college project featuring AI-based item scanning, voice assistant integration and smart cart management using modern full stack technologies.",

    tech: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Express",
      "AI Detection",
    ],

    live: "https://smart-grocery-frontend.onrender.com",

    github: "https://github.com/lastsem0417-arch/smart-grocery",
  },

  {
    title: "BeatFlow Studio",
    category: "Real-Time Music Collaboration",
    image: "/Project2.png",

    description:
      "A cinematic music collaboration platform with real-time communication, audio/video interaction and multi-role studio workflow including admin, producer, rapper, lyricist and listeners.",

    tech: [
      "MERN Stack",
      "Socket.io",
      "WebRTC",
      "Video Call",
      "Real-Time Chat",
    ],

    live: "https://beatflow-studio-wnt0.onrender.com",

    github: "https://github.com/lastsem0417-arch/BEATFLOW-STUDIO",
  },

  {
    title: "Mariyam Mehendi",
    category: "Production E-Commerce Website",
    image: "/project3.png",

    description:
      "A modern production-level mehendi business platform designed for online bookings, product showcasing and premium customer interaction with a luxury aesthetic interface.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Booking System",
    ],

    live: "https://mariyam-mehendi-7k42.onrender.com/",

    github: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 md:px-14"
    >

      {/* Ambient Glow */}
      <div className="absolute right-0 top-[20%] h-[400px] w-[400px] rounded-full bg-[var(--cyan-glow)] blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-[0.2fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              Projects
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.07em] md:text-6xl lg:text-7xl">
              Selected projects combining immersive visuals with modern engineering systems.
            </h2>

          </motion.div>

        </div>

        {/* PROJECTS */}
        <div className="mt-28 space-y-36">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_0_80px_rgba(255,255,255,0.03)]"
              >

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition duration-700 group-hover:opacity-100"></div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="overflow-hidden"
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-20 p-8">

                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                    {project.title}
                  </h3>

                </div>

              </motion.div>

              {/* RIGHT CONTENT */}
              <div>

                <p className="text-lg leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--text)] backdrop-blur-xl"
                    >
                      {tech}
                    </div>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">

                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition duration-500 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                  >

                    Live Preview

                    <ArrowUpRight className="h-4 w-4" />

                  </motion.a>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      whileHover={{
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-4 text-sm text-[var(--text)] backdrop-blur-xl transition duration-500 hover:opacity-80"
                    >

                      GitHub

                      <span>↗</span>

                    </motion.a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}