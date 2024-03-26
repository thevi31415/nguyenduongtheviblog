/* eslint-disable react/no-unescaped-entities */
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
const formatDate = (dateString: String) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [day, month, year] = dateString.split("-").map(Number);
  const monthName = months[month - 1];

  return `${day} ${monthName}, ${year}`;
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
      {/* <div className="flex flex-col w-full border hover:bg-slate-50 rounded p-4 mb-1 hover:shadow-sm">
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
      </div> */}

      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          {formatDate(quiz.date)}
        </h3>
      </div>
      <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
        <Link
          href={`/quiz/${quiz.IDT}`}
          className="absolute inset-0 z-[1]"
        ></Link>
        <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
          </div>
        </div>
        <div className="grow p-2 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            <svg
              className="flex-shrink-0 size-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
            {quiz.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {quiz.subtitle}
          </p>
          <button
            type="button"
            className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <Image
              width={500}
              height={500}
              className="flex-shrink-0 size-4 rounded-full"
              src="/profile.jpg"
              alt="Image Description"
            />
            Nguyen Duong The Vi
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="overflow-hidden">
        {/* 
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mb-2">
          {postPreviews}
        </div>{" "} */}
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          ✍🏻 Quiz
        </h4>
        <div className="timeline mb-3">{postPreviews}</div>
      </div>
    </div>
  );
}
