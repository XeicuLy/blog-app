import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';

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
    <article className='mx-auto my-0 max-w-5xl px-12'>
      <div className='rounded-2xl bg-white py-4'>
        <h1 className='flex justify-center pb-4 text-4xl font-bold text-gray-700'>{data.title}</h1>
        <div className='flex justify-center gap-2 pb-6'>
          <TagList tags={data.tags} />
        </div>
        <div className='flex items-center justify-center'>
          <div className='border-r pr-6'>
            <Profile />
          </div>
          <div className='ml-6 flex items-center gap-1'>
            <CiClock2 />
            <time>{formatDate(data.publishedAt || data.createdAt)}</time>
          </div>
        </div>
        <div className='flex justify-center'>
          {data.thumbnail ? (
            <Thumbnail data={data} />
          ) : (
            <Image className='w-full' src='/no-image.png' alt='No Image' width={500} height={500} />
          )}
        </div>
        <div className='mx-auto my-0 w-10/12'>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(data.content)}`,
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default Article;
