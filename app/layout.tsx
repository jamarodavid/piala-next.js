import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "moment/locale/id"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jadwal Piala Dunia",
  description: "Create by Jamaro David Saragih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container min-h-screen" >
        {children}
        </main>
        <footer className="p-[40px] bg-zinc-100 mt-5" >
          Made by Jamaro David Saragih
        </footer>
        </body>
    </html>
  );
}
