"use client";
import React from 'react';
import { User, Settings, Shield, LogOut, Ticket, Heart } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-10">
      <div className="flex items-center gap-6">
         <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-accent/10 flex items-center justify-center text-5xl font-black text-accent shadow-neon">S</div>
         <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Samuel <span className="text-accent underline">Play</span></h1>
            <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mt-1 flex items-center gap-2">
               <Shield size={14} className="text-accent" /> Premium Member
            </p>
         </div>
      </div>

      <div className="flex flex-col gap-4">
         {[
           { name: 'My Bookings', icon: Ticket, count: 12 },
           { name: 'Favorite Grounds', icon: Heart, count: 5 },
           { name: 'Account Settings', icon: Settings },
           { name: 'Logout', icon: LogOut, color: 'text-red-500 hover:bg-red-500/10' },
         ].map((item) => (
           <button key={item.name} className={`glass p-6 rounded-[1.5rem] border border-white/5 flex items-center justify-between group transition-all hover:bg-white/5 ${item.color || 'text-white'}`}>
              <div className="flex items-center gap-4">
                 <item.icon size={24} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                 <span className="font-black text-xs uppercase tracking-widest">{item.name}</span>
              </div>
              {item.count && (
                <div className="bg-accent/10 text-accent text-[10px] font-black px-3 py-1 rounded-full border border-accent/20">{item.count}</div>
              )}
           </button>
         ))}
      </div>
    </div>
  );
}
