import fs from "fs";
import matter from "gray-matter";

import Link from "next/link";
import Post from "../models/post";
import { NextPage } from "next";

type HomeProps = {
  posts: Array<Post>;
};

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  return (
    <div>
      <main className="container mx-auto py-8 px-4 md:px-0 flex flex-col">
        <h2 className="text-6xl text-bold font-serif text-yellow-800">
          Sloth Blog
        </h2>
        <div className="my-6 flex-col">
          {posts.map((post, idx) => {
            return (
              <Link href={`/posts/${post.slug}`} key={idx} passHref={true}>
                <div className="w-max py-2">
                  <h3 className="text-2xl text-bold font-sans">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-sm font-thin">
                    {post.frontmatter.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/data/posts`);

  const posts: Array<Post> = files.map((fileName) => {
    const file = fs.readFileSync(`src/data/posts/${fileName}`).toString();

    const { data, content } = matter(file);
    const frontmatter = { title: data.title, description: data.description };

    return {
      slug: fileName.replace(".md", ""),
      content: content,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
