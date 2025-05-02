import React from "react";
import Header from "@/widgets/header/Header";
import DogTable from "@/views/dog/ui/DogTable";

const DogPage = () => {
  //TODO: API에서 강아지 목록을 가져오는 로직 추가
  //TODO: 로그인 안되어있으면 로그인 페이지로 리다이렉트하는 로직 추가

  const dogs = [
    {
      name: "바둑이",
      // photo: "/assets/images/dog1.jpg",
      owner: {
        name: "지민성",
        email: "jiminseong@example.com",
        // photo: "/assets/images/owner1.jpg",
      },
      details: "수컷, 4살",
    },
    {
      name: "초코",
      // photo: "/assets/images/dog2.jpg",
      owner: {
        name: "박승규",
        email: "parksg123@example.com",
        // photo: "/assets/images/owner2.jpg",
      },
      details: "암컷, 2살",
    },
    {
      name: "흰둥이",
      // photo: "/assets/images/dog3.jpg",
      owner: {
        name: "조현호",
        email: "jhon.smith@example.com",
        // photo: "/assets/images/owner3.jpg",
      },
      details: "수컷, 3살",
    },
    {
      name: "검둥이",
      // photo: "/assets/images/dog4.jpg",
      owner: {
        name: "임현성",
        email: "suljym.info@example.com",
        // photo: "/assets/images/owner4.jpg",
      },
      details: "암컷, 5살",
    },
    {
      name: "누렁이",
      // photo: "/assets/images/dog5.jpg",
      owner: {
        name: "김아무개",
        email: "alex.semeul@example.com",
        // photo: "/assets/images/owner5.jpg",
      },
      details: "수컷, 6살",
    },
    {
      name: "점박이",
      // photo: "/assets/images/dog6.jpg",
      owner: {
        name: "정환준",
        email: "limition@example.com",
        // photo: "/assets/images/owner6.jpg",
      },
      details: "암컷, 1살",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <Header />
      <div className="container mx-auto mt-8">
        <DogTable dogs={dogs} />
      </div>
    </div>
  );
};

export default DogPage;
