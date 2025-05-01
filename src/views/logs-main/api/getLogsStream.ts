export const getLogs = async (): Promise<string[]> => {
  const res = await fetch("https://cbh.kro.kr/logs");
  const text = await res.text();

  return text.split("\n").filter(Boolean);
};
