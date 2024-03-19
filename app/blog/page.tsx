import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";
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

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "post");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`post/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
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
  const postMetadata = getPostMetadata();
  const tagsMetadata = getTagsMetadata();
  // const postPreviews = postMetadata.map((post) => (
  //   // eslint-disable-next-line react/jsx-key

  //   <div key={post.slug}>
  //     <div className="flex flex-col w-full border  hover:bg-slate-50 rounded p-4 mb-1 hover:shadow-sm">
  //       <span className="font-bold gradient-text">
  //         {" "}
  //         <Link href={`/posts/${post.slug}`}>{post.title}</Link>
  //       </span>
  //       <span className="text-sm text-slate-400 mt-2">{post.subtitle}</span>
  //       <div className="mt-auto">
  //         <time className="text-sm text-slate-400">🕖 {post.date}</time>
  //       </div>
  //     </div>
  //   </div>
  // ));
  const slug = "1";
  const start = (parseInt(slug) - 1) * 18;
  const end = parseInt(slug) * 18;
  let previousSlug = String(parseInt(slug) - 1);
  let nextSlug = String(parseInt(slug) + 1);
  if (previousSlug === "0") {
    previousSlug = "1";
  }

  const postPreviews = postMetadata.slice(start, end).map((post, index) => (
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
  const tagsPreviews = tagsMetadata.slice(0, 100).map((tags) => (
    <div key={tags.slug}>
      <li className="mb-2">
        <Link title="all" href={`/tags/${tags.slug}`}>
          {tags.title[0].toUpperCase() >= "A" &&
          tags.title[0].toUpperCase() <= "D" ? (
            <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              🔖 #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "E" &&
            tags.title[0].toUpperCase() <= "G" ? (
            <span className="bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              🔖 #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "H" &&
            tags.title[0].toUpperCase() <= "K" ? (
            <span className="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              🔖 #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "L" &&
            tags.title[0].toUpperCase() <= "O" ? (
            <span className="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              🔖 #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "P" &&
            tags.title[0].toUpperCase() <= "S" ? (
            <span className="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              🔖 #{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "T" &&
            tags.title[0].toUpperCase() <= "V" ? (
            <span className="bg-indigo-100 text-indigo-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              🔖#{tags.title}
            </span>
          ) : tags.title[0].toUpperCase() >= "W" &&
            tags.title[0].toUpperCase() <= "Z" ? (
            <span className="bg-purple-100 text-purple-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              🔖#{tags.title}
            </span>
          ) : (
            <span className="bg-pink-100 text-pink-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              🔖 #{tags.title}
            </span>
          )}
        </Link>
      </li>
    </div>
  ));
  return (
    <div>
      <div className="overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center mb-1">
          <li className="mb-2">
            <Link title="all" href={`#`}>
              <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                📌 #all
              </span>
            </Link>
          </li>
          {tagsPreviews}
        </ul>
        <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
          📝All
        </h4>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mb-2">
          {postPreviews}
        </div>{" "}
        <div className="flex justify-center space-x-4 mb-8">
          {/* <a
            href={`/blog/`}
            className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <span>👈</span>
            <span>Trang trước</span>
          </a>
          <a
            href={`/blog/`}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <span>Trang sau</span>
            <span>👉</span>
          </a> */}

          <Link
            className="flex gap-x-4 md:gap-x-6 items-center w-full  md:w-fit md:max-w-md px-4 md:px-5 py-2 border-2 border-transparent text-base leading-base text-link dark:text-link-dark rounded-lg group focus:text-link dark:focus:text-link-dark focus:bg-highlight focus:border-link dark:focus:bg-highlight-dark dark:focus:border-link-dark focus:border-opacity-100 focus:border-2 focus:ring-1 focus:ring-offset-4 focus:ring-blue-40 active:ring-0 active:ring-offset-0 hover:bg-blue-300 hover:text-white"
            href={`/blog/`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="duration-100 ease-in transition rotate-90 rtl:-rotate-90 inline text-tertiary dark:text-tertiary-dark group-focus:text-link dark:group-focus:text-link-dark"
              style={{ minWidth: "20px", minHeight: "20px" }}
            >
              <g
                fill="none"
                fillRule="evenodd"
                transform="translate(-446 -398)"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z"
                  transform="translate(356.5 164.5)"
                ></path>
                <polygon points="446 418 466 418 466 398 446 398"></polygon>
              </g>
            </svg>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold tracking-wide no-underline uppercase text-secondary dark:text-secondary-dark group-focus:text-link dark:group-focus:text-link-dark group-focus:text-opacity-100">
                Previous
              </span>
            </div>
          </Link>
          <Link
            className="flex gap-x-4 md:gap-x-6 items-center w-full  md:w-fit md:max-w-md px-4 md:px-5 py-2 border-2 border-transparent text-base leading-base text-link dark:text-link-dark rounded-lg group focus:text-link dark:focus:text-link-dark focus:bg-highlight focus:border-link dark:focus:bg-highlight-dark dark:focus:border-link-dark focus:border-opacity-100 focus:border-2 focus:ring-1 focus:ring-offset-4 focus:ring-blue-40 active:ring-0 active:ring-offset-0 hover:bg-blue-300 hover:text-white"
            href={`/blog/${nextSlug}`}
          >
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold tracking-wide no-underline uppercase text-secondary dark:text-secondary-dark group-focus:text-link dark:group-focus:text-link-dark group-focus:text-opacity-100">
                Next
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="duration-100 ease-in transition -rotate-90 rtl:rotate-90 inline text-tertiary dark:text-tertiary-dark group-focus:text-link dark:group-focus:text-link-dark"
              style={{ minWidth: "20px", minHeight: "20px" }}
            >
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(-446 -398)"
              >
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z"
                  transform="translate(356.5 164.5)"
                ></path>
                <polygon points="446 418 466 418 466 398 446 398"></polygon>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
