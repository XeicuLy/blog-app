import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';

type Props = {
  children: React.ReactNode;
};

export default async function BlogLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='bg-green-100 py-12'>{children}</main>
      <Footer />
    </>
  );
}
