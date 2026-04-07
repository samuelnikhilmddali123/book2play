"use client";
import React, { useState, Suspense } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { 
  ChevronLeft, Calendar, Clock, CreditCard, 
  MapPin, ShieldCheck, Zap, Receipt, 
  Tag, Info, User
} from 'lucide-react';
import { GROUNDS } from '@/lib/data';
import { motion } from 'framer-motion';

function BookingContent() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const slot = searchParams.get('slot');
  const router = useRouter();
  const ground = GROUNDS.find(g => g.id === id) || GROUNDS[0];

  const convFee = 45;
  const taxes = (ground.price * 0.18);
  const total = ground.price + convFee + taxes;

  const [contactInfo] = useState({
    name: 'Samuel Play',
    email: 'samuel@example.com',
    phone: '+91 98765 43210'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8 pb-32">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="glass-light p-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Confirm <span className="text-accent">Booking</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left side: Booking details */}
        <div className="md:col-span-3 flex flex-col gap-6">
          {/* Ground Summary Card */}
          <div className="glass p-6 rounded-[2rem] border border-white/10 flex gap-6 items-center">
             <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5">
                <img src={ground.image} alt={ground.name} className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-xl font-black text-white mb-2">{ground.name}</h3>
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs uppercase tracking-widest">
                      <MapPin size={12} className="text-accent" /> Sector 12, Mhow
                   </div>
                   <div className="inline-block mt-2">
                       <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-black uppercase border border-accent/20">
                          {ground.sport}
                       </span>
                   </div>
                </div>
             </div>
          </div>

          {/* Date and Time Summary */}
          <div className="grid grid-cols-2 gap-4">
             <div className="glass-light p-6 rounded-[1.5rem] border border-white/5 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Calendar size={60} />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">DATE</span>
                <span className="text-xl font-black text-white">Tomorrow</span>
                <span className="text-sm font-bold text-slate-400">Apr 8, 2026</span>
             </div>
             <div className="glass-light p-6 rounded-[1.5rem] border border-white/5 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Clock size={60} />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">TIME SLOT</span>
                <span className="text-xl font-black text-white">{slot || 'Not selected'}</span>
                <span className="text-sm font-bold text-slate-400">1 Hour Session</span>
             </div>
          </div>

          {/* Contact Details */}
          <div className="glass p-8 rounded-[2rem] border border-white/10 flex flex-col gap-6">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-2">
                   <User size={18} className="text-accent" /> CONTACT DETAILS
                </h3>
                <button className="text-accent text-xs font-black hover:underline uppercase">EDIT</button>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                   <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Full Name</label>
                   <p className="text-white font-bold">{contactInfo.name}</p>
                </div>
                <div>
                   <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Phone Number</label>
                   <p className="text-white font-bold">{contactInfo.phone}</p>
                </div>
                <div>
                   <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Email Address</label>
                   <p className="text-white font-bold">{contactInfo.email}</p>
                </div>
             </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl flex gap-4 items-start">
             <Info className="text-orange-500 shrink-0" size={20} />
             <div>
                <p className="text-orange-500 font-bold text-sm uppercase mb-1 tracking-tighter leading-none">Cancellation Policy</p>
                <p className="text-orange-200/60 text-xs leading-relaxed">
                   Free cancellation available if done 12 hours before schedule. 
                   Cancellations within 12 hours will incur a 30% charge. 
                </p>
             </div>
          </div>
        </div>

        {/* Right side: Summary and Payment */}
        <div className="md:col-span-2">
           <div className="glass p-8 rounded-[2rem] border border-white/10 sticky top-28 shadow-2xl flex flex-col gap-6">
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-4">
                 <Receipt size={22} className="text-accent" /> PAYABLE AMOUNT
              </h3>

              <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                    <span>Base Fare (1 hr)</span>
                    <span className="text-white">₹{ground.price}</span>
                 </div>
                 <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                    <span>Convenience Fee</span>
                    <span className="text-white">₹{convFee}</span>
                 </div>
                 <div className="flex justify-between items-center text-slate-400 font-bold text-sm">
                    <span>GST (18%)</span>
                    <span className="text-white">₹{taxes.toFixed(0)}</span>
                 </div>
                 
                 <div className="h-px bg-white/10 my-2"></div>
                 
                 <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-black text-white uppercase tracking-tighter">Total Payable</span>
                    <span className="text-3xl font-black text-accent tracking-tighter">₹{total.toFixed(0)}</span>
                 </div>
              </div>

              <button 
                onClick={() => alert('Booking Initiated!')}
                className="w-full bg-accent hover:bg-accent-hover text-primary py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group mt-4"
              >
                <CreditCard size={20} />
                CONFIRM & PAY
                <Zap size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-white">Loading Booking Details...</div>}>
      <BookingContent />
    </Suspense>
  );
}
