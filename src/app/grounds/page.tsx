"use client";
import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin, Star, History } from 'lucide-react';
import GroundCard from '@/components/GroundCard';
import { GROUNDS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function GroundListing() {
  const [activeSport, setActiveSport] = useState('All');
  const sports = ['All', 'Cricket', 'Football', 'Badminton', 'Tennis', 'Volleyball'];

  const filteredGrounds = activeSport === 'All' 
    ? GROUNDS 
    : GROUNDS.filter(g => g.sport === activeSport);

  return (
    <div className="px-4 py-8 md:px-8 flex flex-col gap-8">
      {/* Search and Filter Header */}
      <div className="flex flex-col gap-6 sticky top-20 z-40 bg-primary/80 backdrop-blur-md pt-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white px-2">DISCOVER <span className="text-accent">ARENAS</span></h1>
            <p className="text-slate-500 font-bold text-xs tracking-widest uppercase px-2">Found {filteredGrounds.length} venues near you</p>
          </div>
          <button className="md:hidden glass-light p-2.5 rounded-xl border border-white/10">
            <SlidersHorizontal size={20} className="text-accent" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-grow w-full glass rounded-2xl p-1 flex items-center border border-white/10 focus-within:border-accent/40 transition-colors">
            <div className="px-4 text-slate-400">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by name, sport or locality..." 
              className="bg-transparent border-none outline-none py-3 text-white w-full font-medium placeholder-slate-500"
            />
          </div>

          <div className="hidden md:flex gap-2">
            <button className="glass-light px-4 py-3 rounded-2xl border border-white/5 text-sm font-bold text-slate-300 flex items-center gap-2 hover:bg-white/5 transition-colors">
              <Star size={16} className="text-amber-400" /> Top Rated
            </button>
            <button className="glass-light px-4 py-3 rounded-2xl border border-white/5 text-sm font-bold text-slate-300 flex items-center gap-2 hover:bg-white/5 transition-colors">
              <History size={16} className="text-sky-400" /> Booked Recently
            </button>
            <button className="bg-accent/10 border border-accent/30 text-accent px-4 py-3 rounded-2xl text-sm font-black flex items-center gap-2">
              <Filter size={16} /> FILTERS
            </button>
          </div>
        </div>

        {/* Sport Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setActiveSport(sport)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                activeSport === sport 
                ? 'bg-accent text-primary border-accent shadow-neon' 
                : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/20'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <AnimatePresence mode="popLayout">
           {filteredGrounds.map((ground) => (
              <motion.div
                key={ground.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GroundCard {...ground} />
              </motion.div>
           ))}
        </AnimatePresence>
      </div>

      {/* Load More / Footer status */}
      {filteredGrounds.length === 0 && (
         <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
               <Search size={40} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No venues matches your filters</h3>
            <p className="text-slate-500 font-medium">Try resetting your filters or searching for something else.</p>
            <button 
              onClick={() => setActiveSport('All')}
              className="mt-6 text-accent font-black underline underline-offset-4"
            >
              SHOW ALL VENUES
            </button>
         </div>
      )}
    </div>
  );
}
