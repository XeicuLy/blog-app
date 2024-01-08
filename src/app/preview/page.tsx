import { notFound } from 'next/navigation';

import Article from '@/app/_components/Article';
import { getBlog } from '@/lib/microcms';

interface Props {
  searchParams: {
    slug?: string;
    draftKey?: string;
  };
}

export const revalidate = 0;

export default async function Page({ searchParams }: Props) {
  if (!searchParams.slug || !searchParams.draftKey) {
    return notFound();
  }
  const data = await getBlog(searchParams.slug, {
    draftKey: searchParams.draftKey,
  });

  return <Article data={data} />;
}
