import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khalil Zbiss - Robotics PhD Candidate',
  description: 'PhD candidate specializing in Robotics, Motion Planning, and Sensor Fusion',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.svg',
        href: '/favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.svg',
        href: '/favicon-dark.svg',
      },
    ],
  },
  openGraph: {
    title: 'Khalil Zbiss - PhD Graduate in Robotics & Motion Planning',
    description: 'PhD Graduate from the University of Michigan-Dearborn, specializing in robotics, motion planning, and sensor fusion.',
    url: 'https://kzbiss.com',
    siteName: 'Khalil Zbiss',
    images: ['/avatar.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Zbiss - PhD Graduate in Robotics & Motion Planning',
    description: 'PhD Graduate from the University of Michigan-Dearborn, specializing in robotics, motion planning, and sensor fusion.',
    images: ['/avatar.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
