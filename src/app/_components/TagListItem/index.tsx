import Link from 'next/link';
import { GoTag } from 'react-icons/go';

import { Tag } from '@/lib/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

const TagListItem = ({ tag, hasLink = true }: Props) => {
  const tagElement = (
    <span className='flex items-center gap-1 whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-sm text-gray-700 transition-colors duration-300 hover:bg-gray-300'>
      <GoTag />
      {tag.name}
    </span>
  );
  return hasLink ? <Link href={`/tags/${tag.id}`}>{tagElement}</Link> : tagElement;
};

export default TagListItem;
