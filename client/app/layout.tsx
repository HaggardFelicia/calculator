import type { Metadata } from "next";
import "./globals.css";
import logo from '../assets/logo2.png';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculator App",
  description: "Created with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-neutral-400 body  font'>
        <header className="header">
          <Link href='https://github.com/HaggardFelicia' target="_blank" className="headerlogo">Felicia</Link>
          <h1>Calculator</h1>
        </header>
        <main className="">
          {children}
        </main>
        <footer className="footer">Created by Felicia Haggard ©2024</footer>
      </body>
    </html>
  );
}
