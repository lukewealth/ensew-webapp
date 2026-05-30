"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Clock, ChevronDown, Loader2, CheckCircle } from 'lucide-react';

const ScheduleCall = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/schedule-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
          setFormData({ name: '', phone: '', date: '', time: '' });
        }, 3000);
      }
    } catch (error) {
      console.error("Scheduling error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy border border-white/10 text-white px-6 py-2.5 rounded-lg font-poppins text-xs font-bold hover:bg-gold hover:text-navy transition-all flex items-center gap-2 uppercase tracking-widest"
      >
        <Phone size={14} /> Schedule a Call <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-4 w-80 glass-card p-6 rounded-xl border border-white/10 z-[100] shadow-2xl"
          >
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
                <h4 className="text-white font-bold uppercase tracking-widest mb-2">Confirmed</h4>
                <p className="text-on-surface-variant text-xs">We will call you on {formData.date} at {formData.time}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Consultation Request</h4>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navy/50 border border-white/10 rounded p-2 text-white text-sm outline-none focus:border-gold"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-navy/50 border border-white/10 rounded p-2 text-white text-sm outline-none focus:border-gold"
                    placeholder="+234 ..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-navy/50 border border-white/10 rounded p-2 text-white text-sm outline-none focus:border-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Time</label>
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-navy/50 border border-white/10 rounded p-2 text-white text-sm outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-button py-3 text-navy font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={14} /> : 'Book Call'}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScheduleCall;
