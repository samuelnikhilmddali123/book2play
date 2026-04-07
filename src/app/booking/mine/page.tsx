"use client";
import React from 'react';
import { Ticket, Calendar, Clock, MapPin, ChevronRight, Zap } from 'lucide-react';

export default function MyBookings() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-10">
      <h1 className="text-4xl font-black text-white uppercase tracking-tighter">My <span className="text-accent underline decoration-accent/30 decoration-double underline-offset-8">Bookings</span></h1>

      <div className="flex flex-col gap-6">
         {[
           { name: 'Bernabeu Football Turf', date: 'Tomorrow, Apr 8', time: '07:00 PM', price: 1200, status: 'Upcoming', sport: 'Football' },
           { name: 'Lord\'s Cricket Nets', date: 'Yesterday, Apr 6', time: '10:00 AM', price: 800, status: 'Completed', sport: 'Cricket' },
         ].map((booking) => (
           <div key={booking.name + booking.date} className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group hover:border-accent/30 transition-all shadow-premium">
              <div className="flex gap-6 items-center">
                 <div className="w-20 h-20 bg-accent/20 rounded-[1.5rem] flex items-center justify-center text-4xl border border-accent/20 group-hover:scale-110 transition-transform">
                    {booking.sport === 'Football' ? '⚽' : '🏏'}
                 </div>
                 <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                       <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${booking.status === 'Upcoming' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-500'}`}>{booking.status}</span>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{booking.sport}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{booking.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 font-bold text-xs uppercase tracking-widest">
                       <div className="flex items-center gap-1.5"><Calendar size={14} className="text-accent" /> {booking.date}</div>
                       <div className="flex items-center gap-1.5"><Clock size={14} className="text-accent" /> {booking.time}</div>
                    </div>
                 </div>
              </div>

              <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 border-white/5 pt-6 md:pt-0">
                 <div>
                    <span className="text-2xl font-black text-white tracking-tighter">₹{booking.price}</span>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">PAID</p>
                 </div>
                 <button className="bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/5 group-hover:border-accent/30 transition-all active:scale-95">
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
         ))}
      </div>
      
      <div className="glass-light p-10 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center gap-4">
          <Zap size={48} className="text-accent animate-pulse" />
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Ready for your next game?</h3>
          <p className="text-slate-400 font-medium max-w-xs">Explore more arenas and turfs in your city and keep playing!</p>
          <button className="mt-4 bg-accent text-primary px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all">
             EXPLORE NEW GROUNDS
          </button>
      </div>
    </div>
  );
}
