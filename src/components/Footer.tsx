import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-surface-dim border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <Link href="/" className="flex flex-col items-center gap-4">
          <img src="/images/logo.png" alt="ENSEW Logo" className="h-16 w-auto rounded-lg" />
        </Link>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-poppins tracking-widest uppercase">
          <Link href="/privacy" className="text-on-surface-variant hover:text-on-surface transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-on-surface transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookies" className="text-on-surface-variant hover:text-on-surface transition-colors">
            Cookie Policy
          </Link>
          <Link href="/sitemap" className="text-on-surface-variant hover:text-on-surface transition-colors">
            Global Sitemap
          </Link>
        </div>

        <div className="text-sm font-inter text-on-surface-variant text-center opacity-80 max-w-2xl">
          © {new Date().getFullYear()} ENSEW Services Limited. All rights reserved.
          <br />
          Building Global Business Connections Through Smart Industrial Solutions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
