"use client";
import React, { useState } from 'react';
import { 
  ChevronDown, Filter, X, Star, 
  MapPin, Clock, Shield, Wifi, 
  Car, Coffee, Utensils, Zap
} from 'lucide-react';
import { GROUNDS } from '@/lib/data';
import Link from 'next/link';

interface SportsListingPageProps {
  sportType: string;
}

export default function SportsListingPage({ sportType }: SportsListingPageProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('Popularity');

  const filteredGrounds = GROUNDS.filter(g => g.sport.toLowerCase() === sportType.toLowerCase());

  const getSportTitle = (sport: string) => {
    const titles: Record<string, string> = {
      cricket: "CRICKET NETS NEAR YOU",
      football: "FOOTBALL GROUNDS NEAR YOU",
      badminton: "BADMINTON COURTS NEAR YOU",
      volleyball: "VOLLEYBALL COURTS NEAR YOU",
      tennis: "TENNIS COURTS NEAR YOU",
      basketball: "BASKETBALL COURTS NEAR YOU"
    };
    return titles[sport.toLowerCase()] || `${sport.toUpperCase()} GROUNDS NEAR YOU`;
  };

  return (
    <div className="bg-[#000000] min-h-screen text-white pt-8 pb-20 px-6 md:px-12">
      {/* Header section */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <h1 className="text-2xl font-black tracking-tight uppercase">
          {getSportTitle(sportType)}
        </h1>
        
        <div className="flex items-center gap-4">
           {/* Mobile Filter Toggle */}
           <button 
             onClick={() => setShowMobileFilters(true)}
             className="md:hidden flex items-center gap-2 bg-[#121212] border border-[#2A2A2A] px-4 py-2 rounded-lg text-sm font-bold"
           >
             <Filter size={18} /> Filters
           </button>

           <div className="relative group flex items-center gap-3">
              <span className="text-[#B3B3B3] text-sm font-bold hidden sm:inline">Sort by:</span>
              <div className="bg-[#121212] border border-[#2A2A2A] px-4 py-2 rounded-lg flex items-center gap-4 cursor-pointer hover:border-[#22C55E] transition-all min-w-[200px] justify-between">
                 <span className="text-sm font-black uppercase tracking-widest">{sortBy}</span>
                 <ChevronDown size={16} className="text-[#B3B3B3]" />
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        
        {/* Left Side: Filter Panel (Desktop) */}
        <aside className="hidden md:flex flex-col gap-8 bg-[#121212] border border-[#2A2A2A] p-6 rounded-xl h-fit sticky top-28">
           <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
              <h2 className="font-black text-lg uppercase tracking-widest">Filters</h2>
              <button className="text-[#22C55E] text-[10px] font-black uppercase hover:underline">Reset</button>
           </div>

           {/* Price Filter */}
           <div className="flex flex-col gap-4">
              <h3 className="text-xs font-black text-[#B3B3B3] uppercase tracking-widest">Price Range</h3>
              <div className="px-2">
                 <input type="range" min="200" max="10000" className="w-full accent-[#22C55E] cursor-pointer" />
                 <div className="flex justify-between items-center mt-2">
                    <span className="text-[10px] font-bold text-[#B3B3B3]">₹200</span>
                    <span className="text-[10px] font-bold text-[#B3B3B3]">₹10,000</span>
                 </div>
              </div>
           </div>

           {/* Ratings Filter */}
           <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black text-[#B3B3B3] uppercase tracking-widest">Ratings</h3>
              {[5, 4, 3, 2].map(rating => (
                <label key={rating} className="flex items-center gap-3 group cursor-pointer">
                   <div className="w-5 h-5 border-2 border-[#2A2A2A] rounded flex items-center justify-center group-hover:border-[#22C55E] transition-colors">
                      <div className="w-2.5 h-2.5 bg-[#22C55E] rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                   </div>
                   <span className="text-sm font-bold text-[#B3B3B3] group-hover:text-white transition-colors">{rating} Star</span>
                </label>
              ))}
           </div>

           {/* Amenities Filter */}
           <div className="flex flex-col gap-3">
              <h3 className="text-xs font-black text-[#B3B3B3] uppercase tracking-widest">Amenities</h3>
              {['Washroom', 'Parking', 'Food', 'Drinking Water', 'Floodlights'].map(item => (
                <label key={item} className="flex items-center gap-3 group cursor-pointer">
                   <div className="w-5 h-5 border-2 border-[#2A2A2A] rounded flex items-center justify-center group-hover:border-[#22C55E] transition-colors">
                   </div>
                   <span className="text-sm font-bold text-[#B3B3B3] group-hover:text-white transition-colors">{item}</span>
                </label>
              ))}
           </div>
        </aside>

        {/* Right Side: Listing Cards */}
        <div className="flex flex-col gap-4">
           {filteredGrounds.length > 0 ? (
             filteredGrounds.map((ground) => (
               <div 
                 key={ground.id} 
                 className="bg-[#121212] border border-[#2A2A2A] p-4 rounded-xl flex flex-col sm:flex-row gap-6 hover:border-[#22C55E]/40 hover:translate-y-[-2px] transition-all cursor-pointer group shadow-xl"
               >
                 {/* Ground Image */}
                 <div className="w-full sm:w-60 aspect-video rounded-lg overflow-hidden bg-slate-800 flex-shrink-0 border border-white/5">
                    <img 
                      src={ground.image} 
                      alt={ground.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                 </div>

                 {/* Ground Info */}
                 <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex flex-col gap-1">
                       <h3 className="text-xl font-bold text-white group-hover:text-[#22C55E] transition-colors">
                         {ground.name}
                       </h3>
                       <div className="flex items-center gap-2 text-[#B3B3B3] text-xs font-medium">
                          <MapPin size={14} className="text-[#22C55E]" />
                          {ground.location} • {ground.distance} away
                       </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex items-center gap-4">
                       <div className="bg-[#000000] px-3 py-1.5 rounded-lg border border-[#2A2A2A] flex items-center gap-2">
                          <span className="text-sm font-black text-white">{ground.rating}</span>
                          <div className="flex items-center gap-0.5">
                             {[1, 2, 3, 4, 5].map(star => (
                               <Star key={star} size={10} className={star <= Math.floor(ground.rating) ? "fill-[#22C55E] text-[#22C55E]" : "text-[#2A2A2A]"} />
                             ))}
                          </div>
                          <span className="text-[10px] font-bold text-[#B3B3B3] ml-1">{ground.reviewCount || 120} Reviews</span>
                       </div>
                    </div>
                 </div>

                 {/* Price and CTA */}
                 <div className="flex flex-col items-start sm:items-end justify-between py-1 sm:min-w-[140px]">
                    <div className="sm:text-right">
                       <span className="text-xl font-black text-white">₹{ground.price}</span>
                       <span className="text-[#B3B3B3] text-[10px] font-bold uppercase ml-1">/ hour</span>
                    </div>

                    <Link 
                      href={`/booking/${ground.id}`}
                      className="btn-gradient w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm shadow-lg shadow-lime-500/10 uppercase tracking-widest text-center mt-4 sm:mt-0"
                    >
                      Book Now
                    </Link>
                 </div>
               </div>
             ))
           ) : (
             <div className="h-60 flex flex-col items-center justify-center bg-[#121212] border border-dashed border-[#2A2A2A] rounded-xl">
                <p className="text-[#B3B3B3] font-bold">No grounds found for {sportType}.</p>
                <Link href="/" className="text-[#22C55E] text-sm font-black mt-4 uppercase hover:underline">Go Back Home</Link>
             </div>
           )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm md:hidden">
           <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#121212] border-l border-[#2A2A2A] p-6 flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
                 <h2 className="font-black text-lg uppercase tracking-widest">Filters</h2>
                 <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-white/5 rounded-lg">
                    <X size={20} />
                 </button>
              </div>
              
              {/* Reuse Desktop segments similarly for brevity in implementation */}
              <div className="flex-grow overflow-y-auto pr-2 space-y-8 pb-10">
                 {/* Re-copy filter segments here */}
                 <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-black text-[#B3B3B3] uppercase tracking-widest">Price Range</h3>
                    <input type="range" min="200" max="10000" className="w-full accent-[#22C55E]" />
                 </div>
                 {/* ... etc ... */}
              </div>

              <button 
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-[#22C55E] py-4 rounded-xl font-black uppercase tracking-widest shadow-xl"
              >
                Apply Filters
              </button>
           </div>
        </div>
      )}
    </div>
  );
}
