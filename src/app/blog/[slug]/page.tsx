import { Metadata } from 'next';

import Article from '@/app/_components/Article';
import { getBlog } from '@/lib/microcms';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    draftKey: string;
  };
};

export const revalidate = 0;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getBlog(params.slug, {
    draftKey: searchParams.draftKey,
  });
  if (!data) throw new Error('not found');

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || (process.env.NO_IMAGE_PATH as string)],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const blog = await getBlog(params.slug, {
    draftKey: searchParams.draftKey,
  });
  if (!blog) throw new Error('not found');

  return <Article data={blog} />;
}
