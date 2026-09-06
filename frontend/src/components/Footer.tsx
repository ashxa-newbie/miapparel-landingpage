import { Phone, Mail, MapPin } from 'lucide-react';
import { useAppConfig } from '../contexts/ConfigContext';

export default function Footer() {
  const { config: siteConfig } = useAppConfig();
  if (!siteConfig) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="MI Apparel Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
            />

            <div className="flex flex-col leading-tight">
              <h3 className="text-xl font-extrabold italic uppercase text-white tracking-wide">
                {siteConfig.name}
              </h3>

              <p className="text-xs font-normal not-italic normal-case text-gray-400 mt-1">
                {siteConfig.company}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-4">
            {siteConfig.description}
          </p>
          <p className="text-sm text-gray-400 italic">"{siteConfig.tagline}"</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Tautan Cepat</h4>
          <div className="flex flex-col gap-2">
            <a href="#lokasi" className="text-sm hover:text-white transition-colors">Temukan Kami</a>
            <a href="#katalog" className="text-sm hover:text-white transition-colors">Katalog Produk</a>
            <a href="#keunggulan" className="text-sm hover:text-white transition-colors">Keunggulan Kami</a>
            <a href="#alur" className="text-sm hover:text-white transition-colors">Cara Pemesanan</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Kontak Kami</h4>
          <div className="flex flex-col gap-3">
            <p className="text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> {siteConfig.whatsapp.display}</p>
            <p className="text-sm flex items-center gap-2"><Mail className="w-4 h-4" /> {siteConfig.email}</p>
            <a
              href={siteConfig.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('MI Apparel ' + siteConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-start gap-2 hover:text-white transition-colors group cursor-pointer"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-400 group-hover:text-white transition-colors" />
              <span className="group-hover:underline">{siteConfig.address}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {siteConfig.company} ({siteConfig.name}). All rights reserved.
      </div>
    </footer>
  );
}
