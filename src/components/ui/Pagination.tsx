'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Button, { PageInfo, PaginationWrapper } from '../styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? undefined;

  const buildUrl = (page: number): string => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (page > 1) sp.set('page', String(page));
    const qs = sp.toString();
    return qs ? `/blog?${qs}` : '/blog';
  };

  if (totalPages <= 1) return null;

  const prev = currentPage > 1;
  const next = currentPage < totalPages;

  return (
    <PaginationWrapper className="mt-10">
      {prev ? (
        <Link href={buildUrl(currentPage - 1)}>
          <Button>Previous</Button>
        </Link>
      ) : (
        <Button disabled>Previous</Button>
      )}

      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>

      {next ? (
        <Link href={buildUrl(currentPage + 1)}>
          <Button>Next</Button>
        </Link>
      ) : (
        <Button disabled>Next</Button>
      )}
    </PaginationWrapper>
  );
}