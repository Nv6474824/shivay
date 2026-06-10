import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "name": "Shivaay Electronics",
    "image": "https://picsum.photos/seed/shivaay/800/600",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Churu Fatak, Near Guru Kripa School",
      "addressLocality": "Ratangarh",
      "postalCode": "331022",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "telephone": "+919116571221",
    "url": "https://www.instagram.com/shivaay__electronics__?igsh=bzNjZTk4M2p2cXVo"
  };

  return (
    <footer className="bg-zinc-950 text-gray-400 py-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-4 inline-block">
              SHIVAAY
            </span>
            <p className="mb-4 text-gray-500">
              Smart Living Begins Here. Your trusted destination for premium electronics and home appliances in Ratangarh.
            </p>
            <p>Proprietor: <strong className="text-gray-300">Deepak Verma</strong></p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Near Churu Fatak, Near Guru Kripa School,<br/>Ratangarh (Zip: 331022)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="tel:9116571221" className="hover:text-white transition-colors">9116571221</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:itsanonymous@gmail.com" className="hover:text-white transition-colors">itsanonymous@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <a 
              href="https://www.instagram.com/shivaay__electronics__?igsh=bzNjZTk4M2p2cXVo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Shivaay Electronics. All rights reserved.</p>
        </div>
      </div>
      
      {/* JSON-LD LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </footer>
  );
}
