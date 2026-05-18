import React from 'react';
import { MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

export default function Home({ setPage }: HomeProps) {
  const highlights = [
    "20+ years trusted, family-owned fish establishment inside Top Market",
    "Main Product: Fresh Nile Perch fillets (KSh 1,100/kg) & Tilapia fillets (KSh 1,700/kg)",
    "Fresh whole Tilapia (450/kg), Nile Perch (500/kg), Mad Fish (350/kg), Catfish (350/kg)",
    "Pure Nile Perch Cod Liver Oil – KSh 600 per 500ml bottle",
    "Fried Tilapia and Nile Perch available daily (price varies by size)",
    "Wide variety of premium traditional dried fish sold per kg",
    "Reliable delivery solutions arranged for wholesale clients",
    "Open consistently Monday to Saturday, 9:00 AM – 8:00 PM"
  ];

  return (
    <div class="flex flex-col">
      <section class="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Lorine's Fish & Fish Products • Fish Fillets • Nakuru Top Market Stall 12
          </h1>
          <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Nile Perch & Tilapia fillets • fresh fish • cod liver oil • fried fish • dried fish • deliveries for wholesale
          </p>
          <div class="flex flex-col gap-2.5 max-w-sm mx-auto">
            <a href="https://wa.me/254714052641" target="_blank" rel="noopener noreferrer" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition">
              <MessageSquare class="h-4 w-4" /> WhatsApp to Order (0714 052 641)
            </a>
            <a href="tel:0714052641" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition">
              <Phone class="h-4 w-4" /> Call to Order (0714 052 641)
            </a>
            <button onClick={() => setPage('location')} class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition">
              <MapPin class="h-4 w-4 text-cyan-400" /> Visit Us at Nakuru Top Market, Stall 12
            </button>
          </div>
        </div>
      </section>

      <section class="max-w-3xl mx-auto px-4 py-10 w-full">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 class="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Business Excellence & Price Guide</h2>
          <ul class="space-y-3">
            {highlights.map((text, idx) => (
              <li key={idx} class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <CheckCircle2 class="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
