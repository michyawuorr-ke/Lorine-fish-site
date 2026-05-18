export default function FishFillets() {
  const segments = [
    { name: "Nile Perch Fillets", price: "KSh 1,000 per kg" },
    { name: "Tilapia Fillets", price: "KSh 1,600 per kg" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold tracking-wide text-stone-900 uppercase">Our Main Product: Fish Fillets</h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
        {segments.map((item, idx) => (
          <div key={idx} className="bg-white border border-stone-200 p-6 rounded text-center shadow-sm">
            <h2 className="text-lg font-bold text-stone-900 mb-2">{item.name}</h2>
            <p className="text-stone-700 font-semibold text-sm mb-4">{item.price}</p>
            <a
              href="https://wa.me/254714052641"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-2.5 rounded font-medium text-xs tracking-wider uppercase hover:bg-emerald-700 transition-colors"
            >
              WhatsApp to Order
            </a>
          </div>
        ))}
      </div>

      <div className="bg-white border border-stone-200 rounded p-6 text-center max-w-xl mx-auto shadow-sm">
        <p className="text-stone-700 text-sm leading-relaxed font-normal">
          Freshly filleted Nile Perch and Tilapia, ideal for hotels, restaurants, event caterers, schools, and households.
        </p>
      </div>
    </div>
  );
}
