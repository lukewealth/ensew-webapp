"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full bg-surface border border-white/5 hover:border-gold/50 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 transform transition-transform duration-500 ${resolvedTheme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-gold"}`} />
        <Moon className={`absolute inset-0 transform transition-transform duration-500 ${resolvedTheme === "light" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-electric-blue"}`} />
      </div>
    </motion.button>
  );
}
