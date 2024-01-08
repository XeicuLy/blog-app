import TagItem from '@/app/_components/TagItem';
import { getTag } from '@/lib/microcms';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  if (!tag) throw new Error('not found');

  return (
    <div>
      <p>
        <TagItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
