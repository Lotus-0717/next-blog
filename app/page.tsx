import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  console.log(post)
  return (
    <div className="mb-8 shadow-[0_0_10px_rgba(255,255,255,0.3)] rounded-md border-2 border-[#112222] p-[20px]">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p className="mb-2">
        {post.tags?.map((tag) => (
          <Link className="mr-1 text-blue-700 hover:text-blue-900 dark:text-blue-400" href={`/tags/${tag}`}>
            {tag}
          </Link>
        ))}
      </p>
      <div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

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