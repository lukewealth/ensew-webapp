"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Factory, Construction, Wheat, Zap, ShoppingCart, Truck, Settings, Globe } from "lucide-react";

export const metadata = {
  title: "Industries We Serve",
  description: "Tailored industrial and logistics solutions for Manufacturing, Energy, Construction, Agriculture, and Retail Distribution sectors.",
};

const industries = [
  { name: "Manufacturing", icon: Factory, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { name: "Construction", icon: Construction, image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" },
  { name: "Agriculture", icon: Wheat, image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" },
  { name: "Energy", icon: Zap, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { name: "Retail Distribution", icon: ShoppingCart, image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" },
  { name: "Logistics", icon: Truck, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { name: "Industrial Supply", icon: Settings, image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800" },
  { name: "Commercial Trade", icon: Globe, image: "https://images.unsplash.com/photo-1454165833767-027ffec9036a?auto=format&fit=crop&q=80&w=800" }
];

const IndustriesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-navy/90 z-10 backdrop-blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
            alt="Industries Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6"
            >
              Sectors We <span className="text-gold">Empower</span>
            </motion.h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs">
              Tailored Expertise for the World's Most Demanding Industries
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <industry.icon className="text-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-montserrat font-bold text-white uppercase tracking-tight group-hover:text-gold transition-colors">{industry.name}</h3>
                  <div className="w-0 group-hover:w-full h-1 bg-gold transition-all duration-500 mt-2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-surface-dim">
          <div className="max-w-4xl mx-auto px-6 text-center glass-card p-16 rounded-3xl">
            <h2 className="text-3xl font-montserrat font-bold text-white mb-6 uppercase tracking-widest">Industry-Specific Frameworks</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't believe in one-size-fits-all. Each sector has unique regulatory, technical, and logistical challenges. Our team designs frameworks that are specifically optimized for the unique demands of your industry.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
