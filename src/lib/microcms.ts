import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate, MicroCMSContentId } from 'microcms-js-sdk';

type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

type Author = {
  name: string;
  profile: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  title: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  author?: Author;
};

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
  const blogData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return blogData;
};
