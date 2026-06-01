import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gavel, Scale, FileText, AlertTriangle, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-40 pb-32 animate-entrance">
        <section className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gold/10 p-3 rounded-2xl border border-gold/20">
              <Scale className="text-gold w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black text-white uppercase tracking-tighter leading-none">Terms of <span className="text-gold">Service</span></h1>
              <p className="text-[10px] font-poppins text-white/40 uppercase tracking-[0.4em] mt-2 font-bold text-glow">Framework for Industrial Engagement</p>
            </div>
          </div>

          <div className="bg-[#051128] border border-white/5 rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -ml-48 -mt-48"></div>
            
            <div className="relative z-10 space-y-8 text-white/70 leading-relaxed font-inter text-sm md:text-base">
              <p className="text-lg text-white font-medium">Agreement for Provision of Industrial Services & Logistics</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <FileText className="text-gold w-6 h-6" /> 1. Scope of Engagement
                </h2>
                <p>
                  Accessing the ENSEW Services Limited platform or utilizing our Logistics Command Terminal constitutes 
                  an formal agreement to these terms. Our services encompass industrial supply, global logistics, 
                  and technical contracting. All operations are conducted under rigorous international standards of 
                  excellence and professional ethics.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <Gavel className="text-gold w-6 h-6" /> 2. Regulatory Compliance
                </h2>
                <p>
                  Clients and partners must ensure all documentation provided for customs, shipping, or industrial 
                  contracting is accurate and legally obtained. ENSEW Services Limited maintains a zero-tolerance 
                  policy for non-compliant cargo or fraudulent technical specifications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <AlertTriangle className="text-gold w-6 h-6" /> 3. Liability & Risk Management
                </h2>
                <p>
                  While we utilize advanced tracking and predictive analytics to mitigate risk, industrial logistics 
                  involves inherent complexities. ENSEW’s liability is strictly governed by the standard maritime and 
                  commercial laws applicable to the specific service contract in place.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <ShieldAlert className="text-gold w-6 h-6" /> 4. IP Protection
                </h2>
                <p>
                  All proprietary technical integration methods, software interfaces (including the Ops Hub UI), and 
                  industrial strategies showcased on this platform are the intellectual property of ENSEW Services 
                  Limited. Unauthorized duplication or digital extraction is strictly prohibited.
                </p>
              </div>

              <div className="p-8 bg-gold/5 rounded-2xl border border-gold/10 mt-12">
                <p className="text-xs font-poppins font-bold text-gold uppercase tracking-widest mb-2">Legal Jurisdiction</p>
                <p className="text-white/60">
                  These terms are governed by the Laws of the Federal Republic of Nigeria, with consideration for 
                  international maritime protocols where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
