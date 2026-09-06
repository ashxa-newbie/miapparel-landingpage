import { useState } from 'react';
import { Search, X, Clock } from 'lucide-react';
import type { Product } from '../types';
import { useAppConfig } from '../contexts/ConfigContext';

type Props = {
  onSelectProduct: (product: Product) => void;
};

export default function ProductCatalog({
  onSelectProduct,
}: Props) {
  const { products } = useAppConfig();
  const [searchQuery, setSearchQuery] = useState('');


  const getProductImage = (product: Product): string => {
    const productName = product.name.toLowerCase();

    if (productName.includes('dtf')) {
      return '/assets/katalog/katalog-dtf.png';
    }

    if (productName.includes('kaos')) {
      return '/assets/katalog/katalog-kaos.png';
    }

    if (productName.includes('jersey')) {
      return '/assets/katalog/katalog-jersey.png';
    }

    if (productName.includes('polo shirt')) {
      return '/assets/katalog/katalog-polo.png';
    }

    if (productName.includes('kemeja')) {
      return '/assets/katalog/katalog-kemeja.png';
    }

    if (productName.includes('polyflex')) {
      return '/assets/katalog/katalog-polyflex.png';
    }

    if (productName.includes('banner')) {
      return '/assets/katalog/katalog-banner.png';
    }

    if (productName.includes('lanyard')) {
      return '/assets/katalog/katalog-lanyard.png';
    }

    if (
      productName.includes('mug') ||
      productName.includes('tumbler')
    ) {
      return '/assets/katalog/katalog-mug.png';
    }

    if (productName.includes('topi')) {
      return '/assets/katalog/katalog-topi.png';
    }

    return product.image || '/assets/katalog/product-placeholder.png';
  };

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    const matchName = product.name
      .toLowerCase()
      .includes(query);

    const matchDescription = product.description
      .toLowerCase()
      .includes(query);

    const matchMaterial = product.materials?.some((material) =>
      material.toLowerCase().includes(query)
    );

    return matchName || matchDescription || matchMaterial;
  });

  return (
    <section
      id="katalog"
      className="py-16 md:py-24 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Katalog dan Fitur Pencarian */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          {/* Judul katalog: kiri */}
          <div className="w-full md:max-w-xl text-left">


            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Katalog Produk
            </h3>
          </div>

          {/* Fitur pencarian: kanan */}
          <div className="w-full md:w-[420px]">
            <label
              htmlFor="product-search"
              className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block"
            >
              Cari Produk
            </label>

            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />

              <input
                id="product-search"
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Cari produk atau jenis bahan..."
                className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                  title="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="mt-2 text-xs text-gray-500">
                Menemukan{' '}
                <span className="font-bold text-blue-700">
                  {filteredProducts.length}
                </span>{' '}
                produk untuk &quot;
                <span className="font-semibold text-gray-700">
                  {searchQuery}
                </span>
                &quot;
              </div>
            )}
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 max-w-md mx-auto px-6">
            <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />

            <h4 className="text-gray-900 font-bold text-lg mb-1">
              Produk Tidak Ditemukan
            </h4>

            <p className="text-gray-500 text-sm mb-4">
              Tidak ada produk yang cocok dengan &quot;
              {searchQuery}&quot;.
            </p>

            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-2.5 rounded-xl transition-colors"
            >
              Reset &amp; Tampilkan Semua
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto px-2 sm:px-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col h-full hover:-translate-y-0.5"
              >
                {/* Gambar produk */}
                <div className="aspect-square w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        '/assets/katalog/product-placeholder.png';
                    }}
                  />

                  {product.minOrder && (
                    <div className="absolute top-0 right-0 bg-blue-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-bl-md shadow-sm">
                      Min. {product.minOrder}
                    </div>
                  )}
                </div>

                {/* Informasi produk */}
                <div className="p-2 sm:p-3 flex flex-col flex-grow">
                  <h4 className="text-[13px] sm:text-sm text-gray-800 leading-snug mb-1 line-clamp-2 h-[2.35rem] font-medium group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h4>

                  <div className="flex-grow" />

                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.materials &&
                      product.materials.length > 0 && (
                        <span className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-sm border border-gray-200">
                          {product.materials[0]}

                          {product.materials.length > 1
                            ? ` +${product.materials.length - 1}`
                            : ''}
                        </span>
                      )}

                    {product.eta && (
                      <span className="text-[10px] font-medium text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded-sm border border-blue-100 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {product.eta}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="text-sm sm:text-base font-bold text-gray-900">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}