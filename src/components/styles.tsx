"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
`;
export const HeadDescp = styled.small`
  display: inline-flex;
  font-size: 1rem;
  font-weight: normal;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #636363;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  background-color: #2b6cb0;
  color: white;

  &:hover {
    background-color: #2c5282;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

export default Button;

export const CardWrapper = styled.div`
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  display:inline-flex;
  gap:8px;
  align-items:center;
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border-color: #2b6cb0;
    box-shadow: 0 0 0 1px #2b6cb0;
  }
`;

export const HeaderWrapper = styled.header`
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
`;

export const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a202c;
  text-decoration: none;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
export const CardLink = styled(Link)`
  display: block;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const ContentWrapper = styled.div`
  padding: 1.5rem;
`;

export const Excerpt = styled.p`
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
  line-height: 1.5;
`;
export const ArticleWrapper = styled.article`
  max-width: 50rem; /* 800px */
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const BlogImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 0.75rem;
  margin-bottom: 2.5rem;
  object-fit: cover;
  background-color: #f0f0f0; /* Placeholder color */
`;

export const RichTextWrapper = styled.div`
  line-height: 1.5;
  font-size: 1.125rem;
  color: #535353ff;

  p {
    font-size:1rem;
    margin-bottom: .5em;
    font-weight:400;
  }
  a{
  color: #1865ffff;
  &:hover{
  text-decoration:underline;
  }
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size:1.2 rem;
    font-weight: 600;
    color: #1a202c;
    margin: 1.8em 0 0.8em;
  }
`;
export const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const PageInfo = styled.span`
  font-size: 0.9rem;
  color: #718096;
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
`;

export const ListWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #2b6cb0;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 0;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1a4f7b;
  }
`;


export const Noposts = styled.p`
color:#1a4f7b;
font-size:1em;
font-weight:normal;
`;
export const Mark = styled.mark`
background:#1a4f7b;
color:#ffffff;
`;