"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Factory, Construction, Wheat, Zap, ShoppingCart, Truck, Settings, Globe, X, ExternalLink, ShieldCheck, Cpu } from "lucide-react";

export const metadata = {
  title: "Sectors We Serve",
  description: "Tailored industrial and logistics solutions for Manufacturing, Energy, Construction, Agriculture, and Retail Distribution sectors.",
};

const industries = [
  { 
    id: "manufacturing",
    name: "Heavy Manufacturing", 
    icon: Factory, 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF",
    details: "Optimization of large-scale production lines through integrated supply chains.",
    challenges: "Global raw material volatility and energy consumption costs.",
    solutions: "Just-in-time procurement and strategic energy partnerships.",
    source: "https://www.mckinsey.com/industries/advanced-electronics/our-insights/the-future-of-manufacturing"
  },
  { 
    id: "oil-gas",
    name: "Energy & Utilities", 
    icon: Zap, 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8REQHPAsE7fYVVq99EyTbdRpzD2_ASEqCm12oDeynjtNWLeANAJ_8fFF5A1i3goMZpkLLqKXh4qkeXDnhRknhD4pLjAdgJSIg6d_VXMDVzTfNBIphW_xxXhwUrUdzFYtoz_chXuZXZ6qsfG4JviThjBnCMQrVYPOge3aMJXfRrEpRssOxadF8Uv9qt_Wo7ZPHCyNzp1N8K2Ds0dr8MpJFKJLYZkLpIt6poNTL2rPYm_PDbbApTEXPOCp_gpAXAZEs8bBLH8RvGQc",
    details: "Powering the future with sustainable infrastructure and specialized logistics.",
    challenges: "Offshore maintenance risks and regulatory compliance transitions.",
    solutions: "Specialized heavy-lift maritime logistics and compliance auditing.",
    source: "https://www.iea.org/reports/world-energy-outlook-2023"
  },
  { 
    id: "pharma",
    name: "Pharmaceuticals", 
    icon: Settings, 
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1200",
    details: "Ensuring health integrity through rigorous cold-chain logistics and secure sourcing.",
    challenges: "Temperature-sensitive asset loss and anti-counterfeit compliance.",
    solutions: "IoT-monitored distribution networks and validated supply routes.",
    source: "https://www.who.int/news-room/fact-sheets/detail/medicines-safety-of-medicines"
  },
  { 
    id: "logistics",
    name: "Logistics & Supply", 
    icon: Truck, 
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3",
    details: "The nervous system of global trade, moving assets with precision across borders.",
    challenges: "West African trade barriers and last-mile infrastructure gaps.",
    solutions: "Integrated hub-and-spoke distribution and regional compliance expertise.",
    source: "https://www.worldbank.org/en/topic/transport/brief/logistics-performance-index"
  },
  { 
    id: "construction",
    name: "Infrastructure", 
    icon: Construction, 
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    details: "Building the physical foundation for regional economic growth.",
    challenges: "Multi-stakeholder synchronization and procurement delays.",
    solutions: "General contracting frameworks and synchronized supply chains.",
    source: "https://www.oxfordeconomics.com/resource/global-infrastructure-outlook/"
  },
  { 
    name: "Agriculture", 
    icon: Wheat, 
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
    details: "Optimizing the global grain pipeline from farm to international markets.",
    challenges: "High spoilage rates and fragmented distribution channels.",
    solutions: "Smart storage solutions and climate-controlled transport.",
    source: "https://www.fao.org/state-of-food-agriculture/en/"
  },
  { 
    name: "Retail Distribution", 
    icon: ShoppingCart, 
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    details: "Bridging the gap between global manufacturers and regional consumers.",
    challenges: "Stock availability in remote areas and inventory overhead.",
    solutions: "Strategic regional warehousing and automated replenishment.",
    source: "https://www.deloitte.com/global/en/industries/consumer/analysis/global-powers-of-retailing.html"
  },
  { 
    name: "Commercial Trade", 
    icon: Globe, 
    image: "https://images.unsplash.com/photo-1454165833767-027ffec9036a?auto=format&fit=crop&q=80&w=800",
    details: "Facilitating international business connections and trade compliance.",
    challenges: "Navigating ECOWAS trade protocols and customs barriers.",
    solutions: "Manufacturing representation and strategic trade consulting.",
    source: "https://wto.org/english/res_e/publications_e/world_trade_report23_e.htm"
  },
  { 
    name: "Education", 
    icon: Wheat, 
    image: "https://images.unsplash.com/photo-1523050853051-f7539315ef21?auto=format&fit=crop&q=80&w=800",
    details: "Supporting educational infrastructure and specialized procurement for institutions.",
    challenges: "Outdated equipment and supply chain inefficiencies in learning centers.",
    solutions: "Modern laboratory equipment sourcing and digital learning integration.",
    source: "https://www.unesco.org/en/education/higher-education/global-convention"
  },
  { 
    name: "Music Investment", 
    icon: Zap, 
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    details: "Strategic capital and infrastructure for the global music and entertainment industry.",
    challenges: "Fragmented royalty systems and lack of high-tier production facilities.",
    solutions: "Studio infrastructure development and strategic distribution partnerships.",
    source: "https://www.ifpi.org/resources-and-reports/global-music-report/"
  }
];

