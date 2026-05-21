"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/80 text-black backdrop-blur-xl transition duration-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
    >

      <motion.div
        key={theme}
        initial={{
          rotate: -180,
          opacity: 0,
        }}
        animate={{
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >

        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}

      </motion.div>

    </motion.button>
  );
}