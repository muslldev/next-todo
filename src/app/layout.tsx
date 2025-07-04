import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";

export const metadata: Metadata = {
  title: "ToDo List",
  description: "My First Next.js + Tailwind CSS App",
};

const inter = Inter({
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="m-0 p-0 box-border bg-[#0D0714] min-h-screen w-full flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
