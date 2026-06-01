"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Package, Search, MapPin, Flag, Truck, Shield, Clock, CheckCircle, Download, Loader2, MessageSquare } from "lucide-react";

interface ShipmentLog {
  date: string;
  event: string;
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

    // Check cache first
    if (cachedShipments[trackingId]) {
      setShipment(cachedShipments[trackingId]);
    } else {
      setShipment(null);
    }

    setIsSearching(true);
    setError("");

    try {
      const response = await fetch(`/api/track?id=${trackingId}`);
      const data = await response.json();

      if (response.ok) {
        setShipment(data);
        // Persist to local cache for future visits
        setCachedShipments({ ...cachedShipments, [trackingId]: data });
      } else {
        if (!cachedShipments[trackingId]) {
          setError(data.error || "Shipment not found. Please check the ID.");
          setShipment(null);
        }
      }
    } catch (err) {
      if (!cachedShipments[trackingId]) {
        setError("An error occurred while tracking. Please try again.");
      }
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Logistics Background" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-background"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
            >
              Track Your <span className="text-gold">Global Assets</span>
            </motion.h1>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs">
              Real-time transparency for every mile of your shipment&apos;s journey.
            </p>
            
            <form onSubmit={handleTrack} className="max-w-3xl mx-auto glass-card rounded-xl p-2 flex flex-col md:flex-row shadow-2xl border border-white/10">
              <div className="flex-grow flex items-center px-4 py-3">
                <Package className="text-gold mr-3" />
                <input 
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full font-montserrat text-lg placeholder:text-white/30 text-white outline-none" 
                  placeholder="Enter tracking number (e.g. ENS-9844-XZ)" 
                />
              </div>
              <button 
                type="submit"
                disabled={isSearching}
                className="gold-button text-navy px-10 py-4 rounded-lg font-montserrat font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                {isSearching ? <Loader2 className="animate-spin" /> : "Track Now"}
              </button>
            </form>
            {error && <p className="mt-4 text-red-400 font-bold uppercase tracking-widest text-xs">{error}</p>}
          </div>
        </section>

        {/* Tracking Results */}
        <AnimatePresence>
          {shipment && (
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-7xl mx-auto px-6 py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Progress Timeline */}
                  <div className="glass-card p-8 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-10">
                      <div>
                        <span className="bg-gold/20 text-gold font-poppins text-[10px] font-bold px-3 py-1 rounded-full border border-gold/20 uppercase tracking-widest">
                          {shipment.status}
                        </span>
                        <h2 className="text-2xl font-montserrat font-bold text-white mt-2 uppercase tracking-tight">Shipment Progress</h2>
                      </div>
                      <div className="text-right">
                        <p className="text-on-surface-variant font-poppins text-[10px] font-bold uppercase tracking-widest">Expected Delivery</p>
                        <p className="text-xl font-montserrat font-bold text-gold uppercase">{shipment.expectedDelivery}</p>
                      </div>
                    </div>

                    <div className="relative flex justify-between py-4">
                      {/* Line */}
                      <div className="absolute top-9 left-0 w-full h-[2px] bg-white/10 z-0"></div>
                      <div 
                        className="absolute top-9 left-0 h-[2px] bg-gold z-0 transition-all duration-1000" 
                        style={{ width: `${shipment.progress}%` }}
                      ></div>
                      
                      {/* Steps */}
                      {[
                        { icon: CheckCircle, label: "Picked Up", color: "text-gold" },
                        { icon: Truck, label: "In Transit", color: shipment.progress >= 40 ? "text-gold" : "text-white/30" },
                        { icon: Shield, label: "Customs", color: shipment.progress >= 70 ? "text-gold" : "text-white/30" },
                        { icon: Clock, label: "Delivery", color: shipment.progress >= 90 ? "text-gold" : "text-white/30" },
                        { icon: Package, label: "Delivered", color: shipment.progress >= 100 ? "text-gold" : "text-white/30" }
                      ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ring-4 ring-background transition-colors ${shipment.progress >= (i * 25) ? 'bg-gold text-navy' : 'bg-navy-light text-white/30'}`}>
                            <step.icon size={20} />
                          </div>
                          <span className={`mt-3 font-poppins text-[10px] font-bold uppercase tracking-widest ${shipment.progress >= (i * 25) ? 'text-white' : 'text-white/30'}`}>
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Info Bento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                      <h3 className="text-[10px] font-poppins font-bold text-gold uppercase tracking-[0.2em] mb-4">Origin & Destination</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="text-gold mr-3 w-5 h-5" />
                          <div>
                            <p className="font-montserrat font-bold text-white uppercase text-sm">{shipment.origin}</p>
                            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-poppins">Departure Port</p>
                          </div>
                        </div>
                        <div className="ml-[11px] h-8 border-l border-dashed border-white/20"></div>
                        <div className="flex items-start">
                          <Flag className="text-gold mr-3 w-5 h-5" />
                          <div>
                            <p className="font-montserrat font-bold text-white uppercase text-sm">{shipment.destination}</p>
                            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-poppins">Final Destination</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                      <h3 className="text-[10px] font-poppins font-bold text-gold uppercase tracking-[0.2em] mb-4">Shipment Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-navy/50 p-4 rounded-lg border border-white/5">
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Weight</p>
                          <p className="font-montserrat font-bold text-white uppercase">{shipment.weight}</p>
                        </div>
                        <div className="bg-navy/50 p-4 rounded-lg border border-white/5">
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Pieces</p>
                          <p className="font-montserrat font-bold text-white uppercase">{shipment.pieces}</p>
                        </div>
                        <div className="bg-navy/50 p-4 rounded-lg border border-white/5">
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Service</p>
                          <p className="font-montserrat font-bold text-gold uppercase">{shipment.service}</p>
                        </div>
                        <div className="bg-navy/50 p-4 rounded-lg border border-white/5">
                          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Type</p>
                          <p className="font-montserrat font-bold text-white uppercase">{shipment.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Visual Context */}
                  <div className="glass-card overflow-hidden rounded-xl h-[400px] relative border border-white/5">
                    <img 
                      alt="Tracking Map" 
                      className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    />
                    <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-full border border-gold/30 backdrop-blur-md">
                      <p className="font-poppins text-[10px] font-bold text-white flex items-center uppercase tracking-widest">
                        <span className="relative flex h-3 w-3 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                        </span>
                        Live Location: {shipment.location}
                      </p>
                    </div>
                  </div>

                  {/* Quick Support */}
                  <div className="bg-navy-light p-8 rounded-xl text-white border border-white/10 hover:border-gold/50 transition-all group">
                    <h3 className="text-xl font-montserrat font-bold mb-2 uppercase tracking-tight">Need Assistance?</h3>
                    <p className="text-on-surface-variant text-xs font-poppins mb-8 uppercase tracking-widest leading-relaxed">Our dedicated concierge is monitoring your shipment 24/7.</p>
                    <button className="w-full gold-button text-navy py-4 rounded-lg font-poppins font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                      <MessageSquare size={16} /> Contact Logistics Lead
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Log */}
              <div className="mt-12 glass-card rounded-xl overflow-hidden border border-white/5">
                <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-navy/30">
                  <h2 className="text-xl font-montserrat font-bold text-white uppercase tracking-tight">Activity Log</h2>
                  <button className="text-gold font-poppins text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:underline">
                    <Download size={14} /> Export Audit
                  </button>
                </div>
                <div className="divide-y divide-white/5">
                  {shipment.logs.map((log: ShipmentLog, i: number) => (
                    <div key={i} className="px-8 py-6 flex flex-col md:flex-row gap-4 md:gap-12 hover:bg-navy/20 transition-colors">
                      <span className="font-poppins text-[10px] font-bold text-on-surface-variant min-w-[150px] uppercase tracking-widest">{log.date}</span>
                      <div>
                        <p className="font-montserrat font-bold text-white uppercase text-sm mb-1">{log.event}</p>
                        <p className="text-xs text-on-surface-variant uppercase tracking-widest font-poppins">{log.details}</p>
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
