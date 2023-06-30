import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordle",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-wordle-darker-blue`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
