import { useState, useEffect, useRef, useCallback, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BannerSlide {
  id: number;
  tag?: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}


// Default 4 poster slides (3-5 items as requested)
const defaultBanners: BannerSlide[] = [
  {
    id: 1,
    tag: 'Jersey Custom',
    title: 'Produksi Jersey Sublim Full Print',
    subtitle:
      'Kualitas warna cerah, bahan dryfit premium, mulai dari 1 pcs',
    image: '/assets/poster-jersey.png',
    alt: 'Layanan produksi jersey sublim MI Apparel',
  },
  {
    id: 2,
    tag: 'Kaos Custom',
    title: 'Produksi Kaos Custom Berkualitas',
    subtitle:
      'Kaos custom untuk komunitas, perusahaan, event, dan kebutuhan promosi dengan desain sesuai keinginan',
    image: '/assets/poster-kaos.png',
    alt: 'Layanan produksi kaos custom MI Apparel',
  },
  {
    id: 3,
    tag: 'Cetak DTF',
    title: 'Cetak DTF Berkualitas Tajam',
    subtitle:
      'Warna solid, detail tajam, dan daya rekat kuat untuk berbagai jenis kain',
    image: '/assets/poster-cetak-dtf.png',
    alt: 'Layanan cetak DTF MI Apparel',
  },
  {
    id: 4,
    tag: 'Cutting Polyflex',
    title: 'Cutting Polyflex Presisi',
    subtitle:
      'Cocok untuk nama, nomor punggung, logo, dan desain custom satuan',
    image: '/assets/poster-cutting-polyflex.png',
    alt: 'Layanan cutting polyflex MI Apparel',
  },
  {
    id: 5,
    tag: 'Cetak Banner',
    title: 'Cetak Banner Berkualitas',
    subtitle:
      'Solusi media promosi dengan hasil cetak tajam untuk kebutuhan usaha dan acara',
    image: '/assets/poster-cetak-banner.png',
    alt: 'Layanan cetak banner MI Apparel',
  },
  {
    id: 6,
    tag: 'Custom Lanyard',
    title: 'Custom Lanyard Sesuai Desain',
    subtitle:
      'Lanyard custom untuk perusahaan, komunitas, sekolah, dan berbagai acara',
    image: '/assets/poster-lanyard.png',
    alt: 'Layanan custom lanyard MI Apparel',
  },

];

export default function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const banners = defaultBanners;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  // Auto slide from right to left every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for swipe on mobile devices
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative z-10 w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Frame Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200/80 bg-gray-900 aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] md:h-[400px] lg:h-[440px] w-full">
        {/* Sliding Track: moves horizontally from right to left as currentIndex increases */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, idx) => (
            <div
              key={banner.id}
              className="w-full h-full flex-shrink-0 relative overflow-hidden"
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-10 text-white">
                {banner.tag && (
                  <span className="inline-block self-start text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-600/95 text-white backdrop-blur-md px-2.5 py-1 rounded-md mb-2 shadow-sm">
                    {banner.tag}
                  </span>
                )}
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                  {banner.title}
                </h3>
                {banner.subtitle && (
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 mt-1 sm:mt-1.5 line-clamp-2 drop-shadow max-w-2xl">
                    {banner.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow - Left */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Poster Sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation Arrow - Right */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Poster Berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Counter Badge (e.g. 1 / 4) */}
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
          {currentIndex + 1} / {banners.length}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-3 right-4 sm:right-6 flex items-center gap-1.5 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Lihat poster ke-${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index
                ? 'w-6 bg-white shadow-md'
                : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
