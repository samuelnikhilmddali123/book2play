"use client";
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Star, MapPin, Clock, ShieldCheck, 
  ParkingCircle, Droplets, Zap, Users, 
  ChevronLeft, Share2, Heart, Calendar, 
  Info, MessageSquare 
} from 'lucide-react';
import { GROUNDS } from '@/lib/data';
import { motion } from 'framer-motion';

export default function GroundDetails() {
  const { id } = useParams();
  const router = useRouter();
  const ground = GROUNDS.find(g => g.id === id) || GROUNDS[0];
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const timeSlots = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', 
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', 
    '09:00 PM', '10:00 PM'
  ];

  const amenities = [
    { icon: ParkingCircle, name: 'Free Parking' },
    { icon: Droplets, name: 'Water' },
    { icon: Zap, name: 'Floodlights' },
    { icon: ShieldCheck, name: 'Changing Rooms' },
    { icon: Users, name: 'Coaching' },
  ];

  const reviews = [
    { name: 'Rahul S.', rating: 5, date: '2 days ago', content: 'Best turf in the city. The surface is really well maintained and the pricing is reasonable.' },
    { name: 'Amit K.', rating: 4, date: '1 week ago', content: 'Good lights for night matches. Changing rooms could be better but overall 4/5.' },
  ];

  return (
    <div className="flex flex-col gap-8 pb-24 md:px-8 mt-4">
      {/* Back & Actions */}
      <div className="flex items-center justify-between px-4 md:px-0">
        <button 
          onClick={() => router.back()}
          className="glass-light p-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <div className="flex items-center gap-3">
          <button className="glass-light p-2.5 rounded-full hover:bg-white/10 transition-colors">
            <Share2 size={20} className="text-slate-300" />
          </button>
          <button className="glass-light p-2.5 rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-red-500">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Hero Gallery */}
      <section className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img src={ground.image} alt={ground.name} className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6">
            <span className="bg-accent text-primary px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-neon">
              {ground.sport}
            </span>
          </div>
        </motion.div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="flex-1 rounded-3xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 1" />
          </div>
          <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 relative">
             <img src="https://images.unsplash.com/photo-1543834164-8390b1c09886?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Detail 2" />
             <div className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                <span className="font-black text-white">+12 Photos</span>
             </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <div className="px-4 md:px-0 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Header Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{ground.name}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <MapPin size={18} className="text-accent" />
                <span>Sector 12, Park Lane, Mhow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="text-white font-bold leading-none">{ground.rating}</span>
                <span className="text-slate-500 font-medium">(240 Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <Clock size={18} className="text-accent" />
                <span>Open 24/7</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/5 w-full"></div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest flex items-center gap-2">
               <Info size={18} className="text-accent" /> ABOUT THE VENUE
            </h3>
            <p className="text-slate-400 leading-relaxed font-normal text-lg">
               Premium {ground.sport} facility equipped with latest floodlights and high-quality synthetic surface. 
               Our {ground.sport} ground is officially sized and regularly hosts professional leagues. 
               Located at a prime location with ample parking and modern amenities to make your playtime memorable!
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-black text-white mb-4 uppercase tracking-widest">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {amenities.map((item) => (
                <div key={item.name} className="glass-light p-4 rounded-3xl flex flex-col items-center gap-3 border border-white/5 group hover:border-accent/40 transition-all">
                  <item.icon size={24} className="text-slate-500 group-hover:text-accent transition-colors" />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-2">
                 <MessageSquare size={18} className="text-accent" /> Customer Reviews
              </h3>
              <button className="text-accent text-sm font-black hover:underline underline-offset-4">SEE ALL</button>
            </div>
            <div className="flex flex-col gap-4">
              {reviews.map((rev, i) => (
                <div key={i} className="glass-light p-6 rounded-3xl border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">{rev.name[0]}</div>
                       <div>
                          <p className="font-bold text-white text-sm">{rev.name}</p>
                          <p className="text-xs text-slate-500">{rev.date}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                       {[...Array(rev.rating)].map((_, j) => (
                          <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                       ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{rev.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card Sidebar */}
        <div className="relative">
          <div className="sticky top-28 glass p-2 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col gap-6">
            <div className="p-4 bg-accent/5 rounded-[1.5rem] border border-accent/20">
               <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold text-sm tracking-wide">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tighter">₹{ground.price}</span>
                    <span className="text-slate-500 font-bold text-[10px] uppercase">/ hour</span>
                  </div>
               </div>
            </div>

            <div className="px-4 flex flex-col gap-6">
              <div>
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
                  <Calendar size={14} /> SELECT DATE
                </label>
                <div className="flex items-center justify-between glass-light p-4 rounded-2xl border border-white/10 hover:border-accent/40 transition-colors cursor-pointer group">
                   <span className="font-bold text-white uppercase text-sm">Tomorrow, Apr 8</span>
                   <ChevronLeft size={18} className="text-accent rotate-[-90deg] group-hover:translate-y-1 transition-transform" />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
                  <Clock size={14} /> SELECT TIME SLOT
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                   {timeSlots.map(slot => (
                     <button 
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                          selectedSlot === slot 
                          ? 'bg-accent text-primary border-accent shadow-neon' 
                          : 'glass-light text-slate-400 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {slot}
                     </button>
                   ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 pb-2">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-lg font-bold text-slate-300">Total Price</span>
                   <span className="text-2xl font-black text-white">₹{selectedSlot ? ground.price : 0}</span>
                </div>
                
                <button 
                  disabled={!selectedSlot}
                  onClick={() => router.push(`/booking/${id}?slot=${selectedSlot}`)}
                  className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 group ${
                    selectedSlot 
                    ? 'bg-accent text-primary hover:bg-accent-hover hover:scale-[1.02] active:scale-95 shadow-accent/20' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                  }`}
                >
                  CONTINUE SECURELY
                  <ChevronLeft className="rotate-180 group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-500 font-bold mt-4 uppercase tracking-tighter">No cancellation charges up to 12 hours before start</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
