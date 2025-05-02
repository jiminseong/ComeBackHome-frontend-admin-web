import React from "react";
import Header from "@/widgets/header/Header";

import UserTable from "@/views/user/ui/UserTable";

const UserPage = () => {
  //TODO: API에서 유저 목록을 가져오는 로직 추가
  //TODO: 로그인 안되어있으면 로그인 페이지로 리다이렉트하는 로직 추가

  const users = [
    { name: "지민성", email: "jiminseong@example.com", status: "활성화", role: "최고관리자" },
    { name: "박승규", email: "parksg123@example.com", status: "활성화", role: "최고관리자" },
    { name: "조현호", email: "jhon.smith@example.com", status: "활성화", role: "관리자" },
    { name: "임현성", email: "suljym.info@example.com", status: "활성화", role: "관리자" },
    { name: "김아무개", email: "alex.semeul@example.com", status: "비활성화", role: "일반 사용자" },
    { name: "정환준", email: "limition@example.com", status: "활성화", role: "관리자" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <Header />
      <div className="container mx-auto mt-8">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default UserPage;
