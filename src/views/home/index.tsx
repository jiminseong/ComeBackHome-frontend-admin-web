"use client";
import Image from "next/image";
import React from "react";
import backgroundImage from "@/assets/images/background.png";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  // 구글 로그인 핸들러
  const handleGoogleLogin = () => {
    console.log("Google Login");
    router.push("/user");
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-[#F8F8F8]">
      <div className="flex h-[50%] bg-gray-100">
        <div className="flex  flex-col justify-center items-center md:w-1/2 bg-white p-8">
          <h1 className="text-2xl font-semibold mb-6 text-[#111928]">컴백홈 관리자 로그인</h1>
          <div className="flex justify-center w-full">
            <button
              className="w-[80%] py-2 bg-primary  text-white font-regular rounded-md cursor-pointer"
              onClick={handleGoogleLogin}
            >
              구글로 로그인
            </button>
          </div>
        </div>
        <Image
          className="hidden md:flex flex-col justify-center items-center text-white text-center"
          alt="background"
          width={500}
          height={500}
          src={backgroundImage}
        />
      </div>
    </div>
  );
};

export default HomePage;
