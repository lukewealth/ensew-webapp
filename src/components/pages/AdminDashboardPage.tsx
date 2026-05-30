"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Save
} from 'lucide-react';

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  status: string;
  progress: number;
  location: string;
}

const AdminDashboardPage = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchShipments = async () => {
    setIsLoading(true);
    try {
      // In a real app, we'd have an API to list all shipments
      // For the prototype, we fetch the known ones
      const response = await fetch('/api/track?id=ENS-9844-XZ');
      const data = await response.json();
      setShipments([data]);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem("ensew_admin_token");
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchShipments();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingShipment) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingShipment),
      });
      if (response.ok) {
        setShipments(shipments.map(s => s.id === editingShipment.id ? editingShipment : s));
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin text-gold w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      {/* Sidebar */}
      <aside className="w-72 bg-navy border-r border-white/5 flex flex-col fixed h-full z-40">
        <div className="p-8">
          <span className="font-montserrat text-2xl font-extrabold text-white tracking-tighter">
            ENSEW<span className="text-gold">.</span> OPS
          </span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Truck, label: "Shipments", active: false },
            { icon: BarChart3, label: "Analytics", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <div 
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-gold text-navy font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}
            >
              <item.icon size={20} />
              <span className="font-poppins text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 w-full transition-colors"
          >
            <LogOut size={20} />
            <span className="font-poppins text-xs uppercase tracking-widest font-bold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Header */}
        <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-white/5 px-12 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-montserrat font-extrabold text-white uppercase tracking-tight">Global Operations Hub</h1>
            <p className="text-[10px] font-poppins text-on-surface-variant uppercase tracking-[0.3em]">Real-time Logistics Monitoring</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer p-2 hover:bg-white/5 rounded-full transition-colors">
              <Bell size={20} className="text-on-surface-variant" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <button className="bg-gold text-navy px-6 py-2.5 rounded font-poppins text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
              <Plus size={16} /> New Dispatch
            </button>
          </div>
        </header>

        <div className="p-12 space-y-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Package, label: "Active Shipments", value: "1,284", trend: "+12%", color: "text-gold" },
              { icon: TrendingUp, label: "Monthly Volume", value: "42.8k", trend: "+5.2%", color: "text-electric-blue" },
              { icon: Clock, label: "Avg Delivery", value: "1.4 Days", trend: "-8m", color: "text-green-400" },
              { icon: DollarSign, label: "Current Revenue", value: "$2.4M", trend: "+18%", color: "text-gold" },
            ].map((metric) => (
              <div key={metric.label} className="glass-card p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 bg-navy-light rounded-lg ${metric.color}`}>
                    <metric.icon size={20} />
                  </div>
                  <span className="text-green-400 text-[10px] font-bold bg-green-400/10 px-2 py-1 rounded">{metric.trend}</span>
                </div>
                <p className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest mb-1">{metric.label}</p>
                <h3 className="text-2xl font-montserrat font-extrabold text-white">{metric.value}</h3>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="glass-card rounded-xl overflow-hidden border border-white/5">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-navy/30">
              <h2 className="text-lg font-montserrat font-bold text-white uppercase tracking-tight">Recent Shipments</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
                  <input 
                    type="text"
                    className="pl-10 pr-4 py-2 bg-navy/50 border border-white/10 rounded-lg text-xs font-poppins text-white focus:border-gold outline-none w-64" 
                    placeholder="Search Shipment ID..." 
                  />
                </div>
                <button className="flex items-center gap-2 text-[10px] font-poppins font-bold uppercase tracking-widest text-on-surface-variant border border-white/10 px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
                  <Filter size={14} /> Filters
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-navy/50 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">ID</th>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Origin</th>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Destination</th>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Progress</th>
                    <th className="px-6 py-4 text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {shipments.map((s) => (
                    <tr key={s.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4 font-montserrat font-bold text-gold text-sm">{s.id}</td>
                      <td className="px-6 py-4 text-xs font-poppins text-white uppercase">{s.origin}</td>
                      <td className="px-6 py-4 text-xs font-poppins text-white uppercase">{s.destination}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                          {s.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gold" style={{ width: `${s.progress}%` }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => setEditingShipment(s)}
                          className="p-2 hover:bg-gold hover:text-navy rounded transition-all text-on-surface-variant"
                        >
                          <Settings size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {editingShipment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setEditingShipment(null)}></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl glass-card p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h2 className="text-2xl font-montserrat font-extrabold text-white uppercase tracking-tight mb-8">Edit Shipment <span className="text-gold">{editingShipment.id}</span></h2>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Status</label>
                  <select 
                    value={editingShipment.status}
                    onChange={(e) => setEditingShipment({...editingShipment, status: e.target.value})}
                    className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-gold"
                  >
                    <option>Processing</option>
                    <option>In Transit</option>
                    <option>Customs</option>
                    <option>Delivered</option>
                    <option>Delayed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Progress (%)</label>
                  <input 
                    type="number" 
                    value={editingShipment.progress}
                    onChange={(e) => setEditingShipment({...editingShipment, progress: parseInt(e.target.value)})}
                    className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-poppins font-bold text-on-surface-variant uppercase tracking-widest">Current Location</label>
                <input 
                  type="text" 
                  value={editingShipment.location}
                  onChange={(e) => setEditingShipment({...editingShipment, location: e.target.value})}
                  className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-gold"
                />
              </div>

              <div className="flex gap-4 mt-10">
                <button 
                  type="button"
                  onClick={() => setEditingShipment(null)}
                  className="flex-1 py-4 border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 py-4 bg-gold text-navy rounded-xl font-bold uppercase tracking-widest text-xs hover:brightness-110 flex items-center justify-center gap-2"
                >
                  {isSaving ? <Loader2 className="animate-spin" /> : <><Save size={16} /> Save Changes</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
