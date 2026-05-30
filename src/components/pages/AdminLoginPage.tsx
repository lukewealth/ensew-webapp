"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Loader2, ShieldAlert } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError("");

    // Simple mock authentication
    setTimeout(() => {
      if (username === "admin" && password === "ensew2026") {
        localStorage.setItem("ensew_admin_token", "prototype_token");
        window.location.href = "/admin/dashboard";
      } else {
        setError("Invalid credentials. Please try again.");
        setIsLoggingIn(false);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20 px-6 bg-background">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass-card p-10 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-navy-light rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/30">
              <ShieldAlert className="text-gold w-8 h-8" />
            </div>
            <h1 className="text-2xl font-montserrat font-extrabold text-white uppercase tracking-tight">Admin <span className="text-gold">Ops Center</span></h1>
            <p className="text-[10px] font-poppins text-on-surface-variant uppercase tracking-widest mt-2">Restricted Access Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 pl-12 text-white outline-none focus:border-gold transition-colors"
                  placeholder="admin"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 pl-12 text-white outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest text-center">{error}</p>}

            <button 
              type="submit"
              disabled={isLoggingIn}
              className="gold-button w-full py-5 text-navy font-poppins font-bold text-xs tracking-widest rounded-xl uppercase flex items-center justify-center gap-2"
            >
              {isLoggingIn ? <Loader2 className="animate-spin" /> : "Access Dashboard"}
            </button>
          </form>

          <p className="mt-8 text-center text-on-surface-variant text-[10px] uppercase tracking-widest">
            © 2026 ENSEW Services Ops Hub
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
