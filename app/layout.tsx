import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "MrTheManWEED",
  description: "Your personal social network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">
        <Navbar />
        <div className="flex pt-14">
          <Sidebar />
          <main className="flex-1 max-w-2xl mx-auto border-l border-r border-gray-800 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}