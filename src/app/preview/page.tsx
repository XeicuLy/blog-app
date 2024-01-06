import { getBlog } from '@/lib/microcms';
import Article from '@app/_components/Article';
import { notFound } from 'next/navigation';

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
