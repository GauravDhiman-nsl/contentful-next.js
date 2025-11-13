'use client';

import { HeadDescp, Heading, MainContainer } from "../styles";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Heading >{"My Tech Blogs"}</Heading>
      <HeadDescp>This blogs app using Contentful and Next.js.</HeadDescp>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
