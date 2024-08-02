import { useState } from "react";
import "../../styles/styles.css";
import EmailModal from "../modals/EmailModal";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 md:p-8 relative">
      <Link to="/" className="text-2xl md:text-3xl text-white logo uppercase">
        Vidaare
      </Link>
      {/* <Link to="/dashboard" className="text-xl text-white">
        Dashboard
      </Link> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="block sm:hidden w-6 h-6 text-white cursor-pointer"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <Link
        className="bg-transparent text-white me-8 px-4 py-2 rounded border border-white hidden sm:block hover:text-slate-500"
        // onClick={() => setIsModalOpen(true)}
        to="/dashboard"
      >
        Let&apos;s Get Started
      </Link>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {menuOpen && (
        <div className="absolute top-full right-2 mt-2 w-48 h-48 rounded-lg text-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-80 z-50 sm:hidden">
          <Link
            onClick={() => setIsModalOpen(true)}
            className="block px-4 py-2 hover:bg-gray-200"
          >
            Let&apos;s Get Started
          </Link>
          <hr className="w-full" />
        </div>
      )}
    </div>
  );
}
