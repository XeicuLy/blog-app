import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import Navigation from '@/app/_components/common/Navigation';
import { getTagList } from '@/lib/microcms';
import { TAGS_LIMIT } from '@/utils/constants';

type Props = {
  children: React.ReactNode;
};

export default async function CurrentLayout({ children }: Props) {
  const tags = await getTagList({
    limit: TAGS_LIMIT,
  });
  const { contents } = tags;
  return (
    <>
      <Header />
      <Navigation tags={contents} />
      <main className='bg-green-100 py-12'>{children}</main>
      <Footer />
    </>
  );
}
