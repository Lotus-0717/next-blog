import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import IndexBanner from "@/components/IndexBanner";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = allPosts.sort((a: any, b:any) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      <IndexBanner></IndexBanner>
      <div className="mx-auto max-w-xl py-8">
        {posts.map((post: any, idx: any) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}