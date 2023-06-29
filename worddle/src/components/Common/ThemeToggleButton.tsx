"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="rounded-lg bg-gray-800 p-2 text-base text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300"
    >
      Toggle
    </button>
  );
};

export default ThemeToggleButton;
