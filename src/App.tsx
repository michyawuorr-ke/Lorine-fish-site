import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Fillets from './pages/Fillets';
import HowToOrder from './pages/HowToOrder';
import About from './pages/About';
import Location from './pages/Location';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'products': return <Products />;
      case 'fillets': return <Fillets />;
      case 'order': return <HowToOrder />;
      case 'about': return <About />;
      case 'location': return <Location />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div class="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main class="flex-grow">
        {renderPage()}
      </main>
      <footer class="bg-blue-950 text-slate-300 py-6 border-t border-blue-900 text-center text-sm px-4">
        <p class="font-bold text-white">Lorine's Fish and Fish Products</p>
        <p class="text-xs text-slate-400 mt-1">Nakuru Top Market, Stall 12 • Nakuru, Kenya</p>
        <p class="text-xs text-slate-500 mt-4">© 2026 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
