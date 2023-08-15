import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = allPosts.sort((a: any, b:any) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((post: any, idx: any) => (
        <PostCard key={idx} {...post} />
      ))}
      <Link href="/about">About</Link>
    </div>
  );
}