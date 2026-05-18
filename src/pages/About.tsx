import { MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl font-light tracking-wide text-stone-900 mb-4">The Stall 12 Philosophy</h1>
        <p className="text-stone-500 text-sm font-light">
          Built upon absolute reliability, professional cut hygiene, and standard neighborhood trust.
        </p>
      </div>

      <div className="prose prose-stone mx-auto text-stone-600 text-sm leading-relaxed font-light space-y-6 mb-16">
        <p>
          For years, Lorine has operated with a singular focus: bringing clean culinary experiences to residential homes and commercial kitchens alike. Our fish is managed through rigorous cold chain disciplines, ensuring it stays fresh from acquisition to pickup.
        </p>
        <p>
          We do not believe in shortcuts. Every single bone is verified, every fillet is perfectly trimmed, and every customer receives the exact premium value they pay for.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 border-t border-stone-200 pt-12">
        <div className="text-center p-4">
          <MapPin className="h-6 w-6 text-amber-700 mx-auto mb-2" />
          <span className="block text-xs font-medium tracking-wider text-stone-800 uppercase mb-1">Location</span>
          <p className="text-xs text-stone-500 font-light">Stall Number 12, Main Fish Arcade</p>
        </div>
        <div className="text-center p-4">
          <Clock className="h-6 w-6 text-amber-700 mx-auto mb-2" />
          <span className="block text-xs font-medium tracking-wider text-stone-800 uppercase mb-1">Hours</span>
          <p className="text-xs text-stone-500 font-light">Daily: 7:00 AM – 6:30 PM</p>
        </div>
        <div className="text-center p-4">
          <ShieldCheck className="h-6 w-6 text-amber-700 mx-auto mb-2" />
          <span className="block text-xs font-medium tracking-wider text-stone-800 uppercase mb-1">Hygiene Standard</span>
          <p className="text-xs text-stone-500 font-light">100% Cleaned & Food-Safe Handled</p>
        </div>
      </div>
    </div>
  );
}
