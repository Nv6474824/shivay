'use client';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShoppingCart, Percent, Zap, ShieldCheck } from 'lucide-react';
import { Product, products } from '@/lib/data';
import { useAppContext } from '@/lib/context';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { cart, addToCart } = useAppContext();

  if (!product) return null;

  const inCart = cart.some(item => item.id === product.id);
  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  
  // Find recommendations based on category
  const recommendations = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-gray-400 hover:text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-zinc-900 border-r border-white/5 p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                   <Percent className="w-3 h-3" /> {discountPercent}% OFF
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl mix-blend-lighten"
                />
              </div>

              {/* Details Section */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {product.brand}
                  </span>
                  {product.efficiency && (
                    <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-1 rounded">
                      {product.efficiency}
                    </span>
                  )}
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {product.name}
                </h2>
                
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-bold font-mono text-white">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg font-mono text-gray-500 line-through mb-1">
                    ₹{product.mrp.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                     <ShieldCheck className="w-6 h-6 text-indigo-400 mb-2" />
                     <p className="text-xs text-gray-400">Brand Warranty</p>
                     <p className="text-sm font-semibold text-white">100% Genuine</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                     <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                     <p className="text-xs text-gray-400">Availability</p>
                     <p className="text-sm font-semibold text-white">In Stock</p>
                  </div>
                </div>

                <button 
                  onClick={() => !inCart && addToCart(product)}
                  disabled={inCart}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${inCart ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'}`}
                >
                  {inCart ? (
                     <><Check className="w-5 h-5" /> Added to Enquiry Cart</>
                  ) : (
                     <><ShoppingCart className="w-5 h-5" /> Add to Enquiry List</>
                  )}
                </button>
              </div>
            </div>

            {/* Recommendations Section */}
            {recommendations.length > 0 && (
              <div className="bg-black/50 border-t border-white/5 p-8 md:p-10">
                <h3 className="text-xl font-bold text-white mb-6">Similar Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {recommendations.map(rec => {
                    const recInCart = cart.some(item => item.id === rec.id);
                    return (
                      <div key={rec.id} className="bg-zinc-900 border border-white/5 p-4 rounded-2xl group flex gap-4 items-center">
                        <img src={rec.image} alt={rec.name} className="w-20 h-20 bg-black rounded-lg object-contain p-1" />
                        <div className="flex-1">
                          <p className="text-xs text-blue-400 font-medium">{rec.brand}</p>
                          <h4 className="text-sm text-white font-semibold line-clamp-2 mb-1">{rec.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-300">₹{rec.price.toLocaleString('en-IN')}</span>
                            <button
                               onClick={(e) => {
                                 e.stopPropagation();
                                 if (!recInCart) addToCart(rec);
                               }}
                               disabled={recInCart}
                               className={`p-1.5 rounded-full ${recInCart ? 'bg-green-500/20 text-green-400 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`}
                            >
                              {recInCart ? <Check className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
