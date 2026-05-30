"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQY7h1PdbU7qUcRXqNB-kU3-07KNBKg59cjNhZ-fB3TV1m-VwnhBB6EKUHdWnnuSE8L9an-LHMGCpA9hscZGzeIidZHS_SLpDWB_bUSi-Bv28jivO0gvAWKU8AMnMzVadWaXKvxqYyHzx-VkBQu26Jg52yVKURC27A5Fzz51ItfTH8CWZEr__pBX8hMDrFpc7owKhYlzhK8RZ-YorWEj46sKr8QUFkaLTNtqeoyIzBt7FAMJ3NJ3Pnq6rL5nWtvkTDHJS7OnerPIa-"
  },
  {
    name: "Lagos Industrial Hub",
    industry: "Manufacturing",
    challenge: "Inefficient component sourcing causing 30-day production delays.",
    solution: "Centralized industrial supply framework and automated procurement.",
    results: "Delays reduced to 48 hours, 25% cost savings on critical parts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF"
  },
  {
    name: "Offshore Energy Logistics",
    industry: "Energy",
    challenge: "High-risk heavy equipment transport to deep-sea installations.",
    solution: "Specialized logistics and rigorous risk management protocols.",
    results: "Zero-incident delivery record over 24 months of operation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8REQHPAsE7fYVVq99EyTbdRpzD2_ASEqCm12oDeynjtNWLeANAJ_8fFF5A1i3goMZpkLLqKXh4qkeXDnhRknhD4pLjAdgJSIg6d_VXMDVzTfNBIphW_xxXhwUrUdzFYtoz_chXuZXZ6qsfG4JviThjBnCMQrVYPOge3aMJXfRrEpRssOxadF8Uv9qt_Wo7ZPHCyNzp1N8K2Ds0dr8MpJFKJLYZkLpIt6poNTL2rPYm_PDbbApTEXPOCp_gpAXAZEs8bBLH8RvGQc"
  },
  {
    name: "Nationwide Retail Network",
    industry: "Retail Distribution",
    challenge: "Fragmented distribution causing frequent stock-outs in rural areas.",
    solution: "Integrated hub-and-spoke distribution network across Nigeria.",
    results: "99.5% stock availability achieved across all served regions.",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Infrastructure Expansion",
    industry: "Construction",
    challenge: "Coordinating multi-vendor supplies for a major airport expansion.",
    solution: "General contracting and end-to-end supply chain synchronization.",
    results: "Project delivered 3 months ahead of schedule and under budget.",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "West African Trade Route",
    industry: "Import/Export",
    challenge: "Navigating complex ECOWAS trade regulations and customs barriers.",
    solution: "Strategic manufacturing representation and trade compliance.",
    results: "300% growth in trade volume for represented international brands.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3"
  }
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-24 bg-surface border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-navy/40 z-10 backdrop-blur-[1px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Projects Hero" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
            >
              Proven <span className="text-gold">Results</span>
            </motion.h1>
            <p className="text-lg text-white max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs font-bold bg-navy/60 inline-block px-4 py-2 rounded-full">
              Delivering Excellence Across Complex Industrial Landscapes
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card flex flex-col rounded-2xl overflow-hidden group border border-white/5 hover:border-gold/30 transition-all"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <span className="text-gold font-poppins text-[10px] font-bold tracking-widest uppercase">{project.industry}</span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-6">{project.name}</h3>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <h4 className="text-gold font-poppins text-[10px] font-bold tracking-widest uppercase mb-1">Challenge</h4>
                      <p className="text-on-surface-variant text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-electric-blue font-poppins text-[10px] font-bold tracking-widest uppercase mb-1">Solution</h4>
                      <p className="text-on-surface-variant text-sm">{project.solution}</p>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-white font-poppins text-[10px] font-bold tracking-widest uppercase mb-1">Results</h4>
                      <p className="text-on-surface text-sm font-semibold">{project.results}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="flex items-center gap-2 text-gold font-poppins text-xs font-bold tracking-[0.2em] uppercase mt-auto group-hover:gap-4 transition-all">
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
