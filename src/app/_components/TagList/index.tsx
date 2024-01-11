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
    <div className='w-auto max-w-600 overflow-auto'>
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
