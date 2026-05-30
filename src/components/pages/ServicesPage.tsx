"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Truck, Factory, Warehouse, Briefcase, BarChart, Shield, Zap, ArrowRight } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const metadata = {
  title: "Industrial & Logistics Services",
  description: "Explore ENSEW Services Limited's core expertise: Import & Export, Industrial Supply, General Contracting, Logistics, and Manufacturing Representation.",
};

const services = [
  {
    title: "Import & Export Operations",
    icon: Globe,
    desc: "Seamless international trade solutions including customs brokerage, freight forwarding, and compliance management.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000",
    process: ["Documentation", "Customs Clearance", "Freight Management", "Final Delivery"]
  },
  {
    title: "Logistics & Delivery",
    icon: Truck,
    desc: "Smart logistics frameworks designed for real-time visibility and speed across regional and global networks.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    process: ["Route Optimization", "Tracking", "Warehousing", "Last-mile Delivery"]
  },
  {
    title: "Industrial Supply",
    icon: Factory,
    desc: "Critical sourcing and distribution of high-performance machinery, components, and raw materials for heavy industry.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    process: ["Requirement Analysis", "Sourcing", "Quality Control", "Distribution"]
  },
  {
    title: "General Contracting",
    icon: Warehouse,
    desc: "End-to-end management of industrial infrastructure projects and large-scale technical engineering contracts.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
    process: ["Planning", "Procurement", "Execution", "Project Handover"]
  },
  {
    title: "Manufacturing Representation",
    icon: Briefcase,
    desc: "Acting as the local face for international manufacturers, handling marketing, sales, and distribution in Nigeria.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000",
    process: ["Market Entry", "Branding", "Sales Strategy", "Local Support"]
  },
  {
    title: "Investment Development",
    icon: BarChart,
    desc: "Identifying and developing strategic business opportunities and partnerships for sustainable growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    process: ["Analysis", "Valuation", "Structuring", "Management"]
  }
];

const ServicesPage = () => {
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<string[]>("recently-viewed", []);

  const addToRecentlyViewed = (serviceTitle: string) => {
    setRecentlyViewed((prev) => {
      const filtered = (prev || []).filter((t) => t !== serviceTitle);
      return [serviceTitle, ...filtered].slice(0, 5);
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-navy/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1566733971217-d11cf7c1ab11?auto=format&fit=crop&q=80&w=2000"
            alt="Services Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6"
            >
              Our Core <span className="text-gold">Expertise</span>
            </motion.h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Delivering world-class business solutions across logistics, industrial supply, and strategic partnerships.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-center`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <service.icon className="text-gold w-10 h-10" />
                    <h2 className="text-3xl font-montserrat font-bold text-white uppercase tracking-tight">{service.title}</h2>
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-white font-poppins text-xs tracking-widest uppercase font-bold">Execution Process</h4>
                    <div className="flex flex-wrap gap-4">
                      {service.process.map((step, i) => (
                        <div key={step} className="flex items-center gap-2 bg-surface p-3 rounded-lg border border-white/5">
                          <span className="text-gold font-bold text-xs">{i + 1}</span>
                          <span className="text-on-surface text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => addToRecentlyViewed(service.title)}
                    className="flex items-center gap-2 text-gold font-poppins text-sm font-bold tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
                
                <div className="flex-1 relative group">
                  <div className="absolute -inset-2 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl w-full h-[400px] object-cover border border-white/10 shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface-dim border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-montserrat font-extrabold text-white mb-8">Need a Custom Solution?</h2>
            <p className="text-lg text-on-surface-variant mb-12">Our experts are ready to design a framework tailored to your specific industrial or logistics requirements.</p>
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

export default ServicesPage;
