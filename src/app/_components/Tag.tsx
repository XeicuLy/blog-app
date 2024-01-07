import { type Tag } from '@/lib/microcms';
import TagItem from '@app/_components/TagItem';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

const Tag = ({ tags, hasLink = true }: Props) => {
  if (!tags) {
    return null;
  }
  return (
    <ul>
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} hasLink={hasLink} />
      ))}
    </ul>
  );
};

export default Tag;
