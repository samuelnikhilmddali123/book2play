"use client";
import React from 'react';
import Link from 'next/link';
import { Home, LayoutGrid, Ticket, User, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Grounds', icon: LayoutGrid, href: '/grounds' },
    { label: 'Bookings', icon: Ticket, href: '/booking/mine' },
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'Admin', icon: Settings, href: '/admin' }
  ];

  return (
    <nav className="fixed bottom-0 md:hidden w-full glass border-t border-white/5 px-6 py-3 z-50">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 group">
              <Icon 
                size={22} 
                className={`transition-all ${isActive ? 'text-accent scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'text-slate-400 group-hover:text-slate-200'}`} 
              />
              <span className={`text-[10px] font-bold tracking-tight uppercase transition-all ${isActive ? 'text-accent' : 'text-slate-500 group-hover:text-slate-300'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
