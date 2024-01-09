import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-b-2 border-gray-200 px-2 py-2'>
      <Link className='inline-block' href='/'>
        <Image src='/logo.png' alt='アイコン' width={48} height={48} priority />
      </Link>
    </header>
  );
};

export default Header;
