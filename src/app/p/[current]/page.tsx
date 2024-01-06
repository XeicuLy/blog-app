import { formatDate } from '@/lib/date';
import { getBlogs } from '@/lib/microcms';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';
import Pagination from '@app/_components/Pagination';
import Image from 'next/image';
import Link from 'next/link';

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
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              {article.thumbnail ? (
                <picture>
                  <source
                    type='image/webp'
                    media='(max-width: 640px)'
                    srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
                  />
                  <source
                    type='image/webp'
                    srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
                  />
                  <img
                    src={article.thumbnail?.url || `/no-image.png`}
                    alt=''
                    width={article.thumbnail?.width}
                    height={article.thumbnail?.height}
                  />
                </picture>
              ) : (
                <Image src='/no-image.png' alt='No Image' width={1200} height={630} />
              )}
              <dl>
                <dt>{article.title}</dt>
                <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} current={current} />
    </div>
  );
}
