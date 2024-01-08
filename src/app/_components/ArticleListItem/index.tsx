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
    <li>
      <Link href={`/blog/${article.id}`}>
        {article.thumbnail ? (
          <Thumbnail data={article} />
        ) : (
          <Image src={process.env.NO_IMAGE_PATH || '/no-image.png'} alt='No Image' width={1200} height={630} />
        )}
        <dl>
          <dt>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd>{formatDate(article.publishedAt || article.createdAt)}</dd>
        </dl>
      </Link>
    </li>
  );
};

export default ArticleListItem;
