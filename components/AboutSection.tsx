'use client';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Headphones, ThumbsUp } from 'lucide-react';

export function AboutSection() {
  const features = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, title: 'Genuine Products', desc: '100% original electronics with official brand warranty.' },
    { icon: <Truck className="w-8 h-8 text-green-400" />, title: 'Fast Local Delivery', desc: 'Next-day delivery available across Ratangarh region.' },
    { icon: <Headphones className="w-8 h-8 text-indigo-400" />, title: 'Premium Support', desc: 'Direct assistance by Deepak Verma for any product queries.' },
    { icon: <ThumbsUp className="w-8 h-8 text-pink-400" />, title: 'Best Price Guarantee', desc: 'Unbeatable competitive prices compared to online stores.' },
  ];

  return (
    <section id="about" className="py-24 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Shivaay Electronics</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Located near Churu Fatak, Ratangarh, Shivaay Electronics is your trusted local destination for premium home and kitchen appliances. Run by Deepak Verma, we focus on providing top-tier brands like Daikin, Samsung, LG, and Crompton directly to your home.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We believe in building long-term trust in our community. That's why we don't just sell boxes; we ensure proper installation, post-sales support, and genuine guidance so you make the perfect choice for your home.
            </p>
            <div className="flex gap-4">
               <a href="tel:9116571221" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                 Call Deepak Verma
               </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
              >
                <div className="mb-4 bg-black w-14 h-14 rounded-xl flex items-center justify-center shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
