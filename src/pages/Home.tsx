type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center my-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 mb-4">
          Lorine's Fish & Fish Products • Fish Fillets • Nakuru Top Market, Stall 12
        </h1>
        <p className="text-stone-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Nile Perch & Tilapia fillets • fresh fish • cod liver oil • fried fish • dried fish • open Monday–Saturday, 9:00 AM – 8:00 PM
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-12">
          <a
            href="https://wa.me/254714052641"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-stone-900 text-white font-medium text-xs tracking-wider uppercase py-3 rounded text-center hover:bg-stone-800 transition-colors"
          >
            WhatsApp to Order (0714 052 641)
          </a>
          <a
            href="tel:0714052641"
            className="w-full bg-white border border-stone-300 text-stone-700 font-medium text-xs tracking-wider uppercase py-3 rounded text-center hover:bg-stone-50 transition-colors"
          >
            Call to Order (0714 052 641)
          </a>
          <button
            onClick={() => setCurrentPage('location')}
            className="w-full bg-stone-100 text-stone-600 font-medium text-xs tracking-wider uppercase py-3 rounded text-center hover:bg-stone-200 transition-colors"
          >
            Visit Our Stall
          </button>
        </div>
      </section>

      <section className="bg-white border border-stone-200 rounded p-6 shadow-sm max-w-2xl mx-auto">
        <h2 className="text-sm font-bold tracking-wider text-stone-400 uppercase mb-4">Our Products & Prices</h2>
        <ul className="space-y-3 text-stone-700 text-sm border-t border-stone-100 pt-3">
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fish fillets: Nile Perch</span>
            <span className="font-semibold">1,000/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fish fillets: Tilapia</span>
            <span className="font-semibold">1,600/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fresh whole Nile Perch</span>
            <span className="font-semibold">500/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fresh whole Tilapia</span>
            <span className="font-semibold">450/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fresh whole catfish</span>
            <span className="font-semibold">400/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Fresh whole mad fish</span>
            <span className="font-semibold">400/kg</span>
          </li>
          <li className="flex justify-between border-b border-stone-50 pb-2">
            <span>Cod liver oil</span>
            <span className="font-semibold">600 per 500 ml</span>
          </li>
          <li className="flex justify-between pb-1">
            <span>Fried tilapia and fried Nile Perch</span>
            <span className="italic text-stone-500">price varies by size</span>
          </li>
          <li className="flex justify-between pt-2 border-t border-stone-50">
            <span>Varieties of dried fish</span>
            <span className="italic text-stone-500">sold per kg</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
