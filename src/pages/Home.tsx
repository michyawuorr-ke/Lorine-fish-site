type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
      {/* Act I: The Monumental Entry (Hero Section) */}
      <section className="text-center pt-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-3">
          Est. Over 20 Years • Nakuru Top Market
        </span>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-stone-950 max-w-3xl mx-auto leading-tight mb-6">
          Lorine's Fish & Fish Products • Fish Fillets • Stall 12
        </h1>
        <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-serif italic mb-10">
          Nile Perch & Tilapia fillets • fresh fish • cod liver oil • fried fish • dried fish • open Monday–Saturday, 9:00 AM – 8:00 PM
        </p>
        
        {/* Grounded Action Zone */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a
            href="https://wa.me/254714052641"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-stone-950 text-white font-medium text-xs tracking-[0.15em] uppercase py-3.5 rounded shadow-sm hover:bg-stone-800 transition-all duration-300"
          >
            WhatsApp to Order (0714 052 641)
          </a>
          <a
            href="tel:0714052641"
            className="w-full bg-white border border-stone-200 text-stone-800 font-medium text-xs tracking-[0.15em] uppercase py-3.5 rounded shadow-sm hover:bg-stone-50 transition-all duration-300"
          >
            Call to Order (0714 052 641)
          </a>
        </div>
      </section>

      {/* Act II: The Deep Roots (The Expanded Family Legacy) */}
      <section className="max-w-2xl mx-auto text-center border-t border-b border-stone-200/60 py-12 px-4">
        <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400 mb-6">The Legacy of Stall 12</h2>
        <div className="space-y-6 text-stone-800 font-light text-sm md:text-base leading-relaxed text-left max-w-xl mx-auto">
          <p>
            For over twenty years, our family has anchored a definitive standard of exceptional quality and deep community trust from **Nakuru Top Market, Stall 12**. Two decades of presence means we don't simply supply fish—we handle a foundational culinary pillar that local households, executive chefs, and catering institutions depend upon daily.
          </p>
          <p>
            Today, **Lorine runs and manages the business**, carrying forward this rich multi-decadal lineage. Under her direct stewardship, every single cut, fillet, and selection is managed with flawless discipline, ensuring the exact same foundational excellence is delivered to your kitchen without compromise.
          </p>
        </div>
        <button
          onClick={() => setCurrentPage('about')}
          className="mt-8 text-xs font-bold tracking-[0.15em] uppercase text-stone-950 hover:opacity-70 transition-all border-b border-stone-950 pb-1"
        >
          Read Our History
        </button>
      </section>

      {/* Act III: The Presentation (The Master Inventory) */}
      <section className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400">The Premium Selection</h2>
        </div>
        <div className="bg-white border border-stone-200/80 rounded shadow-sm p-8">
          <ul className="space-y-4 text-stone-800 text-sm font-light">
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fish fillets: Nile Perch</span>
              <span className="font-semibold text-stone-950 tracking-wide">KSh 1,000/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fish fillets: Tilapia</span>
              <span className="font-semibold text-stone-950 tracking-wide">KSh 1,600/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fresh whole Nile Perch</span>
              <span className="font-semibold text-stone-600">500/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fresh whole Tilapia</span>
              <span className="font-semibold text-stone-600">450/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fresh whole catfish</span>
              <span className="font-semibold text-stone-600">400/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fresh whole mad fish</span>
              <span className="font-semibold text-stone-600">400/kg</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Cod liver oil</span>
              <span className="font-semibold text-stone-950 tracking-wide">600 per 500 ml</span>
            </li>
            <li className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="font-medium text-stone-900">Fried tilapia and fried Nile Perch</span>
              <span className="italic text-stone-400 text-xs tracking-wide">price varies by size</span>
            </li>
            <li className="flex justify-between items-baseline pb-1">
              <span className="font-medium text-stone-900">Varieties of dried fish</span>
              <span className="italic text-stone-400 text-xs tracking-wide">sold per kg</span>
            </li>
          </ul>

          <div className="mt-8 text-center pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentPage('fillets')}
              className="bg-stone-50 border border-stone-200 text-stone-700 text-xs font-medium tracking-[0.15em] uppercase py-3 px-8 rounded hover:bg-stone-100 transition-colors w-full"
            >
              View Full Gallery & Order Items
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
