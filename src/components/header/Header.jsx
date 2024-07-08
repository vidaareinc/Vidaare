import { useState } from 'react';
import "../../styles/styles.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
      <div className="flex justify-between w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl text-white font-inknut-antiqua logo uppercase">
          Vidaare
        </h1>
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="block md:hidden w-6 h-6 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        <button className="bg-transparent text-white me-8 px-4 py-2 rounded border border-white mt-4 md:mt-0">
          Let&apos;s Get Started
        </button>
        <nav className="flex flex-col md:flex-row items-center">          
          {/* <a href="#feature3" className="text-white mt-4 md:mt-0 md:ml-4">AnyExtraFeature</a> */}
        </nav>
      </div>
    </div>
  );
}
