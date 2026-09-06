import { useState } from 'react';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import BusinessHours from './components/BusinessHours';
import ProductCatalog from './components/ProductCatalog';
import LocationSection from './components/LocationSection';
import CompanyIntro from './components/CompanyIntro';
import Advantages from './components/Advantages';
import OrderFlow from './components/OrderFlow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import ProductModal from './components/ProductModal';
import FadeInSection from './components/FadeInSection';
import { Product } from './types';
import { AppProvider, useAppConfig } from './contexts/ConfigContext';

function MainApp() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { loading, error } = useAppConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        {/* 1. Gambar-gambar Iklan Poster */}
        <FadeInSection>
          <BannerSection />
        </FadeInSection>

        {/* Jam buka toko */}
        <FadeInSection>
          <BusinessHours />
        </FadeInSection>


        {/* 2. Katalog Produk */}
        <FadeInSection>

          <ProductCatalog onSelectProduct={setSelectedProduct} />
        </FadeInSection>

        {/* 3. Informasi Kontak & Temukan Kami */}
        <FadeInSection>
          <LocationSection />
        </FadeInSection>

        {/* 4. Keterangan More Than Fly & Pusat Jersey Sublim, DTF & Konveksi */}
        <FadeInSection>
          <CompanyIntro />
        </FadeInSection>

        {/* 5. Keunggulan Kami */}
        <FadeInSection>
          <Advantages />
        </FadeInSection>

        {/* 6. Alur Pemesanan */}
        <FadeInSection>
          <OrderFlow />
        </FadeInSection>

        {/* 7. FAQ */}
        <FadeInSection>
          <FAQ />
        </FadeInSection>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
