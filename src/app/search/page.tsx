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
  const { contents, totalCount } = data;
  return (
    <>
      <ArticleList articles={contents} />
      <Pagination totalCount={totalCount} basePath='/search' />
    </>
  );
}
