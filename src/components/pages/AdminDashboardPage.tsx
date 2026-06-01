"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Settings, 
  LogOut, 
  Bell, 
  Plus, 
  Search, 
  Filter, 
  TrendingUp,
  BarChart3,
  Clock,
  DollarSign,
  Loader2,
  Save,
  X,
  MapPin,
  Calendar,
  Layers,
  Box,
  User,
  Mail as MailIcon,
  History,
  ChevronRight,
  ShieldCheck,
  Globe,
  Send,
  Inbox
} from 'lucide-react';
import Link from 'next/link';

interface ShipmentLog {
  date: string;
  event: string;
  location: string;
  details: string;
}

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: string;
  progress: number;
  location: string;
  expectedDelivery: string;
  weight: string;
  dimensions: string;
  type: string;
  customerName: string;
  customerEmail: string;
  pieces: string;
  service: string;
  logs: ShipmentLog[];
}

const AdminDashboardPage = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');

  const fetchShipments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/track?id=ENS-9844-XZ');
      const data = await response.json();
      
      const enhancedShipment = {
        ...data,
        customerName: data.customerName || "Dr. Samuel Okoro",
        customerEmail: data.customerEmail || "samuel.okoro@enterprise.com",
        pieces: data.pieces || "4 Containers",
        service: data.service || "Premium Air Freight",
        dimensions: data.dimensions || "120 x 80 x 100 cm",
        logs: data.logs || [
          { date: "2026-05-28 09:00", event: "Shipment Picked Up", location: "Lagos, NG", details: "Package received at main hub" },
          { date: "2026-05-29 14:30", event: "Arrived at Sort Facility", location: "London Heathrow, UK", details: "Undergoing international processing" },
        ]
      };
      
      setShipments([enhancedShipment]);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("ensew_admin_token");
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }
    fetchShipments();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingShipment) return;
    
    setIsSaving(true);
    try {
      const currentShipment = shipments.find(s => s.id === editingShipment.id);
      let updatedEditing = { ...editingShipment };
      
      if (currentShipment && currentShipment.status !== editingShipment.status) {
        const newLog = {
          date: new Date().toISOString().slice(0, 16).replace('T', ' '),
          event: `Status updated to ${editingShipment.status}`,
          location: editingShipment.location,
          details: `Manual update from Ops Hub`
        };
        updatedEditing.logs = [newLog, ...(editingShipment.logs || [])];
      }

      const response = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEditing),
      });
      if (response.ok) {
        setShipments(shipments.map(s => s.id === editingShipment.id ? updatedEditing : s));
        setEditingShipment(null);
      }
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ensew_admin_token");
    window.location.href = "/admin/login";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020B1C] flex items-center justify-center">
        <Loader2 className="animate-spin text-gold w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#020B1C] text-white bg-industrial-grid">
      {/* Sidebar */}
      <aside className="w-72 bg-[#051128] border-r border-white/5 flex flex-col fixed h-full z-40">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gold rounded flex items-center justify-center font-black text-navy text-xl">E</div>
             <span className="font-montserrat text-xl font-extrabold text-white tracking-tighter">
               ENSEW<span className="text-gold">.</span> OPS
             </span>
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { icon: LayoutDashboard, label: "Overview" },
            { icon: Truck, label: "Global Shipments" },
            { icon: MailIcon, label: "Communication" },
            { icon: Globe, label: "Logistics Map" },
            { icon: BarChart3, label: "Analytics" },
            { icon: ShieldCheck, label: "Compliance" },
            { icon: Settings, label: "Settings" },
          ].map((item) => (
            <div 
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${activeTab === item.label ? 'bg-gold text-navy font-bold shadow-lg shadow-gold/20' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={20} />
              <span className="font-poppins text-[10px] uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 w-full transition-colors"
          >
            <LogOut size={20} />
            <span className="font-poppins text-[10px] uppercase tracking-widest font-bold">Logout Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <header className="h-24 bg-[#020B1C]/80 backdrop-blur-xl border-b border-white/5 px-12 flex items-center justify-between sticky top-0 z-30">
          <div>
             <div className="flex items-center gap-3 mb-1">
               <h1 className="text-2xl font-montserrat font-extrabold text-white uppercase tracking-tight">{activeTab} Hub</h1>
               <span className="bg-gold/10 text-gold text-[8px] font-black px-2 py-0.5 rounded border border-gold/20 tracking-widest uppercase">Zoho Powered</span>
             </div>
             <p className="text-[10px] font-poppins text-white/40 uppercase tracking-[0.3em]">ENSEW Services Logistics Command Terminal</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative cursor-pointer p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors group">
              <Bell size={20} className="text-white/60 group-hover:text-gold transition-colors" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-gold rounded-full ring-4 ring-[#020B1C]"></span>
            </div>
            <button className="bg-gold text-navy px-8 py-3.5 rounded-xl font-poppins text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-3 shadow-xl shadow-gold/20 active:scale-95">
              <Plus size={18} /> New Operation
            </button>
          </div>
        </header>

        <div className="p-12">
          {activeTab === 'Overview' && (
            <div className="space-y-12">
              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: Package, label: "Live Transits", value: "1,284", trend: "+12%", color: "text-brand-pink", bg: "bg-brand-pink/5" },
                  { icon: TrendingUp, label: "Volume (MT)", value: "42.8k", trend: "+5.2%", color: "text-brand-purple", bg: "bg-brand-purple/5" },
                  { icon: Clock, label: "SLA Adherence", value: "99.4%", trend: "98% Target", color: "text-brand-blue", bg: "bg-brand-blue/5" },
                  { icon: DollarSign, label: "Daily Revenue", value: "₦142.4M", trend: "+18%", color: "text-gold", bg: "bg-gold/5" },
                ].map((metric) => (
                  <div key={metric.label} className="bg-[#051128] p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${metric.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className={`p-4 bg-[#0A1A3A] rounded-2xl ${metric.color} shadow-lg`}>
                        <metric.icon size={24} />
                      </div>
                      <span className="text-green-400 text-[10px] font-black bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">{metric.trend}</span>
                    </div>
                    <p className="text-[10px] font-poppins font-bold text-white/40 uppercase tracking-[0.2em] mb-2">{metric.label}</p>
                    <h3 className="text-3xl font-montserrat font-extrabold text-white tracking-tighter">{metric.value}</h3>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div className="bg-[#051128] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="p-10 border-b border-white/5 flex flex-col xl:flex-row justify-between xl:items-center bg-[#051128]/50 gap-6">
                  <div>
                     <h2 className="text-2xl font-montserrat font-extrabold text-white uppercase tracking-tight mb-1">
                       Shipment <span className="brand-gradient-text">Command Center</span>
                     </h2>
                     <p className="text-[10px] font-poppins text-white/40 uppercase tracking-widest font-bold">Managing {shipments.length} Active Global Logs</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="relative group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4 group-focus-within:text-gold transition-colors" />
                      <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-6 py-4 bg-[#0A1A3A] border border-white/10 rounded-2xl text-xs font-poppins text-white focus:border-gold outline-none w-full xl:w-80 transition-all placeholder:text-white/20" 
                        placeholder="Search Shipment ID..." 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#0A1A3A]/30 border-b border-white/5">
                        <th className="px-10 py-6 text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em]">Shipment ID</th>
                        <th className="px-10 py-6 text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em]">Route Details</th>
                        <th className="px-10 py-6 text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em]">Status</th>
                        <th className="px-10 py-6 text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em]">Efficiency</th>
                        <th className="px-10 py-6 text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em]">Control</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {shipments.filter(s => s.id.toLowerCase().includes(searchTerm.toLowerCase())).map((s) => (
                        <tr key={s.id} className="hover:bg-white/5 transition-all group">
                          <td className="px-10 py-8">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                                  <Box size={24} />
                               </div>
                               <div>
                                  <div className="font-montserrat font-black text-gold text-lg tracking-tight">{s.id}</div>
                                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{s.service}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-10 py-8">
                            <div className="flex items-center gap-3 text-xs font-poppins font-bold text-white/80 uppercase">
                              <span className="bg-white/5 px-2 py-1 rounded">{s.origin}</span>
                              <ChevronRight size={14} className="text-gold" />
                              <span className="bg-gold/5 text-gold px-2 py-1 rounded">{s.destination}</span>
                            </div>
                          </td>
                          <td className="px-10 py-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest border border-gold/20">
                              {s.status}
                            </div>
                          </td>
                          <td className="px-10 py-8">
                            <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-gold" style={{ width: `${s.progress}%` }} />
                            </div>
                          </td>
                          <td className="px-10 py-8">
                            <button 
                              onClick={() => setEditingShipment(s)}
                              className="px-5 py-3 bg-[#0A1A3A] hover:bg-gold hover:text-navy rounded-xl transition-all font-poppins text-[10px] font-bold uppercase tracking-widest"
                            >
                              Manage
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Communication' && (
            <div className="space-y-12">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-[#051128] p-8 rounded-[2rem] border border-white/5 lg:col-span-1">
                     <h3 className="text-xl font-montserrat font-black text-white uppercase tracking-tight mb-8">Mail Channels</h3>
                     <div className="space-y-4">
                        {[
                          { icon: Inbox, label: "Inbox", count: 12, active: true },
                          { icon: Send, label: "Sent", count: 48, active: false },
                          { icon: History, label: "Audit Logs", count: 124, active: false },
                        ].map((item) => (
                          <div key={item.label} className={`flex justify-between items-center p-4 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-gold text-navy font-bold' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>
                             <div className="flex items-center gap-3">
                                <item.icon size={18} />
                                <span className="text-[10px] uppercase font-black tracking-widest">{item.label}</span>
                             </div>
                             <span className="text-[10px] font-black opacity-50">{item.count}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-[#051128] p-8 rounded-[2rem] border border-white/5 lg:col-span-2">
                     <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-montserrat font-black text-white uppercase tracking-tight">Zoho Webmail Gateway</h3>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Secure IMAP Active</span>
                        </div>
                     </div>

                     <div className="space-y-6">
                        {[
                          { from: "Dr. Samuel Okoro", subject: "Re: Shipment ENS-9844-XZ Update", time: "14:22", snippet: "Thank you for the update. We've verified the cargo dimensions..." },
                          { from: "Zonal Customs (London)", subject: "Regulatory Clearance: Consignment 9844", time: "11:05", snippet: "Standard inspection complete. Proceeding to final distribution..." },
                        ].map((mail, i) => (
                          <div key={i} className="p-6 bg-[#0A1A3A] rounded-2xl border border-white/5 hover:border-gold/30 transition-all cursor-pointer group">
                             <div className="flex justify-between items-start mb-2">
                                <p className="text-gold font-montserrat font-black text-sm uppercase">{mail.from}</p>
                                <span className="text-[10px] text-white/20 font-bold">{mail.time}</span>
                             </div>
                             <p className="text-white font-bold text-xs mb-1 group-hover:text-gold transition-colors">{mail.subject}</p>
                             <p className="text-white/40 text-[10px] line-clamp-1">{mail.snippet}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </main>

      {/* Advanced Command Modal (Edit) */}
      <AnimatePresence>
        {editingShipment && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#020B1C]/90 backdrop-blur-md" 
              onClick={() => setEditingShipment(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#051128] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-[#0A1A3A] p-10 flex justify-between items-center border-b border-white/10">
                 <div>
                    <h2 className="text-3xl font-montserrat font-black text-white uppercase tracking-tighter mb-2">Control Terminal <span className="text-gold">#{editingShipment.id}</span></h2>
                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-2">
                          <User size={14} className="text-gold" />
                          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{editingShipment.customerName}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MailIcon size={14} className="text-gold" />
                          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{editingShipment.customerEmail}</span>
                       </div>

                    </div>
                 </div>
                 <button onClick={() => setEditingShipment(null)} className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-white transition-all">
                    <X size={24} />
                 </button>
              </div>

              <form onSubmit={handleUpdate} className="p-10">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Primary Controls */}
                    <div className="lg:col-span-2 space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                             <label className="text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Layers size={14} className="text-gold" /> Status Override
                             </label>
                             <select 
                                value={editingShipment.status}
                                onChange={(e) => setEditingShipment({...editingShipment, status: e.target.value})}
                                className="w-full bg-[#0A1A3A] border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-gold transition-all appearance-none cursor-pointer"
                             >
                                <option>Processing</option>
                                <option>In Transit</option>
                                <option>Customs Clearances</option>
                                <option>At Destination Hub</option>
                                <option>Out for Final Delivery</option>
                                <option>Delivered & Verified</option>
                                <option>Alert: Delayed</option>
                                <option>Alert: Regulatory Hold</option>
                             </select>
                          </div>
                          
                          <div className="space-y-3">
                             <label className="text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                <TrendingUp size={14} className="text-gold" /> Completion Flow (%)
                             </label>
                             <input 
                                type="number" 
                                value={editingShipment.progress}
                                onChange={(e) => setEditingShipment({...editingShipment, progress: parseInt(e.target.value)})}
                                className="w-full bg-[#0A1A3A] border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-gold transition-all"
                                min="0" max="100"
                             />
                          </div>

                          <div className="space-y-3">
                             <label className="text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                <MapPin size={14} className="text-gold" /> GPS Location Entry
                             </label>
                             <input 
                                type="text" 
                                value={editingShipment.location}
                                onChange={(e) => setEditingShipment({...editingShipment, location: e.target.value})}
                                className="w-full bg-[#0A1A3A] border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-gold transition-all"
                             />
                          </div>

                          <div className="space-y-3">
                             <label className="text-[10px] font-poppins font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Calendar size={14} className="text-gold" /> ETA Projections
                             </label>
                             <input 
                                type="text" 
                                value={editingShipment.expectedDelivery}
                                onChange={(e) => setEditingShipment({...editingShipment, expectedDelivery: e.target.value})}
                                className="w-full bg-[#0A1A3A] border border-white/10 rounded-2xl p-4 text-white font-bold outline-none focus:border-gold transition-all"
                             />
                          </div>
                       </div>

                       <div className="bg-[#0A1A3A]/50 p-8 rounded-[2rem] border border-white/5">
                          <h4 className="text-[10px] font-poppins font-black text-gold uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                             <History size={16} /> Operational Event Log
                          </h4>
                          <div className="space-y-4 max-h-64 overflow-y-auto pr-4 custom-scrollbar">
                             {editingShipment.logs?.map((log, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-[#0A1A3A] rounded-xl border border-white/5">
                                   <div className="text-[9px] font-bold text-gold min-w-[100px] border-r border-white/10">{log.date}</div>
                                   <div className="flex-1">
                                      <div className="text-[10px] font-bold text-white uppercase">{log.event}</div>
                                      <div className="text-[9px] text-white/40">{log.location} • {log.details}</div>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Secondary Data & Action */}
                    <div className="space-y-8">
                       <div className="bg-[#0A1A3A] p-8 rounded-[2rem] border border-white/10 space-y-6">
                          <h4 className="text-[10px] font-poppins font-black text-white/40 uppercase tracking-[0.2em] mb-4">Cargo Specifications</h4>
                          
                          <div className="space-y-2">
                             <p className="text-[9px] font-black text-white/20 uppercase">Gross Weight</p>
                             <input 
                                type="text" 
                                value={editingShipment.weight}
                                onChange={(e) => setEditingShipment({...editingShipment, weight: e.target.value})}
                                className="w-full bg-navy/30 border border-white/5 rounded-xl p-3 text-xs text-white"
                             />
                          </div>
                          
                          <div className="space-y-2">
                             <p className="text-[9px] font-black text-white/20 uppercase">Load Dimensions</p>
                             <input 
                                type="text" 
                                value={editingShipment.dimensions}
                                onChange={(e) => setEditingShipment({...editingShipment, dimensions: e.target.value})}
                                className="w-full bg-navy/30 border border-white/5 rounded-xl p-3 text-xs text-white"
                             />
                          </div>

                          <div className="pt-6 border-t border-white/5">
                             <div className="flex items-center gap-3 text-green-400">
                                <ShieldCheck size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Compliance Verified</span>
                             </div>
                          </div>
                       </div>

                       <div className="space-y-4">
                          <button 
                             type="submit"
                             disabled={isSaving}
                             className="w-full py-6 bg-gold text-navy rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:brightness-110 flex items-center justify-center gap-3 transition-all shadow-2xl shadow-gold/20 active:scale-95"
                          >
                             {isSaving ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Commit Changes</>}
                          </button>
                          <button 
                             type="button"
                             onClick={() => setEditingShipment(null)}
                             className="w-full py-6 bg-white/5 text-white/60 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all border border-white/5"
                          >
                             Abort Operation
                          </button>
                       </div>
                       
                       <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                          <p className="text-[9px] text-blue-400 font-bold uppercase leading-relaxed">
                             Note: Committing changes will trigger an automated secure email notification to the customer via ENSEW Mail Gateway.
                          </p>
                       </div>
                    </div>
                 </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboardPage;
