"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Truck, Factory, Warehouse, Briefcase, BarChart, ArrowRight } from "lucide-react";
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3",
    process: ["Documentation", "Customs Clearance", "Freight Management", "Final Delivery"]
  },
  {
    title: "Logistics & Delivery",
    icon: Truck,
    desc: "Smart logistics frameworks designed for real-time visibility and speed across regional and global networks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCikxP7KLC6zhV4u7TtXodzt8J8du_7XLZGy43IzBwDiLg6eVuZErjkXQUwANlcSeQMUxLWIzYmCRJmCpkDkA6dGZ_iieb0WotuPF2FNzPsNSMZVBspQ07wQTVOdk30s72LoRZ5BvMicyCe8zBObIjG9-qFXJahjL5jZFjRQa3a9_pupkQ5463-JlbZqzmIKgmDpjGtrUvN9CH88SwiAmgrf4A2y7hlFyjtMDYWsJY2l_lgso53nugsjDryNuiZJoh16FaqrRo6oRlx",
    process: ["Route Optimization", "Tracking", "Warehousing", "Last-mile Delivery"]
  },
  {
    title: "Industrial Supply",
    icon: Factory,
    desc: "Critical sourcing and distribution of high-performance machinery, components, and raw materials for heavy industry.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF",
    process: ["Requirement Analysis", "Sourcing", "Quality Control", "Distribution"]
  },
  {
    title: "General Contracting",
    icon: Warehouse,
    desc: "End-to-end management of industrial infrastructure projects and large-scale technical engineering contracts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBikyLe0EkjZzXmuth81aX7appnqzet4rk5ukm_bDZRvCbRsNF7XvB7H3Q37uiP6q3KuMirY3s3hfK_H3nVxJdBpd4x_jJo2sFpd1zkKwdx_z9p065Kj3j2o95RLvOMNmvNzjm_kzDe_oWIvAIRRfF7gy9CFREpCr5qf3TEZuUaKhIQ37DdO2nLjjipgcmjePsZ68Yw4SA4JDBcrBA04WBCu6ERCspF-OCykntH--NX59WByBhkb2ityDSHydneWRlXM0KypqDemSGf",
    process: ["Planning", "Procurement", "Execution", "Project Handover"]
  },
  {
    title: "Manufacturing Representation",
    icon: Briefcase,
    desc: "Acting as the local face for international manufacturers, handling marketing, sales, and distribution in Nigeria.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=1000",
    process: ["Market Entry", "Branding", "Sales Strategy", "Local Support"]
  },
  {
    title: "Investment Development",
    icon: BarChart,
    desc: "Identifying and developing strategic business opportunities and partnerships for sustainable growth.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffec9036a?auto=format&fit=crop&q=80&w=1000",
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
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000"
            alt="Services Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
            >
              Our Core <span className="text-gold">Expertise</span>
            </motion.h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs font-bold bg-navy/60 inline-block px-4 py-2 rounded-full">
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
                  <p className="text-lg text-on-surface-variant leading-relaxed font-inter">
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

                  <Link 
                    href="/contact"
                    onClick={() => addToRecentlyViewed(service.title)}
                    className="flex items-center gap-2 text-gold font-poppins text-sm font-bold tracking-widest uppercase hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
                
                <div className="flex-1 relative group">
                  <div className="absolute -inset-2 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl w-full h-[400px] object-cover border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface-dim border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-montserrat font-extrabold text-white mb-8 uppercase tracking-tight">Need a Custom Solution?</h2>
            <p className="text-lg text-on-surface-variant mb-12 font-inter">Our experts are ready to design a framework tailored to your specific industrial or logistics requirements.</p>
            <Link href="/contact" className="gold-button px-16 py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase inline-block shadow-2xl">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
