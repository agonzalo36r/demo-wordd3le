"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="cursor-pointer rounded-lg transition-all duration-100"
    >
      {theme === "light" ? (
        <Image src="/svg/toggle-light.svg" alt="" width={60} height={30} />
      ) : (
        <Image src="/svg/toggle-dark.svg" alt="" width={60} height={30} />
      )}
    </div>
  );
};

export default ThemeToggleButton;
