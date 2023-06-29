"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers(p: { children: JSX.Element }) {
  return <ThemeProvider attribute="class">{p.children}</ThemeProvider>;
}
