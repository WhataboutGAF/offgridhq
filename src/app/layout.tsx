
import type {Metadata} from 'next';
import './globals.css';

const baseUrl = "https://offgrid-t1.vercel.app";

export const metadata: Metadata = {
  title: 'OFFGRID HQ | Level Up Your Internet',
  description: 'High-performance nodes and bespoke architectural engineering for the modern creative. Building the next generation of digital infrastructure.',
  keywords: ['Offgrid HQ', 'Web Development', 'UI/UX Design', 'Backend Infrastructure', 'Next.js 15', 'Premium Web Experience'],
  metadataBase: new URL(baseUrl),
  icons: {
    icon: '/Grid.svg',
    shortcut: '/Grid.svg',
    apple: '/Grid.svg',
  },
  openGraph: {
    title: 'OFFGRID HQ | Level Up Your Internet',
    description: 'High-performance nodes and bespoke architectural engineering for the modern creative.',
    url: baseUrl,
    siteName: 'OFFGRID HQ',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'OFFGRID HQ | Architectural Engineering',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OFFGRID HQ | Level Up Your Internet',
    description: 'High-performance nodes and bespoke architectural engineering for the modern creative.',
    images: ['/og-image.png'],
    creator: '@offgridhq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import CustomCursor from '@/components/layout/CustomCursor';
import VisualEffects from '@/components/layout/VisualEffects';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OFFGRID HQ",
    "url": baseUrl,
    "logo": `${baseUrl}/og-image.png`,
    "description": "High-performance nodes and bespoke architectural engineering for the modern creative.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global",
      "addressCountry": "Nepal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "offgridhqteam@gmail.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://twitter.com/offgridhq",
      "https://github.com/offgridhq"
    ]
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
