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
      {/* <div className="flex items-center justify-center">
        <div className="mb-4 text-black-700 dark:text-gray-100 justify-center">
          Hi! Im Nguyen Duong The Vi 😍🖐 !
        </div>
      </div> */}
      <div className="mb-10 mt-5 flex flex-col-reverse justify-between items-start sm:flex-row p-4 rounded-lg border-2 border-blue-300">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-2xl md:text-2xl -ml-0.5 mb-2 text-black dark:text-white">
            Hi! Im Nguyen Duong The Vi 😍 !
          </h1>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Ho Chi Minh City, Vietnam
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Currently, I am a third-year student at Ho Chi Minh City University
            of Technology and Education.
          </p>
        </div>
        <div className="w-[80px] sm:w-[200px] relative mb-8 sm:mb-0">
          <Image
            alt="Nguyen Duong The Vi"
            sizes="30vw"
            src="/profile.jpg"
            width={176}
            height={176}
            className="rounded-full"
          />
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
