import type { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  id: MicroCMSContentId;
  title: string;
  description?: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;
