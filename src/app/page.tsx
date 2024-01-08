import ArticleListItem from '@/app/_components/ArticleListItem';
import Pagination from '@/app/_components/Pagination';
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
    <div>
      <ul>
        {contents.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
