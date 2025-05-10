// TODO : 로그인 안되면 못하도록
export const getLogs = async (): Promise<string[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/logs`);
  const text = await res.text();

  return text.split("\n").filter(Boolean);
};
