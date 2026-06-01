import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Settings, Info, CheckCircle2, ShieldCheck } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-40 pb-32 animate-entrance">
        <section className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gold/10 p-3 rounded-2xl border border-gold/20">
              <Cookie className="text-gold w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black text-white uppercase tracking-tighter leading-none">Cookie <span className="text-gold">Policy</span></h1>
              <p className="text-[10px] font-poppins text-white/40 uppercase tracking-[0.4em] mt-2 font-bold text-glow">Enhanced Digital Experience Protocol</p>
            </div>
          </div>

          <div className="bg-[#051128] border border-white/5 rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 blur-[120px] rounded-full -mr-48 -mb-48"></div>
            
            <div className="relative z-10 space-y-8 text-white/70 leading-relaxed font-inter">
              <p className="text-lg text-white font-medium">Optimizing Your Interactive Sessions</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <Info className="text-gold w-6 h-6" /> What are Cookies?
                </h2>
                <p>
                  Cookies are small data packets utilized by your browser to facilitate secure and efficient 
                  interactions with our logistics terminal. They allow us to recognize your session, maintain 
                  security during shipment tracking, and optimize the delivery of technical documentation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-[#0A1A3A] p-8 rounded-2xl border border-white/5">
                  <Settings className="text-gold w-8 h-8 mb-4" />
                  <h3 className="text-white font-montserrat font-bold uppercase tracking-widest mb-3">Core Performance</h3>
                  <p className="text-sm text-white/40">Essential for the secure functioning of the Ops Hub, login persistence, and real-time tracking updates.</p>
                </div>
                <div className="bg-[#0A1A3A] p-8 rounded-2xl border border-white/5">
                  <ShieldCheck className="text-gold w-8 h-8 mb-4" />
                  <h3 className="text-white font-montserrat font-bold uppercase tracking-widest mb-3">Analytical Insight</h3>
                  <p className="text-sm text-white/40">Used to understand how our partners navigate our industrial portfolio, allowing us to enhance site efficiency.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <CheckCircle2 className="text-gold w-6 h-6" /> Managing Preferences
                </h2>
                <p>
                  You have absolute control over your digital footprint. Most enterprise browsers allow you to 
                  adjust cookie parameters via their secure settings menu. Note that disabling essential cookies 
                  may restrict access to secure portions of the Logistics Command Terminal.
                </p>
              </div>
              
              <p className="pt-12 text-xs uppercase tracking-widest font-black text-white/20 border-t border-white/5">
                Last Intelligence Update: June 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
