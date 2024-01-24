import Image from 'next/image';

import { Article } from '@/types/microcms';

type Props = {
  data: Article;
};
const Thumbnail = ({ data }: Props) => {
  return (
    <picture>
      <source
        type='image/webp'
        media='(max-width: 640px)'
        srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
      />
      <source
        type='image/webp'
        srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
      />
      <Image
        src={data.thumbnail?.url || '/no-image.png'}
        alt={data.title}
        width={data.thumbnail?.width}
        height={data.thumbnail?.height}
      />
    </picture>
  );
};

export default Thumbnail;
