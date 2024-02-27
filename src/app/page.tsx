import { Post, allPosts } from ".contentlayer/generated";
import { compareDesc, format } from "date-fns";
import { parseISO } from "date-fns/fp";
import Link from "next/link";
import { notFound } from "next/navigation";

export function PostCard(post: Post): React.ReactElement {
  return (
    <Link href={post.url}>
      <div className="mb-4 flex flex-col bg-slate-100 p-5">
        <time dateTime={post.date}>{format(parseISO(post.date), "yyyy-MM-dd")}</time>
        <p className="font-bold text-2xl mb-1 text-green-600 hover:text-pink-600">{post.title}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  if (!posts) notFound();

  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="my-8 text-center text-3xl font-bold">Next.js & ContentLayer Blog Example</h1>
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </main>
  );
}
