import SearchField from '@/app/_components/common/SearchField';
import TagList from '@/app/_components/TagList';
import { Tag } from '@/lib/microcms';

type Props = {
  tags: Tag[];
};

const Navigation = ({ tags }: Props) => {
  return (
    <nav className='flex flex-col items-center py-4'>
      <div className='w-1/2'>
        <SearchField />
      </div>
      <div className='pt-4'>
        <TagList tags={tags} />
      </div>
    </nav>
  );
};

export default Navigation;
