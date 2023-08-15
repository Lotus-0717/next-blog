import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

export default function PostCard(post: Post) {
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
        {post.tags?.map((tag, idx) => (
          <Link key={idx} className="mr-1 text-blue-700 hover:text-blue-900 dark:text-blue-400" href={`/tags/${tag}`}>
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