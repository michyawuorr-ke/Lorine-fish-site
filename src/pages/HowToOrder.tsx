import React from 'react';
import { MessageSquare, Phone, Store } from 'lucide-react';

export default function HowToOrder() {
  return (
    <div class="max-w-3xl mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h2 class="text-xl sm:text-2xl font-black text-slate-900">Simple Step-By-Step Ordering</h2>
        <p class="text-xs sm:text-sm text-slate-600 mt-1">
          You can order via WhatsApp, then pick up at Nakuru Top Market, Stall 12, or we deliver for wholesale.
        </p>
      </div>

      <div class="space-y-4">
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex gap-4">
          <div class="bg-green-100 p-2.5 rounded-lg text-green-700 shrink-0 h-10 w-10 flex items-center justify-center">
            <MessageSquare class="h-5 w-5" />
          </div>
          <div>
            <h3 class="font-bold text-slate-900 text-sm sm:text-base">Primary Channel: WhatsApp Message</h3>
            <p class="text-xs text-slate-600 mt-1">Send your details directly to <span class="font-bold text-slate-900">0714 052 641</span>.</p>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-3 font-mono text-[11px] sm:text-xs text-slate-700">
              <p class="font-bold text-slate-500 mb-1">// Copy-Paste Order Example:</p>
              "20 kg Nile Perch fillets, 10 kg tilapia fillets, 5 bottles of cod liver oil, delivery on Thursday."
            </div>
            <a href="https://wa.me/254714052641" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg hover:bg-green-700 transition">
              Launch WhatsApp Chat
            </a>
          </div>
        </div>

        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex gap-4">
          <div class="bg-blue-100 p-2.5 rounded-lg text-blue-700 shrink-0 h-10 w-10 flex items-center justify-center">
            <Phone class="h-5 w-5" />
          </div>
          <div>
            <h3 class="font-bold text-slate-900 text-sm sm:text-base">Immediate Voice Call Assistance</h3>
            <p class="text-xs text-slate-600 mt-1">
              Have unique weight requirements or need urgent supply adjustments? Call <span class="font-bold text-slate-900">0714 052 641</span> directly for immediate solutions.
            </p>
            <a href="tel:0714052641" class="mt-3 inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg hover:bg-blue-700 transition">
              Call Counter Now
            </a>
          </div>
        </div>

        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex gap-4">
          <div class="bg-amber-100 p-2.5 rounded-lg text-amber-700 shrink-0 h-10 w-10 flex items-center justify-center">
            <Store class="h-5 w-5" />
          </div>
          <div>
            <h3 class="font-bold text-slate-900 text-sm sm:text-base">In-Person Collection</h3>
            <p class="text-xs text-slate-600 mt-1">
              Retail clients can visit the physical stall anytime during opening timelines to collect inventory products safely over the counter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
