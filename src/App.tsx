import { useState } from 'react';
import { Menu, X, Fish } from 'lucide-react';

type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'fillets', label: 'Our Goods' },
    { id: 'order', label: 'How to Order' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const allGoods = [
    { name: "Nile Perch fillets", price: "KSh 1,000 per kg" },
    { name: "Tilapia fillets", price: "KSh 1,600 per kg" },
    { name: "Fresh whole Nile Perch", price: "KSh 500 per kg" },
    { name: "Fresh whole Tilapia", price: "KSh 450 per kg" },
    { name: "Fresh whole catfish", price: "KSh 400 per kg" },
    { name: "Fresh whole mad fish", price: "KSh 400 per kg" },
    { name: "Cod liver oil – 500 ml", price: "KSh 600 per bottle" },
    { name: "Fried tilapia", price: "price varies by size" },
    { name: "Fried Nile Perch", price: "price varies by size" },
    { name: "Varieties of dried fish", price: "sold per kg" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* GLOBAL NAVBAR */}
      <nav className="fixed w-full bg-white border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Fish className="h-5 w-5 text-stone-800" />
              <span className="font-semibold text-sm tracking-wider uppercase text-stone-900">Lorine's Fish</span>
            </div>
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-xs tracking-widest uppercase transition-all ${
                    currentPage === item.id ? 'text-stone-900 font-bold border-b-2 border-stone-900 pb-1' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-xs tracking-wider uppercase ${
                  currentPage === item.id ? 'bg-stone-100 text-stone-900 font-bold' : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* DYNAMIC CONTENT ROUTER */}
      <main className="flex-grow pt-16">
        {currentPage === 'home' && (
          <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
            <section className="text-center pt-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-3">
                Est. Over 20 Years • Nakuru Top Market
              </span>
              <h1 className="text-2xl md:text-4xl font-light tracking-tight text-stone-950 max-w-3xl mx-auto leading-tight mb-6">
                Lorine's Fish & Fish Products • Fish Fillets • Stall 12
              </h1>
              <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-serif italic mb-10">
                Nile Perch & Tilapia fillets • fresh fish • cod liver oil • fried fish • dried fish • open Monday–Saturday, 9:00 AM – 8:00 PM
              </p>
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
          </div>
        )}

        {currentPage === 'products' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-12 uppercase">Product Catalog</h1>
            <div className="space-y-12">
              {[
                { title: "Fish Fillets", items: allGoods.slice(0, 2) },
                { title: "Fresh Whole Fish", items: allGoods.slice(2, 6) },
                { title: "Cod Liver Oil", items: [allGoods[6]] },
                { title: "Fried Fish", items: allGoods.slice(7, 9) },
                { title: "Dried Fish", items: [allGoods[9]] }
              ].map((section, sIdx) => (
                <div key={sIdx} className="border-t border-stone-200 pt-6">
                  <h2 className="text-lg font-bold text-stone-800 tracking-wide mb-6 uppercase">{section.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((product, pIdx) => (
                      <div key={pIdx} className="bg-white border border-stone-200 p-5 rounded flex flex-col justify-between shadow-sm">
                        <div className="mb-4">
                          <h3 className="font-semibold text-stone-900 text-base">{product.name}</h3>
                          <p className="text-stone-700 text-sm font-medium mt-1">{product.price}</p>
                        </div>
                        <a
                          href="https://wa.me/254714052641"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-block bg-white border border-stone-300 text-stone-700 text-center font-medium text-xs tracking-wider uppercase py-2.5 rounded hover:bg-stone-50 transition-colors"
                        >
                          WhatsApp to Order
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'fillets' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold tracking-wide text-stone-900 uppercase">Our Goods</h1>
              <p className="text-stone-500 text-sm mt-2 max-w-xl mx-auto">
                Freshly prepared selections sourced and managed directly at Nakuru Top Market, Stall 12.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {allGoods.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded text-center flex flex-col justify-between shadow-sm">
                  <div className="mb-4">
                    <h2 className="text-base font-bold text-stone-900">{item.name}</h2>
                    <p className="text-stone-600 font-medium text-xs mt-1 uppercase tracking-wider">{item.price}</p>
                  </div>
                  <a
                    href="https://wa.me/254714052641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-white border border-stone-300 text-stone-700 py-2 rounded font-medium text-xs tracking-wider uppercase hover:bg-stone-50 transition-colors"
                  >
                    WhatsApp to Order
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'order' && (
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
                <blockquote className="bg-stone-50 border-l-4 border-stone-900 p-4 text-stone-600 text-sm italic font-mono rounded-r">
                  “Hi, I want 5 kg Nile Perch fillets, 3 kg tilapia fillets, 2 bottles of cod liver oil, pickup on Friday at Nakuru Top Market, Stall 12.”
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-8 uppercase">About Us</h1>
            <div className="bg-white border border-stone-200 p-8 rounded shadow-sm space-y-6 text-stone-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
              <p>
                For over 20 years, our family has been selling fresh fish at <span className="font-semibold text-stone-900">Nakuru Top Market, Stall 12</span>. 
                Two decades of presence means we don't just supply fish; we uphold a foundational standard of freshness and community trust that has defined our market space for a generation.
              </p>
              <p>
                <span className="font-semibold text-stone-900">Lorine now runs and manages the business</span>, ensuring that the exact same dedication to quality, structural hygiene, and premium selection is delivered with every single client interaction.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'location' && (
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
        )}
      </main>
    </div>
  );
}
