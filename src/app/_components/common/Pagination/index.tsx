import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/_components/ui/pagination';
import { VIEW_COUNT_PER_PAGE } from '@/utils/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

const CustomPagination = ({ totalCount, current = 1, basePath = '', q }: Props) => {
  const pages = Array.from({ length: Math.ceil(totalCount / VIEW_COUNT_PER_PAGE) }).map((_, i) => i + 1);
  const isFirstPage = current === 1;
  const isLastPage = current === pages.length;

  const createPageUrl = (page: number) => `${basePath}/${page}` + (q ? `?q=${q}` : '');

  return (
    <Pagination className='pt-4'>
      <PaginationContent>
        {!isFirstPage && (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(current - 1)} />
          </PaginationItem>
        )}
        {pages.map((page, index) => (
          <PaginationItem key={page}>
            {current !== page ? (
              <PaginationLink href={createPageUrl(page)}>{page}</PaginationLink>
            ) : (
              <span className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                {page}
              </span>
            )}
            {index !== pages.length - 1 && <PaginationEllipsis />}
          </PaginationItem>
        ))}
        {!isLastPage && (
          <PaginationItem>
            <PaginationNext href={createPageUrl(current + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
