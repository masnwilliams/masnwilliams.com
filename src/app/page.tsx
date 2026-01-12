import HomePageClient from "@/components/HomePageClient";
import { getBlogPosts } from "@/lib/posts";

const HomePage = async () => {
  const posts = await getBlogPosts();

  return <HomePageClient posts={posts} />;
};

export default HomePage;
