import ListItem from '@/app/_components/ListItem';
import Pagination from '@/app/_components/Pagination';
import TagItem from '@/app/_components/TagItem';
import { getBlogs, getTag } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  params: {
    tagId: string;
  };
};

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
    filters: `tags[contains]${tagId}`,
  });
  if (!data) throw new Error('not found');
  const { contents } = data;
  const tag = await getTag(tagId);
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
