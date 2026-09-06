import { useState } from 'react';
import { MapPin, Instagram, Mail, Menu, X } from 'lucide-react';
import { useAppConfig } from '../contexts/ConfigContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { config: siteConfig } = useAppConfig();

  if (!siteConfig) return null;

  return (
    <>
      {/* Top Header Contact Bar (Moved to Top) */}
      <div className="bg-blue-900 text-blue-50 text-[11px] sm:text-xs py-2 px-4 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" /> {siteConfig.email}
            </a>
            <span className="hidden sm:block opacity-50">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={siteConfig.instagram.mainLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Instagram className="w-3.5 h-3.5" /> {siteConfig.instagram.main}
            </a>
            {siteConfig.instagram.dtf && siteConfig.instagram.dtf !== siteConfig.instagram.main && (
              <a href={siteConfig.instagram.dtfLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" /> {siteConfig.instagram.dtf}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MI Apparel Logo"
              className="h-10 w-auto object-contain"
            />

            <div className="flex flex-col leading-none">
              <span
                className="text-lg text-gray-900 tracking-wide"
                style={{
                  fontWeight: 900,
                  fontStyle: 'italic',
                  textTransform: 'Sentence case',
                }}
              >
                PT Mayapada Industri Luhur
              </span>

              <span
                className="mt-1 text-[10px] text-gray-500"
                style={{
                  fontWeight: 400,
                  fontStyle: 'normal',
                  textTransform: 'none',
                }}
              >
                More Than Fly
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            <a href="#lokasi" className="text-sm font-semibold text-gray-600 hover:text-blue-900 transition-colors">Temukan Kami</a>
            <a href="#katalog" className="text-sm font-semibold text-gray-600 hover:text-blue-900 transition-colors">Katalog Produk</a>
            <a href="#keunggulan" className="text-sm font-semibold text-gray-600 hover:text-blue-900 transition-colors">Keunggulan</a>
            <a href="#alur" className="text-sm font-semibold text-gray-600 hover:text-blue-900 transition-colors">Alur Pesan</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-blue-900/20">
              Hubungi Kami
            </a>
          </nav>
          <button
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <a href="#lokasi" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-gray-700">Temukan Kami</a>
            <a href="#katalog" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-gray-700">Katalog Produk</a>
            <a href="#keunggulan" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-gray-700">Keunggulan</a>
            <a href="#alur" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-gray-700">Alur Pesan</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-3 rounded-xl text-sm font-bold text-center mt-2">
              Hubungi Kami
            </a>
          </div>
        )}
      </header>
    </>
  );
}
