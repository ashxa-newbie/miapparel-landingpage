import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Berapa minimum order (MOQ) untuk pembuatan jersey?",
    answer: "Minimum order di MI Apparel adalah 12 pcs per desain. Untuk pemesanan dalam jumlah besar (di atas 100 pcs), kami memberikan harga khusus."
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan (turnaround time)?",
    answer: "Waktu pengerjaan standar kami adalah 7-14 hari kerja setelah desain disetujui dan DP (Down Payment) diterima. Waktu dapat bervariasi tergantung dari jumlah pesanan dan antrean produksi."
  },
  {
    question: "Bagaimana sistem dan metode pembayarannya?",
    answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI) dan E-Wallet. Sistem pembayaran adalah DP (Down Payment) minimal 50% di awal sebelum produksi dimulai, dan pelunasan wajib dilakukan sebelum barang dikirim atau diambil."
  },
  {
    question: "Apakah bisa request desain custom atau dibuatkan desain?",
    answer: "Tentu! Anda bisa membawa referensi desain sendiri atau meminta tim desain kami untuk membuatkan desain (mockup) sesuai dengan keinginan Anda secara gratis setelah pembayaran DP."
  },
  {
    question: "Apakah bisa kirim ke luar kota/pulau?",
    answer: "Bisa, kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya (JNE, J&T, Sicepat, Cargo, dll)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
          <p className="mt-4 text-lg text-gray-600">
            Temukan jawaban cepat seputar layanan, pemesanan, dan produksi MI Apparel.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-colors hover:border-blue-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
