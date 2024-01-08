import SearchField from '@/app/_components/common/SearchField';
import TagList from '@/app/_components/TagList';
import { Tag } from '@/lib/microcms';

type Props = {
  tags: Tag[];
};

const Navigation = ({ tags }: Props) => {
  return (
    <nav className='flex flex-col items-center'>
      <div className='w-4/5 py-2'>
        <SearchField />
      </div>
      <div className='py-2'>
        <TagList tags={tags} />
      </div>
    </nav>
  );
};

export default Navigation;
