import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Globe, Server, FileCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C]">
      <Header />
      
      <main className="pt-40 pb-32">
        <section className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gold/10 p-3 rounded-2xl border border-gold/20">
              <Shield className="text-gold w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-montserrat font-black text-white uppercase tracking-tighter leading-none">Privacy <span className="text-gold">Policy</span></h1>
              <p className="text-[10px] font-poppins text-white/40 uppercase tracking-[0.4em] mt-2 font-bold text-glow">Data Sovereignty & Security Protocol</p>
            </div>
          </div>

          <div className="bg-[#051128] border border-white/5 rounded-[3rem] p-10 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            
            <div className="relative z-10 space-y-8 text-white/70 leading-relaxed font-inter">
              <p className="text-lg text-white font-medium italic">Effective Date: June 1, 2026</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <Eye className="text-gold w-6 h-6" /> 1. Operational Overview
                </h2>
                <p>
                  ENSEW Services Limited ("we", "our", or "us") operates at the intersection of industrial excellence and digital integration. 
                  This Privacy Policy outlines our commitment to the secure management of data collected through our global logistics terminal 
                  and enterprise website. We prioritize data sovereignty and regulatory compliance across all jurisdictions we serve, including 
                  Lagos, London, and Houston.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <FileCheck className="text-gold w-6 h-6" /> 2. Information Acquisition
                </h2>
                <p>We acquire specific data sets essential for global logistics and industrial contracting:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-gold">
                  <li><strong className="text-white">Identity Matrix:</strong> Name, professional title, and organizational affiliation.</li>
                  <li><strong className="text-white">Communication Data:</strong> Corporate email addresses, secure contact nodes, and correspondence history.</li>
                  <li><strong className="text-white">Logistics Metadata:</strong> Shipment IDs, asset trajectories, port documentation, and weight specifications.</li>
                  <li><strong className="text-white">Technical Intelligence:</strong> IP addresses, browser specifications, and encrypted session logs via our Zoho-powered terminal.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <Lock className="text-gold w-6 h-6" /> 3. Data Fortification
                </h2>
                <p>
                  Our security architecture utilizes industry-standard encryption protocols. Data is housed in tier-4 secure facilities 
                  with redundant backup systems. We employ end-to-end encryption for all shipment tracking data processed through our 
                  Global Ops Hub to ensure the resilience of your supply chain information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight flex items-center gap-3">
                  <Globe className="text-gold w-6 h-6" /> 4. International Transmission
                </h2>
                <p>
                  As a global entity, information may be transmitted across international borders. We ensure such transmissions 
                  adhere to the highest standards of data protection, utilizing Standard Contractual Clauses (SCCs) and maintaining 
                  compliance with GDPR and local data protection regulations in Nigeria.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-12">
                <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight">5. Contact Data Command</h2>
                <p>
                  For inquiries regarding data management or to exercise your right to information access, contact our 
                  Data Protection Officer at <span className="text-gold font-bold">privacy@ensewservices.com</span>.
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
