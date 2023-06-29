import ThemeToggleButton from "@/components/Common/ThemeToggleButton";
import DialogContainer from "@/components/Dialogs/DialogContainer";
import InstructionsDialog from "@/components/Dialogs/InstructionsDialog";
import StatsDialog from "@/components/Dialogs/StatsDialog";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggleButton />
      {/* <InstructionsDialog />
      <StatsDialog /> */}
    </main>
  );
}
