export default function HowToOrder() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-8 uppercase">How to Order</h1>
      
      <div className="space-y-6 bg-white border border-stone-200 p-6 rounded shadow-sm">
        <p className="text-stone-800 text-sm md:text-base leading-relaxed text-center font-medium">
          You can order via WhatsApp and then pick up at Nakuru Top Market, Stall 12.
        </p>

        <div className="border-t border-stone-100 pt-4">
          <h2 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-2">Ordering Instructions</h2>
          <ul className="space-y-2 text-stone-700 text-sm">
            <li>• <span className="font-semibold">WhatsApp:</span> 0714 052 641</li>
            <li>• <span className="font-semibold">Phone:</span> 0714 052 641</li>
          </ul>
        </div>

        <div className="border-t border-stone-100 pt-4">
          <h2 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-2">Example WhatsApp Message</h2>
          <blockquote className="bg-stone-50 border-l-4 border-emerald-600 p-4 text-stone-600 text-sm italic font-mono rounded-r">
            “Hi, I want 5 kg Nile Perch fillets, 3 kg tilapia fillets, 2 bottles of cod liver oil, pickup on Friday at Nakuru Top Market, Stall 12.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}
