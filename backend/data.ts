import type { Product, OrderTracking } from './types';

export const siteConfig = {
  name: "MI Apparel",
  company: "PT Mayapada Industri Luhur",
  tagline: "More Than Fly",
  description: "Pusat layanan jasa sublim jersey, sablon, cetak DTF, dan konveksi terpercaya di Tangerang.",
  heroDescription: "Solusi pembuatan pakaian custom dengan kapasitas besar hingga 3.000 pcs per minggu dan kualitas premium. Percayakan produksi apparel Anda kepada ahlinya.",
  whatsapp: {
    number: "6282225511082",
    display: "0822-2551-1082",
    messageTemplate: "Halo Admin MI Apparel, saya tertarik dan ingin tanya detail untuk pemesanan"
  },
  email: "flymiapparel@gmail.com",
  address: "Jl. Guru Kojar No. 154, Jurang Mangu Barat, Tangerang Selatan",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MI+Apparel+Jl.+Guru+Kojar+No.+154%2C+Jurang+Mangu+Barat%2C+Tangerang+Selatan",
  instagram: {
    main: "@mayapadaindustri",
    mainLink: "https://www.instagram.com/mayapadaindustri/",
    dtf: "@mayapadaindustri",
    dtfLink: "https://www.instagram.com/mayapadaindustri/"
  },
  facebook: "MI Apparel",
  tiktok: "@miapparelofficial",
  shopee: "MI Apparel Official",
  shopeeUrl: "https://shopee.co.id/miapparel"
};

export const products: Product[] = [
  {
    id: 1,
    name: "Cetak DTF Meteran",
    image: "/assets/katalog-dtf.png",
    description: "Layanan cetak sablon DTF meteran dengan hasil warna tajam, solid, dan siap press.",
    materials: ["PET Film Standard", "PET Film Premium"],
    customOptions: ["Lebar Cetak 58 cm", "Desain Bebas", "Warna Solid dan Tajam"],
    minOrder: "1 Meter",
    eta: "1 - 2 Hari Kerja",
    sizes: ["Meteran"],
    price: "Mulai Rp30.000 / meter"
  },
  {
    id: 2,
    name: "Kaos Sablon Custom",
    image: "/assets/katalog-kaos.png",
    description: "Produksi kaos custom untuk komunitas, perusahaan, acara, dan kebutuhan promosi.",
    materials: ["Cotton Combed 24s", "Cotton Combed 30s"],
    customOptions: ["Sablon DTF", "Sablon Plastisol", "Bordir Komputer"],
    minOrder: "1 Pcs",
    eta: "7 - 10 Hari Kerja",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    price: "Hubungi Admin"
  },
  {
    id: 3,
    name: "Jersey Sublim Custom",
    image: "/assets/katalog-jersey.png",
    description: "Pembuatan jersey custom full print untuk sepak bola, futsal, basket, voli, dan komunitas.",
    materials: ["Dry-fit Milano", "Dry-fit Brazil", "Benzema", "Pique"],
    customOptions: ["Nama dan Nomor", "Lengan Pendek atau Panjang", "Desain Full Print"],
    minOrder: "1 Pcs",
    eta: "7 - 14 Hari Kerja",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "Custom"],
    price: "Hubungi Admin"
  },
  {
    id: 4,
    name: "Polo Shirt Custom",
    image: "/assets/katalog-polo.png",
    description: "Pembuatan polo shirt custom untuk seragam kantor, komunitas, usaha, dan acara.",
    materials: ["Lacoste Pique", "Cotton CVC"],
    customOptions: ["Bordir Komputer", "Slon DTF", "Kombinasi Warna"],
    minOrder: "1 Pcs",
    eta: "10 - 14 Hari Kerja",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    price: "Hubungi Admin"
  },
  {
    id: 5,
    name: "Kemeja dan Seragam Konveksi",
    image: "/assets/katalog-kemeja.png",
    description: "Produksi kemeja PDL, PDH, dan seragam instansi dengan bahan berkualitas dan jahitan rapi.",
    materials: ["American Drill", "Nagata Drill", "Tropical"],
    customOptions: ["Bordir Komputer", "Model Lengan", "Saku Custom"],
    minOrder: "1 Pcs",
    eta: "14 - 21 Hari Kerja",
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    price: "Hubungi Admin"
  },
  {
    id: 6,
    name: "Cutting Sablon Polyflex",
    image: "/assets/katalog-polyflex.png",
    description: "Layanan cutting polyflex untuk nama, nomor punggung, logo, dan tulisan custom.",
    materials: ["Polyflex PU", "Polyflex Flock", "Polyflex Reflective"],
    customOptions: ["Nama Custom", "Nomor Punggung", "Logo dan Tulisan"],
    minOrder: "1 Pcs",
    eta: "1 - 3 Hari Kerja",
    sizes: ["Ukuran Custom"],
    price: "Hubungi Admin"
  },
  {
    id: 7,
    name: "Cetak Banner Custom",
    image: "/assets/katalog-banner.png",
    description: "Cetak banner untuk kebutuhan promosi usaha, acara, organisasi, dan media informasi.",
    materials: ["Flexi China", "Flexi Korea", "Albatros"],
    customOptions: ["Ukuran Custom", "Desain Bebas", "Finishing Mata Ayam"],
    minOrder: "1 Pcs",
    eta: "1 - 3 Hari Kerja",
    sizes: ["Ukuran Custom"],
    price: "Hubungi Admin"
  },
  {
    id: 8,
    name: "Custom Lanyard",
    image: "/assets/katalog-lanyard.png",
    description: "Produksi lanyard custom untuk perusahaan, sekolah, panitia, komunitas, dan acara.",
    materials: ["Polyester", "Tissue", "Nylon"],
    customOptions: ["Desain Full Print", "Logo Custom", "Pilihan Pengait"],
    minOrder: "12 Pcs",
    eta: "7 - 14 Hari Kerja",
    sizes: ["Lebar 1,5 cm", "Lebar 2 cm"],
    price: "Hubungi Admin"
  },
  {
    id: 9,
    name: "Topi Bordir Custom",
    image: "/assets/katalog-topi.png",
    description: "Produksi topi custom untuk merchandise, seragam, komunitas, dan acara promosi.",
    materials: ["Twill", "Drill", "Rafel", "Jaring Trucker"],
    customOptions: ["Bordir 2D", "Bordir 3D", "Sablon DTF"],
    minOrder: "1 Pcs",
    eta: "7 - 14 Hari Kerja",
    sizes: ["All Size"],
    price: "Hubungi Admin"
  },
  {
    id: 10,
    name: "Mug dan Tumbler Custom",
    image: "/assets/katalog-mug.png",
    description: "Cetak mug dan tumbler custom untuk hadiah, merchandise, corporate gift, dan acara.",
    materials: ["Mug Keramik", "Tumbler Stainless"],
    customOptions: ["Foto Custom", "Logo Custom", "Tulisan Custom"],
    minOrder: "1 Pcs",
    eta: "3 - 7 Hari Kerja",
    sizes: ["Standar"],
    price: "Hubungi Admin"
  }
];

