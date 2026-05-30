"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? "bg-surface/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpeg" alt="ENSEW Logo" className="h-10 w-auto rounded" />
          <span className="text-2xl font-montserrat font-extrabold tracking-tighter text-on-surface hidden sm:block">
            ENSEW<span className="text-gold">.</span>
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-poppins text-[10px] tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 ${
              pathname === link.href ? "text-gold" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Globe className="hidden sm:block text-electric-blue cursor-pointer w-5 h-5 hover:text-gold transition-colors" />
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-navy-light px-7 py-3 text-white font-poppins text-[10px] font-bold tracking-[0.1em] rounded-lg hover:bg-gold hover:text-navy active:scale-95 transition-all border border-white/10"
        >
          GET IN TOUCH <ArrowRight size={14} />
        </Link>
        
        {/* Mobile Menu Button - Larger touch target for HIG/Material */}
        <button
          className="md:hidden text-on-surface p-2 -mr-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Full screen for better UX */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 w-full h-[calc(100vh-80px)] bg-background z-40 md:hidden flex flex-col p-8"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`font-montserrat text-3xl font-bold tracking-tight ${
                      pathname === link.href ? "text-gold" : "text-on-surface"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-12"
            >
              <Link
                href="/contact"
                className="w-full bg-gold text-navy flex items-center justify-center gap-3 py-5 text-lg font-poppins font-bold rounded-2xl shadow-xl shadow-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET IN TOUCH <ArrowRight />
              </Link>
              <div className="flex justify-center gap-8 mt-12 text-on-surface-variant">
                <Globe className="w-6 h-6" />
                <span className="font-poppins text-xs tracking-widest font-bold">LAGOS • LONDON • HOUSTON</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
