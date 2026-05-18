import { MessageSquare } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function ProductCard({ name, price, description, features }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Hello Lorine, I would like to order the ${name}.`);
  
  return (
    <div className="bg-white border border-stone-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Premium Selection</p>
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-xl font-light text-stone-900 tracking-wide">{name}</h3>
          <span className="text-lg font-medium text-amber-800">{price}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {features.map((feature, idx) => (
            <span key={idx} className="bg-stone-50 text-stone-600 text-[10px] uppercase tracking-wider px-2.5 py-1 border border-stone-100">
              {feature}
            </span>
          ))}
        </div>
        <p className="text-stone-500 text-sm leading-relaxed mb-6">{description}</p>
        <div className="pt-2">
          <a
            href={`https://wa.me/254711223344?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center space-x-2 bg-stone-900 text-white text-xs tracking-widest uppercase py-3 px-4 hover:bg-stone-800 transition-colors duration-200"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
