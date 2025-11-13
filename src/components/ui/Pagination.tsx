'use client';

import Link from 'next/link';
import Button, { PageInfo, PaginationWrapper } from '../styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  currentQuery?: string;
}

export default function Pagination({ currentPage, totalPages, currentQuery }: PaginationProps) {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const getPageLink = (page: number) => {
    const params = new URLSearchParams();
    if (currentQuery) {
      params.set('q', currentQuery);
    }
    params.set('page', page.toString());
    return `/blog?${params.toString()}`;
  };
  
  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper>
      {hasPrevious ? (
        <Link href={getPageLink(currentPage - 1)} passHref legacyBehavior>
          <Button as="a">Previous</Button>
        </Link>
      ) : (
        <Button disabled>Previous</Button>
      )}
      
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      
      {hasNext ? (
        <Link href={getPageLink(currentPage + 1)} passHref legacyBehavior>
          <Button as="a">Next</Button>
        </Link>
      ) : (
        <Button disabled>Next</Button>
      )}
    </PaginationWrapper>
  );
}
