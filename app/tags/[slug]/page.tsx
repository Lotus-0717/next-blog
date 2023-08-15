import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";


export default function TagsLayout({ params }: { params: { slug: string } }) {
  const posts = allPosts.filter(post => post.tags?.map(tag => tag.replace("\r", "")).includes(params.slug)).sort((a: any, b:any) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post: any, idx: any) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}