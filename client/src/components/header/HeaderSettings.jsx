import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function HeaderSettings() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-transparent">
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-4">
        {/* For larger screens */}
        <div className="hidden md:flex md:flex-row w-full justify-between items-center">
          <Link
            to="/"
            className="uppercase text-white font-bold text-xl md:text-2xl"
          >
            vidaare
          </Link>
          <div className="flex flex-row relative items-center">
            <MagnifyingGlassIcon className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="&nbsp; &nbsp; &nbsp; Type Here..."
              className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none pl-10 w-64"
            />
            <button
              className="p-2 bg-transparent border border-white rounded-lg w-32 mr-4 text-white cursor-pointer"
              onClick={() => alert("Sign In functionality to be implemented!")}
              disabled
            >
              Sign In
            </button>
            <button
              className="p-2 bg-[#0a2540] border border-white rounded-lg w-32 text-white cursor-pointer"
              onClick={() => alert("Sign Up functionality to be implemented!")}
              disabled
            >
              Sign Up Now
            </button>
          </div>
        </div>

        {/* For smaller screens */}

        <div className="md:hidden w-full flex flex-col items-center">
          <div className="flex flex-row w-full justify-between items-center">
            <Link
              to="/"
              className="uppercase text-white font-bold text-xl md:text-2xl"
            >
              vidaare
            </Link>
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
          </div>

          {menuOpen && (
            <div
              ref={dropdownRef}
              className="top-full right-2 mt-2 w-full rounded-lg text-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-80 z-50"
            >
              <div className="relative mb-4">
                <MagnifyingGlassIcon className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="&nbsp; &nbsp; &nbsp; Type Here..."
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none pl-10 w-full"
                />
              </div>
              <button
                className="block p-2 bg-transparent border border-white rounded-lg w-full mb-2 text-white cursor-pointer"
                onClick={() =>
                  alert("Sign In functionality to be implemented!")
                }
                disabled
              >
                Sign In
              </button>
              <button
                className="block p-2 bg-[#0a2540] border border-white rounded-lg w-full text-white cursor-pointer"
                onClick={() =>
                  alert("Sign Up functionality to be implemented!")
                }
                disabled
              >
                Sign Up Now
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
