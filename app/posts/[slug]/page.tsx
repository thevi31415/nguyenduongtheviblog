import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import Giscus from "@giscus/react";
import Styles from "./style.module.css";
import Comments from "../../components/comments";
import { PostMetadata } from "@/components/PostMetadata";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Metadata } from "next";
import { FacebookShare } from "react-share-kit";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import Link from "next/link";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
const getPostContent = (slug: string) => {
  const folder = "post/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
const getPostMetadata = (): PostMetadata[] => {
  const folder = "post/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`post/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      tag: matterResult.data.tag,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      id: matterResult.data.id,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const metadata: Metadata = {
    title: post.data.title,
    description: "Your default description here", // Update description if needed
  };

  return (
    <div>
      <div className="my-3 text-left gradient-text ">
        <h1 className="text-4xl text-slate-600 font-bold ">
          {post.data.title}
        </h1>
      </div>
      <div className="flex justify-between w-full  mt-5">
        <div>
          <a className="flex items-center" href="/about">
            <div className="relative w-12 h-12">
              <div className="w-full h-full">
                <Image
                  className="rounded-full  h-11 w-11  object-cover"
                  src="/profile.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>

            <div className="flex flex-col ml-1  font-medium text-sky-600 hover:text-sky-600">
              <p className="hover:underline">Nguyen Duong The Vi</p>
              <p className=" text-sm text-slate-900">{post.data.date}</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a target="_blank" aria-label="Link to LinkedIn page" href="#">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-600 hover:text-[#0072b1] dark:text-gray-400 dark:hover:text-[#0072b1] fill-current hover:scale-[1.05]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </div>
          </a>
          <a
            target="_blank"
            className="hidden sm:block"
            aria-label="Link to Twitter page"
            href="#"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-600 hover:text-[#1DA1F2] dark:text-gray-400 dark:hover:text-[#1DA1F2] fill-current hover:scale-[1.05]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="60px"
                height="60px"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </div>
          </a>
          <a target="_blank" aria-label="Link to GitHub page" href="#">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white fill-current hover:scale-[1.05]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="60px"
                height="60px"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div></div>
      <div className=" bg-white rounded-lg">
        <div className="flex gap-2 flex-wrap p-4">
          <Link title="all" href={`/tags/${post.data.tag}`}>
            <span className="bg-gray-100 rounded-full px-3 py-1 text-xl font-semibold text-gray-600">
              # {post.data.tag}
            </span>
          </Link>
        </div>
        <article className="flex items-start justify-left prose max-w-none max-w-full  ">
          <div className={Styles.markdownContainer}>
            <Markdown className={Styles.markdown}>{post.content}</Markdown>
          </div>
        </article>
        <div className="bg-gradient-to-r from-blue-400 to-blue-800 text-white border-l-4 border-blue-600 rounded-lg p-4 mb-8">
          <p className="font-semibold">Cảm ơn bạn đã đọc bài viết ! 🥰 🥰 🥰</p>
          <p className="text-sm">
            Hãy nêu ý kiến của mình ở phần bình luận phía dưới nhé !
          </p>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default PostPage;
