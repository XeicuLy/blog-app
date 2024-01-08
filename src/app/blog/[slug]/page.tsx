import { Metadata } from 'next';

import Article from '@/app/_components/Article';
import { getBlog } from '@/lib/microcms';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlog(params.slug);
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

export default async function Page({ params }: Props) {
  const blog = await getBlog(params.slug);
  if (!blog) throw new Error('not found');

  return <Article data={blog} />;
}
