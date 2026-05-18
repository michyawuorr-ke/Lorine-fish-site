import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';

export default function Location() {
  return (
    <div class="max-w-3xl mx-auto px-4 py-8">
      <h2 class="text-xl sm:text-2xl font-black text-slate-900 text-center mb-6">Find Stall 12</h2>

      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4 text-xs sm:text-sm text-slate-700">
        <div class="flex items-start gap-3">
          <MapPin class="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
          <div>
            <h3 class="font-bold text-slate-900">Physical Location Address</h3>
            <p class="text-slate-600 mt-0.5">Nakuru Top Market, Stall 12, Nakuru Town East Sub‑County, Nakuru, Kenya</p>
          </div>
        </div>

        <div class="flex items-start gap-3 border-t border-slate-100 pt-4">
          <Clock class="h-5 w-5 text-blue-900 shrink-0 mt-0.5" />
          <div>
            <h3 class="font-bold text-slate-900">Opening Operating Hours</h3>
            <p class="text-slate-600 mt-0.5">Monday–Saturday, 9:00 AM – 8:00 PM</p>
            <p class="text-red-600 font-bold mt-1 text-[11px]">Sundays: Strictly Closed</p>
          </div>
        </div>

        <div class="flex items-start gap-3 border-t border-slate-100 pt-4 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
          <Info class="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <h3 class="font-bold text-blue-900">Google Maps Navigation Guidance</h3>
            <p class="text-blue-800 font-medium mt-0.5">
              You can find us on Google Maps as “Lorine’s Fish and Fish Products – Nakuru Top Market Stall 12”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
