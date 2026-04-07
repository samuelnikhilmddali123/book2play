"use client";
import React from "react";
import { 
  Users, Ticket, LayoutDashboard, Database, 
  Settings, CreditCard, ChevronRight, TrendingUp,
  Plus, Edit3, Trash2, MoreVertical, Search, Bell
} from "lucide-react";
import { GROUNDS } from "@/lib/data";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Bookings", value: "1,280", change: "+12%", icon: Ticket, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Monthly Revenue", value: "₹4.5L", change: "+8%", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "New Users", value: "48", change: "+15%", icon: Users, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Avg. Occupancy", value: "68%", change: "+3%", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="flex min-h-screen bg-primary px-4 md:px-8 py-8 gap-8">
      {/* Admin Sidebar - Desktop Only */}
      <aside className="hidden lg:flex flex-col gap-8 w-64 glass p-6 rounded-[2rem] border border-white/5 h-[calc(100vh-4rem)] sticky top-8">
        <div className="flex items-center gap-3 px-2">
           <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-primary">BP</div>
           <span className="font-black text-white tracking-widest text-sm">ADMIN PANEL</span>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { name: "Dashboard", icon: LayoutDashboard, active: true },
            { name: "Manage Grounds", icon: Database },
            { name: "Bookings", icon: Ticket },
            { name: "Customers", icon: Users },
            { name: "Revenue", icon: CreditCard },
            { name: "Settings", icon: Settings },
          ].map((item) => (
            <button 
              key={item.name} 
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                item.active 
                ? 'bg-accent/10 text-accent border border-accent/20' 
                : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-white/5 p-4 rounded-2xl border border-white/5">
           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Logged in as</p>
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              <span className="text-white font-bold text-xs">Admin Samuel</span>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-8 overflow-hidden">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h1 className="text-3xl font-black text-white">DASHBOARD <span className="text-accent underline decoration-accent/30 decoration-double">OVERVIEW</span></h1>
              <p className="text-slate-500 font-bold text-xs tracking-widest uppercase mt-1">Welcome back, Admin. Here is what's happening today.</p>
           </div>

           <div className="flex items-center gap-4">
              <div className="relative glass-light px-4 py-2 rounded-xl flex items-center border border-white/5 group focus-within:border-accent/30 transition-all">
                <Search size={18} className="text-slate-500" />
                <input type="text" placeholder="Search data..." className="bg-transparent border-none outline-none py-1 px-3 text-sm text-white placeholder-slate-500 w-40" />
              </div>
              <button className="glass-light p-3 rounded-xl border border-white/5 relative hover:bg-white/5 transition-colors">
                 <Bell size={20} className="text-slate-400" />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-primary"></span>
              </button>
              <button className="bg-accent text-primary px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all">
                 <Plus size={18} /> ADD GROUND
              </button>
           </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
           {stats.map((stat) => (
              <div key={stat.label} className="glass p-6 rounded-3xl border border-white/5 flex flex-col gap-4 relative overflow-hidden group hover:border-white/10 transition-colors shadow-2xl">
                 <div className={`absolute -right-4 -top-4 w-24 h-24 ${stat.bg} blur-3xl rounded-full opacity-50`}></div>
                 <div className="flex items-center justify-between">
                    <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                       <stat.icon size={24} />
                    </div>
                    <span className="text-emerald-500 font-bold text-xs flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-lg">
                       {stat.change} <TrendingUp size={12} />
                    </span>
                 </div>
                 <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    <h3 className="text-3xl font-black text-white mt-1">{stat.value}</h3>
                 </div>
              </div>
           ))}Stat
        </section>

        {/* Main Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
           {/* Table: Grounds Management */}
           <div className="xl:col-span-3 flex flex-col gap-6">
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xl font-black text-white uppercase tracking-widest">Grounds Management</h3>
                   <button className="text-accent text-xs font-black hover:underline uppercase tracking-widest">VIEW ALL</button>
                </div>

                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="border-b border-white/5">
                            <th className="pb-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">GROUND NAME</th>
                            <th className="pb-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">SPORT</th>
                            <th className="pb-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">PRICE/HR</th>
                            <th className="pb-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">STATUS</th>
                            <th className="pb-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">ACTION</th>
                         </tr>
                      </thead>
                      <tbody>
                         {GROUNDS.map((ground) => (
                            <tr key={ground.id} className="group hover:bg-white/5 transition-all border-b border-white/5 last:border-0 cursor-pointer">
                               <td className="py-5">
                                  <div className="flex items-center gap-3">
                                     <img src={ground.image} className="w-10 h-10 rounded-xl object-cover border border-white/10" alt={ground.name} />
                                     <span className="text-sm font-bold text-white uppercase tracking-tighter truncate max-w-[150px]">{ground.name}</span>
                                  </div>
                               </td>
                               <td className="py-5">
                                  <span className="text-[10px] font-black border border-white/10 px-3 py-1 rounded-full text-slate-400 group-hover:text-accent group-hover:border-accent/30 transition-colors uppercase">{ground.sport}</span>
                               </td>
                               <td className="py-5">
                                  <span className="text-sm font-black text-white">₹{ground.price}</span>
                               </td>
                               <td className="py-5">
                                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                                    ground.status === 'Available' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'
                                  }`}>{ground.status}</span>
                               </td>
                               <td className="py-5 text-right">
                                  <div className="flex items-center justify-end gap-2 px-2">
                                     <button className="p-2 hover:bg-blue-500/10 text-blue-500 rounded-lg"><Edit3 size={16} /></button>
                                     <button className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg"><Trash2 size={16} /></button>
                                     <button className="p-2 hover:bg-white/10 text-slate-500 rounded-lg"><MoreVertical size={16} /></button>
                                  </div>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </div>
           </div>

           {/* Performance: Bookings Chart Simulation */}
           <div className="xl:col-span-2 flex flex-col gap-6">
              <div className="glass p-8 rounded-[2.5rem] border border-white/5 h-full flex flex-col gap-8">
                 <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white uppercase tracking-widest">Revenue Analytics</h3>
                    <select className="bg-white/5 border border-white/10 text-xs font-bold text-slate-400 p-2 rounded-xl outline-none">
                       <option>LAST 7 DAYS</option>
                       <option>LAST 30 DAYS</option>
                    </select>
                 </div>

                 <div className="flex-1 flex items-end justify-between gap-2 px-2 h-48">
                    {[35, 65, 45, 80, 55, 90, 70].map((h, i) => (
                       <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                          <div className={`w-full bg-slate-800 rounded-t-xl group-hover:bg-accent transition-all duration-500 relative flex flex-col justify-end overflow-hidden`} style={{ height: `${h}%` }}>
                             <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                             <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Day {i+1}</span>
                       </div>
                    ))}
                 </div>

                 <div className="bg-secondary/40 p-6 rounded-[2rem] border border-white/5 flex items-center justify-between gap-6 transition-all hover:bg-secondary/60">
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Top Performing Sport</span>
                       <span className="text-xl font-black text-white uppercase tracking-tighter">FOOTBALL</span>
                       <span className="text-xs font-bold text-emerald-500">+18% grow rate</span>
                    </div>
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl border border-white/10 shadow-neon">⚽</div>
                 </div>

                 <button className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/5 flex items-center justify-center gap-2 group transition-all">
                    GET DETAILED REPORT
                    <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
