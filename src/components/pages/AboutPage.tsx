"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, ShieldCheck, Zap, TrendingUp, Users, Handshake, Mail, Share2 } from "lucide-react";

const experts = [
  {
    name: "AKINTOBI ENITAN THOMPSON",
    role: "Chief Executive Officer",
    image: "/images/AKINTOBI ENITAN THOMPSON.png",
    bio: "Visionary leader with 5+ years in global logistics and industrial trade across African markets."
  },
  {
    name: "Taiwo Ogunmoyin",
    role: "Project Manager",
    image: "/images/taiwo-ogunmoyin.jpg",
    bio: "Supply chain expert specialized in optimizing multinational procurement and distribution networks."
  },
  {
    name: "OLUWASEUN DAYO OGUNMOYIN",
    role: "Chief Operating Officer",
    image: "/images/Site-view.png",
    bio: "Strategist focused on bridging Nigerian industrial opportunities with international investor standards."
  },
  {
    name: "Williams Abayomi Emeahara",
    role: "Head of Industrial Sourcing",
    image: "/images/team-2.jpeg",
    bio: "Specialist in heavy machinery procurement and European-African manufacturing representation.",
    position: "center 10%"
  }
];

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-20 animate-entrance">
        {/* Page Header */}
        <section className="relative py-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-navy/80 z-10 backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="About Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-montserrat font-extrabold text-white mb-6 tracking-tighter"
            >
              Our Legacy of <span className="text-gold">Excellence.</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto font-inter">
              Bridging local opportunities with global business standards through logistics, contracting, and industrial supply.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-gold font-poppins text-xs tracking-[0.3em] uppercase block">Our History</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">The ENSEW Story</h2>
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
              className="relative p-2 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/10 to-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="rounded-[2.2rem] w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl hidden lg:block">
                <div className="text-3xl font-montserrat font-bold text-gold">5+</div>
                <div className="text-[10px] font-poppins font-bold tracking-widest text-white uppercase">Years Excellence</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-surface-dim border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-3xl group hover:bg-navy/40 transition-all duration-500"
            >
              <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                <Target className="text-gold w-10 h-10" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6 uppercase tracking-tight">Mission Statement</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To provide reliable, innovative, and efficient business solutions that drive growth, strengthen partnerships, and support industrial development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-12 rounded-3xl group hover:bg-navy/40 transition-all duration-500"
            >
              <div className="bg-electric-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-electric-blue/20 transition-colors">
                <Eye className="text-electric-blue w-10 h-10" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6 uppercase tracking-tight">Vision Statement</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To become a globally respected company known for excellence in logistics, trade, industrial partnerships, and business development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="py-32 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-gold font-poppins text-xs tracking-[0.3em] uppercase block mb-4">Leadership</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">Meet Our Professional <span className="text-gold">Experts.</span></h2>
              </div>
              <p className="text-on-surface-variant max-w-sm font-inter">
                Our leadership team brings together years of international experience across Africa and the global industrial landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {experts.map((expert, index) => (
                <motion.div
                  key={expert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 mb-6">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      style={{ objectPosition: (expert as any).position || 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-4">
                        <Mail className="text-white w-5 h-5 hover:text-gold cursor-pointer" />
                        <Share2 className="text-white w-5 h-5 hover:text-gold cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-montserrat font-bold text-white mb-1 group-hover:text-gold transition-colors">{expert.name}</h4>
                  <p className="text-gold font-poppins text-[10px] tracking-[0.2em] uppercase font-bold mb-4">{expert.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{expert.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 bg-surface-dim">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-gold font-poppins text-xs tracking-[0.3em] uppercase block mb-4">DNA</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white tracking-tight">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="glass-card p-10 rounded-3xl group hover:bg-navy/40 transition-all border border-white/5"
                >
                  <value.icon className="text-gold w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-montserrat font-bold mb-4 uppercase tracking-widest text-lg">{value.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{value.desc}</p>
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
