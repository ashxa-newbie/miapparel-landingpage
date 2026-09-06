import { MapPin, MessageCircle, Instagram, Facebook, Play, ExternalLink, ShoppingBag } from 'lucide-react';
import { useAppConfig } from '../contexts/ConfigContext';

export default function LocationSection() {
  const { config: siteConfig } = useAppConfig();
  if (!siteConfig) return null;

  return (
    <section id="lokasi" className="py-16 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-blue-700 font-bold text-sm tracking-widest uppercase mb-2 block">Informasi Kontak</span>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Temukan Kami</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">Kunjungi workshop kami atau hubungi kami melalui media sosial di bawah ini.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Lokasi / Alamat */}
          <a
            href={siteConfig.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('MI Apparel ' + siteConfig.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 lg:col-span-3 md:col-span-2 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-blue-900 px-2 py-0.5 rounded">
                    Lokasi
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Cetak DTF, Sablon, Sublim & Konveksi
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-white border border-blue-200 px-3.5 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0 self-start sm:self-center shadow-xs">
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-green-300 transition-all hover:shadow-md flex items-center gap-4 group">
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">WhatsApp</h4>
              <p className="text-xs text-gray-600">{siteConfig.whatsapp.display}</p>
            </div>
          </a>

          {/* Shopee */}
          <a
            href={siteConfig.shopeeUrl || "https://shopee.co.id/miapparel"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-orange-400 hover:bg-orange-50/20 transition-all hover:shadow-md flex items-center justify-between gap-3 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 group-hover:scale-110 group-hover:bg-[#EE4D2D] group-hover:text-white transition-all">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#EE4D2D] transition-colors">Shopee</h4>
                <p className="text-xs text-gray-600">{siteConfig.shopee || 'MI Apparel Official'}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#EE4D2D] transition-colors shrink-0" />
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.instagram.mainLink || "https://www.instagram.com/mayapadaindustri/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-pink-400 hover:bg-pink-50/20 transition-all hover:shadow-md flex items-center justify-between gap-3 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-pink-600 transition-colors">Instagram</h4>
                <p className="text-xs text-gray-600">{siteConfig.instagram.main || '@mayapadaindustri'}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors shrink-0" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/search/top?q=MI%20Apparel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-blue-400 transition-all hover:shadow-md flex items-center gap-4 group"
          >
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Facebook</h4>
              <p className="text-xs text-gray-600">{siteConfig.facebook}</p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href={siteConfig.tiktok ? `https://www.tiktok.com/${siteConfig.tiktok.startsWith('@') ? siteConfig.tiktok : '@' + siteConfig.tiktok}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-black transition-all hover:shadow-md flex items-center gap-4 group md:col-span-2 lg:col-span-1"
          >
             <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 shrink-0 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">TikTok</h4>
              <p className="text-xs text-gray-600">{siteConfig.tiktok}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
