import ListItem from '@/app/_components/ListItem';
import Pagination from '@/app/_components/Pagination';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    offset: (current - 1) * VIEW_COUNT_PER_PAGE,
  });
  if (!data) throw new Error('not found');
  const { contents } = data;

  return (
    <div>
      <ul>
        {contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} current={current} />
    </div>
  );
}
