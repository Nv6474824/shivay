'use client';
import { ShoppingCart, Menu, X, Phone, User, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '@/lib/context';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, setIsCartOpen } = useAppContext();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              SHIVAAY
            </span>
            <span className="text-gray-400 text-sm hidden sm:block tracking-widest uppercase mt-1">Electronics</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#catalog" className="hover:text-white transition-colors">Catalog</a>
            <a href="#calculator" className="hover:text-white transition-colors">Budget Calculator</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:9116571221" className="hidden lg:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>9116571221</span>
            </a>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-300" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 px-4 pt-2 pb-4 space-y-1 shadow-xl">
          <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About Us</a>
          <a href="#catalog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Catalog</a>
          <a href="#calculator" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Budget Calculator</a>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
              <Phone className="w-5 h-5" /> 9116571221
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
              <User className="w-5 h-5" /> Deepak Verma
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400">
              <MapPin className="w-5 h-5" /> Near Churu Fatak, Ratangarh
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
