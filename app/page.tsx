import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
("@/components/PostMetadata");

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
export default async function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // eslint-disable-next-line react/jsx-key
    <>
      <li className="flex flex-col w-full dark:hover:bg-slate-900 border hover:bg-slate-50 rounded p-4 mb-4 dark:border-slate-600 dark:bg-black hover:shadow-sm dark:hover:shadow-sm">
        <span className="font-bold">
          {" "}
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </span>
        <div className="flex justify-between">
          <span className="text-sm text-slate-400 mt-2">{post.subtitle}</span>
          <time className="text-sm text-slate-400 mt-2">{post.date}</time>
        </div>
      </li>
    </>
  ));
  return <div>{postPreviews}</div>;
}
