import Link from 'next/link';

import { Tag } from '@/lib/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

const TagItem = ({ tag, hasLink = true }: Props) => {
  if (hasLink) {
    return <Link href={`/tags/${tag.id}`}>#{tag.name}</Link>;
  }
  return <span>#{tag.name}</span>;
};

export default TagItem;
