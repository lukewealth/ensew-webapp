"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Shield, TrendingUp, Users, ChevronRight, Play, CheckCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-navy/60 z-10 backdrop-blur-[2px]"></div>
            <img 
              src="https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?auto=format&fit=crop&q=80&w=2000" 
              alt="Industrial Hero" 
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block bg-gold/20 text-gold font-poppins text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-[0.3em] uppercase border border-gold/30">
                Global Industrial Excellence
              </span>
              <h1 className="text-5xl md:text-8xl font-montserrat font-extrabold text-white mb-8 tracking-tighter leading-[0.9]">
                Building Global <span className="text-gold">Business</span> Connections.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
                ENSEW Services Limited provides trusted logistics, industrial supply, and strategic business partnerships across Nigeria and global markets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="gold-button px-10 py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase flex items-center gap-2 group">
                  Request Consultation <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-10 py-5 text-white font-poppins font-bold text-sm tracking-widest rounded-xl uppercase flex items-center gap-3 hover:bg-white/5 transition-all border border-white/10">
                  <div className="bg-gold/20 p-2 rounded-full"><Play size={14} className="fill-gold text-gold" /></div> Watch Story
                </button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-navy border-y border-white/5 relative z-30">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { val: "500+", label: "Projects Delivered" },
                { val: "100+", label: "Business Partners" },
                { val: "15+", label: "Industries Served" },
                { val: "98%", label: "Satisfaction Rate" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-montserrat font-extrabold text-gold mb-2">{stat.val}</div>
                  <div className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-32 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-6">Introduction</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-8 tracking-tight leading-tight">
                  The New Standard in <span className="text-gold">Enterprise</span> Operations.
                </h2>
                <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-inter">
                  ENSEW Services Limited is a dynamic Nigerian enterprise committed to delivering innovative trade, logistics, industrial supply, distribution, and contracting solutions that drive sustainable business growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "International Standards",
                    "Expert Supply Chain",
                    "Strategic Partnerships",
                    "Industrial Innovation"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="bg-gold/10 p-1 rounded-full"><CheckCircle size={16} className="text-gold" /></div>
                      <span className="text-white font-poppins text-xs font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Operations" 
                  className="relative z-10 rounded-[3rem] border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 z-20 glass-card p-8 rounded-3xl border border-white/10 hidden md:block">
                  <Globe className="text-gold w-10 h-10 mb-4 animate-spin-slow" />
                  <div className="text-2xl font-montserrat font-bold text-white">Global Reach</div>
                  <div className="text-[10px] font-poppins text-on-surface-variant font-bold uppercase tracking-widest mt-1">Lagos • London • Houston</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-surface-dim border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-4">Core Strengths</span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-white uppercase tracking-tight">Why Businesses Trust ENSEW</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Professional Operations", 
                  desc: "Meticulous attention to detail in every container, contract, and connection.",
                  icon: Shield,
                  color: "text-gold"
                },
                { 
                  title: "Reliable Partnerships", 
                  desc: "We don&apos;t just serve clients; we build long-term value-driven industrial alliances.",
                  icon: Users,
                  color: "text-electric-blue"
                },
                { 
                  title: "Efficient Logistics", 
                  desc: "Streamlined supply chain frameworks designed for speed, safety, and scale.",
                  icon: TrendingUp,
                  color: "text-gold"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-12 rounded-[2.5rem] border border-white/5 group hover:bg-navy/40 transition-all duration-500"
                >
                  <div className={`p-4 bg-navy-light rounded-2xl inline-block mb-8 group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-4 uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Preview */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-4">Sectors</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-white tracking-tight uppercase">Industries We Serve</h2>
              </div>
              <Link href="/industries" className="text-gold font-poppins text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                View All Industries <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
                { name: "Energy", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
                { name: "Construction", img: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" },
                { name: "Retail", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" }
              ].map((ind, i) => (
                <Link href="/industries" key={i} className="group relative h-[400px] overflow-hidden rounded-3xl">
                  <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-xl font-montserrat font-bold text-white uppercase tracking-widest group-hover:text-gold transition-colors">{ind.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/50 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric-blue/50 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-10 tracking-tight uppercase leading-none">
              Ready To Scale Your <span className="text-gold">Business</span> Operations?
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 font-inter max-w-2xl mx-auto">
              Partner with ENSEW Services Limited today and experience the power of smart industrial solutions. Let&apos;s discuss how we can support your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="gold-button px-12 py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase shadow-2xl shadow-gold/20">
                Schedule Consultation
              </Link>
              <Link href="/contact" className="px-12 py-5 text-white font-poppins font-bold text-sm tracking-widest rounded-xl uppercase border border-white/10 hover:bg-white/5 transition-all">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
