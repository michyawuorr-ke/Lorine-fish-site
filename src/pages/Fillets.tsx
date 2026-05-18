import React from 'react';
import { MessageSquare, Truck } from 'lucide-react';

export default function Fillets() {
  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Our Main Product: Fish Fillets</h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
          Perfect for hotels, restaurants, event caterers, schools, and universities. We maintain consistent inventories for reliable procurement.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-extrabold text-slate-900 text-lg">Nile Perch Fillets</h3>
              <span class="bg-blue-100 text-blue-800 text-sm font-black px-2.5 py-1 rounded-lg">KSh 1,100/kg</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Premium bone-out white fillets sourced cleanly from Lake Victoria. Highly demanded by institutional kitchens for high structural yield and culinary versatility.
            </p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-100">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Core Wholesale Asset</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-extrabold text-slate-900 text-lg">Tilapia Fillets</h3>
              <span class="bg-blue-100 text-blue-800 text-sm font-black px-2.5 py-1 rounded-lg">KSh 1,700/kg</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Carefully skinned, clean-tasting premium fillets. Handled meticulously to preserve delicate cellular freshness required for high-end hospitality serving configurations.
            </p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-100">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Hospitality Grade</span>
          </div>
        </div>
      </div>

      <div class="bg-blue-900 text-white p-5 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <div class="flex items-center gap-3">
          <Truck class="h-8 w-8 text-cyan-400 shrink-0" />
          <div>
            <h4 class="font-bold text-sm sm:text-base">Bulk Distribution Logistics</h4>
            <p class="text-xs text-blue-200">Deliveries are cleanly coordinated and available for approved wholesale orders.</p>
          </div>
        </div>
        <a
          href="https://wa.me/254714052641?text=Hi%20Lorine,%20I%20want%20to%20inquire%20about%20wholesale%20fillet%20deliveries."
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 whitespace-nowrap transition"
        >
          <MessageSquare class="h-4 w-4" /> Setup Commercial Contract
        </a>
      </div>
    </div>
  );
}
