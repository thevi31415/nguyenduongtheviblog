import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { DocumentMetadata } from "@/components/DocumentMeTadata";
import matter from "gray-matter";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};

const getDocumentMetadata = (): DocumentMetadata[] => {
  const folder = path.join(process.cwd(), "documents");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`documents/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: matterResult.data.id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      subtitle: matterResult.data.subtitle,
      url: matterResult.data.url,
      size: matterResult.data.size,
      type: matterResult.data.type,
    };
  });
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });
};
const getIconColor = (type: any) => {
  switch (type) {
    case "DOC":
      return "text-blue-500";
    case "PDF":
      return "text-red-500";
    case "XLS":
      return "text-green-500";
    case "PPT":
      return "text-orange-500";
    default:
      return "text-yellow-500";
  }
};
export default function Document() {
  const documentMetadata = getDocumentMetadata();
  const postPreviews = documentMetadata.map((document, index) => (
    <div key={document.id}>
      <li className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <i
              className={`fas fa-file-alt text-5xl ${getIconColor(
                document.type
              )} mr-4`}
            ></i>
            <div>
              <h2 className="text-lg font-semibold text-black-500">
                {document.title}
              </h2>
              <p className="text-gray-600">{document.subtitle}</p>
              <p className="text-sm text-gray-500 mt-2">
                Type: {document.type} | Size: {document.size} | Date:{" "}
                {document.date}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href={document.url}
              className="bg-green-400 text-white rounded-full py-2 px-6 hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              <i className="fas fa-download mr-2"></i> Download
            </Link>
          </div>
        </div>
      </li>
    </div>
  ));

  return (
    <div className="mb-5">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
        📁 Documents
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {postPreviews}
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
}
