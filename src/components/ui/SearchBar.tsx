'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Entry } from 'contentful';
import { BlogPostSkeleton } from '@/lib/types';
import { ListGrid, ListWrapperBox, Mark, Noposts, SearchBox, SearchForm, SearchInput } from '../styles';
import PostCard from './PostCard';

interface LiveSearchProps {
  posts: Entry<BlogPostSkeleton, undefined, string>[];
}

export default function LiveSearch({ posts }: LiveSearchProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  const filteredPosts = useMemo(() => {
    const lowerQuery = debouncedQuery.toLowerCase().trim();
    if (!lowerQuery) return posts;

    return posts.filter((post) => {
      const title = post.fields.title;
      return typeof title === 'string' && title.toLowerCase().includes(lowerQuery);
    });
  }, [debouncedQuery, posts]);

  function highlightTitle(title: string) {
    if (!debouncedQuery) return title;

    const escapedQuery = debouncedQuery.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <Mark key={i}>
          {part}
        </Mark>
      ) : (
        part
      )
    );
  }

  return (
    
    <ListWrapperBox>
      <SearchBox>
        <SearchForm>
      <SearchInput
        type="text"
        aria-label="Search blog posts"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </SearchForm>
      </SearchBox>

      {filteredPosts.length > 0 ? (
        <ListGrid>
          {filteredPosts.map((post) => (
            <PostCard
              key={post.sys.id}
              post={post}
              highlightedTitle={highlightTitle(post.fields.title)}
            />
          ))}
        </ListGrid>
      ) : (
        <Noposts>No posts found.</Noposts>
      )}
   </ListWrapperBox>
  );
}
