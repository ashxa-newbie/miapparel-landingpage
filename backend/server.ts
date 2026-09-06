import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { siteConfig, products, orders } from "./data";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Routes
  app.get("/api/config", (req, res) => {
    res.json(siteConfig);
  });

  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  // Order Tracking APIs
  app.get("/api/orders/samples", (req, res) => {
    const samples = orders.map((o) => ({
      orderId: o.orderId,
      customerName: o.customerName,
      productName: o.productName,
      currentPhase: o.currentPhase,
      statusTitle: o.statusTitle,
    }));
    res.json(samples);
  });

  app.get("/api/orders/:id", (req, res) => {
    const rawId = req.params.id?.trim().toUpperCase();
    if (!rawId) {
      return res.status(400).json({ error: "Nomor pesanan harus diisi" });
    }

    const order = orders.find(
      (o) => o.orderId.toUpperCase() === rawId || o.orderId.replace(/[^A-Z0-9]/g, '') === rawId.replace(/[^A-Z0-9]/g, '')
    );

    if (!order) {
      return res.status(404).json({
        found: false,
        message: `Nomor pesanan "${req.params.id}" tidak ditemukan dalam sistem produksi aktif. Silakan periksa kembali atau hubungi admin kami untuk pengecekan manual.`,
      });
    }

    return res.json({
      found: true,
      order,
    });
  });

  // Serve static images from frontend/public if needed, though Vite handles this in dev
  // In production, Vite builds everything into dist/
  
  // Vite middleware for development & Static serving for production
  if (process.env.NODE_ENV !== "production") {
    // Mount Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
