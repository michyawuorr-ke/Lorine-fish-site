import { useState } from 'react';
import { Menu, X, Fish, MapPin, Clock, Compass } from 'lucide-react';

type Page = 'home' | 'products' | 'fillets' | 'order' | 'about' | 'location';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'fillets', label: 'Our Selection' },
    { id: 'order', label: 'How to Order' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const simpleCatalog = [
    {
      title: "Fish Fillets",
      items: [
        { name: "Nile Perch fillets", price: "KSh 1,000 per kg" },
        { name: "Tilapia fillets", price: "KSh 1,600 per kg" }
      ]
    },
    {
      title: "Fresh Whole Fish",
      items: [
        { name: "Fresh whole Nile Perch", price: "KSh 500 per kg" },
        { name: "Fresh whole Tilapia", price: "KSh 450 per kg" },
        { name: "Fresh whole catfish", price: "KSh 400 per kg" },
        { name: "Fresh whole mad fish", price: "KSh 400 per kg" }
      ]
    },
    {
      title: "Cod Liver Oil",
      items: [
        { name: "Cod liver oil – 500 ml", price: "KSh 600 per bottle" }
      ]
    },
    {
      title: "Fried Fish",
      items: [
        { name: "Fried tilapia", price: "price varies by size" },
        { name: "Fried Nile Perch", price: "price varies by size" }
      ]
    },
    {
      title: "Dried Fish",
      items: [
        { name: "Varieties of dried fish", price: "sold per kg" }
      ]
    }
  ];

  const premiumGoods = [
    {
      name: "Prime Nile Perch Fillet",
      price: "1,000",
      unit: "per kg",
      sub: "Boneless daily catch, skinless",
      desc: "Thick-skinned white fillet precisely cut for structural integrity. Perfect for baking, pan-searing, or premium classic frying."
    },
    {
      name: "Premium Tilapia Fillet",
      price: "1,600",
      unit: "per kg",
      sub: "Hand-carved morning harvest",
      desc: "Delicate, clean-tasting lean cuts meticulously dressed. Perfect for light grilling, lime-infused steaming, or shallow pan frying."
    },
    {
      name: "Fresh Whole Nile Perch",
      price: "500",
      unit: "per kg",
      sub: "Stall 12 Signature Selection",
      desc: "Glistened, ice-chilled daily arrival straight from the source. Ideal for grand whole-roasting, deep scoring, and family feasts."
    },
    {
      name: "Fresh Whole Tilapia",
      price: "450",
      unit: "per kg",
      sub: "Impeccably graded lake stock",
      desc: "Bright-eyed, clear-scaled selection handled with ultimate care. Optimal for traditional wet-frying, scaling, or open-flame grilling."
    },
    {
      name: "Fresh Whole Catfish",
      price: "400",
      unit: "per kg",
      sub: "Rich texture profile catch",
      desc: "Firm, density-rich whole specimen selected for authentic depth. Phenomenal for slow-simmered stews and traditional direct-heat curation."
    },
    {
      name: "Fresh Whole Mad Fish",
      price: "400",
      unit: "per kg",
      sub: "Regional culinary specialty",
      desc: "Deeply traditional, firm-fleshed local variety prized for rich texture. Best prepared via slow authentic boiling or intensive spice braising."
    },
    {
      name: "Pure Cod Liver Oil",
      price: "600",
      unit: "500 ml",
      sub: "Cold-filtered amber tonic",
      desc: "Nutrient-dense, pristine grade oil bottled to lock in historical health benefits. An absolute cornerstone of wellness and legacy longevity."
    },
    {
      name: "Master-Fried Tilapia & Perch",
      price: "Varies",
      unit: "by size",
      sub: "Crisp outer crust baseline",
      desc: "Golden-etched, perfectly timed flash frying sealing in absolute moisture. Ready for direct gourmet dining or rich coconut sauce immersion."
    },
    {
      name: "Varieties of Dried Fish",
      price: "Custom",
      unit: "per kg",
      sub: "Sun-cured traditional batches",
      desc: "Expertly dehydrated profiles crafted for intense savory depth. Rehydrates beautifully in rich local greens, broths, and traditional reduction sauces."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* GLOBAL NAVBAR */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-stone-200/60 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Fish className="h-5 w-5 text-stone-950 stroke-[1.5]" />
              <span className="font-medium text-xs tracking-[0.25em] uppercase text-stone-950">Lorine's Fish</span>
            </div>
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-[10px] tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                    currentPage === item.id 
                      ? 'text-stone-950 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-950' 
                      : 'text-stone-400 hover:text-stone-950'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-stone-950 focus:outline-none p-1">
                {isOpen ? <X className="h-5 w-5 stroke-[1.5]" /> : <Menu className="h-5 w-5 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 shadow-sm animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 text-[10px] tracking-[0.2em] uppercase ${
                  currentPage === item.id ? 'text-stone-950 font-bold' : 'text-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* DYNAMIC CONTENT ROUTER */}
      <main className="flex-grow pt-20">
        
        {/* CLEAN EMBASSY-GRADE HOME PAGE */}
        {currentPage === 'home' && (
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-32 space-y-32">
            <section className="text-center space-y-8 max-w-3xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block">
                Est. Over 20 Years • Nakuru Top Market
              </span>
              <h1 className="text-3xl md:text-5xl font-extralight tracking-tight text-stone-950 leading-[1.15]">
                Premium Seafood Provisioning • Stall 12
              </h1>
              <div className="h-[1px] w-12 bg-stone-300 mx-auto my-6"></div>
              <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-serif italic">
                Sourcing elite Nile Perch and Tilapia lots for discerning residential clients, commercial culinary groups, and academic institutions across the region.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto pt-4">
                <a
                  href="https://wa.me/254714052641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-stone-950 text-white font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded shadow-sm hover:bg-stone-800 transition-all duration-300 text-center"
                >
                  Direct Procurement Via WhatsApp
                </a>
                <button
                  onClick={() => setCurrentPage('fillets')}
                  className="w-full bg-transparent border border-stone-200 text-stone-800 font-medium text-[10px] tracking-[0.2em] uppercase py-4 rounded hover:bg-stone-50 transition-all duration-300 text-center"
                >
                  Explore The Selection
                </button>
              </div>
            </section>

            {/* HIGH-END SIMPLIFIED INTRODUCTION HERO */}
            <section className="grid md:grid-cols-2 gap-12 items-center border-t border-stone-200/60 pt-16">
              <div className="space-y-4">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-stone-400 block">The Legacy Blueprint</span>
                <h2 className="text-xl md:text-2xl font-light tracking-tight text-stone-950 uppercase">The Matriarchal Standard</h2>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Founded by <span className="font-semibold text-stone-950">Rose Achieng Oyugi</span> (popularly known as Mama Otieno), Stall 12 was built on an unyielding discipline for premium lake curation and trusted marketplace governance. Today, Lorine maintains complete administrative custody over operations, preserving a seamless standard of elite handling and strict logistical hygiene.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-950 hover:opacity-60 transition-all border-b border-stone-950 pb-1"
                  >
                    Review Historical Chronicle
                  </button>
                </div>
              </div>
              <div className="bg-stone-100 p-8 rounded border border-stone-200/40 space-y-6">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">Institutional Supply Targets</h4>
                  <p className="text-xs font-serif italic text-stone-600">Trusted bulk procurement partner to regional pillars:</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-stone-200/60 pt-4">
                  <div>
                    <span className="text-xs font-medium text-stone-950 block">Kabarak University</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-0.5">Wholesale Logistics</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-stone-950 block">Egerton University</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-0.5">Bulk Procurement</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 1. SIMPLE CATALOG VIEW */}
        {currentPage === 'products' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-12 uppercase">Product Catalog</h1>
            <div className="space-y-12">
              {simpleCatalog.map((section, sIdx) => (
                <div key={sIdx} className="border-t border-stone-200 pt-6">
                  <h2 className="text-sm font-bold text-stone-400 tracking-widest mb-6 uppercase">{section.title}</h2>
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

        {/* 2. PREMIUM SELECTION - PRICE ON LEFT FORMAT */}
        {currentPage === 'fillets' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 block mb-2">Stall 12 Portfolio</span>
              <h1 className="text-2xl font-light tracking-wide text-stone-950 uppercase">Our Selection</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {premiumGoods.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200/80 p-6 rounded shadow-sm flex items-start space-x-6">
                  <div className="text-left min-w-[90px] border-r border-stone-100 pr-4 flex-shrink-0">
                    <span className="text-xs font-bold text-stone-400 block uppercase tracking-wider">{item.unit}</span>
                    <span className="text-xl font-bold text-stone-950 tracking-tight block mt-0.5">
                      {item.price !== "Varies" && item.price !== "Custom" ? `KSh ${item.price}` : item.price}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col justify-between h-full min-h-[140px]">
                    <div>
                      <h2 className="text-base font-bold text-stone-950 tracking-wide uppercase">{item.name}</h2>
                      <span className="text-xs font-semibold text-stone-500 italic block mt-0.5">{item.sub}</span>
                      <p className="text-stone-600 text-xs leading-relaxed mt-2.5 font-light">{item.desc}</p>
                    </div>
                    <a
                      href="https://wa.me/254714052641"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-center bg-stone-950 text-white py-2 rounded font-medium text-[10px] tracking-widest uppercase hover:bg-stone-800 transition-colors w-full"
                    >
                      Secure Batch via WhatsApp
                    </a>
                  </div>
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
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
            <div className="text-center">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400 block mb-2">The Chronicle of Stall 12</span>
              <h1 className="text-3xl font-light tracking-wide text-stone-950 uppercase">Our History</h1>
            </div>
            
            <div className="bg-white border border-stone-200 p-10 rounded shadow-sm space-y-8 text-stone-800 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">The Matriarch & Leader: Rose Achieng Oyugi</h3>
                <p className="mb-4">
                  Long before modern refrigeration redefined the regional seafood supply chain, our family legacy began on sheer perseverance and profound local leadership. Our mother, <span className="font-bold text-stone-950 text-base block my-1">Rose Achieng Oyugi</span>, widely and affectionately recognized across Nakuru as <span className="font-semibold text-stone-950">Mama Otieno</span>, initiated this venture with humility, preparing and selling food to the market community.
                </p>
                <p>
                  Mama Otieno was far more than an ambitious trader; she emerged as an essential pillar of Nakuru Top Market—a natural matriarch trusted implicitly to mediate marketplace complexities and resolve conflicts across the trading floor. Her voice brought structural balance to the market marketplace. Upon securing a permanent stall, she focused her vision on whole fresh fish, launching exclusively with choice Tilapia. In those formative years, shipments landed directly at our family home in London Estate inside large, traditional insulated brown transit containers.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">The Family Operations</h3>
                <p className="mb-4">
                  Sourcing the finest harvest required relentless execution. Mama Otieno ventured directly to the lakeside to hand-select each catch, frequently accompanied by our father on intensive logistics runs known within the household simply as <span className="italic font-serif">“operations.”</span>
                </p>
                <p>
                  Processing the daily arrival was a collective neighborhood milestone. Together with our childhood neighbors, we gathered to meticulously scale the fish, earning exactly one shilling per fish. It was within this environment that Lorine, along with all her siblings, absorbed the precise discipline of the fish trade—spending afternoons after school and entire holidays sitting at Stall 12, learning how to grade quality by sight and feel.
                </p>
              </div>

              <div className="border-t border-stone-100 pt-6">
                <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">The Seamless Transition</h3>
                <p className="mb-4">
                  When our mother fell ill during the critical Covid-19 period, Lorine did not hesitate. She stepped forward immediately to take complete command, preserving the supply lines when local infrastructure was under its greatest stress. Following Mama Otieno's passing in late 2022, Lorine assumed full administrative and operational control. 
                </p>
                <p>
                  Because the market community, premium hoteliers, and bulk institutions had worked alongside her for years, the operational transition was completely seamless. Today, Stall 12 has expanded its portfolio significantly beyond those early Tilapia runs, serving as an elite wholesale supplier to prominent educational universities like <span className="font-semibold text-stone-950">Kabarak University</span> and <span className="font-semibold text-stone-950">Egerton University</span>, alongside top-tier hospitality destinations throughout Nakuru.
                </p>
                <p className="font-serif italic text-stone-500 mt-4">
                  Generations have changed, but the core mandate established by Rose Achieng Oyugi remains unalterable: world-class handling, meticulous hygiene, and total product transparency.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MUSEUM-GRADE LUXURY LOCATION & HOURS LAYOUT */}
        {currentPage === 'location' && (
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block">Trading Floor Directory</span>
              <h1 className="text-2xl md:text-3xl font-light tracking-wide text-stone-950 uppercase">Location & Access</h1>
              <div className="h-[1px] w-12 bg-stone-300 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
              
              {/* CARD 1: GEOGRAPHIC PARAMS */}
              <div className="bg-white border border-stone-200/80 p-10 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-400 border-b border-stone-100 pb-4">
                    <MapPin className="h-4 w-4 stroke-[1.5]" />
                    <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-950">Physical Destination</h2>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-400 block uppercase tracking-wider">Stall Assignment</span>
                    <p className="text-stone-950 font-medium text-base leading-snug">
                      Nakuru Top Market, Stall 12<br />
                      Nakuru, Kenya
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-stone-400 block uppercase tracking-wider">Digital Mapping Directory</span>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      Listed globally across location indexes as <span className="font-medium text-stone-950">“Lorine's Fish and Fish Products – Nakuru Top Market Stall 12”</span> for accurate turn-by-turn routing parameters.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://maps.google.com/?q=Lorine's+Fish+and+Fish+Products+Nakuru+Top+Market+Stall+12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-stone-950 text-white font-medium text-[10px] tracking-[0.15em] uppercase py-3.5 rounded hover:bg-stone-800 transition-colors"
                  >
                    <Compass className="h-3 w-3 stroke-[2]" />
                    <span>Initialize Map Routing</span>
                  </a>
                </div>
              </div>

              {/* CARD 2: TEMPORAL BOUNDARIES */}
              <div className="bg-white border border-stone-200/80 p-10 rounded shadow-sm flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-stone-400 border-b border-stone-100 pb-4">
                    <Clock className="h-4 w-4 stroke-[1.5]" />
                    <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-950">Operational Windows</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-stone-100/60 pb-2">
                      <span className="text-xs font-medium text-stone-950">Monday – Saturday</span>
                      <span className="text-xs font-mono text-stone-600">09:00 AM – 08:00 PM</span>
                    </div>
                    <div className="flex justify-between items-baseline text-stone-400">
                      <span className="text-xs font-light">Sunday Curation</span>
                      <span className="text-[10px] tracking-widest uppercase font-bold">Closed</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <span className="text-xs font-bold text-stone-400 block uppercase tracking-wider">Procurement Advisory</span>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      Fresh whole lots and specialized fillets arrive daily directly from the morning lake collection. Clients requiring high-volume institutional metrics or specialized cuts are advised to schedule pick-up arrangements at least 24 hours in advance.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="tel:0714052641"
                    className="w-full inline-flex items-center justify-center bg-transparent border border-stone-200 text-stone-800 font-medium text-[10px] tracking-[0.15em] uppercase py-3.5 rounded hover:bg-stone-50 transition-colors"
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
