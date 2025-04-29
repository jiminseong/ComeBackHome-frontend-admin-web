import axios from "axios";

export const getLogs = async (): Promise<string[]> => {
  const res = await axios.get("https://cbh.kro.kr/logs", {
    responseType: "text", // 응답을 string으로 받기 위해 설정
  });

  return res.data.split("\n").filter(Boolean);
};
