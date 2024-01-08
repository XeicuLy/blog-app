import Link from 'next/link';

import { Tag } from '@/lib/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

const TagListItem = ({ tag, hasLink = true }: Props) => {
  const tagElement = <span className='whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-sm'>#{tag.name}</span>;
  return hasLink ? <Link href={`/tags/${tag.id}`}>{tagElement}</Link> : tagElement;
};

export default TagListItem;
