import Link from 'next/link';

import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

const Pagination = ({ totalCount, current = 1, basePath = '', q }: Props) => {
  const pages = Array.from({ length: Math.ceil(totalCount / VIEW_COUNT_PER_PAGE) }).map((_, i) => i + 1);

  return (
    <ul>
      {pages.map((page) => (
        <li key={page}>
          {current !== page ? (
            <Link href={`${basePath}/p/${page}` + (q ? `?q=${q}` : '')}>{page}</Link>
          ) : (
            <span>{page}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
