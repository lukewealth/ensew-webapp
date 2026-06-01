import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Map, ChevronRight, Package, Truck, Briefcase, Globe, Info, MessageSquare, ShieldCheck, Mail } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Infrastructure",
      icon: Globe,
      links: [
        { name: "Global Home", href: "/", desc: "Operational Overview" },
        { name: "About ENSEW", href: "/about", desc: "Corporate DNA & Mission" },
        { name: "Connect with Experts", href: "/contact", desc: "Consultation Gateway" },
      ]
    },
    {
      title: "Logistics & Supply",
      icon: Truck,
      links: [
        { name: "Asset Tracking", href: "/track", desc: "Real-time Monitoring" },
        { name: "Global Solutions", href: "/services", desc: "Service Portfolio" },
        { name: "Industries Served", href: "/industries", desc: "Tailored Sector Expertise" },
      ]
    },
    {
      title: "Operations & Tech",
      icon: ShieldCheck,
      links: [
        { name: "Ops Hub Terminal", href: "/admin/dashboard", desc: "Administrative Command" },
        { name: "Security Login", href: "/admin/login", desc: "Secure Access Node" },
        { name: "Project Portfolio", href: "/projects", desc: "Industrial Success Stories" },
      ]
    },
    {
      title: "Regulatory Framework",
      icon: Info,
      links: [
        { name: "Privacy Policy", href: "/privacy", desc: "Data Security Protocol" },
        { name: "Terms of Service", href: "/terms", desc: "Legal Framework" },
        { name: "Cookie Policy", href: "/cookies", desc: "Interactive Preferences" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-40 pb-32 animate-entrance">
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="bg-gold/10 p-3 rounded-2xl border border-gold/20">
              <Map className="text-gold w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black text-white uppercase tracking-tighter leading-none">Global <span className="text-gold">Sitemap</span></h1>
              <p className="text-[10px] font-poppins text-white/40 uppercase tracking-[0.4em] mt-2 font-bold text-glow">Complete Site Architecture Map</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-[#051128] p-8 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                   <section.icon size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-black text-white uppercase tracking-tight mb-8 border-b border-white/10 pb-4">{section.title}</h3>
                <ul className="space-y-6">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="group/link block">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover/link:text-gold transition-colors">{link.name}</span>
                          <ChevronRight size={14} className="text-gold opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                        </div>
                        <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest leading-none">{link.desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gradient-to-r from-navy to-navy-light rounded-[3rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <div>
                <h3 className="text-2xl font-montserrat font-black text-white uppercase tracking-tighter mb-2">Can&apos;t find a specific resource?</h3>
                <p className="text-white/40 text-xs font-poppins font-bold uppercase tracking-widest">Connect with our support infrastructure for immediate assistance.</p>
             </div>
             <Link href="/contact" className="bg-gold text-navy px-10 py-5 rounded-2xl font-poppins font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold/20">
                Access Help Center
             </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
