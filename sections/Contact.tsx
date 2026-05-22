"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {

    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_s4g98eh",
        "template_b1nhsse",
        formRef.current,
        "OKAfjExv6pvHSzY1J"
      )
      .then(() => {

        alert("Message sent successfully 😭🔥");

        formRef.current?.reset();

      })
      .catch((error) => {

        console.log(error);

        alert("Something went wrong.");

      });

  };

  const socials = [
  {
    name: "GitHub",
    link: "https://github.com/lastsem0417-arch",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aryan-singh-57a310398/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aryxnnn._04/",
  },
  {
    name: "Résumé",
    link: "/Resume.pdf",
  },
];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f1ea] px-6 py-28 dark:bg-[var(--bg)]"
    >

      {/* Ambient */}
      <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-[140px] dark:bg-[var(--purple-glow)]"></div>

      <div className="mx-auto max-w-7xl">

        <div className="grid items-start gap-20 lg:grid-cols-[0.9fr_1fr]">

          {/* LEFT */}
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

            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              Contact
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.08em] md:text-7xl">
              Let’s create
              <br />
              something
              <br />
              unforgettable.
            </h2>

            <p className="mt-10 max-w-md text-lg leading-relaxed text-zinc-700 dark:text-zinc-400">
              Open for internships, freelance projects and premium frontend collaborations.
            </p>

           {/* SOCIALS */}
<div className="mt-16 flex flex-wrap gap-4">

  {socials.map((item, index) => (

    <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-full border border-[var(--border)] bg-white/80 px-6 py-3 text-sm text-[var(--text)] backdrop-blur-xl transition duration-500 hover:scale-[1.03] hover:bg-black hover:text-white dark:bg-[var(--card)] dark:hover:bg-white dark:hover:text-black"
    >

      <span className="relative z-10 flex items-center gap-2">
        {item.name}

        {item.name === "Résumé" && (
          <ArrowUpRight className="h-4 w-4 transition duration-500 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        )}
      </span>

    </motion.a>

  ))}

</div>

            {/* EMAIL */}
            <div className="mt-20">

              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                Email
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                aryansingh171517@gmail.com
              </h3>

            </div>

          </motion.div>

          {/* RIGHT */}
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[#fcfaf6] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] dark:bg-[var(--card)] dark:shadow-none md:p-12"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative z-10 space-y-8"
            >

              {/* NAME */}
              <div>

                <label className="mb-3 block text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[var(--border)] bg-[#f7f3ed] px-5 py-5 text-lg outline-none transition duration-500 placeholder:text-zinc-500 focus:border-[var(--text)] dark:bg-transparent"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="mb-3 block text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[var(--border)] bg-[#f7f3ed] px-5 py-5 text-lg outline-none transition duration-500 placeholder:text-zinc-500 focus:border-[var(--text)] dark:bg-transparent"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="mb-3 block text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[#f7f3ed] px-5 py-5 text-lg outline-none transition duration-500 placeholder:text-zinc-500 focus:border-[var(--text)] dark:bg-transparent"
                />

              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-3 rounded-full bg-black px-8 py-5 text-sm font-medium text-white transition duration-500 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >

                Send Message

                <ArrowUpRight className="h-4 w-4 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}