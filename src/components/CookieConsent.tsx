"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, CheckCircle } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";

const CookieConsent = () => {
  const [hasConsented, setHasConsented] = useLocalStorage("ensew_cookie_consent", false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasConsented]);

  const handleAccept = () => {
    setHasConsented(true);
    setIsVisible(false);
    // Mark the first visit to optimize future loads
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ensew_last_visit", new Date().toISOString());
    }
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-12 md:max-w-md"
        >
          <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-all duration-500" />
            
            <div className="flex items-start gap-4">
              <div className="bg-gold/10 p-3 rounded-2xl shrink-0">
                <Shield className="text-gold w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-montserrat font-bold text-white mb-2 uppercase tracking-tight">Privacy Preference</h3>
                <p className="text-on-surface-variant text-sm font-inter leading-relaxed mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and deliver optimized performance. By clicking &quot;Accept All&quot;, you agree to our use of cookies.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="w-full gold-button px-6 py-3 text-navy font-poppins font-bold text-[10px] tracking-widest rounded-xl uppercase flex items-center justify-center gap-2 group"
                  >
                    Accept All <CheckCircle size={14} />
                  </button>
                  <button
                    onClick={handleDecline}
                    className="w-full px-6 py-3 text-white font-poppins font-bold text-[10px] tracking-widest rounded-xl uppercase border border-white/10 hover:bg-white/5 transition-all"
                  >
                    Manage Settings
                  </button>
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] font-poppins tracking-widest uppercase">
                  <Link href="/privacy" className="text-on-surface-variant hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="text-white/20">•</span>
                  <Link href="/cookies" className="text-on-surface-variant hover:text-gold transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              <button 
                onClick={handleDecline}
                className="text-on-surface-variant hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
