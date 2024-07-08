import { useState } from "react";
import "../../styles/styles.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl text-white logo uppercase">
        Vidaare
      </h1>
      <button className="bg-transparent text-white me-8 px-4 py-2 rounded border border-white hidden sm:block hover:text-slate-500">
        Let&apos;s Get Started
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className=" block sm:hidden w-6 h-6 text-white "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
