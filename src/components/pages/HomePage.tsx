"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, AnimatePresence, useInView, useAnimation } from "framer-motion";
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
  ArrowRight,
  GraduationCap,
  Music,
  ChevronLeft,
  Factory,
  Zap,
  Settings
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

const Counter = ({ value, suffix = "", duration = 2 }: { value: string, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const industries = [
  {
    name: "Heavy Manufacturing",
    label: "HEAVY MANUFACTURING",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    desc: "Precision engineering and large-scale industrial production systems."
  },
  {
    name: "Energy & Utilities",
    label: "ENERGY & UTILITIES",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    desc: "Sustainable power infrastructure and critical resource management."
  },
  {
    name: "Pharmaceuticals",
    label: "PHARMACEUTICALS",
    icon: Settings,
    image: "/images/pharmaceuticals.jpg",
    desc: "Advanced biotech logistics and high-integrity medical supply chains."
  },
  {
    name: "Logistics & Supply",
    label: "LOGISTICS & SUPPLY",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    desc: "Automated distribution networks and global trade optimization."
  },
  {
    name: "Education",
    label: "EDUCATION",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    desc: "Modern institutional infrastructure and specialized learning tools."
  },
  {
    name: "Music Investment",
    label: "MUSIC INVESTMENT",
    icon: Music,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200",
    desc: "Strategic capital and high-tier production for the global arts."
  }
];

const HomePage = () => {
  const [typewriterFinished, setTypewriterFinished] = useState(false);
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const infoTexts = React.useMemo(() => [
    "Optimizing International Trade Routes",
    "Advanced Logistics & Supply Systems",
    "Elite Industrial Contracting Partners",
    "Smart Digital Technical Integration"
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterFinished(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % infoTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [infoTexts.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  return (
    <div className="flex flex-col min-h-screen bg-industrial-grid">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#020B1C] z-0"></div>
            <div className="absolute inset-0 hero-seamless-overlay z-10 opacity-90"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric-blue/10 blur-[120px] rounded-full z-5 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-navy-light/20 blur-[150px] rounded-full z-5"></div>
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

          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-32 pb-12">
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div variants={fadeInUp} className="inline-block group mb-8 cursor-default">
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

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-montserrat font-extrabold text-white mb-8 tracking-tighter leading-[0.9] text-glow uppercase">
                <Typewriter text="Building Resilient" delay={1.2} speed={0.05} /> <br />
                <Typewriter text="Supply Chain" delay={2.2} speed={0.05} className="brand-gradient-text" /> <br />
                <Typewriter text="Solutions." delay={3.2} speed={0.05} />
              </motion.h1>

              <motion.div animate={{ opacity: typewriterFinished ? 0.6 : 1 }} transition={{ duration: 1 }} className="min-h-[2rem] mb-12">
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

              <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center mb-16">
                <Link 
                  href="/track" 
                  className="gold-button px-16 py-6 text-navy font-poppins font-black text-lg tracking-[0.2em] rounded-2xl uppercase flex items-center gap-4 group shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-[1.08] hover:-translate-y-2 active:scale-95 border-2 border-gold/50"
                >
                  Track Your Shipment <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>

                <motion.button 
                   onClick={() => window.scrollTo({ top: document.documentElement.clientHeight * 1.1, behavior: "smooth" })}
                   animate={{ y: [0, 15, 0] }} 
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="mt-8 text-gold/60 hover:text-gold transition-all cursor-pointer group"
                   aria-label="Scroll Down"
                 >
                   <ChevronRight size={48} className="rotate-90 group-hover:scale-110 transition-transform" />
                 </motion.button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 mt-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-pink"></div>
                  <span className="text-[10px] font-poppins font-black tracking-[0.4em] uppercase text-white/40">
                    Moving <span className="text-brand-pink">Faster</span> and <span className="text-brand-blue">Smarter</span>
                  </span>
                  <div className="h-px w-12 bg-brand-blue"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-surface via-surface/90 to-transparent z-10 pointer-events-none"></div>
        </section>

        {/* Introduction Section (Who We Are) */}
        <section className="pt-16 pb-32 bg-surface overflow-hidden border-b border-white/5 relative z-30">
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
              alt="Industrial Capacity"
              className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
           <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { val: "25", label: "PROJECTS COMPLETED" },
                { val: "5", label: "GLOBAL PARTNERS" },
                { val: "24/7", label: "OPERATIONAL SUPPORT", isString: true },
                { val: "15", label: "INDUSTRIES SERVED", suffix: "+" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-7xl font-montserrat font-extrabold text-gold mb-2 tracking-tighter">
                    {stat.isString ? stat.val : <Counter value={stat.val} suffix={stat.suffix} />}
                  </div>
                  <div className="text-[10px] font-poppins font-bold text-white tracking-[0.3em] uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Slider Section */}
        <section className="py-32 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-gold font-poppins text-xs font-bold uppercase tracking-[0.4em] block mb-4">Sectors</span>
                <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white tracking-tight uppercase">Industries We <span className="text-gold">Serve</span></h2>
                <p className="text-lg text-on-surface-variant mt-6 font-inter">Tailored expertise for the world&apos;s most demanding sectors.</p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => { setCurrentIndustry((prev) => (prev - 1 + industries.length) % industries.length); setIsAutoPlaying(false); }}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 group"
                >
                  <ChevronLeft className="group-active:scale-90 transition-transform" />
                </button>
                <button 
                  onClick={() => { setCurrentIndustry((prev) => (prev + 1) % industries.length); setIsAutoPlaying(false); }}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 group"
                >
                  <ChevronRight className="group-active:scale-90 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="relative aspect-[16/9] lg:aspect-square rounded-[3rem] overflow-hidden group">
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      src={industries[currentIndustry].image}
                      alt={industries[currentIndustry].name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-8 left-8">
                      <div className="bg-navy/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        {React.createElement(industries[currentIndustry].icon, { className: "text-gold w-8 h-8" })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 lg:pl-12">
                    <span className="text-gold font-poppins text-xs font-bold tracking-[0.4em] uppercase block">
                      {industries[currentIndustry].label}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-montserrat font-extrabold text-white tracking-tight uppercase">
                      {industries[currentIndustry].name}
                    </h3>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-inter">
                      {industries[currentIndustry].desc}
                    </p>
                    <div className="pt-8">
                      <Link href="/industries" className="inline-flex items-center gap-4 text-gold font-poppins font-bold tracking-[0.2em] uppercase group">
                        Explore Sector Details 
                        <div className="w-12 h-[1px] bg-gold/30 group-hover:w-20 transition-all duration-500"></div>
                        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                      </Link>
                    </div>

                    <div className="flex gap-2 pt-12">
                      {industries.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setCurrentIndustry(i); setIsAutoPlaying(false); }}
                          className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndustry ? "w-12 bg-gold" : "w-4 bg-white/10 hover:bg-white/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
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
