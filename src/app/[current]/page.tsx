import ArticleList from '@/app/_components/ArticleList';
import Pagination from '@/app/_components/common/Pagination';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 86400;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    offset: (current - 1) * VIEW_COUNT_PER_PAGE,
  });
  const { contents, totalCount } = data;

  return (
    <>
      <ArticleList articles={contents} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
