import ArticleList from '@/app/_components/ArticleList';
import Pagination from '@/app/_components/common/Pagination';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

export const revalidate = 0;

export default async function Home() {
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
  });
  if (!data) throw new Error('not found');
  const { contents } = data;

  return (
    <>
      <ArticleList articles={contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
