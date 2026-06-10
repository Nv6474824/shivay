import type {Metadata} from 'next';
import './globals.css';
import { AppProvider } from '@/lib/context';

export const metadata: Metadata = {
  title: 'Shivaay Electronics | Ratangarh',
  description: 'Premium Electronics Store in Ratangarh. Smart Home, Appliances, and more.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#030712] text-gray-100">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
