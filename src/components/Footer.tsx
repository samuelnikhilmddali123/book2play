"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Globe, Mail, Phone, MapPin, 
  ChevronRight, Disc, Smartphone, Share2,
  Camera, MessageCircle
} from 'lucide-react';

export default function Footer() {
  const sports = [
    { name: 'Cricket', href: '/cricket' },
    { name: 'Football', href: '/football' },
    { name: 'Volleyball', href: '/volleyball' },
    { name: 'Badminton', href: '/badminton' },
    { name: 'Tennis', href: '/tennis' },
    { name: 'Basketball', href: '/basketball' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Partner With Us', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
  ];

  const socialIcons = [Globe, Camera, MessageCircle, Share2];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <h1 className="text-2xl font-black tracking-tighter text-white italic">
              BOOK<span className="text-white">2</span>PLAY
            </h1>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
            Your premium destination for discovering and booking world-class sports facilities near you. From floodlit turf to indoor nets, find your perfect arena in seconds.
          </p>
          <div className="flex items-center gap-4">
             {socialIcons.map((Icon, idx) => (
               <a key={idx} href="#" className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-accent hover:border-accent/40 transition-all group">
                 <Icon size={18} className="group-hover:scale-110 transition-transform" />
               </a>
             ))}
          </div>
        </div>

        {/* Explore Sports */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black text-white uppercase tracking-widest">Explore Sports</h3>
          <ul className="grid grid-cols-2 gap-y-3">
             {sports.map((item) => (
               <li key={item.name}>
                 <Link href={item.href} className="text-slate-500 hover:text-white text-xs font-bold transition-colors flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-accent opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item.name}
                 </Link>
               </li>
             ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black text-white uppercase tracking-widest">Company</h3>
          <ul className="flex flex-col gap-3">
             {quickLinks.map((item) => (
               <li key={item.name}>
                 <Link href={item.href} className="text-slate-500 hover:text-white text-xs font-bold transition-colors">
                    {item.name}
                 </Link>
               </li>
             ))}
          </ul>
        </div>

        {/* App & Contact */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-black text-white uppercase tracking-widest">Contact Info</h3>
          <div className="flex flex-col gap-4">
             <div className="flex items-start gap-4 text-slate-500 text-xs font-bold">
                <MapPin size={18} className="text-accent shrink-0" />
                <p>123 Sports Complex Road, Sector 45, Mhow, Indore, India</p>
             </div>
             <div className="flex items-center gap-4 text-slate-500 text-xs font-bold">
                <Phone size={18} className="text-accent shrink-0" />
                <p>+91 999 123 4567</p>
             </div>
             <div className="flex items-center gap-4 text-slate-500 text-xs font-bold">
                <Mail size={18} className="text-accent shrink-0" />
                <p>support@book2play.com</p>
             </div>
          </div>
          
          <div className="mt-4 flex flex-col gap-3">
             <p className="text-[10px] font-black text-white uppercase tracking-widest">Install Our App</p>
             <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-accent/40 transition-all">
                   <Smartphone size={20} className="text-white" />
                   <div className="text-left">
                      <p className="text-[8px] font-bold text-slate-400 leading-none">Download on the</p>
                      <p className="text-[11px] font-black text-white leading-tight">App Store</p>
                   </div>
                </button>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-accent/40 transition-all">
                   <Disc size={20} className="text-white" />
                   <div className="text-left">
                      <p className="text-[8px] font-bold text-slate-400 leading-none">Get it on</p>
                      <p className="text-[11px] font-black text-white leading-tight">Google Play</p>
                   </div>
                </button>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase text-center md:text-left">
          © 2026 BOOK2PLAY. ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.
        </p>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 opacity-30 grayscale brightness-200 contrast-150">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-2" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3.5" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" className="h-2.5" alt="UPI" />
           </div>
        </div>
      </div>
    </footer>
  );
}
