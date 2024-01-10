import TagListItem from '@/app/_components/TagListItem';
import { getTag } from '@/lib/microcms';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export const revalidate = 0;

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  if (!tag) throw new Error('not found');

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='mb-6'>
        <TagListItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
