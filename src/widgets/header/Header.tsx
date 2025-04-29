import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-primary font-bold text-lg">ComeBackHome</h1>
        <nav className="flex space-x-20">
          <Link href="/dog">
            <p className="text-gray-700 hover:text-primary">실종견</p>
          </Link>
          <Link href="/user">
            <p className="text-gray-700 hover:text-primary">사용자</p>
          </Link>
          <Link href="/logs/main">
            <p className="text-gray-700 hover:text-primary">MAIN 서버 로그</p>
          </Link>
          <Link href="/logs/ai">
            <p className="text-gray-700 hover:text-primary">AI 서버 로그</p>
          </Link>
        </nav>
        <div>
          <Link href="/">
            <p className="text-gray-700 hover:text-primary">로그 아웃</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
