import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import Giscus from "@giscus/react";
import Styles from "./style.module.css";
import Comments from "../../components/comments";
import FB from "../../components/ButtonFacebook";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
  oneLight,
  oneDark,
  darcula,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostMetadata } from "@/components/PostMetadata";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Metadata } from "next";
import { FacebookShare } from "react-share-kit";
import { format, parse } from "date-fns";
import Link from "next/link";
import path from "path";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HTMLAttributes, ReactElement } from "react";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
interface CodeProps extends HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any; // Adding node property
}

const getPostMetadataIdTag = (
  id1?: string,
  tag1?: string,
  id2?: string,
  tag2?: string
): PostMetadata[] => {
  const folder = path.join(process.cwd(), "post");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const matchedPosts: PostMetadata[] = [];

  for (const fileName of markdownPosts) {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(fileContents);
    const post: PostMetadata = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      id: matterResult.data.id,
    };

    if (
      (post.id === id1 && post.tag === tag1) ||
      (post.id === id2 && post.tag === tag2)
    ) {
      matchedPosts.push(post);
    }
  }

  return matchedPosts;
};
const formatDate = (dateString: string) => {
  const parsedDate = parse(dateString, "d-M-yyyy", new Date()); // Chuyển đổi chuỗi ngày thành đối tượng ngày
  return format(parsedDate, "MMM d, yyyy"); // Định dạng lại ngày theo định dạng mong muốn
};
const getPostContent = (slug: string) => {
  const folder = "post/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const parsedNumber = parseInt(post.data.id);
  const originalDate = post.data.date;
  const formattedDate = formatDate(originalDate);
  const handleShare = () => {
    const currentUrl = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  // Tìm giá trị -1 và +1 và chuyển thành chuỗi
  const prevNumber = (parsedNumber - 1).toString();
  const nextNumber = (parsedNumber + 1).toString();
  const postid = getPostMetadataIdTag(
    prevNumber,
    post.data.tag,
    nextNumber,
    post.data.tag
  );
  const postPreviews = postid.map((post, index) => (
    // eslint-disable-next-line react/jsx-key
    <div key={post.slug}>
      <div className="flex flex-col w-full border hover:bg-slate-50 rounded p-4 mb-1 hover:shadow-sm">
        <span className="font-bold">
          <Link href={`/posts/${post.slug}`} className="gradient-text">
            {post.title}
          </Link>
        </span>
        <span className="text-sm text-slate-400 mt-2">{post.subtitle}</span>
        <div className="mt-auto">
          <time className="text-sm text-slate-400">🕖{post.date}</time>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className={Styles.progressBar}></div>
      <div className="mb-2 flex justify-between max-sm-gutters:mb-2 max-sm-gutters:block ">
        <a
          className="inline-flex border border-solid rounded-md font-medium gap-2 items-center whitespace-nowrap transition h-9 px-4 text-xs border-button-secondary bg-button-secondary text-button-secondary shadow-xs hocus:bg-button-secondary-hover active:scale-98 max-sm-gutters:mb-4 hover:border-blue-400 hover:text-blue-400"
          href="/blog"
        >
          <span className="flex self-center text-inherit leading-none select-none">
            All Posts
          </span>
        </a>
      </div>

      <div className="my-3 text-left gradient-text ">
        <h1 className="text-4xl text-slate-600 font-bold ">
          {post.data.title}
        </h1>
      </div>

      <div className="flex pb-4 justify-between w-full  mt-5 border-b border-borderColor">
        <div>
          <div className="flex items-center">
            <header className="z-1 flex w-full flex-row self-start">
              <a
                className="flex min-w-0 shrink items-center no-underline"
                href="#"
                aria-expanded="false"
              >
                <Image
                  className="object-cover w-11 h-11 rounded-full"
                  loading="lazy"
                  alt="profile"
                  src="/profile.jpg"
                  width={500}
                  height={500}
                />
              </a>
              <div className="ml-3 flex min-w-0 flex-1 flex-col typo-callout">
                <span className="flex flex-row">
                  <a
                    title="Nguyen Duong the Vi"
                    className="commentAuthor w-fit font-bold text-theme-label-primary typo-callout flex min-w-0 shrink items-center no-underline"
                    href="/about"
                    aria-expanded="false"
                  >
                    <span className="max-w-full shrink truncate  text-sky-600">
                      Nguyen Duong The Vi
                    </span>
                  </a>
                  <span className="flex items-center font-bold capitalize typo-caption2 tablet:gap-0.5 tablet:typo-footnote ml-1 text-theme-label-primary">
                    <Image
                      alt="profile"
                      src="/tick.svg"
                      width={19}
                      height={19}
                    />
                  </span>
                </span>

                <span className="items-center text-theme-label-quaternary flex flex-row">
                  <a
                    className="flex min-w-0 shrink items-center no-underline"
                    href="https://github.com/thevi31415"
                  >
                    <span
                      title="@thevi31415"
                      className="max-w-full shrink truncate"
                    >
                      @thevi31415
                    </span>
                  </a>
                  <div className="mx-1 h-0.5 w-0.5 bg-theme-label-quaternary"></div>
                  <time className="typo-callout">{formattedDate}</time>
                </span>
              </div>
            </header>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-x-3">
            <button
              aria-label="facebook"
              className="react-share__ShareButton"
              aria-expanded="false"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0px",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex"
                style={{ backgroundColor: "rgb(59, 89, 151)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="text-xl m-auto text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </div>
            </button>

            <button
              aria-label="twitter"
              className="react-share__ShareButton"
              aria-expanded="false"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0px",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex"
                style={{ backgroundColor: "rgb(0, 171, 236)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-xl m-auto text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </div>
            </button>

            <button
              aria-label="linkedin"
              className="react-share__ShareButton"
              aria-expanded="false"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0px",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex"
                style={{ backgroundColor: "rgb(0, 123, 181)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-xl m-auto text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-lg ">
        <div className="flex gap-2 flex-wrap p-4">
          <Link title="all" href={`/tags/${post.data.tag}`}>
            <span className="w-fit cursor-default flex-row items-center gap-1.5 rounded-full text-center  opacity-100 transition-opacity duration-200 ease-in-out hover:opacity-80 border border-zinc-100 dark:border-zinc-800 inline-flex min-w-[30px] px-3 py-1 text-sm bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 text-xl font-semibold">
              #{post.data.tag}
            </span>
          </Link>
        </div>

        <article className="flex items-start justify-left prose max-w-none max-w-full  ">
          <div className={Styles.markdownContainer}>
            {/* <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={post.content}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={oneLight as any}
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            /> */}
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={post.content}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }: CodeProps) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      style={materialLight as any}
                      {...props}
                    />
                  ) : (
                    <code {...props}>{children}</code> // Removed className={className}
                  );
                },
              }}
            />
            {/* <Markdown className={Styles.markdown}>{post.content}</Markdown> */}
          </div>
        </article>
        <div className="bg-gradient-to-r from-blue-400 to-blue-800 text-white border-l-4 border-blue-600 rounded-lg p-4 mb-8">
          <p className="font-semibold">Cảm ơn bạn đã đọc bài viết ! 🥰 🥰 🥰</p>
          <p className="text-sm">
            Hãy nêu ý kiến của mình ở phần bình luận phía dưới nhé !
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        {" "}
        <h4 className="  text-xl font-medium text-gray-700 mb-2" id="new">
          ✨ Bài viết liên quan
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mb-4">
          {postPreviews}
        </div>{" "}
      </div>
      <Comments />
    </div>
  );
};

export default PostPage;
