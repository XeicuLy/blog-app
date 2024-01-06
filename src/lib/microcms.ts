import type { MicroCMSContentId, MicroCMSDate, MicroCMSImage, MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

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
  id: MicroCMSContentId;
  title: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  author?: Author;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Article = Blog & MicroCMSDate;

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
    const userFriendlyMessage = 'ブログの読み込みに失敗しました。後ほど再試行してください。';
    console.error(error);
    throw new Error(userFriendlyMessage);
  }
};

/**
 * ブログの詳細を取得する関数
 * @param contentId ブログのID
 */
export const getBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  try {
    const blogData = await client.get<Blog>({
      endpoint: 'blogs',
      contentId,
      queries,
    });
    return blogData;
  } catch (error) {
    const userFriendlyMessage = 'ブログの読み込みに失敗しました。後ほど再試行してください。';
    console.error(error);
    throw new Error(userFriendlyMessage);
  }
};
