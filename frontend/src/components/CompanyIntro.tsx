import { ArrowRight } from 'lucide-react';
import { useAppConfig } from '../contexts/ConfigContext';

export default function CompanyIntro() {
  const { config: siteConfig } = useAppConfig();
  if (!siteConfig) return null;

  return (
    <section id="profil" className="py-14 md:py-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Tagline Badge */}
        <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-800 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200 shadow-xs">
          {siteConfig.tagline}
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-5">
          Pusat Jersey Sublim, DTF &amp; Konveksi
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {siteConfig.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#katalog"
            className="w-full sm:w-auto bg-blue-900 text-white px-8 py-3.5 rounded-full font-bold text-center hover:bg-blue-800 transition-all shadow-md hover:shadow-blue-900/30 flex items-center justify-center gap-2"
          >
            <span>Lihat Katalog Produk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-blue-900 border border-blue-200 px-8 py-3.5 rounded-full font-bold text-center hover:bg-blue-50 transition-all shadow-xs"
          >
            Konsultasi WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
