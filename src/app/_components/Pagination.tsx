import Link from 'next/link';

import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

const Pagination = ({ totalCount, current = 1, basePath = '' }: Props) => {
  const pages = Array.from({ length: Math.ceil(totalCount / VIEW_COUNT_PER_PAGE) }).map((_, i) => i + 1);

  return (
    <ul>
      {pages.map((page) => (
        <li key={page}>
          {current !== page ? <Link href={`${basePath}/p/${page}`}>{page}</Link> : <span>{page}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
