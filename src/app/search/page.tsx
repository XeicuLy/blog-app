import ArticleList from '@/app/_components/ArticleList';
import Pagination from '@/app/_components/common/Pagination';
import { getBlogs } from '@/lib/microcms';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 86400;

export default async function Page({ searchParams }: Props) {
  const data = await getBlogs({
    q: searchParams.q,
  });
  if (!data) throw new Error('Blog data not found');

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath='/search' />
    </>
  );
}
