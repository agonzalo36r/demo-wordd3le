"use client";
import GameScreen from "@/components/GameScreen/GameScreen";
const getData = async () => {
  const words = await fetch(process.env.NEXT_PUBLIC_URL + "/api/wordReader").then((res) =>
    res.json()
  );
  return words;
};

export default async function Home() {
  const words = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameScreen words={words} />
    </main>
  );
}
