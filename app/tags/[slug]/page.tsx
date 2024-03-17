import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
export default function Tags() {
  return (
    <div>
      <h1>Tags</h1>
    </div>
  );
}
