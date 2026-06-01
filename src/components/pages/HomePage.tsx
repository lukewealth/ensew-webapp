"use client";

import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Shield, 
  ChevronRight, 
  Play, 
  CheckCircle, 
  Truck, 
  Package, 
  Construction, 
  Cpu, 
  ShieldAlert,
  Handshake,
  BarChart3,
  ArrowRight
} from "lucide-react";

const Typewriter = ({ text, delay = 0, speed = 0.05, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + (index * speed),
            ease: "linear"
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const HomePage = () => {
  const [typewriterFinished, setTypewriterFinished] = React.useState(false);
  const [rotatingTextIndex, setRotatingTextIndex] = React.useState(0);
  
  const infoTexts = React.useMemo(() => [
    "Optimizing International Trade Routes",
    "Advanced Logistics & Supply Systems",
    "Elite Industrial Contracting Partners",
    "Smart Digital Technical Integration"
  ], []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterFinished(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % infoTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [infoTexts.length]);

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-industrial-grid">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
          <div className="absolute inset-0 z-0">
            {/* Primary Background Layer */}
            <div className="absolute inset-0 bg-[#020B1C] z-0"></div>
            
            {/* Seamless Gradient Overlays */}
            <div className="absolute inset-0 hero-seamless-overlay z-10 opacity-90"></div>
            
            {/* Ambient Blue Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full z-5 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-navy-light/20 blur-[150px] rounded-full z-5"></div>
            
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-radial-vignette z-15 pointer-events-none"></div>

            <motion.div 
              animate={{ opacity: typewriterFinished ? 0.7 : 0.4 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/x-G6cEuFDJM?autoplay=1&mute=1&loop=1&playlist=x-G6cEuFDJM&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&enablejsapi=1"
                className="w-full h-[150%] md:h-[120%] lg:h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-overlay pointer-events-none"
                style={{ border: 'none', width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh' }}
                allow="autoplay; encrypted-media"
                title="Industrial Background Video"
              ></iframe>
            </motion.div>
          </div>

          {/* Added pt-48 to move content downwards (approx 3x based on standard spacing) */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-48">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block group mb-12 cursor-default"
              >
                <div className="relative bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold/5 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="relative flex items-center gap-2 text-gold font-poppins text-xs font-bold tracking-[0.3em] uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                    </span>
                    <Typewriter text="Driving Global Industrial Excellence" speed={0.03} />
                  </span>
                </div>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-8xl font-montserrat font-extrabold text-white mb-10 tracking-tighter leading-[0.9] text-glow uppercase"
              >
                <Typewriter text="Building Resilient" delay={1.2} speed={0.05} /> <br />
                <Typewriter text="Supply Chain" delay={2.2} speed={0.05} className="text-gold" /> <br />
                <Typewriter text="Solutions." delay={3.2} speed={0.05} />
              </motion.h1>

              <motion.div
                animate={{ opacity: typewriterFinished ? 0.6 : 1 }}
                transition={{ duration: 1 }}
                className="min-h-[2rem] mb-12"
              >
                <div className="relative flex justify-center items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={rotatingTextIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed font-inter italic"
                    >
                      {infoTexts[rotatingTextIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <Link 
                  href="/track" 
                  className="gold-button px-12 py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase flex items-center gap-3 group shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 active:scale-95"
                >
                  Track Your Shipment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
             <motion.button 
               onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="text-white/30 hover:text-gold transition-colors cursor-pointer"
               aria-label="Scroll Down"
             >
               <ChevronRight size={40} className="rotate-90" />
             </motion.button>
          </div>
        </section>

        {/* Introduction Section (Who We Are) */}
        <section className="py-32 bg-surface overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-12 rounded-[2.5rem]"
              >
                <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-6">Premium Corporate Identity</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-8 tracking-tight leading-tight">
                  Who We <span className="text-gold">Are</span>
                </h2>
                <p className="text-lg text-on-surface-variant mb-6 leading-relaxed font-inter">
                  ENSEW Services Limited stands at the forefront of industrial excellence. We are more than a service provider; we are a strategic partner in your global growth journey.
                </p>
                <p className="text-lg text-on-surface-variant mb-10 leading-relaxed font-inter">
                  Our methodology combines decades of industrial experience with cutting-edge digital integration, ensuring your operations remain resilient in an ever-shifting global market.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBikyLe0EkjZzXmuth81aX7appnqzet4rk5ukm_bDZRvCbRsNF7XvB7H3Q37uiP6q3KuMirY3s3hfK_H3nVxJdBpd4x_jJo2sFpd1zkKwdx_z9p065Kj3j2o95RLvOMNmvNzjm_kzDe_oWIvAIRRfF7gy9CFREpCr5qf3TEZuUaKhIQ37DdO2nLjjipgcmjePsZ68Yw4SA4JDBcrBA04WBCu6ERCspF-OCykntH--NX59WByBhkb2ityDSHydneWRlXM0KypqDemSGf" 
                  alt="Corporate Excellence" 
                  className="relative z-10 rounded-[3rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[500px] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight">Our Core Services</h2>
              <div className="h-1 w-24 bg-gold mx-auto rounded-full"></div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { title: "Logistics Solutions", icon: Truck, desc: "End-to-end supply chain management optimized for speed, security, and real-time visibility across global borders." },
                { title: "Supply Chain", icon: Package, desc: "Advanced procurement and inventory strategies designed to minimize overhead and maximize operational flow." },
                { title: "Contracting", icon: Construction, desc: "Executive-tier industrial contracting for large-scale infrastructure and technical engineering projects." },
                { title: "Industrial Supply", icon: ShieldAlert, desc: "Critical component sourcing and distribution for heavy machinery and manufacturing ecosystems." },
                { title: "Technical Integration", icon: Cpu, desc: "Seamless digital layer implementation for legacy industrial systems, enabling IoT and data-driven insights." },
                { title: "Risk Management", icon: Shield, desc: "Sophisticated auditing and safety protocols to protect your enterprise assets and workforce globally." },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="glass-card p-10 rounded-3xl border border-white/5 hover:bg-navy/40 transition-all group"
                >
                  <service.icon size={48} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm font-inter">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Parallax */}
        <section className="relative py-32 overflow-hidden flex items-center justify-center">
           <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikxP7KLC6zhV4u7TtXodzt8J8du_7XLZGy43IzBwDiLg6eVuZErjkXQUwANlcSeQMUxLWIzYmCRJmCpkDkA6dGZ_iieb0WotuPF2FNzPsNSMZVBspQ07wQTVOdk30s72LoRZ5BvMicyCe8zBObIjG9-qFXJahjL5jZFjRQa3a9_pupkQ5463-JlbZqzmIKgmDpjGtrUvN9CH88SwiAmgrf4A2y7hlFyjtMDYWsJY2l_lgso53nugsjDryNuiZJoh16FaqrRo6oRlx"
              alt="Industrial Capacity"
              className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
           <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { val: "500+", label: "PROJECTS COMPLETED" },
                { val: "100+", label: "GLOBAL PARTNERS" },
                { val: "24/7", label: "OPERATIONAL SUPPORT" },
                { val: "15+", label: "INDUSTRIES SERVED" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-7xl font-montserrat font-extrabold text-gold mb-2 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-poppins font-bold text-white tracking-[0.3em] uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Businesses Trust Us Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-4">DNA</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white uppercase tracking-tight mb-12">Why Businesses Trust ENSEW</h2>
                
                <ul className="space-y-10 mb-12">
                  {[
                    { title: "Unmatched Reliability", desc: "We maintain a 99.8% on-time completion rate for all industrial contracts and supply chains." },
                    { title: "Global Regulatory Compliance", desc: "Our team navigates complex international trade laws and safety standards with absolute precision." },
                    { title: "Scalable Infrastructure", desc: "Solutions that grow with you, from regional pilot programs to global enterprise expansions." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-6 group">
                      <div className="bg-gold/10 p-2 rounded-xl group-hover:bg-gold/20 transition-colors shrink-0">
                        <CheckCircle className="text-gold" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-montserrat font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-on-surface-variant font-inter leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Shield, label: "SECURE DATA" },
                  { icon: Globe, label: "GLOBAL REACH" },
                  { icon: Handshake, label: "ELITE PARTNERS" },
                  { icon: BarChart3, label: "PRECISE ROI" }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="glass-card h-48 flex flex-col items-center justify-center p-8 rounded-[2rem] border border-white/5 group transition-all"
                  >
                    <card.icon className="text-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-poppins font-bold tracking-[0.2em] text-white text-center uppercase">{card.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Preview */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 text-center mb-20">
            <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-4">Sectors</span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white tracking-tight uppercase">Industries We Serve</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mt-6">Tailored expertise for the world&apos;s most demanding sectors.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
            <Link href="/industries" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mu5GSfmxEd4NAx5ustmwyb9OIi82HlYogJPg37ldTTRRkKRA6BQHYOmTdFN7yWexDwdrrBAT1QsbwhoVBeHNrGNfNp4Om_8eKFUS6slIeu58ny9a9gUvokbuZsFGn68ilbvNY3GD74ykV7YwGl9Lo-HJCcnery9wUMGOmDszmW9l1_9jrB3_DWtj0XncNdYDJi4eorVnMXVOL2ve77-kW7UgO-w8aWznSjXftRzFCFlJPj9nu4O__eqSlao2we1Or1TrtF2jfHPF" 
                alt="Heavy Manufacturing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                <h3 className="text-3xl font-montserrat font-bold text-white uppercase group-hover:text-gold transition-colors">Heavy Manufacturing</h3>
              </div>
            </Link>

            <Link href="/industries" className="relative group overflow-hidden rounded-[2rem] border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA8REQHPAsE7fYVVq99EyTbdRpzD2_ASEqCm12oDeynjtNWLeANAJ_8fFF5A1i3goMZpkLLqKXh4qkeXDnhRknhD4pLjAdgJSIg6d_VXMDVzTfNBIphW_xxXhwUrUdzFYtoz_chXuZXZ6qsfG4JviThjBnCMQrVYPOge3aMJXfRrEpRssOxadF8Uv9qt_Wo7ZPHCyNzp1N8K2Ds0dr8MpJFKJLYZkLpIt6poNTL2rPYm_PDbbApTEXPOCp_gpAXAZEs8bBLH8RvGQc" 
                alt="Energy & Utilities" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-xl font-montserrat font-bold text-white uppercase group-hover:text-gold transition-colors">Energy & Utilities</h3>
              </div>
            </Link>

            <Link href="/industries" className="relative group overflow-hidden rounded-[2rem] border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQY7h1PdbU7qUcRXqNB-kU3-07KNBKg59cjNhZ-fB3TV1m-VwnhBB6EKUHdWnnuSE8L9an-LHMGCpA9hscZGzeIidZHS_SLpDWB_bUSi-Bv28jivO0gvAWKU8AMnMzVadWaXKvxqYyHzx-VkBQu26Jg52yVKURC27A5Fzz51ItfTH8CWZEr__pBX8hMDrFpc7owKhYlzhK8RZ-YorWEj46sKr8QUFkaLTNtqeoyIzBt7FAMJ3NJ3Pnq6rL5nWtvkTDHJS7OnerPIa-" 
                alt="Pharmaceuticals" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-xl font-montserrat font-bold text-white uppercase group-hover:text-gold transition-colors">Pharmaceuticals</h3>
              </div>
            </Link>

            <Link href="/industries" className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshYPm_oKYreSI2_xLXLNGWggl10lWKfQCf6OhknGzBqDuWzh8K8KbCEbCsevqoOY5hj4iDL1XfoDBol799ZpE9k7dT_QljEFbIAUGZogBrVZ8V5J5Xt2tr2jj4qXLF4sOLkL-795SeIDGvRC5GgcOVI-CUcOiORhYfVRpumcx2BUOGowSJrInCukz_XBk36YMNZhNi5Vevd-zyyXUgBzBVVQ7V0kRftHb2-KSDbM_VrbM-eoCuwhvVyaNwrnyAqiPx7ieJKVyUkK3" 
                alt="Logistics & Supply" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                <h3 className="text-3xl font-montserrat font-bold text-white uppercase group-hover:text-gold transition-colors">Logistics & Supply</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/50 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric-blue/50 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-montserrat font-extrabold text-white mb-10 tracking-tight uppercase leading-none">
              Ready To Scale Your <span className="text-gold">Business</span> Operations?
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-inter max-w-2xl mx-auto">
              Partner with ENSEW Services Limited and experience the synergy of elite industrial expertise and smart digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link href="/contact" className="w-full sm:w-auto gold-button px-10 md:px-12 py-4 md:py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase shadow-2xl shadow-gold/20 text-base md:text-lg">
                Connect With An Expert
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-white font-poppins font-bold text-sm tracking-widest rounded-xl uppercase border border-white/10 hover:bg-white/5 transition-all">
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
