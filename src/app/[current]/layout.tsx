import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import Navigation from '@/app/_components/common/Navigation';
import { getTagList } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  children: React.ReactNode;
};

export default async function SearchLayout({ children }: Props) {
  const tags = await getTagList({
    limit: VIEW_COUNT_PER_PAGE,
  });
  if (!tags) throw new Error('Tag data not found');

  return (
    <>
      <Header />
      <Navigation tags={tags.contents} />
      <main className='bg-green-100 py-12'>{children}</main>
      <Footer />
    </>
  );
}