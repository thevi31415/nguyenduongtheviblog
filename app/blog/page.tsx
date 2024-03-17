import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import { useEffect, useState } from "react";
import { Metadata } from "next";
("@/components/PostMetadata");
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
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
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime(); // Sắp xếp giảm dần, bài đăng mới nhất sẽ đứng trước
  });
};
export default function Blog() {
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
        {" "}
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          📝All
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {postPreviews}
        </div>{" "}
      </div>
    </div>
  );
}
