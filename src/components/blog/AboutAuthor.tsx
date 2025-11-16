'use client';
import { Document } from "@contentful/rich-text-types";
import { AuthorSkeleton, BlogPostSkeleton } from "@/lib/types";
import { AllPostsButton, AuthorName, AuthorSection, Created, JobDescription, JobTitle } from "../styles";
import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface AboutAuthorProps {
  author: Entry<AuthorSkeleton>  | null | undefined;
  post: Entry<BlogPostSkeleton, undefined, string>;
}

export default function AboutAuthor({ author,post }: AboutAuthorProps) {
    const fields = author?.fields as {
    name?: string;
    jobTitle?: string;
    jobDescription?: Document;
  } | undefined;

  const authorId = author?.sys?.id;
  const authorName = fields?.name ?? "Anonymous";
  const jobTitle = fields?.jobTitle ?? "";
    const jobDescription = (author?.fields?.jobDescription as Document | undefined);

const postCreatedAt = post?.sys?.createdAt;
const createdAt = postCreatedAt
  ? new Date(postCreatedAt).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
  : "";

;

  return (

    <AuthorSection>
      <AuthorName>{"Name:"}{" "} {authorName}</AuthorName>
      <JobTitle>{"Author Job:"}{" "}{jobTitle}</JobTitle>
      <JobDescription>{"Job Description:"} {" "}
            {jobDescription ? documentToReactComponents(jobDescription) : null}
            </JobDescription>
      <Created>{"Blog Date:"}{" "} {createdAt}</Created>

      <AllPostsButton href={`/blog/author/${authorId}`}>
        Read All Posts
      </AllPostsButton>
    </AuthorSection>
  );
}