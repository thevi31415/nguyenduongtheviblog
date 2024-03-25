import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { QuizMetadata } from "@/components/QuizMetadata";
import { Metadata } from "next";
import { TagsMetadata } from "@/components/TagsMatadata";
import path from "path";
("@/components/PostMetadata");
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
// const getPaginationContent = (slug: string) => {
//   if (slug.trim() === "") {
//     slug = "1"; // Nếu rỗng, gán bằng "1"
//   }
//   const folder = "pagination/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

const getQuizMetadata = (): QuizMetadata[] => {
  const folder = path.join(process.cwd(), "question");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`question/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      IDT: matterResult.data.IDT,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      id: matterResult.data.id,
    };
  });
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });
};

const getTagsMetadata = (): TagsMetadata[] => {
  const folder = path.join(process.cwd(), "tags");
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
      id: matterResult.data.id,
    };
  });
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });
};

export default function Blog(props: any) {
  const quizMetadata = getQuizMetadata();
  const tagsMetadata = getTagsMetadata();
  const slug = "1";
  const start = (parseInt(slug) - 1) * 18;
  const end = parseInt(slug) * 18;
  let previousSlug = String(parseInt(slug) - 1);
  let nextSlug = String(parseInt(slug) + 1);
  if (previousSlug === "0") {
    previousSlug = "1";
  }

  const postPreviews = quizMetadata.slice(start, end).map((quiz, index) => (
    // eslint-disable-next-line react/jsx-key
    <div key={quiz.IDT}>
      <div className="flex flex-col w-full border hover:bg-slate-50 rounded p-4 mb-1 hover:shadow-sm">
        <span className="font-bold">
          ❓
          <Link href={`/quiz/${quiz.IDT}`} className="gradient-text">
            {quiz.title}
          </Link>
        </span>
        <span className="text-sm text-slate-400 mt-2">{quiz.subtitle}</span>
        <div className="mt-auto">
          <time className="text-sm text-slate-400">🕖{quiz.date}</time>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="overflow-hidden">
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          ✍🏻 Quiz
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mb-2">
          {postPreviews}
        </div>{" "}
      </div>
    </div>
  );
}
