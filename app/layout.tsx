import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Dashboard Assignment",
  description: "Recreated Dashboard UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#F3F4F6] text-slate-800 antialiased overflow-hidden`}>
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen overflow-hidden ml-64">
           {children}
          </div>
        </div>
      </body>
    </html>
  );
}
