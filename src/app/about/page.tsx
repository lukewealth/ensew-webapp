"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, ShieldCheck, Zap, TrendingUp, Users, Handshake } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative py-24 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-navy/60 z-10 backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="About Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6"
            >
              Our Legacy of <span className="text-gold">Excellence</span>
            </motion.h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Bridging local opportunities with global business standards through logistics, contracting, and industrial supply.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-montserrat font-bold text-white mb-6">The ENSEW Story</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  ENSEW Services Limited was founded to bridge local opportunities with global business standards through logistics, contracting, industrial supply, and international trade.
                </p>
                <p>
                  We recognized a critical gap in the market for a reliable, professional, and internationally capable partner that could handle the complexity of Nigerian and global industrial operations.
                </p>
                <p>
                  Today, we stand as a beacon of reliability, delivering smart industrial solutions that empower businesses to scale beyond borders.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-4 rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="rounded-xl w-full h-[400px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-surface-dim">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-2xl"
            >
              <Target className="text-gold w-16 h-16 mb-8" />
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">Mission Statement</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To provide reliable, innovative, and efficient business solutions that drive growth, strengthen partnerships, and support industrial development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-12 rounded-2xl"
            >
              <Eye className="text-electric-blue w-16 h-16 mb-8" />
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">Vision Statement</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To become a globally respected company known for excellence in logistics, trade, industrial partnerships, and business development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-extrabold text-white mb-4">Our Core Values</h2>
              <div className="h-1 w-20 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Integrity", icon: ShieldCheck, desc: "Upholding the highest ethical standards in every operation." },
                { title: "Excellence", icon: Zap, desc: "Committed to delivering superior quality and performance." },
                { title: "Innovation", icon: TrendingUp, desc: "Continuously evolving through smart technology and methods." },
                { title: "Reliability", icon: ShieldCheck, desc: "A trusted partner you can depend on, every single time." },
                { title: "Professionalism", icon: Users, desc: "Operating at international standards with expert precision." },
                { title: "Partnership", icon: Handshake, desc: "Building long-term value through strategic collaboration." }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl text-center group hover:bg-navy/40 transition-all"
                >
                  <value.icon className="text-gold w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest">{value.title}</h4>
                  <p className="text-on-surface-variant text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
