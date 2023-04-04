import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Post from "models/post";
import ReactMarkdown from "react-markdown";

const PostPage: NextPage<Post> = ({ slug, content, frontmatter }: Post) => {
  return (
    <main className="container mx-auto px-3 py-4 md:px-0">
      <article className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
};

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const file = fs.readFileSync(`src/data/posts/${slug}.md`).toString();
  const { data, content } = matter(file);

  return {
    props: {
      slug,
      content,
      frontmatter: { title: data.title, description: data.description },
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/src/data/posts`);

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
