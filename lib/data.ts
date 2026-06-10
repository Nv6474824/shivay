export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
  efficiency?: string;
  specs: string[];
  inStock: boolean;
};

export const products: Product[] = [
  // Cooling & Heating - ACs
  { id: 'ac1', name: '1.5 Ton 5-Star Split Inverter AC', category: 'Cooling & Heating', brand: 'Daikin', price: 42500, mrp: 52000, description: 'Beat the heat with this highly efficient 5-star inverter AC. Features PM 2.5 filter and fast cooling technology.', image: 'https://images.unsplash.com/photo-1622313762347-1944dfbb4471?auto=format&fit=crop&q=80&w=500', efficiency: '5-Star', specs: ['1.5 Ton', 'Inverter', 'PM 2.5 Filter'], inStock: true },
  { id: 'ac2', name: '1.5 Ton 3-Star Window AC', category: 'Cooling & Heating', brand: 'Voltas', price: 29500, mrp: 35000, description: 'Durable window AC perfect for medium sized rooms. Turbo cooling and auto swing.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b42fa00b3?auto=format&fit=crop&q=80&w=500', efficiency: '3-Star', specs: ['1.5 Ton', 'Window', 'Turbo Mode'], inStock: true },
  { id: 'ac3', name: '1.0 Ton 4-Star Split AC', category: 'Cooling & Heating', brand: 'LG', price: 34000, mrp: 41000, description: 'Quiet and efficient cooling for small bedrooms. Dual inverter compressor.', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a016?auto=format&fit=crop&q=80&w=500', efficiency: '4-Star', specs: ['1.0 Ton', 'Dual Inverter'], inStock: true },

  // Cooling & Heating - Coolers
  { id: 'cool1', name: '65L Desert Air Cooler', category: 'Cooling & Heating', brand: 'Crompton', price: 11500, mrp: 14500, description: 'Heavy duty desert cooler with high air delivery and honeycomb cooling pads.', image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&q=80&w=500', specs: ['65 Liters', 'Honeycomb Pad', 'Motorized Louvers'], inStock: true },
  { id: 'cool2', name: '50L Tower Air Cooler', category: 'Cooling & Heating', brand: 'Symphony', price: 8500, mrp: 10500, description: 'Space-saving tower cooler for focused airflow in modern living rooms.', image: 'https://images.unsplash.com/photo-1620619864222-1caea939aadd?auto=format&fit=crop&q=80&w=500', specs: ['50 Liters', 'Blower Fan', 'Castor Wheels'], inStock: true },
  { id: 'cool3', name: '40L Personal Cooler', category: 'Cooling & Heating', brand: 'Kenstar', price: 6200, mrp: 7500, description: 'Compact personal cooler for study tables or small corners.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500', specs: ['40 Liters', 'Inverter Compatible'], inStock: true },

  // Fans
  { id: 'fan1', name: 'Stealth BLDC Ceiling Fan', category: 'Cooling & Heating', brand: 'Havells', price: 3200, mrp: 4500, description: 'Energy saving BLDC fan with remote control. Silent operation and high speed.', image: 'https://images.unsplash.com/photo-1565151443833-2940ca5062a7?auto=format&fit=crop&q=80&w=500', efficiency: 'BLDC', specs: ['1200mm', 'Remote Control', 'Low Power'], inStock: true },
  { id: 'fan2', name: 'Aeroquiet Ceiling Fan', category: 'Cooling & Heating', brand: 'Orient', price: 2900, mrp: 3800, description: 'Aerodynamic blade design for maximum air delivery with reduced noise.', image: 'https://images.unsplash.com/photo-1617471206124-7e045447fb5c?auto=format&fit=crop&q=80&w=500', specs: ['1200mm', 'Anti-Dust', 'High Air Delivery'], inStock: true },
  { id: 'fan3', name: 'Heavy Duty Farata Fan', category: 'Cooling & Heating', brand: 'Orient', price: 2800, mrp: 3500, description: 'Powerful farata pedestal fan for large halls and outdoor setups.', image: 'https://images.unsplash.com/photo-1603524675549-b69c3a372e12?auto=format&fit=crop&q=80&w=500', specs: ['High Speed', 'Heavy Base', 'Sweep 500mm'], inStock: true },

  // Home Appliances - Fridges
  { id: 'fri1', name: '190L Single Door Refrigerator', category: 'Home Appliances', brand: 'Samsung', price: 16500, mrp: 19500, description: 'Economical single door fridge for small families. Runs on home inverters.', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=500', efficiency: '4-Star', specs: ['190 Liters', 'Direct Cool', 'Stabilizer Free'], inStock: true },
  { id: 'fri2', name: '256L Double Door Frost Free', category: 'Home Appliances', brand: 'LG', price: 26000, mrp: 32000, description: 'Smart inverter double door fridge with convertible freezer options.', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=500', efficiency: '3-Star', specs: ['256 Liters', 'Frost Free', 'Convertible'], inStock: true },
  
  // Home Appliances - Others
  { id: 'iron1', name: '1000W Dry Iron', category: 'Home Appliances', brand: 'Philips', price: 950, mrp: 1100, description: 'Classic lightweight dry iron with non-stick soleplate and thermal fuse.', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=500', specs: ['1000W', 'Non-stick', 'Lightweight'], inStock: true },
  { id: 'iron2', name: '1200W Steam Iron', category: 'Home Appliances', brand: 'Bajaj', price: 1450, mrp: 1800, description: 'Removes stubborn creases easily with powerful steam bursts.', image: 'https://images.unsplash.com/photo-1546736203-34e85744cb48?auto=format&fit=crop&q=80&w=500', specs: ['1200W', 'Steam Burst', 'Self Clean'], inStock: true },
  { id: 'gey1', name: '25L Storage Geyser', category: 'Home Appliances', brand: 'Crompton', price: 8200, mrp: 10500, description: 'Rust-proof tank with fast heating technology and multi-level safety.', image: 'https://images.unsplash.com/photo-1628169991206-bd8853b00085?auto=format&fit=crop&q=80&w=500', efficiency: '5-Star', specs: ['25 Liters', 'Rust Proof', 'Nano Polybond'], inStock: true },

  // Kitchen Appliances
  { id: 'mix1', name: '750W Mixer Grinder (3 Jars)', category: 'Kitchen Appliances', brand: 'Bajaj', price: 3500, mrp: 4500, description: 'Sturdy copper motor mixer grinder with multi-purpose stainless steel jars.', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=500', specs: ['750W', 'Copper Motor', '3 Jars'], inStock: true },
  { id: 'mix2', name: '1000W Heavy Duty Grinder', category: 'Kitchen Appliances', brand: 'Prestige', price: 5200, mrp: 6500, description: 'Designed for tough grinding needs. Commercial grade performance in your kitchen.', image: 'https://images.unsplash.com/photo-1614059088654-e0c1b48b52e3?auto=format&fit=crop&q=80&w=500', specs: ['1000W', '4 Jars', 'Juicer'], inStock: true },
  { id: 'pur1', name: 'RO + UV Water Purifier', category: 'Kitchen Appliances', brand: 'Havells', price: 14500, mrp: 18500, description: '8 stage purification system ensuring completely safe and mineral-rich drinking water.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=500', specs: ['8 Stage RO+UV', 'Alkaline Taste Enhancer', '7L Tank'], inStock: true },
  { id: 'stov1', name: '3 Burner Glass Top Gas Stove', category: 'Kitchen Appliances', brand: 'Prestige', price: 4200, mrp: 5500, description: 'Elegant toughened glass top with heavy brass burners for efficient cooking.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=500', specs: ['Toughened Glass', 'Brass Burners', 'Spill-proof'], inStock: true },
  { id: 'stov2', name: '4 Burner Auto Ignition Stove', category: 'Kitchen Appliances', brand: 'Prestige', price: 6500, mrp: 8200, description: 'Premium 4-burner setup with automatic ignition system for modern kitchens.', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=500', specs: ['4 Burners', 'Auto Ignition', 'Glass Top'], inStock: true },

  // Entertainment & Lighting
  { id: 'tv1', name: '55" 4K Smart LED TV', category: 'Entertainment', brand: 'Samsung', price: 54000, mrp: 72000, description: 'Immersive 4K UHD viewing experience with vibrant colors and smart TV features.', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=500', specs: ['4K UHD', 'Tizen OS', 'Dolby Digital'], inStock: true },
  { id: 'tv2', name: '43" Full HD Smart TV', category: 'Entertainment', brand: 'LG', price: 29500, mrp: 38000, description: 'Perfect size for bedrooms with WebOS and built-in streaming apps.', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500', specs: ['FHD', 'WebOS', 'DTS Virtual:X'], inStock: true },
  { id: 'ht1', name: '5.1 Channel Home Theatre', category: 'Entertainment', brand: 'Samsung', price: 18000, mrp: 24000, description: 'Deep bass and crystal clear surround sound for the ultimate movie experience.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=500', specs: ['Bluetooth', 'Deep Bass', '5.1 Channel'], inStock: true },
  { id: 'lgt1', name: '9W Smart LED Bulb Config', category: 'Entertainment', brand: 'Philips', price: 800, mrp: 1200, description: 'App-controlled Wi-Fi bulb with 16 million colors and dimming features.', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=500', efficiency: 'Energy Saving', specs: ['Wi-Fi', '16M Colors', 'Voice Control'], inStock: true },
  { id: 'lgt2', name: '20W LED Tube Light', category: 'Entertainment', brand: 'Philips', price: 350, mrp: 500, description: 'Bright white light with anti-glare technology for eye comfort.', image: 'https://images.unsplash.com/photo-1582260275825-9aebe24dd7ef?auto=format&fit=crop&q=80&w=500', specs: ['20W', 'Cool Daylight', 'Anti-Glare'], inStock: true },
];

export const brands = ['All', 'Crompton', 'Havells', 'Orient', 'Philips', 'Bajaj', 'Samsung', 'Daikin', 'Prestige', 'LG', 'Voltas', 'Kenstar', 'Symphony'];
export const categories = ['All', 'Cooling & Heating', 'Home Appliances', 'Kitchen Appliances', 'Entertainment'];

export const testimonials = [
  { id: 1, name: 'Rahul Sharma', text: 'Excellent after-sales support by Deepak bhai. Bought an AC and the installation was done the very next day. Highly recommended!', rating: 5 },
  { id: 2, name: 'Sneha Gupta', text: 'Best prices in Ratangarh. I compared their cooler prices with online sites, and Shivaay Electronics gave a better deal with instant delivery.', rating: 5 },
  { id: 3, name: 'Amit Singh', text: 'Very genuine products and great behavior. Bought my smart TV from here. Deep bhai explained all features properly.', rating: 5 },
];
