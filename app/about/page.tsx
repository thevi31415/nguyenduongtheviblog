import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full">
      <Image
        src="/profile.jpg"
        width={80}
        height={80}
        alt="Nguyen Duong The Vi"
        sizes="30vw"
        className="rounded-lg"
      />
      <p className="mt-4">
        Hello! My name is Nguyen Duong The Vi. I am a third-year student
        majoring in Information Technology at Ho Chi Minh City University of
        Technology and Education.
      </p>
      <h2 className="text-black mb-4 mt-4 font-bold">Get in contact</h2>
      <div className="space-x-4 ">
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md text-white"
          href="https://github.com/thevi31415"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
