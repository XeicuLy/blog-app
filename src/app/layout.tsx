import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'PiYoPiYo.com',
  description: 'エンジニアがただ言いたいことを言うブログアプリ',
  openGraph: {
    title: 'PiYoPiYo.com',
    description: 'エンジニアがただ言いたいことを言うブログアプリ',
    images: [{ url: process.env.NO_IMAGE_PATH as string }],
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang='ja'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
