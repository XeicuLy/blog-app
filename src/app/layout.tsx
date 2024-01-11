import '@/styles/globals.css';
import { Noto_Sans_JP } from 'next/font/google';

import type { Metadata } from 'next';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' });

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
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
