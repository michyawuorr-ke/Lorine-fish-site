export default function Products() {
  const catalog = [
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold tracking-wide text-center text-stone-900 mb-12 uppercase">Product Catalog</h1>
      
      <div className="space-y-12">
        {catalog.map((section, sIdx) => (
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
  );
}
