import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock database for products
  const products = [
    {
      id: "1",
      name: "Black Forest Cake",
      category: "Cakes",
      price: 749,
      unit: "per cake",
      description: "Rich chocolate cake with cream & cherries",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Rasgulla",
      category: "Sweets",
      price: 299,
      unit: "per kg",
      description: "Soft & juicy cottage cheese delight",
      image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "3",
      name: "Kaju Katli",
      category: "Sweets",
      price: 599,
      unit: "per kg",
      description: "Premium cashew sweets",
      image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "4",
      name: "Butter Cookies",
      category: "Cookies",
      price: 249,
      unit: "per box",
      description: "Crispy & buttery cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "5",
      name: "Veg Puff",
      category: "Snacks",
      price: 35,
      unit: "per piece",
      description: "Flaky puff with spicy vegetable filling",
      image: "https://images.unsplash.com/photo-1626082896492-766af4eb6501?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "6",
      name: "Chocolate Truffle Cake",
      category: "Cakes",
      price: 799,
      unit: "per cake",
      description: "Chocolate sponge with truffle layers",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
