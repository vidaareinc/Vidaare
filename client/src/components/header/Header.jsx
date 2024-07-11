import { useState } from "react";
// import { Link } from "react-router-dom";
import "../../styles/styles.css";
import EmailModal from "../modals/EmailModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 md:p-8 relative">
      <h1 className="text-2xl md:text-3xl text-white logo uppercase">
        Vidaare
      </h1>
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
      <button
        className="bg-transparent text-white me-8 px-4 py-2 rounded border border-white hidden sm:block hover:text-slate-500"
        onClick={() => setIsModalOpen(true)}
      >
        Let&apos;s Get Started
      </button>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-transparent text-black rounded-md shadow-lg z-50 sm:hidden">
          {/* <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </Link>
          <Link className="block px-4 py-2 hover:bg-gray-200">About</Link>
          <Link className="block px-4 py-2 hover:bg-gray-200">Services</Link>
          <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </Link> */}
        </div>
      )}
    </div>
  );
}
