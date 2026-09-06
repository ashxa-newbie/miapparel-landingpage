import { CheckCircle2 } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { title: "Workshop & Tim Sendiri", desc: "Produksi mandiri tanpa pihak ketiga, harga lebih bersahabat." },
    { title: "Kapasitas 3.000 pcs / minggu", desc: "Siap melayani pesanan partai besar maupun kebutuhan instansi." },
    { title: "Kualitas Printing Tajam & Awet", desc: "Menggunakan mesin sublim dan DTF generasi terbaru." },
    { title: "Jahitan Kuat & Rapi", desc: "Melewati proses Quality Control yang ketat sebelum dikirim." },
    { title: "Pengerjaan Tepat Waktu", desc: "Komitmen kami untuk selalu memenuhi deadline yang disepakati." },
    { title: "Kirim ke Seluruh Indonesia", desc: "Bekerja sama dengan berbagai ekspedisi cargo terpercaya." }
  ];

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-bold text-sm tracking-widest uppercase mb-2 block">Mengapa Kami?</span>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Keunggulan MI Apparel</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1.5">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
