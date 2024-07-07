import React from "react";
import "../../styles/styles.css";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-8">
      <h1 className="text-3xl text-white font-inknut-antiqua logo uppercase">
        Vidaare
      </h1>
      <button className="bg-white-500 text-white p-4 rounded border border-white mr-8">
        Let's Get Started
      </button>
    </div>
  );
}
