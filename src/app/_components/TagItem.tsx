import { Tag } from '@/lib/microcms';
import Link from 'next/link';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

const TagItem = ({ tag, hasLink = true }: Props) => {
  return <li>{hasLink ? <Link href={`/tags/${tag.id}`}>#{tag.name}</Link> : <span>#{tag.name}</span>}</li>;
};

export default TagItem;
