import { createClient } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

import { Blog, Tag } from '@/types/microcms';

import type { MicroCMSQueries } from 'microcms-js-sdk';

if (!process.env.MICRO_CMS_SERVICE_DOMAIN) {
  throw new Error('MICRO_CMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICRO_CMS_API_KEY) {
  throw new Error('MICRO_CMS_API_KEY is required');
}
export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
  apiKey: process.env.MICRO_CMS_API_KEY,
});

/**
 * ブログ一覧を取得する関数
 */
export const getBlogs = async (queries?: MicroCMSQueries) => {
  try {
    const blogData = await client.getList<Blog>({
      endpoint: 'blogs',
      queries,
    });
    return blogData;
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

/**
 * ブログの詳細を取得する関数
 * @param contentId ブログのID
 */
export const getBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const blogData = await client.getListDetail<Blog>({
      endpoint: 'blogs',
      contentId,
      queries,
    });
    return blogData;
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

/**
 * タグの一覧を取得する関数
 */
export const getTagList = async (queries?: MicroCMSQueries) => {
  try {
    const tagData = await client.getList<Tag>({
      endpoint: 'tags',
      queries,
    });
    return tagData;
  } catch (error) {
    console.error(error);
    return notFound();
  }
};

/**
 * タグの詳細を取得する関数
 */
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const tagData = await client.getListDetail<Tag>({
      endpoint: 'tags',
      contentId,
      queries,
    });
    return tagData;
  } catch (error) {
    console.error(error);
    return notFound();
  }
};
