import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import Navigation from '@/app/_components/common/Navigation';
import TagListItem from '@/app/_components/TagListItem';
import { getTag, getTagList } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

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

  const tags = await getTagList({
    limit: VIEW_COUNT_PER_PAGE,
  });
  if (!tags) throw new Error('Tag data not found');

  return (
    <>
      <Header />
      <Navigation tags={tags.contents} />
      <main className='bg-green-100 py-12'>
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-6'>
            <TagListItem tag={tag} hasLink={false} />
            の記事一覧
          </p>
          <div>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
