'use client';

import { X, MessageSquare, Plus, Minus, Trash2 } from 'lucide-react';
import { useAppContext } from '@/lib/context';

export function CartWidget() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useAppContext();

  if (!isCartOpen) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const formatWhatsAppMessage = () => {
    let msg = `Hello Shivaay Electronics! I am planning a purchase. Please check the availability and best pricing for the following items:\n\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} - ${item.brand} (Qty: ${item.quantity})\n`;
    });
    msg += `\nPlease let me know if these are available!`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSend = () => {
    window.open(`https://wa.me/918504088421?text=${formatWhatsAppMessage()}`, '_blank');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]" 
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-zinc-950 border-l border-white/10 shadow-2xl z-[70] flex flex-col pt-20">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Enquiry Cart
            <span className="bg-blue-500/20 text-blue-400 text-sm px-2 py-0.5 rounded-full">{totalItems}</span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Your enquiry list is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-zinc-900 border border-white/5 rounded-xl p-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-zinc-800" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white line-clamp-2">{item.name}</h4>
                  <p className="text-xs text-blue-400 mt-1">{item.brand}</p>
                  
                  <div className="flex items-center justify-between flex-wrap mt-3">
                    <div className="flex items-center gap-3 bg-zinc-950 rounded-lg border border-white/10 px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="text-gray-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-gray-200 min-w-[1.5rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-950">
            <button 
              onClick={handleWhatsAppSend}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-black font-semibold px-6 py-4 rounded-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Send Enquiry via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              This will open WhatsApp and format your request into a message to Deepak Verma.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
