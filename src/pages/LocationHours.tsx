export default function LocationHours() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-8 uppercase">Location & Hours</h1>
      
      <div className="bg-white border border-stone-200 p-6 rounded shadow-sm space-y-6">
        <div>
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Physical Address</h2>
          <p className="text-stone-900 font-medium text-sm">Location: Nakuru Top Market, Stall 12, Nakuru, Kenya</p>
        </div>

        <div className="border-t border-stone-100 pt-4">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Opening Hours</h2>
          <p className="text-stone-900 font-medium text-sm">Opening hours: Monday–Saturday, 9:00 AM – 8:00 PM</p>
        </div>

        <div className="border-t border-stone-100 pt-4">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Maps Directory Navigation</h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            You can find us on Google Maps as <span className="font-semibold text-stone-900">“Lorine's Fish and Fish Products – Nakuru Top Market Stall 12”</span>
          </p>
        </div>
      </div>
    </div>
  );
}
