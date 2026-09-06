import HeroBannerCarousel from './HeroBannerCarousel';

export default function BannerSection() {
  return (
    <section className="bg-gray-100/60 pt-4 pb-6 md:pt-6 md:pb-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <HeroBannerCarousel />
      </div>
    </section>
  );
}