const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-20 animate-entrance">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-navy/90 z-10 backdrop-blur-sm"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikxP7KLC6zhV4u7TtXodzt8J8du_7XLZGy43IzBwDiLg6eVuZErjkXQUwANlcSeQMUxLWIzYmCRJmCpkDkA6dGZ_iieb0WotuPF2FNzPsNSMZVBspQ07wQTVOdk30s72LoRZ5BvMicyCe8zBObIjG9-qFXJahjL5jZFjRQa3a9_pupkQ5463-JlbZqzmIKgmDpjGtrUvN9CH88SwiAmgrf4A2y7hlFyjtMDYWsJY2l_lgso53nugsjDryNuiZJoh16FaqrRo6oRlx"
            alt="Industries Header"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
            >
              Sectors We <span className="text-gold">Empower</span>
            </motion.h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs font-bold bg-navy/60 inline-block px-4 py-2 rounded-full">
              Industries We Empower and Serve
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                id={industry.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedIndustry(industry)}
                className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <industry.icon className="text-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-montserrat font-bold text-white uppercase tracking-tight group-hover:text-gold transition-colors">{industry.name}</h3>
                  <div className="w-0 group-hover:w-full h-1 bg-gold transition-all duration-500 mt-2"></div>
                  <p className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Click to Expand</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-24 bg-surface-dim">
          <div className="max-w-4xl mx-auto px-6 text-center glass-card p-16 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-montserrat font-bold text-white mb-6 uppercase tracking-widest">Industry-Specific Frameworks</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-inter">
              We don&apos;t believe in one-size-fits-all. Each sector has unique regulatory, technical, and logistical challenges. Our team designs frameworks that are specifically optimized for the unique demands of your industry.
            </p>
            <div className="mt-12">
               <Link href="/contact" className="gold-button px-12 py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase inline-block shadow-2xl">
                 Request Industry Brief
               </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass-card overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-6 right-6 z-20 bg-black/50 p-2 rounded-full text-white hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>

              <div className="md:w-2/5 relative h-64 md:h-auto">
                <img src={selectedIndustry.image} alt={selectedIndustry.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/40" />
                <div className="absolute bottom-8 left-8">
                  <selectedIndustry.icon className="text-gold w-12 h-12 mb-4" />
                  <h2 className="text-3xl font-montserrat font-bold text-white uppercase">{selectedIndustry.name}</h2>
                </div>
              </div>

              <div className="md:w-3/5 p-12 overflow-y-auto bg-navy/20">
                <div className="space-y-8">
                  <div>
                    <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.3em] block mb-4">Strategic Overview</span>
                    <p className="text-white text-lg font-inter leading-relaxed">{selectedIndustry.details}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-red-400">
                        <ShieldCheck size={18} />
                        <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest">The Challenges</h4>
                      </div>
                      <p className="text-on-surface-variant text-sm font-inter leading-relaxed">{selectedIndustry.challenges}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gold">
                        <Cpu size={18} />
                        <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest">Our Solutions</h4>
                      </div>
                      <p className="text-on-surface-variant text-sm font-inter leading-relaxed">{selectedIndustry.solutions}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <a 
                      href={selectedIndustry.source} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} /> Authority Source Backlink
                    </a>
                    <Link href="/contact" className="gold-button px-8 py-3 text-navy font-bold text-[10px] uppercase tracking-widest rounded-lg">
                      Sector Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
