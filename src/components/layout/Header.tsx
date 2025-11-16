'use client';
import Link from 'next/link';
import { HeadDescp, HeaderContent, HeaderWrapper, Heading, Logo } from '../styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Heading >{"My Tech Blogs"}</Heading>
      <HeadDescp>{"This blogs app using Contentful and Next.js."}</HeadDescp>
      </HeaderContent>
    </HeaderWrapper>
  );
}
