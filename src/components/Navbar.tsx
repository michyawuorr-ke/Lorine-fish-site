import { Menu, X, Fish } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'fillets', label: 'Our Goods' },
    { id: 'order', label: 'How to Order' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location & Hours' },
  ];

  return (
    <nav className="fixed w-full bg-white border-b border-stone-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Fish className="h-5 w-5 text-stone-800" />
            <span className="font-semibold text-sm tracking-wider uppercase text-stone-900">Lorine's Fish</span>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-xs tracking-widest uppercase transition-colors duration-150 ${
                  currentPage === item.id ? 'text-stone-900 font-bold border-b-2 border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-xs tracking-wider uppercase ${
                currentPage === item.id ? 'bg-stone-100 text-stone-900 font-bold' : 'text-stone-600'
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
