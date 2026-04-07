"use client";
import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1d] px-6 py-4 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-black tracking-tighter text-white italic">
            BOOK<span className="text-white">2</span>PLAY
          </h1>
        </Link>
        
        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['CRICKET', 'VOLLEYBALL', 'FOOTBALL', 'BADMINTON'].map((item) => (
            <Link 
              key={item} 
              href={`/grounds?sport=${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white text-xs font-black tracking-widest transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-accent hover:bg-accent-hover text-black px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all shadow-lg shadow-accent/10">
            SIGN IN
          </button>
          
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
