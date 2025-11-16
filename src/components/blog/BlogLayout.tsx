'use client';

import Header from "../layout/Header";
import { HeadDescp, Heading, MainContainer } from "../styles";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
