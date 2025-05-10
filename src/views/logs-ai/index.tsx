"use client";

import { useState } from "react";
// import { getLogs } from "./api/getLogsStream"; // fetch로 받아오는 함수
import Header from "@/widgets/header/Header";

export const LogAIPage = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      // const rawLogs = await getLogs(); // plain text 형태
      const rawLogs = "예시용 로그\n로그 내용 1\n로그 내용 2\n로그 내용 3"; // 예시 로그
      const lines = rawLogs.split("\n").filter(Boolean); // 줄 단위로 자르기
      // const lines = rawLogs.flatMap((log) => log.split("\n").filter((line) => line.trim() !== "")); // 줄 단위로 자르기
      setLogs((prev) => [...prev, ...lines]);
    } catch (err) {
      console.error("로그 가져오기 실패:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <Header />
      <div className="container mx-auto mt-8">
        <button
          onClick={fetchLogs}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition mt-4"
        >
          {loading ? "불러오는 중..." : "로그 불러오기"}
        </button>

        <div className="w-full bg-gray-100 rounded-lg p-4 space-y-2 overflow-auto h-[500px] mt-6 border border-gray-300">
          {logs.length === 0 ? (
            <p className="text-gray-500 text-center">표시할 로그가 없습니다.</p>
          ) : (
            logs.map((line, idx) => (
              <p
                key={idx}
                className="text-sm text-gray-800 bg-white p-2 rounded shadow whitespace-pre-wrap"
              >
                {line}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LogAIPage;
