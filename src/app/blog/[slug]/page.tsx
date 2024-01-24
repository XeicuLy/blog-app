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

export const revalidate = 86400;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getBlog(params.slug, {
    draftKey: searchParams.draftKey,
  });
  const { title, description, thumbnail } = data;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [thumbnail?.url || (process.env.NO_IMAGE_PATH as string)],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const blog = await getBlog(params.slug, {
    draftKey: searchParams.draftKey,
  });

  return <Article data={blog} />;
}
