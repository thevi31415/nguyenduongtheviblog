"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar/page"; // Thêm dấu chấm phẩy ở đây
import Footer from "./components/footer/page";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <nav className="fixed shadow-md top-0 left-0 w-full z-10 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/30">
        {/* <div className="flex justify-center p-4 border-b bg-white-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-center ">
              <div className="hidden md:block"></div>
               <div className="text-center">
                <div
                  className="gradient-text font-bold"
                  style={{ fontSize: 20 }}
                >
                  <Link href="/">The Vi Blog</Link>
                </div>
             
              </div> 
            </div>
          </div>
        </div> */}

        <div>
          <div className="md:hidden">
            <div className="flex justify-center m-2">
              <div
                className="flex items-center p-1 px-3 border rounded-md cursor-pointer"
                id="menu-button"
              >
                <Image
                  className="w-5 h-5 mr-2"
                  src="/menu.svg"
                  alt="menu"
                  width={50}
                  height={50}
                />
                <div className="text-xl">Menu</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block" id="menu">
            <ul className="justify-center text-lg font-medium md:flex">
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <Link
                      href="/"
                      className="gradient-text"
                      style={{ fontWeight: "bold", fontSize: 25 }}
                    >
                      TheVi
                    </Link>
                  </span>
                </p>
              </li>
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/">🏠</a>
                    <Link href="/" className="gradient-text">
                      Home
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/blog">📒</a>
                    <Link href="/blog" className="gradient-text">
                      Blog
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/quiz">💡</a>
                    <Link href="/quiz" className="gradient-text">
                      Quiz
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/documents">🗂</a>
                    <Link href="/documents" className="gradient-text">
                      Documents
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/about">🧑🏻‍💻</a>
                    <Link href="/about" className="gradient-text">
                      About
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
              {/* <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/contact">📞</a>
                    <Link href="/contact" className="gradient-text">
                      Contact
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li> */}
              <li className="p-3 mx-2 ">
                <p className="relative group">
                  <span>
                    <a href="/project">🛠</a>
                    <Link href="/project" className="gradient-text">
                      Projects
                    </Link>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* <div>
          <div id="menu">
            <ul className="justify-center text-lg font-medium md:flex">
            
             

             

              

             
            </ul>
          </div>
        </div> */}
      </nav>
    </header>
  );
  const footer = (
    <>
      <div className="text-center">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-1">
          Made by{" "}
          <a
            href="https://github.com/thevi31415"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer"
          >
            @thevi31415
          </a>
        </p>
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400 mb-1">
          © 2024 Nguyen Duong The Vi. All Rights Reserved.
        </span>
        {/* <a
          href="https://github.com/thevi31415/nguyenduongtheviblog"
          target="_blank"
          className="  text-lg rounded-full bg-sky-400/10 px-2 py-1 font-medium leading-5 text-sky-600 dark:text-sky-400"
        >
          Source code
        </a> */}
        <ul className="flex justify-center mt-2 mb-5 space-x-5">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleClick = () => {
      const menubtn = document.getElementById("menu-button");
      const menu = document.getElementById("menu");
      if (menubtn && menu) {
        menu.classList.toggle("hidden");
      }
    };

    const menubtn = document.getElementById("menu-button");
    if (menubtn) {
      menubtn.addEventListener("click", handleClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (menubtn) {
        menubtn.removeEventListener("click", handleClick);
      }
    };
  }, []); // empty dependency array means this effect runs once after mount

  return (
    <html>
      <head />
      <body>
        {header}
        <div className="mx-auto  max-w-4xl px-4">
          <div className="mx-auto  max-w-4xl px-4 mt-20">{children}</div>
        </div>
        {footer}
        <Fragment>
          {show ? (
            <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
              <button
                onClick={jumpToTop}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full p-2 hover:bg-blue-900 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <Fragment />
          )}
        </Fragment>
        {/* <div className="bg-gray-100 h-screen flex items-center justify-center">
          <div className="max-w-md bg-white border border-gray-300 p-8 rounded-lg  text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Trang web đang được chỉnh sửa
            </h2>
            <p className="text-gray-600 mb-4">Vui lòng quay trở lại sau!</p>

            <blockquote className="relative mt-6 mb-6">
              <svg
                className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-gray-700"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                ></path>
              </svg>

              <div className="relative z-10">
                <p className="text-gray-800 sm:text-xl dark:text-white">
                  <em>
                    Mọi việc trở nên tốt đẹp hơn hay tồi tệ đi đều bắt nguồn từ
                    suy nghĩ của bạn.
                  </em>
                </p>
              </div>

              <footer className="mt-4">
                <div className="flex items-center">
                  <div className="ms-4">
                    <div className="text-base font-semibold text-gray-800 dark:text-gray-400">
                      William Shakepeare.
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400 mb-1">
              © 2024 Nguyen Duong The Vi. All Rights Reserved.
            </span>
          </div>
        </div> */}
      </body>
    </html>
  );
}
