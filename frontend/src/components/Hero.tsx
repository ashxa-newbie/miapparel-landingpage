import { useAppConfig } from '../contexts/ConfigContext';
import HeroBannerCarousel from './HeroBannerCarousel';

export default function Hero() {
  const { config: siteConfig } = useAppConfig();
  if (!siteConfig) return null;
  
  return (
    <section className="relative bg-gray-50 pt-10 pb-16 md:pt-20 md:pb-28 overflow-hidden border-b border-gray-100">
       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative z-10 text-center md:text-left order-2 md:order-1">
             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200">
               {siteConfig.tagline}
             </span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
               Pusat Jersey Sublim, DTF & Konveksi
             </h2>
             <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
               {siteConfig.heroDescription}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#katalog" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/30">
                  Lihat Katalog
                </a>
                <a href="#lokasi" className="bg-white text-blue-900 border border-blue-200 px-8 py-4 rounded-full font-bold text-center hover:bg-blue-50 transition-all shadow-sm">
                  Kunjungi Workshop
                </a>
             </div>
             
             <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">M</div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-xs font-bold text-green-700">I</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100 border-2 border-white flex items-center justify-center text-xs font-bold text-yellow-700">A</div>
               </div>
               <div className="text-sm text-gray-600">
                 <span className="font-bold text-gray-900">1000+</span> Klien Terpercaya
               </div>
             </div>
          </div>
          <div className="relative order-1 md:order-2 w-full">
             <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-40 transform translate-x-10 translate-y-10 pointer-events-none"></div>
             <HeroBannerCarousel />
          </div>
       </div>
    </section>
  );
}
