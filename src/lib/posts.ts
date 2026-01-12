import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const metadataMatch = content.match(
      /export\s+const\s+metadata\s*=\s*(\{[\s\S]*?\n\})/
    );
    if (!metadataMatch) continue;

    const metadataStr = metadataMatch[1];

    const draftMatch = metadataStr.match(/draft\s*:\s*(true|false)/);
    if (draftMatch?.[1] === "true") continue;

    const titleMatch = metadataStr.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
    const title = titleMatch?.[1];
    if (!title) continue;

    const dateMatch = metadataStr.match(/date\s*:\s*['"`]([^'"`]+)['"`]/);

    posts.push({
      slug: file.replace(/\.mdx$/, ""),
      title,
      date: dateMatch?.[1] || "",
    });
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
