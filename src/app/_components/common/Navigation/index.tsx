import SearchField from '@/app/_components/common/SearchField';
import TagList from '@/app/_components/TagList';
import { Tag } from '@/lib/microcms';

type Props = {
  tags: Tag[];
};

const Navigation = ({ tags }: Props) => {
  return (
    <nav>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  );
};

export default Navigation;
