import TagItem from '@/app/_components/TagItem';
import { type Tag } from '@/lib/microcms';

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
        <li key={tag.id}>
          <TagItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
};

export default Tag;
