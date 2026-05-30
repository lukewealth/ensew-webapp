"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Factory, Construction, Wheat, Zap, ShoppingCart, Truck, Settings, Globe } from "lucide-react";

export const metadata = {
  title: "Industries We Serve",
  description: "Tailored industrial and logistics solutions for Manufacturing, Energy, Construction, Agriculture, and Retail Distribution sectors.",
};

const industries = [
  { name: "Heavy Manufacturing", icon: Factory, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF" },
  { name: "Energy & Utilities", icon: Zap, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8REQHPAsE7fYVVq99EyTbdRpzD2_ASEqCm12oDeynjtNWLeANAJ_8fFF5A1i3goMZpkLLqKXh4qkeXDnhRknhD4pLjAdgJSIg6d_VXMDVzTfNBIphW_xxXhwUrUdzFYtoz_chXuZXZ6qsfG4JviThjBnCMQrVYPOge3aMJXfRrEpRssOxadF8Uv9qt_Wo7ZPHCyNzp1N8K2Ds0dr8MpJFKJLYZkLpIt6poNTL2rPYm_PDbbApTEXPOCp_gpAXAZEs8bBLH8RvGQc" },
  { name: "Pharmaceuticals", icon: Settings, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQY7h1PdbU7qUcRXqNB-kU3-07KNBKg59cjNhZ-fB3TV1m-VwnhBB6EKUHdWnnuSE8L9an-LHMGCpA9hscZGzeIidZHS_SLpDWB_bUSi-Bv28jivO0gvAWKU8AMnMzVadWaXKvxqYyHzx-VkBQu26Jg52yVKURC27A5Fzz51ItfTH8CWZEr__pBX8hMDrFpc7owKhYlzhK8RZ-YorWEj46sKr8QUFkaLTNtqeoyIzBt7FAMJ3NJ3Pnq6rL5nWtvkTDHJS7OnerPIa-" },
  { name: "Logistics & Supply", icon: Truck, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3" },
  { name: "Infrastructure", icon: Construction, image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" },
  { name: "Agriculture", icon: Wheat, image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" },
  { name: "Retail Distribution", icon: ShoppingCart, image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" },
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
              Tailored Expertise for the World&apos;s Most Demanding Industries
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
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <Link href="/contact" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <industry.icon className="text-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-montserrat font-bold text-white uppercase tracking-tight group-hover:text-gold transition-colors">{industry.name}</h3>
                  <div className="w-0 group-hover:w-full h-1 bg-gold transition-all duration-500 mt-2"></div>
                </Link>
              </motion.div>
            ))}
          </div>
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

      <Footer />
    </div>
  );
};

export default IndustriesPage;
