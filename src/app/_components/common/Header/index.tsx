import Image from 'next/image';
import Link from 'next/link';

import Navigation from '@/app/_components/common/Navigation';
import { Tag } from '@/lib/microcms';

type Props = {
  tags: Tag[];
};

const Header = ({ tags }: Props) => {
  return (
    <header className='border-2 border-gray-200 px-2 py-3'>
      <Link className='inline-block' href='/'>
        <Image src='/logo.png' alt='アイコン' width={48} height={48} priority />
      </Link>
      <Navigation tags={tags} />
    </header>
  );
};

export default Header;
