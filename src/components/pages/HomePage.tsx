"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronDown, Globe, Shield, Handshake, BarChart3, Ship, Warehouse, Factory, Truck, History } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const HomePage = () => {
  const [recentlyViewed] = useLocalStorage<string[]>("recently-viewed", []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&q=80&w=2000"
                alt="Logistics Background"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-montserrat font-extrabold text-white mb-6 leading-tight text-glow"
            >
              Building Global Business <br /> Connections Through <br /> Smart Industrial Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-inter text-on-surface-variant mb-10 max-w-3xl mx-auto"
            >
              ENSEW Services Limited provides trusted logistics, industrial supply, contracting, import/export operations, distribution, and strategic business partnerships across Nigeria and global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="gold-button px-10 py-4 text-navy font-poppins text-xs font-bold tracking-widest rounded uppercase">
                Request Consultation
              </button>
              <button className="border border-white/20 px-10 py-4 text-white font-poppins text-xs font-bold tracking-widest rounded uppercase backdrop-blur-md hover:bg-white/10 transition-colors">
                Explore Services
              </button>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <ChevronDown className="text-gold w-10 h-10" />
          </motion.div>
        </section>

        {/* Who We Are */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-xl"
            >
              <span className="text-gold font-poppins text-xs tracking-[0.2em] uppercase block mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-on-surface">Strategic Partner for Industrial Excellence</h2>
              <p className="text-lg font-inter text-on-surface-variant mb-6 leading-relaxed">
                ENSEW Services Limited is a dynamic Nigerian enterprise committed to delivering innovative trade, logistics, industrial supply, distribution, and contracting solutions that drive sustainable business growth.
              </p>
              <p className="text-lg font-inter text-on-surface-variant leading-relaxed">
                Our methodology combines decades of industrial experience with cutting-edge digital integration, ensuring your operations remain resilient in an ever-shifting global market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden h-[500px] border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate Excellence"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-surface-dim">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-extrabold text-on-surface mb-4">Our Core Services</h2>
              <div className="h-1 w-20 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Import & Export", icon: Globe, desc: "End-to-end international trade operations and supply chain management." },
                { title: "Industrial Supply", icon: Factory, desc: "Critical component sourcing and distribution for heavy machinery." },
                { title: "General Contracting", icon: Warehouse, desc: "Executive-tier industrial contracting for large-scale infrastructure." },
                { title: "Logistics & Delivery", icon: Truck, desc: "Smart logistics optimized for speed, security, and real-time visibility." },
                { title: "Manufacturing Rep", icon: BarChart3, desc: "Strategic manufacturing representation and product marketing." },
                { title: "Business Partnerships", icon: Handshake, desc: "Developing investment opportunities and strategic partnerships." }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl hover:bg-navy/40 transition-all group"
                >
                  <service.icon className="text-gold w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-montserrat font-bold text-on-surface mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold font-poppins text-xs tracking-[0.3em] uppercase block mb-4">Why Businesses Trust ENSEW</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-on-surface mb-8 tracking-tight">Delivering Long-Term Value & Reliability</h2>
                <div className="space-y-8">
                  {[
                    { title: "Professional Operations", desc: "World-class standards in logistics, industrial supply, and contracting with a 99.8% on-time completion rate." },
                    { title: "Quality Assurance", desc: "Rigorous quality control protocols across all industrial supply and distribution channels." },
                    { title: "Reliable Partnerships", desc: "A trusted international partner providing efficient logistics and strategic investment development." },
                    { title: "International Network", desc: "Extensive global reach connecting Nigerian opportunities with international industrial standards." }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="mt-1 bg-gold/10 p-2 rounded-lg group-hover:bg-gold/20 transition-colors">
                        <CheckCircle2 className="text-gold w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-on-surface font-bold mb-2 text-lg">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "SECURE DATA", icon: Shield },
                  { label: "GLOBAL REACH", icon: Globe },
                  { label: "ELITE PARTNERS", icon: Handshake },
                  { label: "PRECISE ROI", icon: BarChart3 }
                ].map((item) => (
                  <div key={item.label} className="glass-card aspect-square flex flex-col items-center justify-center p-6 rounded-xl text-center group">
                    <item.icon className="text-electric-blue w-10 h-10 mb-4 group-hover:text-gold transition-colors" />
                    <span className="text-xs font-poppins font-bold tracking-widest text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy/90 z-10 backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
            alt="Warehouse Statistics"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "500+", label: "PROJECTS DELIVERED" },
              { val: "100+", label: "BUSINESS PARTNERS" },
              { val: "15+", label: "INDUSTRIES SERVED" },
              { val: "98%", label: "CLIENT SATISFACTION" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-6xl font-montserrat font-extrabold text-gold mb-2">{stat.val}</div>
                <div className="text-xs font-poppins font-bold tracking-[0.2em] text-white opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-surface-dim">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-extrabold text-on-surface mb-4">Industries We Serve</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Tailored expertise for the world's most demanding sectors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=1000" alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-white">Manufacturing</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" alt="Energy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-lg font-montserrat font-bold text-white">Energy</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1532187875605-2fe358511428?auto=format&fit=crop&q=80&w=600" alt="Retail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-lg font-montserrat font-bold text-white">Retail Distribution</h3>
                </div>
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800" alt="Construction" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white">Construction</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {recentlyViewed.length > 0 && (
          <section className="py-12 bg-navy/20 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <History className="text-gold w-5 h-5" />
                <h3 className="text-sm font-poppins font-bold tracking-widest text-on-surface uppercase">Recently Explored</h3>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {recentlyViewed.map((item) => (
                  <div key={item} className="glass-card px-6 py-3 rounded-full border border-white/10 whitespace-nowrap text-xs font-medium text-on-surface-variant">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-24 bg-background border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-montserrat font-extrabold text-on-surface mb-8">Ready To Scale Your Business Operations?</h2>
            <p className="text-lg text-on-surface-variant mb-12">Let's discuss how ENSEW Services Limited can support your next project with our global logistics and industrial frameworks.</p>
            <button className="gold-button px-16 py-5 text-navy font-poppins text-sm font-bold tracking-widest rounded-xl uppercase">
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
