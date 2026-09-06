import { MessageCircle, PenTool, CreditCard, Settings, Truck } from 'lucide-react';

export default function OrderFlow() {
  const orderFlows = [
    { icon: <MessageCircle className="w-6 h-6" />, title: "Konsultasi", desc: "Hubungi admin, diskusi produk & jumlah." },
    { icon: <PenTool className="w-6 h-6" />, title: "Desain & Spesifikasi", desc: "Konfirmasi bahan, ukuran, dan desain." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Penawaran & DP", desc: "Harga deal, proses pembayaran/DP." },
    { icon: <Settings className="w-6 h-6" />, title: "Produksi & QC", desc: "Proses jahit/cetak & pengecekan." },
    { icon: <Truck className="w-6 h-6" />, title: "Ambil / Kirim", desc: "Pelunasan dan pengiriman alamatmu." }
  ];

  return (
    <section id="alur" className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-bold text-sm tracking-widest uppercase mb-2 block">Cara Pesan</span>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Alur Pemesanan Mudah</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {orderFlows.map((flow, idx) => (
            <div key={idx} className="relative flex flex-col items-center group">
              {idx !== orderFlows.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-200 z-0"></div>
              )}
              <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-blue-800 shadow-md z-10 relative mb-4 group-hover:scale-110 transition-transform group-hover:border-blue-100">
                {flow.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-2">{flow.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{flow.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
