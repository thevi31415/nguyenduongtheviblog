import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Metadata } from "next";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
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
    <>
      <Head>
        <title>fhfh</title>
      </Head>
      <div>
        <div className="my-12 text-left gradient-text">
          <h1 className="text-6xl text-slate-600 font-bold ">
            {post.data.title}
          </h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>

        <article className="prose">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </>
  );
};

export default PostPage;
