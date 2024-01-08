import Image from 'next/image';

import Profile from '@/app/_components/Profile';
import TagList from '@/app/_components/TagList';
import Thumbnail from '@/app/_components/Thumbnail';
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
      {data.thumbnail ? (
        <Thumbnail data={data} />
      ) : (
        <Image src='/no-image.png' alt='No Image' width={500} height={500} />
      )}
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
