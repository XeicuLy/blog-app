import { formatDate } from '@/lib/date';
import { Article } from '@/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  article: Article;
};

const ListItem = ({ article }: Props) => {
  return (
    <li>
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
              alt={article.title}
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
  );
};

export default ListItem;
