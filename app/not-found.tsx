import Link from "next/link";

const FourOhFour = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        😓 404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Xin lỗi ! Trang bạn đang tìm kiếm không tồn tại rồi nhé !!!
      </p>
      <a href="/">
        <a className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Back to Home
        </a>
      </a>
    </div>
  );
};

export default FourOhFour;
