"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="thevi31415/nguyenduongtheviblog"
      repoId="R_kgDOLfAqMg"
      category="Announcements"
      categoryId="DIC_kwDOLfAqMs4Cd_i6"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
