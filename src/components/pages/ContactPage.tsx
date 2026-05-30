"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Schedule a Consultation",
  description: "Ready to scale your business operations? Contact ENSEW Services Limited for expert logistics, industrial supply, and strategic business partnerships.",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="pt-20">
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
                        <p className="text-on-surface-variant text-sm">+234 (0) 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-navy p-3 rounded-lg border border-white/10">
                        <MapPin className="text-gold w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Headquarters</h4>
                        <p className="text-on-surface-variant text-sm">Lagos, Nigeria</p>
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
                  <MessageSquare className="text-electric-blue w-10 h-10 mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest">Quick Support</h4>
                  <p className="text-on-surface-variant text-sm mb-6">Need immediate assistance? Chat with us on WhatsApp.</p>
                  <button className="w-full bg-navy border border-white/10 text-white font-poppins text-xs font-bold py-3 rounded-lg hover:bg-gold hover:text-navy transition-all">
                    WHATSAPP US
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form className="glass-card p-12 rounded-2xl border border-white/5 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Full Name</label>
                      <input type="text" className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Company Name</label>
                      <input type="text" className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Email Address</label>
                      <input type="email" className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" placeholder="john@acme.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Phone Number</label>
                      <input type="tel" className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" placeholder="+234 ..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-poppins font-bold text-on-surface-variant uppercase tracking-[0.2em]">Service Needed</label>
                    <select className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none appearance-none">
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
                    <textarea rows={6} className="w-full bg-navy/50 border border-white/10 rounded-lg p-4 text-white focus:border-gold transition-colors outline-none" placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <button className="gold-button w-full py-5 text-navy font-poppins font-bold text-sm tracking-widest rounded-xl uppercase flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] w-full bg-surface-dim grayscale opacity-50 contrast-125">
           <div className="w-full h-full flex items-center justify-center border-t border-white/10">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <span className="text-white font-poppins font-bold tracking-widest uppercase">Lagos, Nigeria Headquarters</span>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
