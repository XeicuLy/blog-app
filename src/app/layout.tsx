import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import Navigation from '@/app/_components/Navigation';
import { getTagList } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '言いたいだけブログ',
  description: 'エンジニアがただ言いたいことを言うブログアプリ',
  openGraph: {
    title: '言いたいだけブログ',
    description: 'エンジニアがただ言いたいことを言うブログアプリ',
    images: '/no-image.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: VIEW_COUNT_PER_PAGE,
  });
  if (!tags) throw new Error('Tag data not found');
  const { contents } = tags;

  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Navigation tags={contents} />
        <main>{children}</main>
      </body>
    </html>
  );
}
