"use client";

import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-700">

      {/* PREMIUM AMBIENT SYSTEM */}

      {/* Top Left */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[var(--purple-glow)] blur-[160px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[var(--cyan-glow)] blur-[180px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/10 blur-[160px]"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] dark:opacity-100 opacity-40"></div>

      {/* Background Text */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[22rem] font-bold tracking-[-0.1em] text-black/[0.03] dark:text-white/[0.015] lg:block">
        ARYAN
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black"></div>

      <Navbar />

      {/* HERO */}
      <section
  id="home" className="relative flex min-h-[90vh] items-center px-6 pt-32 md:px-14">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-8 text-xs uppercase tracking-[0.45em] text-[var(--muted)]"
            >
              Creative Full Stack Developer
            </motion.p>

            {/* TITLE */}
            <div className="space-y-2 leading-[0.82]">

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-[4.5rem] font-semibold tracking-[-0.09em] md:text-[8rem] lg:text-[9rem]"
              >
                Aryan
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gradient-to-r from-[var(--text)] via-zinc-400 to-zinc-500 bg-clip-text text-[4.5rem] font-semibold tracking-[-0.09em] text-transparent md:text-[8rem] lg:text-[9rem]"
              >
                Singh
              </motion.h1>

            </div>

            {/* DESC */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 max-w-xl"
            >

              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Building immersive digital experiences with cinematic visuals,
                modern frontend systems and premium interaction design.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-5">

                <motion.a
                  href="#projects"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition duration-500 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >

                  View Projects

                  <ArrowUpRight className="h-4 w-4 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-sm text-[var(--text)] transition duration-500 hover:opacity-80"
                >

                  Contact Me

                </motion.a>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Image Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[var(--purple-glow)] blur-[120px]"></div>

            {/* IMAGE */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.5,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[var(--border)]"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-700 group-hover:opacity-100"></div>

              <Image
                src="/profile.jpg"
                alt="Aryan Singh"
                width={460}
                height={620}
                className="h-[580px] w-auto object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* SECTIONS */}
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />

    </main>
  );
}