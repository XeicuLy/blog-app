import { client } from '@/lib/microcms';
import { Button } from '@app/_components/ui/button';

export default async function Home() {
  const data = await client.get({
    endpoint: 'test',
  });

  console.log(data);

  return (
    <>
      <h1>こんにちは</h1>
      <div>{data.text}</div>
      <Button>button</Button>
    </>
  );
}
