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

// const getPostMetadata = (tagSlug: string): PostMetadata[] => {
//   const folder = path.join(process.cwd(), "post");
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));
//   const posts = markdownPosts
//     .map((fileName) => {
//       const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
//       const matterResult = matter(fileContents);
//       const tags = matterResult.data.tag || [];
//       if (tags.includes(tagSlug)) {
//         return {
//           title: matterResult.data.title,
//           tag: matterResult.data.tag,
//           date: matterResult.data.date,
//           subtitle: matterResult.data.subtitle,
//           slug: fileName.replace(".md", ""),
//         };
//       }
//       return null; // Nếu bài viết không có tag bằng slug, trả về null
//     })
//     .filter((post): post is PostMetadata => post !== null); // Lọc ra các bài viết không null
//   return posts.sort((a, b) => {
//     if (a && b) {
//       const dateA = new Date(a.date.split("-").reverse().join("-"));
//       const dateB = new Date(b.date.split("-").reverse().join("-"));
//       return dateB.getTime() - dateA.getTime(); // Sắp xếp giảm dần, bài đăng mới nhất sẽ đứng trước
//     }
//     return 0;
//   });
// };
const getPostMetadata = (tagSlug: string): PostMetadata[] => {
  const folder = path.join(process.cwd(), "post");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`post/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      const tags = matterResult.data.tag || [];
      if (tags.includes(tagSlug)) {
        return {
          title: matterResult.data.title,
          tag: matterResult.data.tag,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          slug: fileName.replace(".md", ""),
        };
      }
      return null;
    })
    .filter((post): post is PostMetadata => post !== null); // Lọc ra các bài viết không null
  return posts.sort((a, b) => {
    if (a && b) {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return dateB.getTime() - dateA.getTime(); // Sắp xếp giảm dần, bài đăng mới nhất sẽ đứng trước
    }
    return 0;
  });
};
const Tags = (props: any) => {
  const slug = props.params.slug;
  const postMetadata = getPostMetadata(slug);

  const postPreviews =
    postMetadata.length > 0 ? (
      postMetadata.map((post) => (
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
      ))
    ) : (
      <div className="flex text-2xl font-sm mb-5">
        🕵🏼‍♂️ Không tìm thấy kết quả nào !
      </div>
    );

  return (
    <div>
      <div className="overflow-hidden">
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          # {slug}
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {postPreviews ? (
            postPreviews
          ) : (
            <div className="text-red-500">Not Found</div>
          )}
        </div>{" "}
      </div>
    </div>
  );
};
export default Tags;
