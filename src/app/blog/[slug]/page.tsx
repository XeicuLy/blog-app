import Article from '@/app/_components/Article';
import { getBlog } from '@/lib/microcms';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

export default async function Page({ params }: Props) {
  const blog = await getBlog(params.slug);
  if (!blog) throw new Error('not found');

  return <Article data={blog} />;
}
