import Header from "@/components/GameScreen/Header";
import ThemeToggleButton from "@/components/Common/ThemeToggleButton";
import DialogContainer from "@/components/Dialogs/DialogContainer";
import InstructionsDialog from "@/components/Dialogs/InstructionsDialog";
import StatsDialog from "@/components/Dialogs/StatsDialog";
import Image from "next/image";
import Keyboard from "@/components/GameScreen/Keyboard/Keyboard";
import Board from "@/components/GameScreen/Board/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Board />
      <Keyboard />
      {/* <InstructionsDialog />
      <StatsDialog /> */}
    </main>
  );
}
