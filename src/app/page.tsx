import { formatDate } from '@/lib/date';
import { getBlogs } from '@/lib/microcms';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

export default async function Home() {
  const data = await getBlogs();
  if (!data) throw new Error('not found');
  const { contents } = data;

  return (
    <>
      <ul className='mx-auto my-0 max-w-screen-sm'>
        {contents.map((blog) => (
          <li key={blog.id} className='rounded-md border p-4 shadow'>
            <Link href={`/blog/${blog.id}`} className='text-blue-500 hover:underline'>
              {blog.thumbnail ? (
                <picture>
                  <source
                    type='image/webp'
                    media='(max-width: 640px)'
                    srcSet={`${blog.thumbnail?.url}?fm=webp&w=414 1x, ${blog.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
                  />
                  <source
                    type='image/webp'
                    srcSet={`${blog.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${blog.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
                  />
                  <img
                    src={blog.thumbnail?.url || `/no-image.png`}
                    alt={blog.title}
                    width={blog.thumbnail?.width}
                    height={blog.thumbnail?.height}
                  />
                </picture>
              ) : (
                <Image src='/no-image.png' alt='No Image' width={1200} height={630} />
              )}
              <dl>
                <dt className='text-xl font-bold'>{blog.title}</dt>
                <dd className='text-gray-500'>{formatDate(blog.publishedAt || blog.createdAt)}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
