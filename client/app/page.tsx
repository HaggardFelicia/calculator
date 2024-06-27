import Image from "next/image";
import logo from '../assets/logo2.png';

export default function Home() {
  const add = (a: number, b: number) => {
    return a + b;
  };
  const subtract = (a: number, b: number) => {
    return a - b;
  };
  const multiply = (a: number, b: number) => {
    return a * b;
  };
  const divide = (a: number, b: number) => {
    return a / b;
  };

  return (
    <div>
      <main>
        <div className="calculatorBody">
          <button className="functionButtons font buttonText">+</button>
          <button className="functionButtons font buttonText">-</button>
          <button className="functionButtons font buttonText">x</button>
          <button className="functionButtons font buttonText">/</button>
        </div>
      </main>
    </div>
  );
}
