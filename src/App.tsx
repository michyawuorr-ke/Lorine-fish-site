import { useState } from 'react';
import { Menu, X, MapPin, Clock, Compass, ArrowRight, Truck, ShieldCheck, Layers, Sparkles, Image as ImageIcon } from 'lucide-react';

type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'fillets', label: 'Our Selection' },
    { id: 'order', label: 'Logistics & Ordering' },
    { id: 'about', label: 'Our Story' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const simpleCatalog = [
    {
      title: "Fish Fillets",
      items: [
        { name: "Nile Perch Fillets", price: "KSh 1,300 per kg", distribution: "Available Countrywide" },
        { name: "Tilapia Fillets", price: "KSh 1,700 per kg", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Fresh Whole Fish",
      items: [
        { name: "Fresh Whole Nile Perch", price: "KSh 750 per kg", distribution: "Available Countrywide" },
        { name: "Fresh Whole Tilapia", price: "KSh 700 per kg", distribution: "Available Countrywide" },
        { name: "Fresh Whole Catfish", price: "KSh 500 per kg", distribution: "Regional Transit" },
        { name: "Fresh Whole Mad Fish", price: "KSh 500 per kg", distribution: "Regional Transit" }
      ]
    },
    {
      title: "Cod Liver Oil",
      items: [
        { name: "Cod Liver Oil – 500 ml", price: "KSh 700 per bottle", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Fried Fish",
      items: [
        { name: "Crispy Fried Tilapia", price: "Price varies by size", distribution: "Available Countrywide" },
        { name: "Golden Fried Nile Perch", price: "Price varies by size", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Dried Fish",
      items: [
        { name: "Sun-Cured Traditional Varieties", price: "Price varies by fish type", distribution: "Available Countrywide" }
      ]
    }
  ];

  const premiumGoods = [
    {
      name: "Prime Nile Perch Fillet",
      image: "", 
      price: "1,300",
      unit: "per kg",
      sub: "Succulent White Flakes • Countrywide Shipping",
      desc: "Thick-cut, bone-free pristine white fillets handled with absolute care. Beautifully structured, sweet-tasting flesh perfect for baking, pan-searing, or coconut stews."
    },
    {
      name: "Premium Tilapia Fillet",
      image: "", 
      price: "1,700",
      unit: "per kg",
      sub: "Hand-Carved Delicate Cuts • Countrywide Shipping",
      desc: "Meticulously dressed morning harvest from the lake. Incredibly clean, lean, and tender flavor profile that cooks to absolute melt-in-your-mouth perfection."
    },
    {
      name: "Fresh Whole Nile Perch",
      image: "", 
      price: "750",
      unit: "per kg",
      sub: "Glistening Lakeside Catch • Countrywide Shipping",
      desc: "Bright-eyed and silver-scaled daily arrivals straight from the source. Hand-selected for premium density and incredible rich depth of flavor."
    },
    {
      name: "Fresh Whole Tilapia",
      image: "", 
      price: "700",
      unit: "per kg",
      sub: "Impeccably Graded Lake Stock • Countrywide Shipping",
      desc: "The true champion of the Kenyan table. Plump, vibrantly fresh, and handled flawlessly from the water straight into our custom chilled transit boxes."
    },
    {
      name: "Master-Fried Tilapia & Perch",
      image: "", 
      price: "Varies",
      unit: "by size",
      sub: "Crispy Golden Crust • Sizzling Fresh Daily",
      desc: "Seasoned dynamically and flash-fried to create a beautiful deep golden, savory-spiced exterior while trapping all the delicate, steaming moisture inside."
    },
    {
      name: "Varieties of Dried Fish",
      image: "", 
      price: "Varies",
      unit: "by type",
      sub: "Traditional Sun-Cured Depth • Robust Savory Umami",
      desc: "Dehydrated to deep flavor perfection using traditional methods. Brings an irreplaceable, rich, complex depth to traditional greens and regional stews."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-900 selection:text-white">
      
      {/* ELEVATED TYPOGRAPHIC BRAND HEADER BAR */}
      <nav className="fixed w-full bg-stone-950 text-stone-100 border-b border-amber-950/20 z-50 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-28 items-center">
            
            {/* LUXURY TYPOGRAPHIC INSIGNIA */}
            <div className="flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <div className="flex flex-col border-l-2 border-amber-500/40 pl-4 py-1">
                <span className="font-serif tracking-[0.24em] uppercase text-sm font-bold text-stone-100 group-hover:text-amber-200 transition-colors duration-300">
                  Lorine's
                </span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-stone-300 font-light mt-0.5">
                  Fresh Fish & Seafood
                </span>
                <span className="text-[8px] tracking-[0.35em] uppercase text-amber-400 font-medium mt-1">
                </span>
              </div>
            </div>

            {/* MINIMALIST NAV NAVIGATION */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-[11px] tracking-[0.22em] uppercase transition-all duration-300 relative py-1 ${
                    currentPage === item.id 
                      ? 'text-amber-300 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-amber-400' 
                      : 'text-stone-400 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-stone-100 focus:outline-none p-1">
                {isOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-stone-950 border-b border-amber-950/40 px-6 py-4 space-y-3 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 text-[11px] tracking-[0.2em] uppercase ${
                  currentPage === item.id ? 'text-amber-300 font-bold' : 'text-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow pt-28">
        
        {/* TEXTURED EDITORIAL HOME PAGE */}
        {currentPage === 'home' && (
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
            
            {/* HERO ARCHITECTURE */}
            <section className="text-center space-y-6 max-w-3xl mx-auto bg-white border border-amber-900/10 p-8 md:p-16 rounded shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-700 via-amber-900 to-stone-950"></div>
              
              <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full mb-2">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-900">
                  Nakuru Top Market • Stall 12
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-stone-950 leading-[1.2]">
                Lorine’s Fresh Fish Supply & Delivery <br className="hidden md:inline"/>— Premium Nakuru Seafood Provisioning
              </h1>
              <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
                Supplying spectacularly fresh Nile Perch, pristine hand-carved Tilapia cuts, and golden flash-fried culinary landmarks to estates, elite kitchens, and universities across Kenya.
              </p>

              {/* LOGISTICS INSIGNIA */}
              <div className="bg-amber-50/40 border border-dashed border-amber-900/20 rounded p-4 max-w-lg mx-auto flex items-center justify-between text-left">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-amber-900 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block text-stone-950">Countrywide Fresh-Lock Vector</span>
                    <span className="text-xs text-stone-500 font-light">Packed in premium ice-matrices or insulated layouts to preserve natural flavors.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto pt-4">
                <a
                  href="https://wa.me/254714052641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-stone-900 to-stone-950 text-white font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded shadow-md hover:from-amber-950 hover:to-stone-900 transition-all duration-300 text-center"
                >
                  Order via WhatsApp
                </a>
                <button
                  onClick={() => setCurrentPage('fillets')}
                  className="w-full bg-white border border-stone-300 text-stone-900 font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded hover:bg-stone-50 transition-all duration-300 text-center"
                >
                  View Flavor Portfolio
                </button>
              </div>
            </section>

            {/* NATIONWIDE BULK LOGISTICS PANEL */}
            <section className="grid md:grid-cols-3 gap-6 border-y border-amber-900/10 py-12">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-amber-900">
                  <Truck className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-stone-950">Daily Fleet Transit</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Our raw selections and customized, perfectly sealed fried fish travel daily via insulated long-distance loops for premium texture preservation.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-amber-900">
                  <ShieldCheck className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-stone-950">Institutional Supply</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Bulk shipments for campuses, dining halls, and premium caterers enjoy completely free transit directly to receiving docks.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-amber-900">
                  <Layers className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-stone-950">The Stall 12 Promise</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Every batch is inspected on the market floor by Lorine to enforce historical standards of hygiene, size calibration, and mouth-watering quality.
                </p>
              </div>
            </section>

            {/* EDITORIAL STORY HIGHLIGHT */}
            <section className="grid md:grid-cols-12 gap-8 items-center pt-4">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-amber-700 block">Lineage of Flavor & Leadership</span>
                <h2 className="text-2xl font-serif tracking-tight text-stone-950">The Matriarchal Standard</h2>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Founded by <span className="font-semibold text-stone-950">Rose Achieng Oyugi</span> (Mama Otieno), Stall 12 grew from a love for exceptional local food into a regional icon. Lorine carries forward that standard today, maintaining absolute control over freshness and texture while extending our logistical reach across the republic.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.15em] uppercase text-stone-950 hover:text-amber-800 transition-all border-b border-stone-950 pb-1"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-5 space-y-6">
                {/* ZONE A: EDITORIAL HERITAGE MINI-BANNER */}
                <div className="w-full h-48 bg-stone-900/5 rounded border border-stone-200 flex flex-col items-center justify-center p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-stone-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-3 bg-white rounded shadow-sm border border-stone-100 mb-2 text-stone-400 group-hover:text-amber-800 transition-colors duration-500">
                    <ImageIcon className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-950">Heritage Portrait Slot</span>
                  <p className="text-[11px] text-stone-500 max-w-[180px] font-light mt-1">Recommended: Lorine at the Stall or Traditional Fish Creels (Osera)</p>
                </div>

                <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-100 p-6 rounded shadow-lg space-y-4 border border-stone-800">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">Institutional Supply Scope</h4>
                  </div>
                  <div className="space-y-3 border-t border-stone-800 pt-3">
                    <div>
                      <span className="text-xs font-medium text-stone-100 block">Kabarak University</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-stone-100 block">Egerton University</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 1. PRODUCT CATALOG VIEW */}
        {currentPage === 'products' && (
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Product Catalog</h1>
              <p className="text-amber-800 text-xs tracking-wider mt-2 uppercase font-medium">Fresh Catch Reference & Countrywide Logistics Matrix</p>
            </div>
            <div className="space-y-12">
              {simpleCatalog.map((section, sIdx) => (
                <div key={sIdx} className="border-t border-amber-900/10 pt-8">
                  <h2 className="text-xs font-bold text-amber-800 tracking-widest mb-6 uppercase">{section.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((product, pIdx) => (
                      <div key={pIdx} className="bg-white border border-stone-200 p-6 rounded flex flex-col justify-between shadow-sm hover:border-amber-900/30 transition-colors">
                        <div className="mb-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif font-bold text-stone-950 text-base">{product.name}</h3>
                            <span className="text-[8px] bg-amber-50 border border-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                              {product.distribution}
                            </span>
                          </div>
                          <p className="text-amber-900 text-sm font-semibold mt-1">{product.price}</p>
                        </div>
                        <a
                          href="https://wa.me/254714052641"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-block bg-stone-900 hover:bg-amber-950 text-white text-center font-medium text-[10px] tracking-wider uppercase py-3 rounded transition-colors"
                        >
                          Order via WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. PREMIUM SELECTION */}
        {currentPage === 'fillets' && (
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 block mb-2">Stall 12 Portfolio</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Our Culinary Selection</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {premiumGoods.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                  
                  {/* ZONE B: PREMIUM PRODUCT CARD IMAGE CONTAINER */}
                  <div className="w-full h-56 bg-stone-100 border border-stone-200/60 rounded mb-4 overflow-hidden flex flex-col items-center justify-center p-4 text-center relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                    ) : (
                      <>
                        <div className="p-3 bg-white rounded-full border border-stone-200 text-stone-400 group-hover:text-amber-900 transition-colors duration-300 shadow-sm mb-2">
                          <ImageIcon className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-[10px] font-bold text-stone-950 uppercase tracking-widest">Product Image Frame</span>
                        <span className="text-[9px] text-stone-400 mt-0.5 max-w-[200px] font-light leading-tight">Recommended: Top-down macro of raw fillet or whole lake-fresh batch on clean ice</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-start space-x-6 px-2 pt-2">
                    <div className="text-left min-w-[90px] border-r border-stone-100 pr-4 flex-shrink-0">
                      <span className="text-[9px] font-bold text-stone-400 block uppercase tracking-wider">{item.unit}</span>
                      <span className="text-lg font-serif font-bold text-amber-900 tracking-tight block mt-0.5">
                        {item.price !== "Varies" ? `KSh ${item.price}` : item.price}
                      </span>
                    </div>
                    <div className="flex-grow flex flex-col justify-between h-full min-h-[120px]">
                      <div>
                        <h2 className="text-xs font-bold text-stone-950 tracking-wide uppercase">{item.name}</h2>
                        <span className="text-[10px] text-amber-700 font-medium block mt-0.5">{item.sub}</span>
                        <p className="text-stone-600 text-xs leading-relaxed mt-2 font-light">{item.desc}</p>
                      </div>
                      <a
                        href="https://wa.me/254714052641"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-center bg-gradient-to-r from-stone-900 to-stone-950 text-white py-2.5 rounded font-medium text-[10px] tracking-widest uppercase hover:from-amber-950 hover:to-stone-900 transition-colors w-full"
                      >
                        Secure Batch via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ORDERING & LOGISTICS BLUEPRINT */}
        {currentPage === 'order' && (
          <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
            <h1 className="text-3xl font-serif tracking-wide text-center text-stone-950 uppercase">Logistics & Ordering</h1>
            
            <div className="bg-stone-950 text-stone-100 p-8 rounded shadow-md text-center space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
              <span className="text-[9px] tracking-[0.3em] font-bold text-amber-400 uppercase block">Wholesale Incentive System</span>
              <h2 className="text-xl font-serif tracking-wide uppercase text-white">Subsidized Bulk Freight Logistics</h2>
            {/* Local Delivery Parameters */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-5 bg-white border border-stone-200 rounded shadow-sm">
                <span className="text-[10px] font-[600] uppercase tracking-wider text-amber-800 block mb-1">Town Orders</span>
                <h3 className="text-sm font-semibold text-stone-950 mb-1">Within Nakuru Town Limits</h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  All daily fresh orders dispatched within the town center enjoy <span className="text-stone-950 font-medium">completely free delivery</span>.
                </p>
              </div>
              <div className="p-5 bg-white border border-stone-200 rounded shadow-sm">
                <span className="text-[10px] font-[600] uppercase tracking-wider text-amber-800 block mb-1">Estate Delivery</span>
                <h3 className="text-sm font-semibold text-stone-950 mb-1">Home & Private Residences</h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Direct doorstep delivery to your private estate or residential home is fulfilled swiftly for a calculated, nominal fair-price fee.
                </p>
              </div>
            </div>
              <p className="text-stone-300 text-xs font-light max-w-lg mx-auto leading-relaxed">
                High-volume catering assignments for educational institutions, corporate workspaces, and premier hotels cross-country enjoy highly subsidized, fair-rate shipping—ensuring premium logistics at a drastically reduced cost.
              </p>
            </div>

            <div className="space-y-6 bg-white border border-stone-200 p-8 rounded shadow-sm">
              <p className="text-stone-800 text-sm md:text-base leading-relaxed text-center font-light">
                We balance swift localized market floor handovers with high-velocity nationwide cold-chain freight vectors.
              </p>

              <div className="grid md:grid-cols-2 gap-6 border-t border-stone-100 pt-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">1. Stall Pickup</h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    Collect your premium cuts or fresh, sizzling fried fish directly from the main counter lane at Nakuru Top Market, Stall 12.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">2. Countrywide Shipping</h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    Whole lot orders and delicate fillets are transferred into sealed, ice-packed units and shipped to regional centers across Kenya with original flavors preserved.
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h2 className="text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-2">Direct Hub Communications</h2>
                <ul className="space-y-2 text-stone-900 text-sm">
                  <li>• <span className="font-semibold text-amber-950">WhatsApp Workspace Hub:</span> 0714 052 641</li>
                  <li>• <span className="font-semibold text-amber-950">Direct Voice Line:</span> 0714 052 641</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* HISTORICAL NARRATIVE */}
        {currentPage === 'about' && (
          <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-700 block mb-2">The Chronicle of Stall 12</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Our Story</h1>
            </div>
            
            <div className="bg-white border border-stone-200 p-8 md:p-12 rounded shadow-sm space-y-8 text-stone-800 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              <div>
                <h3 className="text-[10px] font-bold tracking-widest text-amber-800 uppercase mb-3 border-b border-stone-100 pb-2">The Matriarch & Leader: Rose Achieng Oyugi</h3>
                <p className="mb-4">
                  Our family legacy began on sheer perseverance and profound local leadership. Our mother, <span className="font-serif font-bold text-stone-950 text-base block my-1">Rose Achieng Oyugi</span>—widely recognized across Nakuru as <span className="font-semibold text-stone-950">Mama Otieno</span>—initiated this venture with humility, preparing and selling beautiful food to the market community.
                </p>
                <p>
                  Mama Otieno emerged as an essential pillar of Nakuru Top Market—a natural matriarch trusted implicitly to mediate marketplace complexities and resolve conflicts across the trading floor. Upon securing a permanent stall, she focused her vision on whole fresh fish, launching exclusively with choice Tilapia. In those formative years, shipments landed directly at our family home in London Estate inside beautiful, traditional fish creels (Osera).
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-[10px] font-bold tracking-widest text-amber-800 uppercase mb-3 border-b border-stone-100 pb-2">The Family Operations</h3>
                <p className="mb-4">
                  Sourcing the finest harvest required relentless execution. Mama Otieno ventured directly to the lakeside to hand-select each catch, frequently accompanied by our father on intensive logistics runs known within the household simply as <span className="italic font-serif">“operations.”</span>
                </p>
                <p>
                  Processing the daily arrival was a collective neighborhood milestone. It was within this environment that Lorine, along with all her siblings, absorbed the precise discipline of the fish trade—spending afternoons after school and entire holidays sitting at Stall 12, learning how to grade quality by sight, touch, and scent.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-[10px] font-bold tracking-widest text-amber-800 uppercase mb-3 border-b border-stone-100 pb-2">The Seamless Transition</h3>
                <p className="mb-4">
                  When our mother fell ill during the critical Covid-19 period, Lorine did not hesitate. She stepped forward immediately to take complete command, preserving the supply lines when local infrastructure was under its greatest stress. Following Mama Otieno's passing in late 2022, Lorine assumed full administrative and operational control. 
                </p>
                <p>
                  Because the market community, premium hoteliers, and bulk institutions had worked alongside her for years, the operational transition was completely seamless. Today, Stall 12 has expanded its portfolio significantly beyond those early Tilapia runs, serving as an elite wholesale supplier to prominent educational universities like <span className="font-semibold text-stone-950">Kabarak University</span> and <span className="font-semibold text-stone-950">Egerton University</span>, alongside top-tier hospitality destinations throughout Nakuru and expanded logistic networks nationwide.
                </p>
                <p className="font-serif italic text-amber-800 mt-4 border-t border-stone-100 pt-4">
                  Generations have changed, but the core mandate established by Rose Achieng Oyugi remains unalterable: world-class handling, meticulous hygiene, and total product transparency.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* GEOGRAPHIC LANDMARK WINDOW */}
        {currentPage === 'location' && (
          <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 block">Trading Floor Directory</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Location & Access</h1>
            </div>

            {/* ZONE C: LANDMARK HEADER BANNER FOR LOCATION */}
            <div className="max-w-4xl mx-auto w-full h-48 bg-stone-900/5 border border-stone-200 rounded flex flex-col items-center justify-center p-6 text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-stone-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-3 bg-white rounded shadow-sm border border-stone-100 mb-2 text-stone-400 group-hover:text-amber-800 transition-colors duration-500">
                <ImageIcon className="w-5 h-5 stroke-[1.2]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-950">Market Floor Mapping Slot</span>
              <p className="text-[11px] text-stone-500 max-w-[280px] font-light mt-1">Recommended: Crisp wide lens shot of Nakuru Top Market exterior or the main entrance off Mburu Gichua Road</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              
              <div className="bg-white border border-stone-200 p-8 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-500 border-b border-stone-100 pb-4">
                    <MapPin className="h-4 w-4 stroke-[1.5] text-amber-800" />
                    <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-950">Physical Destination</h2>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Location Landmark Anchor</span>
                    <p className="text-stone-950 font-serif font-bold text-lg leading-snug">
                      Nakuru Top Market, Stall 12<br />
                      Mburu Gichua Road<br />
                      Next to Sokoni Plaza<br />
                      Nakuru, Kenya
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Calibrated Navigation Bounds</span>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      Coordinates are centered via Mburu Gichua Road immediately adjacent to Sokoni Plaza and Nakuru Top Market, bypassing generic supermarket intersections.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Nakuru+Top+Market+Mburu+Gichua+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-stone-950 text-white font-medium text-[10px] tracking-[0.15em] uppercase py-4 rounded hover:bg-amber-950 transition-colors shadow"
                  >
                    <Compass className="h-3 w-3 stroke-[2]" />
                    <span>Initialize Map Routing</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-8 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-500 border-b border-stone-100 pb-4">
                    <Clock className="h-4 w-4 stroke-[1.5] text-amber-800" />
                    <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-950">Operational Windows</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                      <span className="text-xs font-medium text-stone-950">Monday – Saturday</span>
                      <span className="text-xs font-mono text-stone-600 font-bold">09:00 AM – 08:00 PM</span>
                    </div>
                    <div className="flex justify-between items-baseline text-stone-400">
                      <span className="text-xs font-light">Sunday Curation</span>
                      <span className="text-[10px] tracking-widest uppercase font-bold">Closed</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Procurement Advisory</span>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      Fresh whole lots and specialized fillets arrive daily directly from the morning lake collection. For institutional volume fulfillment, notify administration 24 hours in advance.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="tel:0714052641"
                    className="w-full inline-flex items-center justify-center bg-stone-50 border border-stone-300 text-stone-950 font-medium text-[10px] tracking-[0.15em] uppercase py-4 rounded hover:bg-stone-100 transition-colors"
                  >
                    Verify Daily Inventory Status
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>
    
      {/* ERGONOMIC MOBILE THUMB-ZONE FLOATING WHATSAPP CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-stone-950/95 backdrop-blur-md border-t border-amber-900/20 p-4 shadow-2xl">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <span className="text-[9px] text-amber-400 font-bold uppercase tracking-widest block">Direct Dispatch</span>
            <span className="text-xs text-stone-200 font-light tracking-wide">Nakuru Town Center Free Delivery</span>
          </div>
          <a 
            href="https://wa.me/254714052641"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-5 py-3 rounded font-serif text-[10px] tracking-[0.15em] uppercase font-bold shadow-md hover:from-amber-800 transition-all duration-300"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
</div>
  );
}
