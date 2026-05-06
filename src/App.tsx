/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Truck, 
  Leaf, 
  ShieldCheck, 
  PhoneCall, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  ChevronRight,
  ChefHat,
  MapPin,
  Users
} from "lucide-react";

// --- Types ---
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
}

// --- Components ---

const TopBanner = () => (
  <div className="bg-gold text-black py-2 px-6 flex justify-between items-center text-[11px] font-bold tracking-tight">
    <div className="flex items-center gap-2">
       <Truck size={14} />
       <span>Free delivery on orders above ₹499</span>
    </div>
    <div className="hidden sm:flex gap-6">
      <a href="#" className="hover:opacity-70 transition-opacity">About Us</a>
      <a href="#" className="hover:opacity-70 transition-opacity">Blog</a>
      <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
    </div>
  </div>
);

const Logo = () => (
  <div className="flex flex-col items-start cursor-pointer group">
    <div className="relative border-2 border-gold p-1 bg-black group-hover:scale-105 transition-transform">
      <div className="bg-gold text-black p-1">
        <ChefHat size={24} strokeWidth={2.5} />
      </div>
      <span className="absolute -top-1 -right-4 text-[7px] font-black text-gold">TM</span>
    </div>
    <div className="mt-1">
      <h1 className="text-xl font-black tracking-[-0.05em] text-white leading-none group-hover:text-gold transition-colors">
        HEAVEN <span className="block text-[10px] tracking-[0.2em] font-bold opacity-80">BAKERS</span>
      </h1>
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold uppercase tracking-wider text-white">
          <a href="#" className="text-gold border-b-2 border-gold pb-0.5">Home</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gold transition-colors">
            Shop <ChevronDown size={14} />
          </div>
          <a href="#" className="hover:text-gold transition-colors">Cakes</a>
          <a href="#" className="hover:text-gold transition-colors">Sweets</a>
          <a href="#" className="hover:text-gold transition-colors">Snacks</a>
          <a href="#" className="hover:text-gold transition-colors">Custom Cakes</a>
          <a href="#" className="hover:text-gold transition-colors">Offers</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="text-white hover:text-gold transition-colors"><Search size={22} /></button>
          <button className="text-white hover:text-gold transition-colors"><User size={22} /></button>
          <div className="relative group cursor-pointer">
            <ShoppingBag size={22} className="text-white group-hover:text-gold transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-neutral-900 border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              {['Home', 'Shop', 'Cakes', 'Sweets', 'Snacks', 'Custom Cakes', 'Offers'].map(i => (
                <a key={i} href="#" className="hover:text-gold">{i}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative bg-black min-h-[70vh] flex items-center overflow-hidden py-16">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-gold/5 via-transparent to-transparent pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl md:text-[80px] font-black leading-[1] mb-8 tracking-tighter">
          MADE WITH LOVE, <br />
          <span className="text-gold uppercase">Baked for you</span>
          <span className="text-gold ml-4 inline-block text-4xl">💛</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed font-medium">
          Freshly baked cakes, delicious sweets, and tasty treats for every celebration.
        </p>
        <button className="bg-gold text-black px-8 py-3.5 font-black text-sm uppercase tracking-wider rounded-sm flex items-center gap-2 hover:bg-white transition-all transform active:scale-95 group">
          SHOP NOW <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
            alt="Hero Cake" 
            className="w-[320px] md:w-[500px] object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionHeading = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex items-center justify-center gap-4 mb-12">
    <div className={`h-px grow max-w-[40px] ${light ? 'bg-white/20' : 'bg-gold/40'}`} />
    <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-[0.25em] ${light ? 'text-white' : 'text-gold'}`}>
      {children}
    </h2>
    <div className={`h-px grow max-w-[40px] ${light ? 'bg-white/20' : 'bg-gold/40'}`} />
  </div>
);

const CategoryCard = ({ title, image }: { title: string; image: string; key?: any }) => (
  <div className="group cursor-pointer">
    <div className="aspect-square bg-card-bg rounded-xl overflow-hidden border border-white/5 group-hover:border-gold/50 transition-all mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
    </div>
    <h3 className="text-center font-black uppercase text-[11px] tracking-widest text-white/90 group-hover:text-gold transition-colors">{title}</h3>
  </div>
);

const ProductCard = ({ product }: { product: Product; key?: any }) => (
  <div className="bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-gold/30 transition-all">
    <div className="aspect-[5/4] overflow-hidden relative">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">{product.category}</p>
      </div>
    </div>
    <div className="p-5">
      <h4 className="font-bold text-[17px] mb-1 line-clamp-1">{product.name}</h4>
      <p className="text-[11px] text-white/50 mb-4 line-clamp-1 italic">{product.description}</p>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-black text-white">₹{product.price}</span>
          <span className="text-[10px] text-white/30 ml-1 font-bold">/{product.unit === 'per cake' ? 'cake' : 'kg'}</span>
        </div>
        <button className="bg-gold text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const StorySection = () => (
  <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    <div>
      <SectionHeading light>Our Story</SectionHeading>
      <p className="text-lg leading-relaxed text-white/80 font-medium mb-10">
        Heaven Bakers brings you the perfect blend of tradition and taste. From our ovens to your heart, we bake happiness in every bite.
      </p>
      <button className="bg-gold text-black px-10 py-3 font-black text-xs uppercase tracking-widest group flex items-center gap-2 hover:bg-white transition-colors">
        Know More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
    <div className="relative">
      <div className="absolute inset-0 border-[3px] border-gold translate-x-4 translate-y-4 -z-10" />
      <img 
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" 
        alt="Baking" 
        className="w-full h-[400px] object-cover transition-all duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-6 py-4 border border-gold">
            <h1 className="text-3xl font-black text-gold">HEAVEN</h1>
            <div className="h-8 w-px bg-gold/50" />
            <p className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Bakers</p>
         </div>
      </div>
    </div>
  </section>
);

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex flex-col items-center text-center gap-4 group">
    <div className="text-gold group-hover:scale-110 transition-transform transform translate-y-0 group-hover:-translate-y-1">
      {icon}
    </div>
    <div>
      <h5 className="font-black text-xs uppercase tracking-widest text-gold mb-1">{title}</h5>
      <p className="text-[11px] text-white/50 font-bold uppercase tracking-tighter">{desc}</p>
    </div>
  </div>
);

const CompanyDetails = () => (
  <section className="py-24 bg-[#050505] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading light>Company Infrastructure</SectionHeading>
      
      <div className="grid lg:grid-cols-3 gap-12 mt-16">
        {/* Showroom */}
        <div className="space-y-6">
          <div className="aspect-[16/10] overflow-hidden border border-white/10 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800" 
              alt="Heaven Bakers Showroom" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2 mb-2">
              <Star size={16} /> Flagship Showroom
            </h4>
            <p className="text-white/50 text-xs leading-relaxed font-bold uppercase tracking-tighter">
              Experience our divine collection in a luxurious environment designed for the modern connoisseur.
            </p>
          </div>
        </div>

        {/* Head Office */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-xl flex flex-col justify-center">
          <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2 mb-6">
            <MapPin size={16} /> Head Office
          </h4>
          <div className="space-y-4">
            <p className="text-white font-bold uppercase tracking-widest text-lg leading-tight">
              Heaven Tower, Suite 402<br />
              Cyber Hub, New Delhi<br />
              India - 110020
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Corporate Inquiries</p>
              <p className="text-gold font-black">+91 11 4567 8901</p>
              <p className="text-white/60 text-xs mt-1">corporate@heavenbakers.com</p>
            </div>
          </div>
        </div>

        {/* Directors */}
        <div className="space-y-6">
          <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2">
            <Users size={16} /> Board of Directors
          </h4>
          <div className="space-y-4">
            {[
              { name: "Siddharth Varma", role: "Managing Director" },
              { name: "Ananya Sharma", role: "Creative Director" },
              { name: "Rajesh Malhotra", role: "Director of Operations" }
            ].map((director, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-white/5 bg-black hover:border-gold/30 transition-all cursor-default group">
                <div>
                  <p className="font-black uppercase text-xs tracking-widest text-white group-hover:text-gold transition-colors">{director.name}</p>
                  <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-0.5">{director.role}</p>
                </div>
                <ChevronRight size={14} className="text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CompanyDetails = () => (
  <section className="py-24 bg-[#050505] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading light>Company Infrastructure</SectionHeading>
      
      <div className="grid lg:grid-cols-3 gap-12 mt-16">
        {/* Showroom */}
        <div className="space-y-6">
          <div className="aspect-[16/10] overflow-hidden border border-white/10 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800" 
              alt="Heaven Bakers Showroom" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2 mb-2">
              <Star size={16} /> Flagship Showroom
            </h4>
            <p className="text-white/50 text-xs leading-relaxed font-bold uppercase tracking-tighter">
              Experience our divine collection in a luxurious environment designed for the modern connoisseur.
            </p>
          </div>
        </div>

        {/* Head Office */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-xl flex flex-col justify-center">
          <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2 mb-6">
            <MapPin size={16} /> Head Office
          </h4>
          <div className="space-y-4">
            <p className="text-white font-bold uppercase tracking-widest text-lg leading-tight">
              Heaven Tower, Suite 402<br />
              Cyber Hub, New Delhi<br />
              India - 110020
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Corporate Inquiries</p>
              <p className="text-gold font-black">+91 11 4567 8901</p>
              <p className="text-white/60 text-xs mt-1">corporate@heavenbakers.com</p>
            </div>
          </div>
        </div>

        {/* Directors */}
        <div className="space-y-6">
          <h4 className="text-gold font-black uppercase text-sm tracking-widest flex items-center gap-2">
            <Users size={16} /> Board of Directors
          </h4>
          <div className="space-y-4">
            {[
              { name: "Siddharth Varma", role: "Managing Director" },
              { name: "Ananya Sharma", role: "Creative Director" },
              { name: "Rajesh Malhotra", role: "Director of Operations" }
            ].map((director, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-white/5 bg-black hover:border-gold/30 transition-all cursor-default group">
                <div>
                  <p className="font-black uppercase text-xs tracking-widest text-white group-hover:text-gold transition-colors">{director.name}</p>
                  <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-0.5">{director.role}</p>
                </div>
                <ChevronRight size={14} className="text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const categories = [
    { title: "Cakes", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=400" },
    { title: "Sweets", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=400" },
    { title: "Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400" },
    { title: "Snacks", image: "https://images.unsplash.com/photo-1626082896492-766af4eb6501?q=80&w=400" },
    { title: "Custom Cakes", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400" },
    { title: "Gift Hampers", image: "https://images.unsplash.com/photo-1549462184-b09ad0a4af2c?q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <Navbar />
      
      <main>
        <Hero />

        {/* Categories */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <SectionHeading>Shop By Category</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {categories.map(cat => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </section>

        {/* Bestsellers */}
        <section className="py-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading>Best Sellers</SectionHeading>
            {loading ? (
              <div className="text-center py-20 text-gold animate-pulse font-black uppercase tracking-widest text-xs">Loading Catalog...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {products.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Features banner />
        <CompanyDetails />
      </main>

      {/* Footer */}
      <footer className="footer-area bg-black pt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div>
            <Logo />
            <p className="text-sm text-white/40 leading-relaxed mb-8 mt-8">
              Premium sweet shop and bakery offering artisan cakes, traditional sweets, and custom treats.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-gold font-black uppercase text-sm tracking-widest mb-8">Quick Links</h4>
             <ul className="text-white/40 space-y-4 text-sm font-bold uppercase tracking-tight">
               <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Cakes</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Sweets</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-gold font-black uppercase text-sm tracking-widest mb-8">Customer Service</h4>
             <ul className="text-white/40 space-y-4 text-sm font-bold uppercase tracking-tight">
               <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Refund & Returns</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-gold font-black uppercase text-sm tracking-widest mb-8">Newsletter</h4>
             <p className="text-white/40 text-[13px] mb-6">Subscribe to get updates on new products and offers.</p>
             <div className="flex gap-2">
               <input type="text" placeholder="Enter your email" className="bg-white/5 border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-gold grow" />
               <button className="bg-gold text-black px-6 py-2.5 font-black text-xs uppercase hover:bg-white transition-colors">Subscribe</button>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/30 font-bold uppercase tracking-widest">© 2026 Heaven Bakers. All Rights Reserved.</p>
            <div className="flex gap-4 opacity-80 group transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" className="h-4 bg-white px-1" alt="UPI" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" className="h-4" alt="Paytm" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
