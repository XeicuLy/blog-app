import TagListItem from '@/app/_components/TagListItem';
import { Tag } from '@/types/microcms';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
  maxWidth?: string;
};

const TagList = ({ tags, hasLink = true, maxWidth = 'max-w-600' }: Props) => {
  if (!tags) {
    return null;
  }

  return (
    <div className={`w-auto ${maxWidth} overflow-auto`}>
      <ul className='inline-flex gap-2'>
        {tags.map((tag) => (
          <li key={tag.id}>
            <TagListItem tag={tag} hasLink={hasLink} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
