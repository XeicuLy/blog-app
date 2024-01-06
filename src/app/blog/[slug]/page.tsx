import { formatDate } from '@/lib/date';
import { getBlog } from '@/lib/microcms';
import { formatRichText } from '@/lib/parse';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};
export default async function Article({ params }: Props) {
  const blog = await getBlog(params.slug);
  if (!blog) throw new Error('not found');

  return (
    <>
      <main className='p-6'>
        <h1 className='mb-4 text-center text-4xl font-bold'>{blog.title}</h1>
        <div className='mb-4 flex items-center'>
          <div>
            <picture>
              <source
                type='image/webp'
                srcSet={`${blog.author?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${blog.author?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <Image
                className='rounded-full border border-gray-500'
                src={blog.author?.image?.url || ''}
                alt='著者のアイコン'
                width={96}
                height={96}
              />
            </picture>
            <span className='ml-4 text-xl'>{blog.author?.name}</span>
          </div>
          <div className='ml-auto'>
            <time className='text-gray-500'>{formatDate(blog.publishedAt || blog.createdAt)}</time>
          </div>
        </div>
        <div
          className='prose prose-lg'
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(blog.content)}`,
          }}
        />
      </main>
    </>
  );
}
