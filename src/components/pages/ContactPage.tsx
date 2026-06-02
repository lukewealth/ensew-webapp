"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle, Loader2, Calendar } from "lucide-react";
import ScheduleCall from "@/components/ScheduleCall";

const GoogleMapComponent = dynamic(() => import("@/components/GoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-navy/50 flex items-center justify-center">
      <div className="animate-pulse text-gold font-montserrat text-xs tracking-widest uppercase">Loading Map...</div>
    </div>
  )
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Select a Service",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", company: "", email: "", phone: "", service: "Select a Service", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020B1C] bg-industrial-grid">
      <Header />
      
      <main className="pt-20 animate-entrance">
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-montserrat font-extrabold text-white mb-6 uppercase tracking-tight"
              >
                Get In <span className="text-gold">Touch</span>
              </motion.h1>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest font-poppins text-xs">
                Partner with ENSEW Services Limited for World-Class Industrial Solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-8 uppercase tracking-widest">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-navy p-3 rounded-lg border border-white/10">
                        <Mail className="text-gold w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Email</h4>
                        <p className="text-on-surface-variant text-sm">info@ensewservices.com</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-navy p-3 rounded-lg border border-white/10">
                        <Phone className="text-gold w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Phone</h4>
                        <p className="text-on-surface-variant text-sm">+234 703 866 1947</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-navy p-3 rounded-lg border border-white/10">
                        <MapPin className="text-gold w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Headquarters</h4>
                        <p className="text-on-surface-variant text-sm">39, Alfred Rewane Road, Ikoyi, Lagos</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-navy p-3 rounded-lg border border-white/10">
                        <Clock className="text-gold w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Business Hours</h4>
                        <p className="text-on-surface-variant text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-2xl border border-white/5 text-center">
                  <Calendar className="text-gold w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest">Schedule a Call</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Preferred a direct conversation? Book a time slot that works for you.</p>
                  <div className="flex justify-center">
                    <ScheduleCall />
                  </div>
                </div>

                <div className="glass-card p-8 rounded-2xl border border-white/5 text-center">
                  <MessageSquare className="text-electric-blue w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest">Quick Support</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Need immediate assistance? Chat with us on WhatsApp.</p>
                  <a 
                    href="https://wa.me/2347038661947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-navy border border-white/10 text-white font-poppins text-xs font-bold py-3 rounded-lg hover:bg-gold hover:text-navy transition-all text-center"
                  >
                    WHATSAPP US
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="glass-card p-12 rounded-2xl border border-white/5 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" 
                        placeholder="john@acme.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" 
                        placeholder="+234 ..." 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none appearance-none"
                    >
                      <option>Select a Service</option>
                      <option>Import & Export</option>
                      <option>Industrial Supply</option>
                      <option>General Contracting</option>
                      <option>Logistics & Delivery</option>
                      <option>Business Partnerships</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6} 
                      className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" 
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase flex items-center justify-center gap-2 transition-all ${isSubmitted ? 'bg-green-500!' : 'brand-gradient-bg hover:scale-[1.02] shadow-xl shadow-brand-purple/20'}`}
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="animate-spin" size={18} /></>
                    ) : isSubmitted ? (
                      <>Message Sent <CheckCircle size={18} /></>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Real Google Map */}
        <section className="h-[500px] w-full border-t border-white/10 relative overflow-hidden">
           <GoogleMapComponent />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
