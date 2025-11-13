'use client';
import Link from 'next/link';
import { HeaderContent, HeaderWrapper, Logo } from '../styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link href="/blog" passHref legacyBehavior>
          <Logo>Industrial Blog</Logo>
        </Link>
      </HeaderContent>
    </HeaderWrapper>
  );
}
