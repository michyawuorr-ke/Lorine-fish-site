import ProductCard from '../components/ProductCard';
import { ShoppingBag } from 'lucide-react';

export default function Fillets() {
  const items = [
    {
      name: "Prime Nile Perch Fillet",
      price: "Ksh 800 / KG",
      description: "Thick, clean, white-flesh fillets precisely skinned and thoroughly de-boned. Perfect for baking, pan-searing, or classic deep frying.",
      features: ["100% Boneless", "Skinless", "Daily Catch"]
    },
    {
      name: "Premium Tilapia Strips",
      price: "Ksh 750 / KG",
      description: "Delicately scaled and portioned tilapia fillets. Mild flavor profiling, clean texture, and highly versatile for quick family dinners.",
      features: ["Hand-Carved", "Lean Cut", "Freshwater sourced"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl font-light tracking-wide text-stone-900 mb-4">Our Available Cuts</h1>
        <p className="text-stone-500 text-sm font-light">
          Browse through our curated menu of fresh, cleanly prepared portions. Select an item to initiate custom packaging directly with Lorine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {items.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>

      <div className="bg-stone-900 text-white p-8 md:p-12 text-center max-w-3xl mx-auto">
        <ShoppingBag className="h-8 w-8 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-light tracking-wider uppercase mb-2">Need a custom bulk configuration?</h2>
        <p className="text-stone-400 text-xs tracking-wide leading-relaxed max-w-md mx-auto mb-6 font-light">
          We cater to custom orders, large family events, and restaurants. Speak directly with us for bespoke pricing structures.
        </p>
        <a
          href="https://wa.me/254711223344?text=Hello%20Lorine%2C%20I%20want%20to%20inquire%20about%20a%20bulk%20fish%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-700 text-white text-xs tracking-widest uppercase py-3 px-6 hover:bg-amber-800 transition-colors duration-200"
        >
          Inquire Bulk Pricing
        </a>
      </div>
    </div>
  );
}
