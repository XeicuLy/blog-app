import ArticleList from '@/app/_components/ArticleList';
import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import Navigation from '@/app/_components/common/Navigation';
import Pagination from '@/app/_components/common/Pagination';
import { getBlogs, getTagList } from '@/lib/microcms';
import { TAGS_LIMIT, VIEW_COUNT_PER_PAGE } from '@/utils/constants';

export const revalidate = 86400;

export default async function Home() {
  const data = await getBlogs({
    limit: VIEW_COUNT_PER_PAGE,
  });
  if (!data) throw new Error('not found');

  const tags = await getTagList({
    limit: TAGS_LIMIT,
  });
  if (!tags) throw new Error('Tag data not found');

  return (
    <>
      <Header />
      <Navigation tags={tags.contents} />
      <main className='bg-green-100 py-12'>
        <ArticleList articles={data.contents} />
        <Pagination totalCount={data.totalCount} />
      </main>
      <Footer />
    </>
  );
}
