'use client';

import { useState } from 'react';
import { MessageSquare, Calculator, Zap, Cpu } from 'lucide-react';

const homeAppliances = [
  { id: 'ac15', name: '1.5 Ton AC', kw: 1.5, minPrice: 35000, maxPrice: 45000, icon: <Zap className="w-4 h-4" /> },
  { id: 'cooler', name: 'Desert Cooler', kw: 0.2, minPrice: 8000, maxPrice: 15000, icon: <Zap className="w-4 h-4" /> },
  { id: 'fan', name: 'Ceiling Fan (BLDC)', kw: 0.03, minPrice: 2800, maxPrice: 4000, icon: <Zap className="w-4 h-4" /> },
  { id: 'tv', name: '55" Smart TV', kw: 0.15, minPrice: 45000, maxPrice: 65000, icon: <Cpu className="w-4 h-4" /> },
  { id: 'mixer', name: 'Mixer Grinder', kw: 0.75, minPrice: 2500, maxPrice: 4500, icon: <Cpu className="w-4 h-4" /> },
  { id: 'fridge', name: 'Double Door Fridge', kw: 0.3, minPrice: 25000, maxPrice: 35000, icon: <Zap className="w-4 h-4" /> },
];

export function BudgetEstimator() {
  const [selectedItems, setSelectedItems] = useState<{ id: string; qty: number }[]>([]);

  const handleToggle = (id: string) => {
    setSelectedItems((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) return prev.filter((item) => item.id !== id);
      return [...prev, { id, qty: 1 }];
    });
  };

  const selectedData = selectedItems.map((sel) => {
    const appliance = homeAppliances.find((a) => a.id === sel.id)!;
    return { ...appliance, qty: sel.qty };
  });

  const totalKw = selectedData.reduce((acc, item) => acc + item.kw * item.qty, 0);
  const minBudget = selectedData.reduce((acc, item) => acc + item.minPrice * item.qty, 0);
  const maxBudget = selectedData.reduce((acc, item) => acc + item.maxPrice * item.qty, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppSend = () => {
    let msg = `Hello Deepak Verma! I used the Smart Home Budget Estimator on your website. Here is my planned setup:\n\n`;
    selectedData.forEach((item) => {
      msg += `- ${item.name} (Qty: ${item.qty})\n`;
    });
    msg += `\nEstimated Load: ${totalKw.toFixed(1)} kW\nEstimated Budget: ${formatCurrency(minBudget)} to ${formatCurrency(maxBudget)}\n\nPlease advise on the best brands for this setup!`;
    window.open(`https://wa.me/918504088421?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const isFormEmpty = selectedItems.length === 0;

  return (
    <section id="calculator" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Smart Home Budget Estimator</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Plan your upcoming home upgrade. Select the appliances you need, and we'll calculate the estimated power load and budget matrix.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mx-32 -mt-32" />
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              Select Appliances
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {homeAppliances.map((item) => {
                const isSelected = selectedItems.some((sel) => sel.id === item.id);
                return (
                  <label key={item.id} className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-blue-500/10 border-blue-500/50' : 'bg-black/50 border-white/5 hover:border-white/20'} border`}>
                    <input 
                      type="checkbox" 
                      className="mt-1 w-4 h-4 rounded border-gray-600 bg-zinc-800 text-blue-500 focus:ring-blue-500/20"
                      checked={isSelected}
                      onChange={() => handleToggle(item.id)}
                    />
                    <div>
                      <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{item.kw} kW estimated load</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl -mx-24 -mb-24 pointer-events-none" />
               <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Estimations</h3>
               
               <div className="mb-8">
                 <p className="text-sm text-gray-400 mb-2">Estimated Power Load</p>
                 <div className="flex items-end gap-2">
                   <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                     {totalKw.toFixed(2)}
                   </span>
                   <span className="text-xl text-gray-500 mb-1">kW</span>
                 </div>
               </div>

               <div className="mb-8">
                 <p className="text-sm text-gray-400 mb-2">Estimated Budget Range</p>
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">
                     {formatCurrency(minBudget)}
                   </span>
                   <span className="text-sm text-gray-500 mt-1">To {formatCurrency(maxBudget)}</span>
                 </div>
               </div>

               <button 
                 onClick={handleWhatsAppSend}
                 disabled={isFormEmpty}
                 className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${isFormEmpty ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'}`}
               >
                 <MessageSquare className="w-5 h-5" />
                 Send Custom Setup directly to Deepak Verma
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
