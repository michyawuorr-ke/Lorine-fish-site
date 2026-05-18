import React, { useState } from 'react';
import { Menu, X, Fish } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'fillets', label: 'Fish Fillets' },
    { id: 'order', label: 'How to Order' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location' },
  ];

  const handleNav = (id: string) => {
    setPage(id);
    setIsOpen(false);
  };

  return (
    <nav class="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-2 cursor-pointer" onClick={() => handleNav('home')}>
          <Fish class="h-6 w-6 text-cyan-400" />
          <span class="font-bold tracking-tight text-sm sm:text-base">Lorine's Fish (Stall 12)</span>
        </div>

        <div class="hidden md:flex space-x-4 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              class={`px-3 py-2 rounded-md transition ${currentPage === item.id ? 'bg-blue-800 text-cyan-400 font-bold' : 'hover:bg-blue-800 text-slate-200'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button class="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X class="h-6 w-6" /> : <Menu class="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div class="md:hidden bg-blue-950 px-2 pt-2 pb-4 space-y-1 border-t border-blue-800 flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              class={`text-left w-full px-4 py-2.5 rounded-md text-sm ${currentPage === item.id ? 'bg-blue-800 text-cyan-400 font-bold' : 'text-slate-200'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
