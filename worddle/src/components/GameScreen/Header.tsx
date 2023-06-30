"use client";
import React from "react";
import ThemeToggleButton from "../Common/ThemeToggleButton";
import Image from "next/image";
import { useTheme } from "next-themes";

const Header = (p: { showStats: boolean; showInstructions: boolean; dispatch: Function }) => {
  const { theme, setTheme } = useTheme();

  const handleStats = () => {
    p.dispatch({ value: !p.showStats, type: "showStats" });
    p.dispatch({ value: false, type: "showInstructions" });
    // p.setShowStats(!p.showStats);
    // p.setShowInstructions(false);
  };

  const handleInstructions = () => {
    p.dispatch({ value: !p.showInstructions, type: "showInstructions" });
    p.dispatch({ value: false, type: "showStats" });
    // p.setShowInstructions(!p.showInstructions);
    // p.setShowStats(false);
  };

  return (
    <div className="flex w-[638px] items-center justify-between rounded-[15px] bg-wordle-light-gray px-[22px] dark:bg-[#DADCE008]/[.03]">
      <div className="cursor-pointer" onClick={handleInstructions}>
        {theme === "light" ? (
          <Image src="/svg/instructions-light.svg" alt="" width={27} height={27} />
        ) : (
          <Image src="/svg/instructions-dark.svg" alt="" width={27} height={27} />
        )}
      </div>
      <div className="text-[40px] font-semibold text-[#202537] dark:text-[#DADCE0]">WORDLE</div>
      <div className="flex items-center justify-center">
        <div className="cursor-pointer" onClick={handleStats}>
          {theme === "light" ? (
            <Image src="/svg/stats-light.svg" alt="" width={36} height={32} />
          ) : (
            <Image src="/svg/stats-dark.svg" alt="" width={36} height={32} />
          )}
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Header;
