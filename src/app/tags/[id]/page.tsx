import ListItem from '@/app/_components/ListItem';
import Pagination from '@/app/_components/Pagination';
import TagItem from '@/app/_components/TagItem';
import { getBlogs, getTag } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    filters: `tags[contains]${params.id}`,
  });
  if (!data) throw new Error('not found');
  const { contents } = data;
  const tag = await getTag(params.id);
  if (!tag) throw new Error('not found');
  return (
    <div>
      <p>
        <TagItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <ul>
        {contents.map((article) => (
          <ListItem key={article.id} article={article} />
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
