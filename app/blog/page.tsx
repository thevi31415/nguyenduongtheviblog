import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import { TagsMetadata } from "@/components/TagsMatadata";
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
const getTagsMetadata = (): TagsMetadata[] => {
  const folder = "tags/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`tags/${fileName}`, "utf8");
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
  const tagsMetadata = getTagsMetadata();
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
  const tagsPreviews = tagsMetadata.slice(0, 100).map((tags) => (
    <div key={tags.slug}>
      <li>
        <Link title="all" href={`/tags/${tags.slug}`}>
          {tags.title[0].toUpperCase() >= "A" &&
          tags.title[0].toUpperCase() <= "D" ? (
            <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              # 🥇 {tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "E" &&
            tags.title[0].toUpperCase() <= "G" ? (
            <span className="bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              # 🥇 {tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "H" &&
            tags.title[0].toUpperCase() <= "K" ? (
            <span className="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "L" &&
            tags.title[0].toUpperCase() <= "O" ? (
            <span className="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "P" &&
            tags.title[0].toUpperCase() <= "S" ? (
            <span className="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "T" &&
            tags.title[0].toUpperCase() <= "V" ? (
            <span className="bg-indigo-100 text-indigo-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "W" &&
            tags.title[0].toUpperCase() <= "Z" ? (
            <span className="bg-purple-100 text-purple-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              #{tags.title}
            </span>
          ) : (
            <span className="bg-pink-100 text-pink-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              #{tags.title}
            </span>
          )}
        </Link>
      </li>
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
          {tagsPreviews}
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
}
