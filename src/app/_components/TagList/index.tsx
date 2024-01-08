import TagListItem from '@/app/_components/TagListItem';
import { Tag } from '@/lib/microcms';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

const TagList = ({ tags, hasLink = true }: Props) => {
  if (!tags) {
    return null;
  }

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
