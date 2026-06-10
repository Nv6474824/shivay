'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Check, Info, Star, X, MessageSquare, Percent } from 'lucide-react';
import { Product, products, categories, brands, testimonials } from '@/lib/data';
import { useAppContext } from '@/lib/context';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartWidget } from '@/components/CartWidget';
import { BudgetEstimator } from '@/components/BudgetEstimator';
import { AboutSection } from '@/components/AboutSection';
import { ProductModal } from '@/components/ProductModal';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Premium Retailer in Ratangarh</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Smart Living <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Begins at Shivaay.
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Experience the best in home appliances. Exclusive deals, original products, and next-day local delivery guaranteed by Deepak Verma.
            </p>
            <div className="flex gap-4 mt-4">
               <a href="#catalog" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                 Explore Catalog
               </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Appliances"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-xl">
                 <p className="text-sm text-blue-400 font-medium mb-1">New Arrival</p>
                 <h3 className="text-2xl font-bold">Smart Inverter ACs</h3>
                 <p className="text-sm text-gray-300 mt-2">Beat the heat with 5-Star efficiency.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustMarquee() {
  const brandLogos = ['Crompton', 'Havells', 'Orient', 'Philips', 'Bajaj', 'Samsung', 'Daikin'];
  
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="inline-flex gap-24 px-12 items-center text-2xl font-bold text-gray-500 uppercase tracking-widest opacity-50"
      >
        {brandLogos.map((brand, i) => <span key={`b1-${i}`}>{brand}</span>)}
        {brandLogos.map((brand, i) => <span key={`b2-${i}`}>{brand}</span>)}
      </motion.div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-black relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Local Trust</h2>
            <p className="text-gray-400">Hear from our Ratangarh customers.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-zinc-900 border border-white/5 p-8 rounded-3xl relative">
                 <div className="flex text-yellow-500 mb-6">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                 </div>
                 <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                       <h4 className="font-semibold text-white">{t.name}</h4>
                       <p className="text-xs text-gray-500 text-green-400 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Verified Buyer
                       </p>
                    </div>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
}

function Catalog() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeBrand, setActiveBrand] = useState(brands[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart, addToCart } = useAppContext();

  const filteredProducts = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchCat && matchBrand;
  });

  return (
    <section id="catalog" className="py-24 relative z-10">
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Catalog</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === c ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <select 
              value={activeBrand} 
              onChange={(e) => setActiveBrand(e.target.value)}
              className="bg-black border border-white/20 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
            >
              <option disabled>Filter by Brand</option>
              {brands.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map(p => {
              const inCart = cart.some(item => item.id === p.id);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all flex flex-col h-full cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden flex items-center justify-center p-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-lighten transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white">
                      {p.brand}
                    </div>
                    {p.inStock && (
                      <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-md px-2 py-1 rounded text-xs font-semibold text-white flex items-center gap-1 shadow-lg">
                         <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> In Stock
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    {p.efficiency && (
                      <span className="text-xs text-blue-400 font-medium mb-2 block">{p.efficiency}</span>
                    )}
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{p.name}</h3>
                    <div className="flex items-end gap-2 mb-4 mt-auto">
                      <span className="text-xl font-bold font-mono text-gray-200">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm font-mono text-gray-500 line-through mb-0.5">
                        ₹{p.mrp.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-green-400 mb-1 ml-auto">
                         {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% OFF
                      </span>
                    </div>
                    <div className="flex gap-2 mb-4">
                      {p.specs.map((s, idx) => {
                         if (idx > 1) return null; // Only show up to 2 specs on card
                         return (
                           <span key={s} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5 flex items-center gap-1 overflow-hidden whitespace-nowrap text-ellipsis">
                             <Info className="w-3 h-3 shrink-0" /> {s}
                           </span>
                         );
                      })}
                    </div>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                      disabled={inCart}
                      className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${inCart ? 'bg-zinc-800 text-green-400 border border-green-500/30' : 'bg-white text-black hover:bg-gray-200'}`}
                    >
                      {inCart ? (
                         <><Check className="w-4 h-4" /> Added to Enquiry</>
                      ) : (
                         <><ShoppingCart className="w-4 h-4" /> Add to Enquiry List</>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const chips = [
     "Are you open today?",
     "Do you provide home delivery in Ratangarh?",
     "Need help choosing an AC"
  ];

  const handleChip = (text: string) => {
    window.open(`https://wa.me/918504088421?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-zinc-900 border border-white/10 p-5 rounded-2xl shadow-2xl origin-bottom-right"
          >
             <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
               <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">SV</span>
               </div>
               <div>
                  <h4 className="text-white font-medium text-sm">Shivaay Electronics</h4>
                  <p className="text-xs text-green-400">Online</p>
               </div>
             </div>
             <p className="text-sm text-gray-300 mb-4 bg-black p-3 rounded-xl rounded-tl-none border border-white/5">
                Hi! 👋 How can we help you today?
             </p>
             <div className="space-y-2">
               {chips.map((chip, i) => (
                 <button 
                   key={i} 
                   onClick={() => handleChip(chip)}
                   className="w-full text-left text-xs bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-lg transition-colors border border-white/10"
                 >
                   {chip}
                 </button>
               ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center transition-transform hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] font-sans selection:bg-blue-500/30">
      <Header />
      <HeroSection />
      <TrustMarquee />
      <Catalog />
      <BudgetEstimator />
      <Testimonials />
      <AboutSection />
      <Footer />
      <CartWidget />
      <WhatsAppFloating />
    </main>
  );
}
