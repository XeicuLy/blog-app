import Image from 'next/image';
import Link from 'next/link';

import TagList from '@/app/_components/TagList';
import Thumbnail from '@/app/_components/Thumbnail';
import { formatDate } from '@/lib/date';
import { Article } from '@/lib/microcms';

type Props = {
  article: Article;
};

const ArticleListItem = ({ article }: Props) => {
  return (
    <li className='flex justify-center'>
      <Link className='flex' href={`/blog/${article.id}`}>
        <div className='w-64'>
          {article.thumbnail ? (
            <Thumbnail data={article} />
          ) : (
            <Image src={process.env.NO_IMAGE_PATH || '/no-image.png'} alt='No Image' width={1200} height={630} />
          )}
        </div>
        <div className='ml-8 flex items-center'>
          <dl>
            <dt className='mb-5 text-xl font-bold'>{article.title}</dt>
            <dd className='mb-4'>
              <TagList tags={article.tags} hasLink={false} />
            </dd>
            <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
          </dl>
        </div>
      </Link>
    </li>
  );
};

export default ArticleListItem;
