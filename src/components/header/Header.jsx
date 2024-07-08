import React from "react";
import "../../styles/styles.css";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl text-white font-inknut-antiqua logo uppercase">
        Vidaare
      </h1>
      <button className="bg-transparent text-white px-4 py-2 rounded border border-white">
        Let&apos;s Get Started
      </button>
    </div>
  );
}
