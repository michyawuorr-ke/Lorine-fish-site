import { useState } from 'react';
import { Menu, X, Fish, MapPin, Clock, Compass, ArrowRight, Truck, ShieldCheck, Layers } from 'lucide-react';

type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'fillets', label: 'Our Selection' },
    { id: 'order', label: 'Logistics & Ordering' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const simpleCatalog = [
    {
      title: "Fish Fillets",
      items: [
        { name: "Nile Perch fillets", price: "KSh 1,200 per kg", distribution: "Available Countrywide" },
        { name: "Tilapia fillets", price: "KSh 1,600 per kg", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Fresh Whole Fish",
      items: [
        { name: "Fresh whole Nile Perch", price: "KSh 650 per kg", distribution: "Available Countrywide" },
        { name: "Fresh whole Tilapia", price: "KSh 600 per kg", distribution: "Available Countrywide" },
        { name: "Fresh whole catfish", price: "KSh 400 per kg", distribution: "Regional Transit" },
        { name: "Fresh whole mad fish", price: "KSh 400 per kg", distribution: "Regional Transit" }
      ]
    },
    {
      title: "Cod Liver Oil",
      items: [
        { name: "Cod liver oil – 500 ml", price: "KSh 600 per bottle", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Fried Fish",
      items: [
        { name: "Fried tilapia", price: "price varies by size", distribution: "Available Countrywide" },
        { name: "Fried Nile Perch", price: "price varies by size", distribution: "Available Countrywide" }
      ]
    },
    {
      title: "Dried Fish",
      items: [
        { name: "Varieties of dried fish", price: "Price varies by fish type", distribution: "Available Countrywide" }
      ]
    }
  ];

  const premiumGoods = [
    {
      name: "Prime Nile Perch Fillet",
      price: "1,200",
      unit: "per kg",
      sub: "Boneless daily catch • Countrywide Shipping",
      desc: "Thick-skinned white fillet precisely cut for structural integrity. Packed in temperature-regulated cold-boxes for absolute freshness anywhere in Kenya."
    },
    {
      name: "Premium Tilapia Fillet",
      price: "1,600",
      unit: "per kg",
      sub: "Hand-carved morning harvest • Countrywide Shipping",
      desc: "Delicate, clean-tasting lean cuts meticulously dressed. Sealed and preserved perfectly to endure long-distance transit securely."
    },
    {
      name: "Fresh Whole Nile Perch",
      price: "650",
      unit: "per kg",
      sub: "Signature Lakeside Selection • Countrywide Shipping",
      desc: "Glistened, ice-chilled daily arrival straight from the source. Dispatched via countrywide cold freight routes for immediate arrival."
    },
    {
      name: "Fresh Whole Tilapia",
      price: "600",
      unit: "per kg",
      sub: "Impeccably graded lake stock • Countrywide Shipping",
      desc: "Bright-eyed, clear-scaled selection handled with ultimate care. Shipped completely packed in ice matrices directly to your destination."
    },
    {
      name: "Master-Fried Tilapia & Perch",
      price: "Varies",
      unit: "by size",
      sub: "Flash-fried crust layer • Countrywide Shipping",
      desc: "Golden-etched, perfectly timed flash frying sealing in absolute moisture. Specially enclosed in high-grade food containers for seamless cross-county delivery."
    },
    {
      name: "Varieties of Dried Fish",
      price: "Varies",
      unit: "by type",
      sub: "Sun-cured traditional batches • Countrywide Shipping",
      desc: "Expertly dehydrated profiles crafted for intense savory depth. Shipped effortlessly across any distance with zero degradation risk."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* BRAND HEADER BAR */}
      <nav className="fixed w-full bg-stone-900 text-stone-100 border-b border-stone-800 z-50 shadow-xl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="p-2 bg-stone-800 rounded border border-stone-700">
                <Fish className="h-5 w-5 text-stone-200 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] uppercase text-sm text-stone-100 font-bold">Lorine's Fish</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">Premium Provisioning</span>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                    currentPage === item.id 
                      ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-stone-300' 
                      : 'text-stone-400 hover:text-stone-200'
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
          <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-6 py-4 space-y-3 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 text-[11px] tracking-[0.2em] uppercase ${
                  currentPage === item.id ? 'text-white font-bold' : 'text-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow pt-24">
        
        {/* TEXTURED EDITORIAL HOME PAGE */}
        {currentPage === 'home' && (
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
            
            {/* HERO ARCHITECTURE */}
            <section className="text-center space-y-6 max-w-3xl mx-auto bg-white border border-stone-200 p-8 md:p-16 rounded shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-900"></div>
              
              {/* STALL 12 RE-POSITIONED AS PROMINENT LUXURY BADGE */}
              <div className="inline-flex items-center space-x-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-950 animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-800">
                  Nakuru Top Market • Stall 12
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-stone-950 leading-[1.2]">
                Sovereign Seafood Provisioning <br className="hidden md:inline"/>— Now Countrywide
              </h1>
              <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
                Supplying impeccably graded Nile Perch, hand-carved Tilapia lots, and premium wellness oils to residential estates, executive hospitality groups, and regional institutions across Kenya.
              </p>

              {/* LOGISTICS INSIGNIA */}
              <div className="bg-stone-50 border border-dashed border-stone-300 rounded p-4 max-w-lg mx-auto flex items-center justify-between text-left">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-stone-800 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider block text-stone-950">Countrywide Distribution Vector</span>
                    <span className="text-xs text-stone-500 font-light">Fresh, Whole, or Master-Fried fish delivered to your destination.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto pt-4">
                <a
                  href="https://wa.me/254714052641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-stone-950 text-white font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded shadow-md hover:bg-stone-800 transition-all duration-300 text-center"
                >
                  Procurement Via WhatsApp
                </a>
                <button
                  onClick={() => setCurrentPage('fillets')}
                  className="w-full bg-stone-50 border border-stone-300 text-stone-900 font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded hover:bg-stone-100 transition-all duration-300 text-center"
                >
                  View Premium Portfolio
                </button>
              </div>
            </section>

            {/* NATIONWIDE BULK LOGISTICS PANEL */}
            <section className="grid md:grid-cols-3 gap-6 border-y border-stone-200 py-12">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-stone-950">
                  <Truck className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Countrywide Infrastructure</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Our fresh catches, custom fillets, and signature fried selections are packed securely in insulated cold boxes and dispatched to transit hubs daily for countrywide coverage.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-stone-950">
                  <ShieldCheck className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Free Institutional Delivery</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Bulk procurement contracts for universities, hotels, and corporate kitchens receive completely free destination shipping directly into their receiving lanes.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-stone-950">
                  <Layers className="h-4 w-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Stall 12 Verification</h3>
                </div>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Every outbound shipment is graded, cross-checked, and approved on the Nakuru Top Market floor by Lorine before sealing to ensure strict legacy metrics are met.
                </p>
              </div>
            </section>

            {/* EDITORIAL STORY HIGHLIGHT */}
            <section className="grid md:grid-cols-12 gap-8 items-center pt-4">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-stone-400 block">Lineage of Custody</span>
                <h2 className="text-2xl font-serif tracking-tight text-stone-950">The Matriarchal Standard</h2>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Established by <span className="font-semibold text-stone-950">Rose Achieng Oyugi</span> (popularly revered as Mama Otieno), Stall 12 was built on deep community leadership and strict inventory metrics. Today, Lorine maintains complete structural custody over the operation, expanding our distribution pipelines directly to doorsteps across Kenya.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.15em] uppercase text-stone-950 hover:opacity-60 transition-all border-b border-stone-950 pb-1"
                  >
                    <span>Explore Our History</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-5 bg-stone-900 text-stone-100 p-8 rounded shadow-lg space-y-6 border border-stone-800">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Institutional Supply Scope</h4>
                  <p className="text-xs font-serif italic text-stone-300 mt-1">Sustaining wholesale logistics for premium pillars:</p>
                </div>
                <div className="space-y-4 border-t border-stone-800 pt-4">
                  <div>
                    <span className="text-sm font-medium text-stone-100 block">Kabarak University</span>
                    <span className="text-[9px] text-stone-400 uppercase tracking-wider block mt-0.5">Wholesale Delivery Vector • Free Transit</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-stone-100 block">Egerton University</span>
                    <span className="text-[9px] text-stone-400 uppercase tracking-wider block mt-0.5">Bulk Dietary Supply • Free Transit</span>
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
              <p className="text-stone-500 text-xs tracking-wider mt-2 uppercase">Complete Wholesale Reference & Countrywide Logistics Guide</p>
            </div>
            <div className="space-y-12">
              {simpleCatalog.map((section, sIdx) => (
                <div key={sIdx} className="border-t border-stone-200 pt-8">
                  <h2 className="text-xs font-bold text-stone-400 tracking-widest mb-6 uppercase">{section.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((product, pIdx) => (
                      <div key={pIdx} className="bg-white border border-stone-200 p-6 rounded flex flex-col justify-between shadow-sm hover:border-stone-400 transition-colors">
                        <div className="mb-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif font-bold text-stone-950 text-base">{product.name}</h3>
                            <span className="text-[8px] bg-stone-100 border border-stone-200 text-stone-600 font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                              {product.distribution}
                            </span>
                          </div>
                          <p className="text-stone-700 text-sm font-medium mt-1">{product.price}</p>
                        </div>
                        <a
                          href="https://wa.me/254714052641"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-block bg-stone-900 text-white text-center font-medium text-[10px] tracking-wider uppercase py-3 rounded hover:bg-stone-800 transition-colors"
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

        {/* 2. PREMIUM SELECTION - CALIBRATED PRICES */}
        {currentPage === 'fillets' && (
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-2">Stall 12 Portfolio</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Our Selection</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {premiumGoods.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded shadow-sm flex items-start space-x-6 hover:shadow-md transition-shadow">
                  <div className="text-left min-w-[100px] border-r border-stone-100 pr-4 flex-shrink-0">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">{item.unit}</span>
                    <span className="text-xl font-serif font-bold text-stone-950 tracking-tight block mt-1">
                      {item.price !== "Varies" ? `KSh ${item.price}` : item.price}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full min-h-[140px]">
                    <div>
                      <h2 className="text-sm font-bold text-stone-950 tracking-wide uppercase">{item.name}</h2>
                      <span className="text-[11px] text-amber-800 font-medium block mt-0.5">{item.sub}</span>
                      <p className="text-stone-600 text-xs leading-relaxed mt-2.5 font-light">{item.desc}</p>
                    </div>
                    <a
                      href="https://wa.me/254714052641"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-center bg-stone-950 text-white py-2.5 rounded font-medium text-[10px] tracking-widest uppercase hover:bg-stone-800 transition-colors w-full"
                    >
                      Secure Batch via WhatsApp
                    </a>
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
            
            {/* BULK FREIGHT PROMINENT BANNER */}
            <div className="bg-stone-950 text-stone-100 p-8 rounded shadow-md text-center space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-stone-400"></div>
              <span className="text-[9px] tracking-[0.3em] font-bold text-stone-400 uppercase block">Wholesale Incentive Architecture</span>
              <h2 className="text-xl font-serif tracking-wide uppercase text-white">Free Bulk Freight Destination Delivery</h2>
              <p className="text-stone-300 text-xs font-light max-w-lg mx-auto leading-relaxed">
                All high-volume procurement assignments designated for educational institutions, corporate caterers, and hospitality properties anywhere in Kenya are completely exempt from transport fees.
              </p>
            </div>

            <div className="space-y-6 bg-white border border-stone-200 p-8 rounded shadow-sm">
              <p className="text-stone-800 text-sm md:text-base leading-relaxed text-center font-light">
                We manage daily localized marketplace pickups alongside high-velocity nationwide freight configurations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 border-t border-stone-100 pt-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">1. Localized Collection</h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    Pick up your custom residential cuts directly from the counter spaces at Nakuru Top Market, Stall 12.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">2. Countrywide Logistics</h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    Fresh whole fish, fillets, and fried allocations are loaded into structured cold containers and dispatched via specialized long-distance routes across Kenya.
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h2 className="text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-2">Direct Communications</h2>
                <ul className="space-y-2 text-stone-900 text-sm">
                  <li>• <span className="font-semibold">WhatsApp Workspace Hub:</span> 0714 052 641</li>
                  <li>• <span className="font-semibold">Direct Voice Line:</span> 0714 052 641</li>
                </ul>
              </div>
              <div className="border-t border-stone-100 pt-6">
                <h2 className="text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-2">Standard Countrywide Procurement Blueprint</h2>
                <blockquote className="bg-stone-50 border-l-4 border-stone-900 p-4 text-stone-700 text-sm italic font-mono rounded-r">
                  “Hi Lorine, I would like to request bulk delivery of 40 kg fresh whole Tilapia and 20 kg Nile Perch fillets shipped to our hospitality layout outside Nakuru. Please apply the bulk free delivery framework.”
                </blockquote>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400 block mb-2">The Chronicle of Stall 12</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Our History</h1>
            </div>
            
            <div className="bg-white border border-stone-200 p-8 md:p-12 rounded shadow-sm space-y-8 text-stone-800 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              <div>
                <h3 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-3 border-b border-stone-100 pb-2">The Matriarch & Leader: Rose Achieng Oyugi</h3>
                <p className="mb-4">
                  Long before modern refrigeration redefined the regional seafood supply chain, our family legacy began on sheer perseverance and profound local leadership. Our mother, <span className="font-serif font-bold text-stone-950 text-base block my-1">Rose Achieng Oyugi</span> widely and affectionately recognized across Nakuru as <span className="font-semibold text-stone-950">Mama Otieno</span>, initiated this venture with humility, preparing and selling food to the market community.
                </p>
                <p>
                  Mama Otieno was far more than an ambitious trader; she emerged as an essential pillar of Nakuru Top Market—a natural matriarch trusted implicitly to mediate marketplace complexities and resolve conflicts across the trading floor. Her voice brought structural balance to the market community. Upon securing a permanent stall, she focused her vision on whole fresh fish, launching exclusively with choice Tilapia. In those formative years, shipments landed directly at our family home in London Estate inside large, traditional insulated brown transit containers.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-3 border-b border-stone-100 pb-2">The Family Operations</h3>
                <p className="mb-4">
                  Sourcing the finest harvest required relentless execution. Mama Otieno ventured directly to the lakeside to hand-select each catch, frequently accompanied by our father on intensive logistics runs known within the household simply as <span className="italic font-serif">“operations.”</span>
                </p>
                <p>
                  Processing the daily arrival was a collective neighborhood milestone. Together with our childhood neighbors, we gathered to meticulously scale the fish, earning exactly one shilling per fish. It was within this environment that Lorine, along with all her siblings, absorbed the precise discipline of the fish trade—spending afternoons after school and entire holidays sitting at Stall 12, learning how to grade quality by sight and feel.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-3 border-b border-stone-100 pb-2">The Seamless Transition</h3>
                <p className="mb-4">
                  When our mother fell ill during the critical Covid-19 period, Lorine did not hesitate. She stepped forward immediately to take complete command, preserving the supply lines when local infrastructure was under its greatest stress. Following Mama Otieno's passing in late 2022, Lorine assumed full administrative and operational control. 
                </p>
                <p>
                  Because the market community, premium hoteliers, and bulk institutions had worked alongside her for years, the operational transition was completely seamless. Today, Stall 12 has expanded its portfolio significantly beyond those early Tilapia runs, serving as an elite wholesale supplier to prominent educational universities like <span className="font-semibold text-stone-950">Kabarak University</span> and <span className="font-semibold text-stone-950">Egerton University</span>, alongside top-tier hospitality destinations throughout Nakuru and expanded logistic networks nationwide.
                </p>
                <p className="font-serif italic text-stone-500 mt-4 border-t border-stone-100 pt-4">
                  Generations have changed, but the core mandate established by Rose Achieng Oyugi remains unalterable: world-class handling, meticulous hygiene, and total product transparency.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* HIGH-END DIRECTION WINDOW */}
        {currentPage === 'location' && (
          <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block">Trading Floor Directory</span>
              <h1 className="text-3xl font-serif tracking-wide text-stone-950 uppercase">Location & Access</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              
              <div className="bg-white border border-stone-200 p-8 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-500 border-b border-stone-100 pb-4">
                    <MapPin className="h-4 w-4 stroke-[1.5]" />
                    <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-950">Physical Destination</h2>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Stall Assignment</span>
                    <p className="text-stone-950 font-serif font-bold text-lg leading-snug">
                      Nakuru Top Market, Stall 12<br />
                      Nakuru, Kenya
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold text-stone-400 block uppercase tracking-wider">Calibrated Navigation Bounds</span>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      Coordinates are strictly locked to bypass generic supermarket intersections, pointing directly to the interior marketplace trading lanes.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=-0.2885,36.0715"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-stone-950 text-white font-medium text-[10px] tracking-[0.15em] uppercase py-4 rounded hover:bg-stone-800 transition-colors shadow"
                  >
                    <Compass className="h-3 w-3 stroke-[2]" />
                    <span>Initialize Map Routing</span>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-8 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-500 border-b border-stone-100 pb-4">
                    <Clock className="h-4 w-4 stroke-[1.5]" />
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
    </div>
  );
}