export const orders: OrderTracking[] = [
  {
    orderId: "MI-7821",
    customerName: "Fajar Pratama",
    teamName: "Garuda FC Tangerang",
    productName: "Jersey Sepak Bola Sublim Full Print",
    quantity: 24,
    orderDate: "3 September 2026",
    estimatedCompletion: "8 September 2026",
    currentPhase: "printing",
    phasePercentage: 45,
    statusTitle: "Tahap Printing Sublim & Heat Press",
    notes: "Kertas sublimasi telah dicetak dengan tinta original Epson Hi-Definition. Saat ini proses transfer panas (heat press roll) ke kain Milano Anti-UV.",
    details: {
      material: "Dry-fit Milano 150gsm",
      model: "Jersey Setelan (Baju + Celana)",
      collar: "V-Neck Rib Hitam",
      sleeve: "Lengan Pendek"
    },
    timeline: [
      {
        phase: "queue",
        title: "Konfirmasi Desain & Antrean",
        date: "3 Sep 2026, 09:30 WIB",
        completed: true,
        current: false,
        description: "Mockup vector dan data nama/nomor pemain disetujui."
      },
      {
        phase: "printing",
        title: "Printing Sublim & Press",
        date: "5 Sep 2026, 14:15 WIB",
        completed: false,
        current: true,
        description: "Pencetakan pola jersey pada kain dan proses sublimasi suhu 200°C."
      },
      {
        phase: "sewing",
        title: "Cutting & Jahit (Sewing)",
        date: "Estimasi: 6 Sep 2026",
        completed: false,
        current: false,
        description: "Pemotongan pola presisi dan perakitan jahit kumis/rantai."
      },
      {
        phase: "shipping",
        title: "QC & Pengiriman (Shipping)",
        date: "Estimasi: 8 Sep 2026",
        completed: false,
        current: false,
        description: "Pemeriksaan kualitas akhir, steam uap, dan pengiriman."
      }
    ]
  },
  {
    orderId: "MI-6540",
    customerName: "Rian Hendrawan",
    teamName: "Bintang Muda Volleyball Club",
    productName: "Jersey Voli Custom Full Print",
    quantity: 18,
    orderDate: "1 September 2026",
    estimatedCompletion: "6 September 2026",
    currentPhase: "sewing",
    phasePercentage: 75,
    statusTitle: "Tahap Cutting Pola & Penjahitan (Sewing)",
    notes: "Semua lembaran kain sublim telah lolos inspeksi warna dan kini sedang dirakit di lini penjahitan (pasang kerah O-neck & jahit obras benang katun 4 benang).",
    details: {
      material: "Dry-fit Benzema Breathable",
      model: "Atasan Jersey Voli Tanpa Lengan",
      collar: "O-Neck Solid Navy",
      sleeve: "Sleeveless"
    },
    timeline: [
      {
        phase: "queue",
        title: "Konfirmasi Desain & Antrean",
        date: "1 Sep 2026, 11:00 WIB",
        completed: true,
        current: false,
        description: "Data pemain dan sponsor dada telah disetujui."
      },
      {
        phase: "printing",
        title: "Printing Sublim & Press",
        date: "3 Sep 2026, 16:30 WIB",
        completed: true,
        current: false,
        description: "Pewarnaan sublimasi selesai dengan warna cerah dan tajam."
      },
      {
        phase: "sewing",
        title: "Cutting & Jahit (Sewing)",
        date: "5 Sep 2026, 10:00 WIB",
        completed: false,
        current: true,
        description: "Kain sedang dijahit oleh operator konveksi profesional."
      },
      {
        phase: "shipping",
        title: "QC & Pengiriman (Shipping)",
        date: "Estimasi: 6 Sep 2026",
        completed: false,
        current: false,
        description: "Quality control benang, packing satuan, dan kirim."
      }
    ]
  },
  {
    orderId: "MI-5120",
    customerName: "Agus Setiawan",
    teamName: "Komunitas Gowes Serpong BSD",
    productName: "Jersey Sepeda Roadbike Zipper",
    quantity: 32,
    orderDate: "28 Agustus 2026",
    estimatedCompletion: "5 September 2026",
    currentPhase: "shipping",
    phasePercentage: 95,
    statusTitle: "Tahap Pengiriman (Shipping) / Siap Diambil",
    notes: "Produksi selesai 100%. Telah melewati QC ketat, dipacking plastik polybag ziplock per ukuran, dan telah diserahkan ke kurir ekspedisi (No. Resi: JT9928192301).",
    details: {
      material: "Dry-fit Brazil Premium + Mesh Ventilasi",
      model: "Jersey Sepeda Resleting Depan Penuh",
      collar: "Kerah Stand Collar",
      sleeve: "Lengan Pendek + 3 Kantong Belakang"
    },
    timeline: [
      {
        phase: "queue",
        title: "Konfirmasi Desain & Antrean",
        date: "28 Ags 2026, 10:20 WIB",
        completed: true,
        current: false,
        description: "Desain jersey sepeda dan ukuran disetujui."
      },
      {
        phase: "printing",
        title: "Printing Sublim & Press",
        date: "30 Ags 2026, 15:40 WIB",
        completed: true,
        current: false,
        description: "Hasil cetak tajam dengan gradasi presisi tinggi."
      },
      {
        phase: "sewing",
        title: "Cutting & Jahit (Sewing)",
        date: "2 Sep 2026, 17:00 WIB",
        completed: true,
        current: false,
        description: "Pemasangan ritsleting YKK dan saku belakang tuntas."
      },
      {
        phase: "shipping",
        title: "QC & Pengiriman (Shipping)",
        date: "5 Sep 2026, 09:15 WIB",
        completed: true,
        current: true,
        description: "Paket telah dikirim via ekspedisi J&T Cargo."
      }
    ]
  },
  {
    orderId: "MI-9042",
    customerName: "Budi Santoso",
    teamName: "Wolves E-Sport Academy",
    productName: "Jersey Esport Sublim Hoodie",
    quantity: 15,
    orderDate: "4 September 2026",
    estimatedCompletion: "10 September 2026",
    currentPhase: "printing",
    phasePercentage: 35,
    statusTitle: "Tahap Layout & Printing Sublimasi",
    notes: "File desain vector telah lolos kalibrasi warna RGB ke CMYK sublim. Sedang masuk mesin plotter printer industri hari ini.",
    details: {
      material: "Dry-fit Pique Diamond",
      model: "Jersey Gamers Kombinasi Hoodie",
      collar: "Hoodie Drawstring",
      sleeve: "Lengan Panjang Rib"
    },
    timeline: [
      {
        phase: "queue",
        title: "Konfirmasi Desain & Antrean",
        date: "4 Sep 2026, 13:00 WIB",
        completed: true,
        current: false,
        description: "Desain nickname dan logo sponsor verified."
      },
      {
        phase: "printing",
        title: "Printing Sublim & Press",
        date: "5 Sep 2026, 11:30 WIB",
        completed: false,
        current: true,
        description: "Proses print kertas sublim & press kain."
      },
      {
        phase: "sewing",
        title: "Cutting & Jahit (Sewing)",
        date: "Estimasi: 7 Sep 2026",
        completed: false,
        current: false,
        description: "Jahit potongan hoodie dan manset lengan."
      },
      {
        phase: "shipping",
        title: "QC & Pengiriman (Shipping)",
        date: "Estimasi: 10 Sep 2026",
        completed: false,
        current: false,
        description: "Packing dan pengiriman pesanan."
      }
    ]
  }
];

