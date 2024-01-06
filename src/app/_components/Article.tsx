import { formatDate } from '@/lib/date';
import { type Article } from '@/lib/microcms';
import { formatRichText } from '@/lib/parse';

type Props = {
  data: Article;
};

const Article = ({ data }: Props) => {
  return (
    <main>
      <h1>{data.title}</h1>
      <div>
        {data.author && (
          <div>
            <picture>
              <source
                type='image/webp'
                srcSet={`${data.author?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.author?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.author?.image?.url}
                alt={data.author?.name}
                width={data.author?.image?.width}
                height={data.author?.image?.height}
              />
            </picture>
            <span>{data.author?.name}</span>
          </div>
        )}
        <div>
          <time>{formatDate(data.publishedAt || data.createdAt)}</time>
        </div>
      </div>
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
        <img src={data.thumbnail?.url} alt={data.title} width={data.thumbnail?.width} height={data.thumbnail?.height} />
      </picture>
      <div
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
};

export default Article;
