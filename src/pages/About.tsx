import React from 'react';
import { History, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div class="max-w-3xl mx-auto px-4 py-8">
      <h2 class="text-xl sm:text-2xl font-black text-slate-900 text-center mb-6">Our Heritage & Legacy</h2>
      
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <p class="text-slate-900 font-medium text-sm sm:text-base">
          Started over 20 years ago as a family fish business at Nakuru Top Market, Stall 12.
        </p>
        <p>
          Our operations were built from the ground up on core pillars: clean processing, direct lakeside supply relationships, and honest metrics. Over two consecutive decades, we have evolved to support local commercial kitchens with pristine inventory consistency.
        </p>
        <p>
          Lorine now runs and manages the business, bringing modern structural oversight and logistics management to the enterprise. Under her clear operational leadership, Stall 12 ensures that bulk wholesale orders reach clients on precise schedules without sacrificing the individual care that defined our legacy origins.
        </p>
        <p>
          We stand strictly for quality, freshness, and structural reliability for wholesale and retail customers across Nakuru County.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        <div class="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
          <History class="h-5 w-5 text-blue-900 mx-auto mb-1" />
          <span class="block font-bold text-slate-900 text-xs">20+ Years Run</span>
        </div>
        <div class="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
          <Award class="h-5 w-5 text-blue-900 mx-auto mb-1" />
          <span class="block font-bold text-slate-900 text-xs">Lake Victoria Fresh</span>
        </div>
        <div class="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
          <Users class="h-5 w-5 text-blue-900 mx-auto mb-1" />
          <span class="block font-bold text-slate-900 text-xs font-medium">Lorine Managed</span>
        </div>
      </div>
    </div>
  );
}
