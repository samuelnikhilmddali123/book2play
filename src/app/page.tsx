"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Ticket, Zap } from "lucide-react";
import { motion } from "framer-motion";
import GroundCard from "@/components/GroundCard";
import { GROUNDS, OFFERS } from "@/lib/data";

export default function Home() {
  const grounds = GROUNDS || [];
  const cricketGrounds = grounds.filter(g => g.sport.toLowerCase() === 'cricket');
  const volleyballGrounds = grounds.filter(g => g.sport.toLowerCase() === 'volleyball');
  const footballGrounds = grounds.filter(g => g.sport.toLowerCase() === 'football');
  const badmintonGrounds = grounds.filter(g => g.sport.toLowerCase() === 'badminton');

  return (
    <div className="flex flex-col gap-12 pb-32 pt-8">
      {/* Offers Section */}
      <section className="px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-black text-white uppercase tracking-widest">OFFERS FOR YOU</h2>
          <div className="flex gap-2">
            <button className="p-1 px-2 bg-white/5 rounded-lg border border-white/10 text-slate-500 hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1 px-2 bg-white/5 rounded-lg border border-white/10 text-slate-500 hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x h-[200px]">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id} 
              className="flex-shrink-0 w-[400px] h-full rounded-2xl overflow-hidden relative border border-white/10 snap-start"
            >
              <img src={offer.image} className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" alt="" />
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                   <span className="bg-white/10 text-[8px] font-black text-white px-2 py-0.5 rounded border border-white/20 uppercase">
                     {offer.tag}
                   </span>
                   <h3 className="text-xl font-black text-white mt-3 leading-tight">{offer.title}</h3>
                   <p className="text-2xl font-black text-accent mt-1">{offer.discount}</p>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">{offer.sub}</p>
                </div>
                <button className="w-fit btn-gradient text-[10px] px-4 py-1.5 rounded-lg uppercase tracking-widest">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cricket Section */}
      <section className="px-6 md:px-12">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-lg">🏏</div>
             <h2 className="text-xs font-black text-white uppercase tracking-widest">CRICKET TOP RATED NEAR ME</h2>
          </div>
          <Link href="/grounds?sport=cricket" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
            MORE <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cricketGrounds.slice(0, 4).map((ground) => (
            <GroundCard key={ground.id} {...ground} />
          ))}
        </div>
      </section>

      {/* Football Section */}
      <section className="px-6 md:px-12">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-lg">⚽</div>
             <h2 className="text-xs font-black text-white uppercase tracking-widest">FOOTBALL TOP RATED NEAR ME</h2>
          </div>
          <Link href="/grounds?sport=football" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
            MORE <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footballGrounds.slice(0, 4).map((ground) => (
            <GroundCard key={ground.id} {...ground} />
          ))}
        </div>
      </section>

      {/* Badminton Section */}
      <section className="px-6 md:px-12">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-lg">🏸</div>
             <h2 className="text-xs font-black text-white uppercase tracking-widest">BADMINTON TOP RATED NEAR ME</h2>
          </div>
          <Link href="/grounds?sport=badminton" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
            MORE <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badmintonGrounds.slice(0, 4).map((ground) => (
            <GroundCard key={ground.id} {...ground} />
          ))}
        </div>
      </section>

      {/* Volleyball Section */}
      <section className="px-6 md:px-12">
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-lg">🏐</div>
             <h2 className="text-xs font-black text-white uppercase tracking-widest">VOLLEYBALL TOP RATED NEAR ME</h2>
          </div>
          <Link href="/grounds?sport=volleyball" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
            MORE <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {volleyballGrounds.slice(0, 4).map((ground) => (
            <GroundCard key={ground.id} {...ground} />
          ))}
        </div>
      </section>

      {/* Bottom Promo Banner */}
      <div className="fixed bottom-0 md:bottom-auto md:relative w-full z-40 px-6 md:px-12 pb-4">
        <div className="bg-[#0f1d16] border border-accent/20 rounded-2xl p-3 md:p-4 flex items-center justify-between gap-4 shadow-2xl">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                 <Ticket className="text-accent" />
              </div>
              <div className="hidden sm:block">
                 <h4 className="text-white font-black text-xs uppercase tracking-tight">GET 20% OFF ON YOUR FIRST BOOKING!</h4>
                 <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Use code PLAY20 at checkout. Valid on all sports.</p>
              </div>
              <div className="sm:hidden">
                 <h4 className="text-white font-black text-xs uppercase tracking-tight">GET 20% OFF!</h4>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="hidden md:flex border-2 border-dashed border-accent/40 rounded-lg px-4 py-2">
                 <span className="text-accent font-black text-sm tracking-widest uppercase">PLAY20</span>
              </div>
              <button className="btn-gradient px-6 py-2 md:py-3 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-lime-500/20">
                 CLAIM OFFER
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
