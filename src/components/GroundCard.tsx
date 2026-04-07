"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface GroundProps {
  id: string;
  name: string;
  sport: string;
  rating: number;
  reviewCount?: number;
  price: number;
  location: string;
  distance: string;
  image: string;
  status?: string;
}

export default function GroundCard({ id, name, sport, rating, reviewCount = 120, price, location, distance, image }: GroundProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-[#0f172a]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 flex flex-col h-full hover:border-accent/40 transition-all shadow-2xl">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=400';
          }}
        />
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-bold text-white">{rating} ({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-bold text-sm text-white truncate group-hover:text-accent transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin size={10} className="text-accent" />
          <span className="text-[10px] font-medium tracking-tight truncate">
            {location} • {distance}
          </span>
        </div>

        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-sm font-black text-white tracking-widest">₹ {price}</span>
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">/ hour</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Link 
            href={`/grounds/${id}`}
            className="flex-grow bg-accent hover:bg-accent-hover text-black py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all text-center"
          >
            BOOK NOW
          </Link>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-lg border border-white/10 transition-all ${isFavorite ? 'bg-red-500/20 border-red-500/40' : 'bg-white/5 hover:bg-white/10'}`}
          >
            <Heart size={14} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
          </button>
        </div>
      </div>
    </div>
  );
}
