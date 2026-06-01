"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, X, ShieldCheck, Activity, BarChart3, Globe } from "lucide-react";

export const metadata = {
  title: "Our Projects & Case Studies",
  description: "View our track record of excellence. Case studies on global logistics, industrial supply, and infrastructure projects delivered across Nigeria and West Africa.",
};

const projects = [
  {
    name: "Global Grain Pipeline",
    industry: "Agriculture",
    challenge: "Complex cross-border grain distribution with 20% spoilage rate.",
    solution: "Smart IoT-enabled logistics and climate-controlled supply chain.",
    results: "Spoilage reduced to < 2%, 15% increase in operational efficiency.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQY7h1PdbU7qUcRXqNB-kU3-07KNBKg59cjNhZ-fB3TV1m-VwnhBB6EKUHdWnnuSE8L9an-LHMGCpA9hscZGzeIidZHS_SLpDWB_bUSi-Bv28jivO0gvAWKU8AMnMzVadWaXKvxqYyHzx-VkBQu26Jg52yVKURC27A5Fzz51ItfTH8CWZEr__pBX8hMDrFpc7owKhYlzhK8RZ-YorWEj46sKr8QUFkaLTNtqeoyIzBt7FAMJ3NJ3Pnq6rL5nWtvkTDHJS7OnerPIa-",
    fullDetails: {
      problem: "Traditional distribution methods were causing massive post-harvest losses due to inconsistent temperature control and lack of real-time monitoring during transit across West African borders.",
      execution: "We deployed a fleet of specialized containers equipped with satellite-linked climate sensors. Our custom dashboard provided real-time visibility into internal humidity and temperature, allowing for automated adjustments.",
      metrics: ["90% reduction in spoilage", "24/7 real-time asset tracking", "30% faster customs processing"]
    }
  },
  {
    name: "Lagos Industrial Hub",
    industry: "Manufacturing",
    challenge: "Inefficient component sourcing causing 30-day production delays.",
    solution: "Centralized industrial supply framework and automated procurement.",
    results: "Delays reduced to 48 hours, 25% cost savings on critical parts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF",
    fullDetails: {
      problem: "A major manufacturing hub in Lagos was facing critical downtime due to fragmented sourcing from multiple international vendors with zero synchronization.",
      execution: "Implemented a 'Single Window' procurement framework, acting as the sole industrial representation for all European and Asian components, synchronized with the hub's production schedule.",
      metrics: ["93% decrease in downtime", "25% lower procurement costs", "Automated inventory replenishment"]
    }
  },
  {
    name: "Offshore Energy Logistics",
    industry: "Energy",
    challenge: "High-risk heavy equipment transport to deep-sea installations.",
    solution: "Specialized logistics and rigorous risk management protocols.",
    results: "Zero-incident delivery record over 24 months of operation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8REQHPAsE7fYVVq99EyTbdRpzD2_ASEqCm12oDeynjtNWLeANAJ_8fFF5A1i3goMZpkLLqKXh4qkeXDnhRknhD4pLjAdgJSIg6d_VXMDVzTfNBIphW_xxXhwUrUdzFYtoz_chXuZXZ6qsfG4JviThjBnCMQrVYPOge3aMJXfRrEpRssOxadF8Uv9qt_Wo7ZPHCyNzp1N8K2Ds0dr8MpJFKJLYZkLpIt6poNTL2rPYm_PDbbApTEXPOCp_gpAXAZEs8bBLH8RvGQc",
    fullDetails: {
      problem: "Transferring high-value technical assets from onshore facilities to deep-sea rigs involved extreme logistical risks and potential environmental impact.",
      execution: "Engineered a bespoke maritime transport protocol involving sea-state monitoring, specialized dynamic-positioning vessels, and multi-layered safety auditing at every transfer point.",
      metrics: ["100% safety record maintained", "Reduced transport risk by 40%", "Validated by global energy insurers"]
    }
  },
  {
    name: "Nationwide Retail Network",
    industry: "Retail Distribution",
    challenge: "Fragmented distribution causing frequent stock-outs in rural areas.",
    solution: "Integrated hub-and-spoke distribution network across Nigeria.",
    results: "99.5% stock availability achieved across all served regions.",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      problem: "Regional retail chains were unable to maintain consistent inventory levels in Tier 2 and Tier 3 cities due to unoptimized last-mile logistics.",
      execution: "Developed a national distribution architecture with 4 strategic hubs and 24 regional spokes, powered by our real-time inventory visibility platform.",
      metrics: ["99.5% shelf-fill rate", "15% reduction in transit costs", "Scalable to 50+ new locations"]
    }
  },
  {
    name: "Infrastructure Expansion",
    industry: "Construction",
    challenge: "Coordinating multi-vendor supplies for a major airport expansion.",
    solution: "General contracting and end-to-end supply chain synchronization.",
    results: "Project delivered 3 months ahead of schedule and under budget.",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      problem: "A Tier-1 airport construction project was stalled due to misaligned technical supplies and vendor communication gaps across three continents.",
      execution: "Assumed the lead role in supply chain synchronization, managing 15+ international vendors under a single technical contracting umbrella.",
      metrics: ["Project delivered 12 weeks early", "10% under initial budget", "Zero sourcing discrepancies"]
    }
  },
  {
    name: "West African Trade Route",
    industry: "Import/Export",
    challenge: "Navigating complex ECOWAS trade regulations and customs barriers.",
    solution: "Strategic manufacturing representation and trade compliance.",
    results: "300% growth in trade volume for represented international brands.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3",
    fullDetails: {
      problem: "International brands were hesitating to enter the West African market due to perceived regulatory complexity and customs unpredictability.",
      execution: "Provided a full-spectrum 'Market Entry' service, handling all ECOWAS compliance, local warehousing, and authorized representation for the brands.",
      metrics: ["300% trade volume growth", "Full regulatory compliance", "Local brand authority established"]
    }
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-20 animate-entrance">
        <section className="relative py-32 bg-surface border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[1px]"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9gMY8PbEN61fUeZLUcauVmUs6GJf8uykckU3_XB1USAFIJRcpBFdoAuiqzrT4AASGYhD9VG4yBn6bFXUG73JLhiAEEbGGQ_SI0auEOdRJNHeDp92ta2cu4qSVqeW6z9FDnz6ByKx85k2JjkqEy51WWdVkMrEIQ3oUavdRZYqWOLO1BBt8MnfjVqzuOlyVfbqvQBHugnh6kDDtVrqlEPn20IhDULT0ckrhdx6CKxwtshDjfPMdfqkrdI7pSCesLtJtAGF1tWHLqhjz" 
            alt="Projects Hero" 
            className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-montserrat font-extrabold text-white mb-8 uppercase tracking-tighter text-glow"
            >
              Proven <span className="text-gold">Results</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs font-bold bg-navy/60 inline-block px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
              Delivering Excellence Across Complex Industrial Landscapes
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card flex flex-col rounded-2xl overflow-hidden group border border-white/5 hover:border-gold/30 transition-all cursor-pointer"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <span className="text-gold font-poppins text-[10px] font-bold tracking-widest uppercase">{project.industry}</span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-6 group-hover:text-gold transition-colors">{project.name}</h3>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <h4 className="text-gold font-poppins text-[10px] font-bold tracking-widest uppercase mb-1">Challenge</h4>
                      <p className="text-on-surface-variant text-sm line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-electric-blue font-poppins text-[10px] font-bold tracking-widest uppercase mb-1">Results</h4>
                      <p className="text-white text-sm font-semibold">{project.results}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gold font-poppins text-xs font-bold tracking-[0.2em] uppercase mt-auto group-hover:gap-4 transition-all">
                    Examine Technical Study <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl glass-card overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-20 bg-black/50 p-2 rounded-full text-white hover:text-gold transition-colors"
              >
                <X size={28} />
              </button>

              <div className="md:w-1/2 relative h-80 md:h-auto">
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="bg-gold text-navy font-poppins text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{selectedProject.industry}</span>
                  <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-white uppercase leading-none">{selectedProject.name}</h2>
                </div>
              </div>

              <div className="md:w-1/2 p-12 overflow-y-auto bg-navy/40 backdrop-blur-3xl">
                <div className="space-y-12">
                  <section className="space-y-4">
                    <div className="flex items-center gap-3 text-gold">
                      <ShieldCheck size={20} />
                      <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.3em]">Problem Statement</h4>
                    </div>
                    <p className="text-on-surface-variant text-lg leading-relaxed font-inter">{selectedProject.fullDetails.problem}</p>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center gap-3 text-electric-blue">
                      <Globe size={20} />
                      <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.3em]">Execution Framework</h4>
                    </div>
                    <p className="text-on-surface-variant text-lg leading-relaxed font-inter">{selectedProject.fullDetails.execution}</p>
                  </section>

                  <section className="space-y-6">
                    <div className="flex items-center gap-3 text-gold">
                      <Activity size={20} />
                      <h4 className="font-montserrat font-bold text-xs uppercase tracking-[0.3em]">Performance Metrics</h4>
                    </div>
                    <div className="grid gap-4">
                      {selectedProject.fullDetails.metrics.map((metric, i) => (
                        <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-gold/30 transition-colors">
                          <BarChart3 className="text-gold" size={18} />
                          <span className="text-white font-poppins font-bold text-sm tracking-wide">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="pt-8 border-t border-white/10">
                    <Link href="/contact" className="gold-button w-full py-5 text-navy font-bold text-sm uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-gold/10">
                      Partner For Similar Success <ArrowRight size={18} />
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

export default ProjectsPage;
