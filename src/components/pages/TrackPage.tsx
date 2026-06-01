"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Package, Search, MapPin, Flag, Truck, Shield, Clock, CheckCircle, Download, Loader2, MessageSquare, ChevronRight } from "lucide-react";

interface ShipmentLog {
  date: string;
  event: string;
  location: string;
  details: string;
}

interface Shipment {
  status: string;
  expectedDelivery: string;
  progress: number;
  origin: string;
  destination: string;
  weight: string;
  pieces: string;
  service: string;
  type: string;
  location: string;
  dimensions: string;
  logs: ShipmentLog[];
}

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState("");
  const [cachedShipments, setCachedShipments] = useLocalStorage<Record<string, Shipment>>("ensew_tracked_shipments", {});

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setIsSearching(true);
    setError("");

    try {
      const response = await fetch(`/api/track?id=${trackingId}`);
      const data = await response.json();

      if (response.ok) {
        setShipment(data);
        setCachedShipments({ ...cachedShipments, [trackingId]: data });
      } else {
        setError(data.error || "Shipment not found. Please check the ID.");
        setShipment(null);
      }
    } catch (err) {
      setError("An error occurred while tracking. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Logistics Background" 
              className="w-full h-full object-cover grayscale brightness-[0.3]" 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-[#020B1C]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
            >
              Secure <span className="text-gold">Asset Tracking</span>
            </motion.h1>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto uppercase tracking-[0.3em] font-poppins text-xs font-bold">
              Global Visibility for Professional Enterprise Logistics
            </p>
            
            <form onSubmit={handleTrack} className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-2 flex flex-col md:flex-row shadow-2xl border border-white/10 group focus-within:border-gold/50 transition-all">
              <div className="flex-grow flex items-center px-6 py-4">
                <Package className="text-gold mr-4 w-6 h-6" />
                <input 
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full font-montserrat text-xl placeholder:text-white/20 text-white outline-none" 
                  placeholder="Enter tracking number (e.g. ENS-9844-XZ)" 
                />
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="gold-button text-navy px-12 py-5 rounded-xl font-montserrat font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-gold/20 active:scale-95 transition-all"
              >
                {isSearching ? <Loader2 className="animate-spin" /> : "Initiate Audit"}
              </button>
            </form>
            {error && <p className="mt-6 text-red-400 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" /> {error}
            </p>}
          </div>
        </section>

        {/* Tracking Results */}
        <AnimatePresence>
          {shipment && (
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-7xl mx-auto px-6 py-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-12">
                  {/* Progress Terminal */}
                  <div className="bg-[#051128] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-gold/10 text-gold font-poppins text-[10px] font-black px-4 py-1.5 rounded-full border border-gold/20 uppercase tracking-widest shadow-inner">
                            {shipment.status}
                          </span>
                          <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Live Monitoring Active</span>
                        </div>
                        <h2 className="text-3xl font-montserrat font-black text-white uppercase tracking-tight">Shipment Trajectory</h2>
                      </div>
                      <div className="text-left md:text-right bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-white/40 font-poppins text-[10px] font-bold uppercase tracking-widest mb-1">Global ETA Projection</p>
                        <p className="text-2xl font-montserrat font-black text-gold uppercase tracking-tighter">{shipment.expectedDelivery}</p>
                      </div>
                    </div>

                    <div className="relative flex justify-between py-10 px-4">
                      {/* Terminal Line */}
                      <div className="absolute top-[68px] left-0 w-full h-[3px] bg-white/5 z-0 rounded-full"></div>
                      <div 
                        className="absolute top-[68px] left-0 h-[3px] bg-gradient-to-r from-gold to-white z-0 transition-all duration-1500 shadow-[0_0_15px_rgba(212,175,55,0.5)] rounded-full" 
                        style={{ width: `${shipment.progress}%` }}
                      ></div>
                      
                      {/* Operational Milestones */}
                      {[
                        { icon: CheckCircle, label: "Origin Hub", color: "text-gold" },
                        { icon: Truck, label: "Transit", color: shipment.progress >= 40 ? "text-gold" : "text-white/10" },
                        { icon: Shield, label: "Customs", color: shipment.progress >= 70 ? "text-gold" : "text-white/10" },
                        { icon: Clock, label: "Arrival", color: shipment.progress >= 90 ? "text-gold" : "text-white/10" },
                        { icon: Package, label: "Delivered", color: shipment.progress >= 100 ? "text-gold" : "text-white/10" }
                      ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ring-8 ring-[#051128] transition-all duration-500 ${shipment.progress >= (i * 25) ? 'bg-gold text-navy scale-110 shadow-lg shadow-gold/20' : 'bg-[#0A1A3A] text-white/10'}`}>
                            <step.icon size={24} />
                          </div>
                          <span className={`mt-6 font-poppins text-[10px] font-black uppercase tracking-[0.2em] ${shipment.progress >= (i * 25) ? 'text-white' : 'text-white/10'}`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Metrics Bento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#051128] p-8 rounded-[2rem] border border-white/5 hover:border-gold/30 transition-all group">
                      <h3 className="text-[10px] font-poppins font-black text-gold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Routing Protocol
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start group/loc">
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold mr-5 group-hover/loc:bg-gold group-hover/loc:text-navy transition-all">
                             <MapPin size={20} />
                          </div>
                          <div>
                            <p className="font-montserrat font-black text-white uppercase text-lg leading-none mb-2">{shipment.origin}</p>
                            <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">Consignment Origin</p>
                          </div>
                        </div>
                        <div className="ml-5 h-10 border-l-2 border-dashed border-white/10"></div>
                        <div className="flex items-start group/loc">
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold mr-5 group-hover/loc:bg-gold group-hover/loc:text-navy transition-all">
                             <Flag size={20} />
                          </div>
                          <div>
                            <p className="font-montserrat font-black text-white uppercase text-lg leading-none mb-2">{shipment.destination}</p>
                            <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">Consignment Destination</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#051128] p-8 rounded-[2rem] border border-white/5 hover:border-gold/30 transition-all">
                      <h3 className="text-[10px] font-poppins font-black text-gold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Cargo Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0A1A3A] p-5 rounded-2xl border border-white/5">
                          <p className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2">Weight</p>
                          <p className="font-montserrat font-black text-white uppercase text-sm">{shipment.weight}</p>
                        </div>
                        <div className="bg-[#0A1A3A] p-5 rounded-2xl border border-white/5">
                          <p className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2">Inventory</p>
                          <p className="font-montserrat font-black text-white uppercase text-sm">{shipment.pieces}</p>
                        </div>
                        <div className="bg-[#0A1A3A] p-5 rounded-2xl border border-white/5">
                          <p className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2">Service</p>
                          <p className="font-montserrat font-black text-gold uppercase text-sm">{shipment.service}</p>
                        </div>
                        <div className="bg-[#0A1A3A] p-5 rounded-2xl border border-white/5">
                          <p className="text-[9px] text-white/30 font-black uppercase tracking-widest mb-2">Dimensions</p>
                          <p className="font-montserrat font-black text-white uppercase text-xs">{shipment.dimensions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-12">
                  {/* Digital Twin View */}
                  <div className="bg-[#051128] overflow-hidden rounded-[2.5rem] h-[450px] relative border border-white/5 shadow-2xl">
                    <img 
                      alt="Tracking Map" 
                      className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125" 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051128] via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8 right-8">
                       <div className="bg-[#0A1A3A]/80 backdrop-blur-xl p-5 rounded-2xl border border-gold/30">
                          <p className="font-poppins text-[10px] font-black text-white flex items-center uppercase tracking-[0.2em] mb-2">
                            <span className="relative flex h-3 w-3 mr-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                            </span>
                            Last Active Node
                          </p>
                          <p className="text-xl font-montserrat font-black text-white uppercase tracking-tighter">{shipment.location}</p>
                       </div>
                    </div>
                  </div>

                  {/* Priority Support */}
                  <div className="bg-gradient-to-br from-[#0A1A3A] to-[#051128] p-10 rounded-[2.5rem] text-white border border-white/10 hover:border-gold/50 transition-all group shadow-xl">
                    <h3 className="text-2xl font-montserrat font-black mb-3 uppercase tracking-tight">Ops Support</h3>
                    <p className="text-white/40 text-[10px] font-poppins font-bold mb-10 uppercase tracking-widest leading-relaxed">Dedicated logistics experts monitoring your asset trajectory 24/7/365.</p>
                    <button className="w-full bg-gold text-navy py-5 rounded-2xl font-poppins font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-gold/20 hover:scale-[1.02] active:scale-95 transition-all">
                      <MessageSquare size={18} /> Connect with Command
                    </button>
                  </div>
                </div>
              </div>

              {/* Secure Operational Log */}
              <div className="mt-20 bg-[#051128] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-[#0A1A3A]/30">
                  <div>
                    <h2 className="text-2xl font-montserrat font-black text-white uppercase tracking-tight mb-1">Audit Log</h2>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Complete Chain of Custody History</p>
                  </div>
                  <button className="text-gold font-poppins text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:brightness-110 transition-all bg-gold/5 px-6 py-3 rounded-xl border border-gold/10">
                    <Download size={16} /> Secure Export
                  </button>
                </div>
                <div className="divide-y divide-white/5">
                  {shipment.logs.map((log: ShipmentLog, i: number) => (
                    <div key={i} className="px-10 py-8 flex flex-col md:flex-row gap-6 md:gap-16 hover:bg-white/5 transition-all group">
                      <div className="min-w-[180px]">
                         <p className="font-poppins text-[10px] font-black text-gold uppercase tracking-widest mb-1">{log.date}</p>
                         <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase font-bold">
                            <MapPin size={10} className="text-red-400" /> {log.location}
                         </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                           <p className="font-montserrat font-black text-white uppercase text-lg group-hover:text-gold transition-colors">{log.event}</p>
                           <ChevronRight size={16} className="text-white/10" />
                        </div>
                        <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold leading-relaxed">{log.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default TrackPage;
