"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-montserrat font-extrabold tracking-tight text-on-surface">
          ENSEW
        </Link>
      </div>

      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-poppins text-xs tracking-widest uppercase transition-all duration-300 hover:text-gold ${
              pathname === link.href
                ? "text-gold border-b-2 border-gold pb-1"
                : "text-on-surface-variant font-medium"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Globe className="text-electric-blue cursor-pointer w-5 h-5" />
        <Link
          href="/contact"
          className="hidden md:block bg-navy px-6 py-2 text-on-surface font-poppins text-xs font-semibold rounded hover:opacity-90 active:scale-95 transition-all border border-white/10"
        >
          GET IN TOUCH
        </Link>
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-poppins text-sm tracking-widest uppercase ${
                  pathname === link.href ? "text-gold" : "text-on-surface-variant"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gold text-navy px-6 py-3 text-center font-poppins text-xs font-bold rounded mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
