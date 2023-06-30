"use client";
import GameScreen from "@/components/GameScreen/GameScreen";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameScreen />
    </main>
  );
}
