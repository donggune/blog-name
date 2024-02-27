import Link from "next/link";
import { allPosts } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="max-w-5xl mx-auto prose">
      <div className="mb-8 text-center">
        <time dateTime={post.date}>{format(parseISO(post.date), "yyyy-MM-dd")}</time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="max-w-3xl m-auto">
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
}
