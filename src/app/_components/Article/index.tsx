import Image from 'next/image';

import Profile from '@/app/_components/Profile';
import TagList from '@/app/_components/TagList';
import { formatDate } from '@/lib/date';
import { formatRichText } from '@/lib/format';
import { type Article } from '@/lib/microcms';

import styles from './index.module.css';

type Props = {
  data: Article;
};

const Article = ({ data }: Props) => {
  return (
    <main>
      <h1>{data.title}</h1>
      <TagList tags={data.tags} />
      <div>
        <Profile />
        <div>
          <time>{formatDate(data.publishedAt || data.createdAt)}</time>
        </div>
      </div>
      <picture>
        {data.thumbnail ? (
          <>
            <source
              type='image/webp'
              media='(max-width: 640px)'
              srcSet={`${data.thumbnail.url}?fm=webp&w=414 1x, ${data.thumbnail.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type='image/webp'
              srcSet={`${data.thumbnail.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
            />
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
            />
          </>
        ) : (
          <Image src='/no-image.png' alt='No Image' width={500} height={500} />
        )}
      </picture>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
};

export default Article;
