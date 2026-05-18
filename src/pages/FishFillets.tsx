export default function FishFillets() {
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
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold tracking-wide text-stone-900 uppercase">Our Available Goods</h1>
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

      <div className="bg-white border border-stone-200 rounded p-6 text-center max-w-xl mx-auto shadow-sm">
        <p className="text-stone-700 text-sm leading-relaxed font-normal">
          Pristine cuts and dynamic batches ideal for hotels, restaurants, event caterers, schools, and households.
        </p>
      </div>
    </div>
  );
}
