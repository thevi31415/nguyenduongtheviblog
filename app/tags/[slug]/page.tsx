import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import path from "path";
import { TagsMetadata } from "@/components/TagsMatadata";
("@/components/PostMetadata");
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "post");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`post/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });
};
const Tags = (props: any) => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // eslint-disable-next-line react/jsx-key

    <div key={post.slug}>
      <div className="flex flex-col w-full border  hover:bg-slate-50 rounded p-4 mb-4 hover:shadow-sm">
        <span className="font-bold gradient-text">
          {" "}
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </span>
        <span className="text-sm text-slate-400 mt-2">{post.subtitle}</span>
        <div className="mt-auto">
          <time className="text-sm text-slate-400">🕖 {post.date}</time>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center mb-5">
          <li>
            <Link title="all" href={`#`}>
              <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                #all
              </span>
            </Link>
          </li>
        </ul>
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          📝All
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {postPreviews}
        </div>{" "}
      </div>
    </div>
  );
};
export default Tags;
