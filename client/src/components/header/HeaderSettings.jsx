import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function HeaderSettings() {
  return (
    <header className="bg-transparent">
      <div className="w-full flex flex-row justify-between items-center">
        <Link to="/" className="uppercase text-white font-bold text-2xl">
          vidaare
        </Link>
        <div className="flex flex-row relative items-center">
          <MagnifyingGlassIcon className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="&nbsp; &nbsp; &nbsp; Type Here..."
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none mr-8 pl-10"
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
    </header>
  );
}
