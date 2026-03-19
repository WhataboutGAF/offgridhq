
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OFFGRID HQ | Level Up Your Internet',
  description: 'High-performance nodes and bespoke architectural engineering for the modern creative.',
};

import CustomCursor from '@/components/layout/CustomCursor';
import VisualEffects from '@/components/layout/VisualEffects';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full selection:bg-accent selection:text-accent-foreground bg-background md:cursor-none">
        <CustomCursor />
        <VisualEffects />
        <div className="min-h-full w-full overflow-x-hidden relative">
          {children}
        </div>
      </body>
    </html>
  );
}
