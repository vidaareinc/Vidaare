import React from "react";
import "../../styles/styles.css";

export default function Header() {
  return (
<<<<<<< HEAD
    <div className="flex flex-row justify-between items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl text-white font-inknut-antiqua logo uppercase">
        Vidaare
      </h1>
      <button className="bg-transparent text-white px-4 py-2 rounded border border-white">
        Let&apos;s Get Started
=======
    <div className="flex flex-row justify-between items-center p-6">
      <h1 className="text-3xl text-white logo uppercase">Vidaare</h1>
      <button className=" text-white p-4 rounded-lg border-2 border-white mr-8 hidden sm:block hover:text-slate-500">
        Let's Get Started
>>>>>>> 841cfa36225dfff563479e93f93dc506b1afe57e
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
