'use client'
import Image from "next/image";
import logo from '../assets/logo2.png';
import Calculator from "./components/calculator";

export default function Home() {
  return (
    <div className="">
      {/* inserts calculator component into page */}
      <Calculator />
    </div>
  );
}
