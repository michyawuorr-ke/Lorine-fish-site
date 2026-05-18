import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  placeholderText: string;
  tags: string[];
}

export default function ProductCard({ title, price, description, placeholderText, tags }: ProductCardProps) {
  return (
    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
      <div>
        <div class="bg-slate-100 h-36 flex items-center justify-center p-4 text-center border-b border-slate-200">
          <p class="text-xs text-slate-500 font-mono italic">[{placeholderText}]</p>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-start gap-2 mb-1">
            <h3 class="font-bold text-slate-900 text-base">{title}</h3>
            <span class="text-blue-700 font-extrabold text-sm whitespace-nowrap">{price}</span>
          </div>
          <div class="flex gap-1.5 my-2">
            {tags.map((tag, idx) => (
              <span key={idx} class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <p class="text-xs text-slate-600 leading-relaxed mt-2">{description}</p>
        </div>
      </div>
      <div class="p-4 pt-0">
        <a
          href={`https://wa.me/254714052641?text=Hi%20Lorine,%20I%20want%20to%20order%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 transition"
        >
          <MessageSquare class="h-4 w-4" /> WhatsApp to Order
        </a>
      </div>
    </div>
  );
}
