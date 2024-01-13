import ArticleList from '@/app/_components/ArticleList';
import Pagination from '@/app/_components/common/Pagination';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    current: string;
  };
  searchParams: {
    q?: string;
  };
};

export const revalidate = 86400;

export default async function Page({ params, searchParams }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    offset: VIEW_COUNT_PER_PAGE * (current - 1),
    q: searchParams.q,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath='/search' q={searchParams.q} />
    </>
  );
}
