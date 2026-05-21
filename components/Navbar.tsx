"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="fixed top-0 z-50 w-full"
    >

      {/* CONTAINER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-14">

        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{
            y: -2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="group relative"
        >

          <h1 className="text-sm font-medium uppercase tracking-[0.45em] text-[var(--text)] transition duration-500">
            Aryan
          </h1>

          {/* subtle underline */}
          <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--text)] transition-all duration-500 group-hover:w-full"></div>

        </motion.a>

        {/* NAV */}
        <nav className="hidden items-center gap-12 md:flex">

          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="group relative text-sm uppercase tracking-[0.22em] text-[var(--muted)] transition duration-500 hover:text-[var(--text)]"
            >

              {item.name}

              {/* hover line */}
              <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--text)] transition-all duration-500 group-hover:w-full"></div>

            </motion.a>
          ))}

        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          <ThemeToggle />

          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="hidden text-sm uppercase tracking-[0.22em] text-[var(--muted)] transition duration-500 hover:text-[var(--text)] md:block"
          >

            Let’s Talk

          </motion.a>

        </div>

      </div>

      {/* SUBTLE LINE */}
      <div className="mx-auto h-[1px] w-[92%] bg-black/5 dark:bg-white/[0.06]"></div>

    </motion.header>
  );
}