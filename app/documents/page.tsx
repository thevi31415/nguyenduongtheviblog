import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "The Vi Blog",
  description: "This is my personal blog, sharing about my everyday life.",
};
export default function Document() {
  return (
    <div className="">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <h4 className="  text-2xl font-medium text-gray-700 mb-5" id="new">
        📁 Documents
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-file-alt text-5xl text-blue-700 mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">
                Document 1
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white rounded-full py-2 px-6 hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
              <i className="fas fa-download mr-2"></i> Download
            </button>
          </div>
        </li>
        <li className="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-file-alt text-5xl text-blue-700 mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">
                Document 1
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white rounded-full py-2 px-6 hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
              <i className="fas fa-download mr-2"></i> Download
            </button>
          </div>
        </li>
        <li className="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-file-alt text-5xl text-blue-700 mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">
                Document 2
              </h2>
              <p className="text-gray-600">
                Sed ullamcorper libero quis mauris tempus, sit amet auctor leo
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white rounded-full py-2 px-6 hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
              <i className="fas fa-download mr-2"></i> Download
            </button>
          </div>
        </li>
        <li className="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-file-alt text-5xl text-blue-700 mr-4"></i>
            <div>
              <h2 className="text-lg font-semibold text-blue-700">
                Document 3
              </h2>
              <p className="text-gray-600">
                Pellentesque habitant morbi tristique senectus et netus et
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white rounded-full py-2 px-6 hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
              <i className="fas fa-download mr-2"></i> Download
            </button>
          </div>
        </li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
}
