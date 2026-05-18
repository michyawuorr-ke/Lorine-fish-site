import { Menu, X, Fish } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'fillets' | 'about';
  setCurrentPage: (page: 'home' | 'fillets' | 'about') => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: 'home' | 'fillets' | 'about'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'fillets', label: 'Our Fillets' },
    { id: 'about', label: 'Our Story' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Fish className="h-6 w-6 text-amber-700" />
            <span className="font-semibold text-lg tracking-wider uppercase text-stone-800">Lorine's Fish</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  currentPage === item.id ? 'text-amber-700 font-medium' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-base tracking-wider uppercase ${
                currentPage === item.id ? 'text-amber-700 font-medium' : 'text-stone-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
