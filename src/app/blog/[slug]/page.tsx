import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

interface BlogMetadata {
  title: string;
  description?: string;
  date: string;
  draft?: boolean;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

async function getBlogPost(slug: string) {
  const contentDir = path.join(process.cwd(), "content/blog");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { metadata, default: Content } = await import(
    `@/../../content/blog/${slug}.mdx`
  );

  return { metadata: metadata as BlogMetadata, Content };
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post || post.metadata.draft) {
    notFound();
  }

  const { metadata, Content } = post;

  return (
    <article className="prose prose-gray lg:prose-lg max-w-3xl mx-auto">
      <h1>{metadata.title}</h1>
      <p className="text-gray-500 italic">{formatDate(metadata.date)}</p>
      <Content />
    </article>
  );
}
