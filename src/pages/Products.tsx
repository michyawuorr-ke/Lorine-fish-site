import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const sections = [
    {
      title: "Fish Fillets",
      items: [
        { title: "Nile Perch Fillets (Mbuta)", price: "KSh 1,100 / kg", description: "Freshly filleted Nile Perch. Core wholesale line optimized for hotels, schools, universities, and event caterers.", placeholder: "Premium Nile Perch Fillets cut at Stall 12", tags: ["Wholesale", "Retail"] },
        { title: "Tilapia Fillets (Ngege)", price: "KSh 1,700 / kg", description: "Carefully extracted bone-out premium Tilapia fillets. Pristine quality handling.", placeholder: "Fresh Tilapia fillets on presentation counter", tags: ["Wholesale", "Retail"] }
      ]
    },
    {
      title: "Fresh Whole Fish",
      items: [
        { title: "Fresh Whole Tilapia", price: "KSh 450 / kg", description: "Direct daily supply from Lake Victoria. Perfect size grading for restaurant platters and traditional stews.", placeholder: "Fresh Tilapia laid out at Nakuru Top Market", tags: ["Wholesale", "Retail"] },
        { title: "Fresh Whole Nile Perch", price: "KSh 500 / kg", description: "Sourced daily under peak sanitary conditions. Excellent structural yield.", placeholder: "Whole Nile Perch catches preserved at counter", tags: ["Wholesale", "Retail"] },
        { title: "Fresh Mad Fish", price: "KSh 350 / kg", description: "High nutritional profiles, sourced straight from lake waters to market.", placeholder: "Fresh mud fish stock inside Stall 12", tags: ["Wholesale", "Retail"] },
        { title: "Fresh Catfish", price: "KSh 350 / kg", description: "Meaty, rich, hand-selected daily selections preferred by institutions.", placeholder: "Fresh clean catfish batches on display", tags: ["Wholesale", "Retail"] }
      ]
    },
    {
      title: "Fried Fish",
      items: [
        { title: "Fried Tilapia", price: "Varies by Size", description: "Deep fried to high standards inside our stall. Golden outer skin with soft flaky meat inside.", placeholder: "Golden fried Tilapia pieces at Stall 12", tags: ["Retail", "Catering"] },
        { title: "Fried Nile Perch", price: "Varies by Size", description: "Expertly fried portions using fresh daily oil distributions.", placeholder: "Crispy fried Nile Perch cutlets", tags: ["Retail", "Catering"] }
      ]
    },
    {
      title: "Varieties of Dried Fish",
      items: [
        { title: "Assorted Dried Fish", price: "Sold per kg", description: "Cured and sun-dried variations, including specific mud fish and catfish family types. Perfect shelf life.", placeholder: "Traditional dried fish variants bundled up", tags: ["Wholesale", "Retail"] }
      ]
    },
    {
      title: "Cod Liver Oil",
      items: [
        { title: "Nile Perch Cod Liver Oil", price: "KSh 600 / 500ml", description: "Freshly cooked natural extraction rich in Omega-3 fatty acids and vital Vitamin D profiles.", placeholder: "500ml clear bottles filled with fresh-cooked fish oil", tags: ["Supplement", "Retail"] }
      ]
    }
  ];

  return (
    <div class="max-w-5xl mx-auto px-4 py-8">
      <h2 class="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-200 pb-3 mb-8 text-center sm:text-left">
        Commercial & Retail Catalog
      </h2>
      
      {sections.map((section, idx) => (
        <div key={idx} class="mb-10">
          <h3 class="text-base sm:text-lg font-bold text-blue-900 mb-4 border-l-4 border-blue-600 pl-2">
            {section.title}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((item, itemIdx) => (
              <ProductCard
                key={itemIdx}
                title={item.title}
                price={item.price}
                description={item.description}
                placeholderText={item.placeholder}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
