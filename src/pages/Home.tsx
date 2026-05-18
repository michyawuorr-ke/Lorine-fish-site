import { ArrowRight, Phone, Award } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'fillets' | 'about') => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-stone-900 mb-6 leading-tight">
          Fresh, Expertly Cut Fish <br /><span className="font-normal italic text-amber-800">Tailored to Perfection</span>
        </h1>
        <p className="text-stone-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-light">
          From the fresh waters straight to your kitchen. Located at Stall 12, we specialize in pristine cuts curated with absolute care.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/254711223344"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-900 text-white text-xs tracking-widest uppercase py-3.5 px-6 hover:bg-stone-800 transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            <span>Contact Stall 12</span>
          </a>
          <button
            onClick={() => setCurrentPage('fillets')}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white border border-stone-200 text-stone-700 text-xs tracking-widest uppercase py-3.5 px-6 hover:bg-stone-50 transition-colors duration-200"
          >
            <span>View Cut Selection</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 border-t border-stone-200 pt-16">
        <div>
          <h2 className="text-2xl font-light text-stone-900 tracking-wide mb-6">Why Choose Our Cuts?</h2>
          <ul className="space-y-4">
            {[
              "Sourced dynamically from daily fresh batches.",
              "De-boned completely with culinary precision.",
              "Vacuum-sealed options ready for immediate refrigeration."
            ].map((text, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-stone-600 text-sm leading-relaxed">
                <Award className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-stone-100 p-8 flex flex-col justify-center border border-stone-200/60">
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">Visit Our Stall</p>
          <p className="text-xl font-light text-stone-800 mb-4 italic">"Quality means doing it right when no one is looking."</p>
          <p className="text-stone-500 text-sm leading-relaxed font-light">
            Drop by Stall 12 to pick up orders directly or customized cuts processed in real-time right before your eyes.
          </p>
        </div>
      </section>
    </div>
  );
}
