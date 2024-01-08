import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <Image src='/logo.png' alt='アイコン' width={50} height={50} priority />
      </Link>
    </header>
  );
};

export default Header;
