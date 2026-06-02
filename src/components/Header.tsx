"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Solutions", 
    href: "/services", 
    dropdown: [
      { name: "Import & Export", href: "/services#import-export" },
      { name: "Industrial Supply", href: "/services#industrial" },
      { name: "Logistics", href: "/services#logistics" }
    ] 
  },
  { 
    name: "Industries", 
    href: "/industries",
    dropdown: [
      { name: "Oil & Gas", href: "/industries#oil-gas" },
      { name: "Manufacturing", href: "/industries#manufacturing" },
      { name: "Construction", href: "/industries#construction" }
    ]
  },
  { name: "Projects", href: "/projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdownOpen(null);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? "nav-glassmorphism py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center gap-4 relative z-[60]">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img src="/images/logo%20ensew.png" alt="ENSEW Logo" className="h-20 w-auto rounded hover:scale-105 transition-transform" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-10 items-center">
        {navLinks.map((link) => (
          <div 
            key={link.name} 
            className="relative py-2"
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={link.href}
              className={`font-poppins text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-1.5 ${
                pathname === link.href 
                  ? "text-gold" 
                  : (isScrolled ? "text-white/80 hover:text-gold" : "text-white hover:text-gold")
              }`}
              onClick={handleLinkClick}
            >
              {link.name}
              {link.dropdown && (
                <ChevronDown 
                  size={10} 
                  className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} 
                />
              )}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>

            <AnimatePresence>
              {link.dropdown && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full pt-4"
                >
                  <div className="glass-card p-5 min-w-[240px] flex flex-col gap-3 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-[10px] font-poppins tracking-widest uppercase text-white/70 hover:text-gold transition-all hover:translate-x-1"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <Link
          href="/track"
          className={`font-poppins text-[10px] tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 ${
            pathname === "/track" 
              ? "text-gold" 
              : (isScrolled ? "text-white/80 hover:text-gold" : "text-white hover:text-gold")
          }`}
          onClick={handleLinkClick}
        >
          Track Shipment
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${pathname === "/track" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </Link>
      </nav>

      <div className="flex items-center gap-6 relative z-[60]">
        <ThemeToggle />
        <Globe className={`hidden lg:block cursor-pointer w-5 h-5 transition-all hover:scale-110 ${isScrolled ? "text-electric-blue hover:text-gold" : "text-white hover:text-gold"}`} />
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-navy-light px-7 py-3 text-white font-poppins text-[10px] font-bold tracking-[0.1em] rounded-lg hover:bg-gold hover:text-navy hover:scale-105 active:scale-95 transition-all border border-white/10"
          onClick={handleLinkClick}
        >
          GET IN TOUCH <ArrowRight size={14} />
        </Link>
        
        <button
          className={`lg:hidden p-2 -mr-2 transition-all hover:scale-110 ${isScrolled || isMobileMenuOpen ? "text-white" : "text-white"}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-navy z-[55] lg:hidden flex flex-col pt-32 px-10 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`font-montserrat text-3xl font-extrabold tracking-tight ${
                        pathname === link.href ? "text-gold" : "text-white"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                        className="p-3 text-gold"
                      >
                        <ChevronDown 
                          size={28}
                          className={`transition-transform duration-300 ${mobileDropdownOpen === link.name ? "rotate-180" : ""}`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {link.dropdown && mobileDropdownOpen === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pl-6 pt-6 pb-2 border-l-2 border-gold/30 mt-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="text-lg font-poppins tracking-widest uppercase text-white/70 hover:text-gold"
                              onClick={handleLinkClick}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link
                href="/track"
                className={`font-montserrat text-3xl font-extrabold tracking-tight ${
                  pathname === "/track" ? "text-gold" : "text-white"
                }`}
                onClick={handleLinkClick}
              >
                TRACK SHIPMENT
              </Link>

              <div className="h-px bg-white/10 my-4" />

              <Link
                href="/contact"
                className="w-full bg-gold text-navy flex items-center justify-center gap-4 py-6 text-xl font-poppins font-black rounded-2xl shadow-2xl shadow-gold/20 hover:scale-105 active:scale-95 transition-all"
                onClick={handleLinkClick}
              >
                GET IN TOUCH <ArrowRight size={24} />
              </Link>
            </div>

            <div className="mt-auto pt-20 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 text-white/40">
                <Globe size={20} className="text-electric-blue" />
                <span className="font-poppins text-[10px] tracking-[0.3em] font-bold uppercase">Lagos • London • Houston</span>
              </div>
              <div className="text-[8px] font-poppins tracking-widest text-white/20 uppercase">
                © 2026 ENSEW SERVICES. ALL RIGHTS RESERVED.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
