"use client";

import { motion } from "framer-motion";

export default function LoadingIllustration() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-gold/10 border-t-gold"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-4 border-electric-blue/10 border-b-electric-blue"
        />

        {/* Center Logo/Icon Placeholder */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </motion.div>

        {/* Pulsing Glow */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gold rounded-full blur-2xl -z-10"
        />
      </div>
    </div>
  );
}
