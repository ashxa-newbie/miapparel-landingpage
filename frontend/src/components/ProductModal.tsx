import { useState } from 'react';
import {
  X,
  CheckCircle2,
  MessageCircle,
  Share2,
  Check,
} from 'lucide-react';
import type { Product } from '../types';
import { useAppConfig } from '../contexts/ConfigContext';

type Props = {
  product: Product | null;
  onClose: () => void;
};

// Menentukan gambar detail berdasarkan nama produk
const getProductImage = (product: Product): string => {
  const productName = product.name.toLowerCase().trim();

  if (productName.includes('jersey')) {
    return '/assets/katalog/katalog-jersey-2.png';
  }

  if (productName.includes('kaos')) {
    return '/assets/katalog/katalog-kaos-2.png';
  }

  if (productName.includes('dtf')) {
    return '/assets/katalog/katalog-dtf-2.png';
  }

  if (productName.includes('polo')) {
    return '/assets/katalog/katalog-polo-2.png';
  }

  if (productName.includes('kemeja')) {
    return '/assets/katalog/katalog-kemeja-2.png';
  }

  if (productName.includes('polyflex')) {
    return '/assets/katalog/katalog-polyflex-2.png';
  }

  if (productName.includes('banner')) {
    return '/assets/katalog/katalog-banner-2.png';
  }

  if (productName.includes('lanyard')) {
    return '/assets/katalog/katalog-lanyard-2.png';
  }

  if (
    productName.includes('mug') ||
    productName.includes('tumbler')
  ) {
    return '/assets/katalog/katalog-mug-2.png';
  }

  if (productName.includes('topi')) {
    return '/assets/katalog/katalog-topi-2.png';
  }

  // Gambar cadangan
  return product.image || '/assets/katalog/product-placeholder.png';
};

export default function ProductModal({
  product,
  onClose,
}: Props) {
  const { config: siteConfig } = useAppConfig();
  const [isCopied, setIsCopied] = useState(false);

  if (!product || !siteConfig) return null;

  const handleShare = async () => {
    const shareData = {
      title: `${product.name} - ${siteConfig.name}`,
      text: `Cek ${product.name} di ${siteConfig.name}!\n`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Share canceled or failed', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}${shareData.url}`
        );

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (error) {
        console.error('Failed to copy', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background gelap */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Kotak modal */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-white z-10 p-5 border-b border-gray-100 flex justify-between items-center rounded-t-2xl shrink-0">
          <h3 className="font-bold text-gray-900 text-xl">
            Detail Spesifikasi
          </h3>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              title="Bagikan produk ini"
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors relative"
            >
              {isCopied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Share2 className="w-5 h-5" />
              )}

              {isCopied && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gray-800 text-white px-2 py-1 rounded">
                  Tersalin!
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup detail produk"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-0 overflow-y-auto overscroll-contain">
          <div className="md:grid md:grid-cols-2">
            {/* Gambar produk */}
            <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full aspect-square object-contain"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    product.image || '/assets/product-placeholder.png';
                }}
              />
            </div>

            {/* Informasi produk */}
            <div className="p-6 w-full">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-5 mb-8">
                {/* Pilihan Custom */}
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Pilihan Custom
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {product.customOptions?.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-100"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pilihan Bahan */}
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Pilihan Bahan
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {product.materials?.map((material) => (
                      <span
                        key={material}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Minimum Order dan Estimasi */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Minimum Order
                    </h5>

                    <p className="text-sm font-bold text-gray-900">
                      {product.minOrder}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Estimasi Waktu
                    </h5>

                    <p className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      {product.eta}
                    </p>
                  </div>
                </div>

                {/* Ukuran */}
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Ukuran Tersedia
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {product.sizes?.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Harga */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Harga Estimasi
                    </p>

                    <p className="text-xl font-bold text-blue-800">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl shrink-0">
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number
              }?text=${encodeURIComponent(
                `${siteConfig.whatsapp.messageTemplate} *${product.name}*.`
              )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />

            <span>Pesan Produk Ini via WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}