import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MrTheManWEED",
  description: "Modern social media platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white overflow-x-hidden">
        <SessionProvider>
          <Navbar />
          <div className="flex pt-14 min-h-screen">
            <Sidebar />
            <main className="flex-1 max-w-2xl mx-auto border-l border-r border-gray-800 min-h-screen pb-20">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}