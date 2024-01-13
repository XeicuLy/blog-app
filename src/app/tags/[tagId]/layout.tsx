import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import Navigation from '@/app/_components/common/Navigation';
import TagListItem from '@/app/_components/TagListItem';
import { getTag, getTagList } from '@/lib/microcms';
import { TAGS_LIMIT } from '@/utils/constants';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export const revalidate = 86400;

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  if (!tag) throw new Error('not found');

  const tags = await getTagList({
    limit: TAGS_LIMIT,
  });
  if (!tags) throw new Error('Tag data not found');

  return (
    <>
      <Header />
      <Navigation tags={tags.contents} />
      <main className='bg-green-100 py-12'>
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-6 flex items-center justify-center'>
            <TagListItem tag={tag} hasLink={false} />
            <span className='ml-2'>の記事一覧</span>
          </p>
          <div>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
