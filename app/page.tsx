import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import { useEffect, useState } from "react";
("@/components/PostMetadata");

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
export default async function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // eslint-disable-next-line react/jsx-key
    <div key={post.slug}>
      <div className="flex flex-col w-full dark:hover:bg-slate-900 border hover:bg-slate-50 rounded p-4 mb-4 dark:border-slate-600 dark:bg-black hover:shadow-sm dark:hover:shadow-sm">
        <span className="font-bold gradient-text">
          {" "}
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </span>
        <div className="flex justify-between">
          <span className="text-sm text-slate-400 mt-2">{post.subtitle}</span>
          <time className="text-sm text-slate-400 mt-2">{post.date}</time>
        </div>
      </div>{" "}
    </div>
  ));

  return (
    <div>
      {" "}
      <div className="flex items-center justify-center">
        <div className="mb-4 text-black-700 dark:text-gray-100 justify-center">
          Hi! Im Nguyen Duong The Vi 😍🖐 !
        </div>
      </div>
      <div className="overflow-hidden">
        {" "}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {postPreviews}
        </div>{" "}
      </div>
    </div>
  );
}
