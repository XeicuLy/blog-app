import ArticleListItem from '@/app/_components/ArticleListItem';
import Pagination from '@/app/_components/Pagination';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    tagId: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const current = parseInt(params.current as string, 10);
  if (isNaN(current) || current < 1) {
    throw new Error('Invalid page number');
  }
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    offset: (current - 1) * VIEW_COUNT_PER_PAGE,
    filters: `tags[contains]${tagId}`,
  });
  if (!data) throw new Error('Blog data not found');
  const { contents } = data;

  return (
    <div>
      <ul>
        {contents.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} current={current} basePath={`/tags/${tagId}`} />
    </div>
  );
}
