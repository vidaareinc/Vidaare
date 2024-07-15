import React from "react";
import "../../styles/styles.css";
import ToggleSwitch from "./ToggleSwitch";

export default function PlatformSettings() {
  return (
    <div className="w-1/4 h-96 bg-[#0A2540] rounded-xl flex flex-col overflow-y-auto px-8">
      <h1 className="text-2xl text-white  mt-8">Platform Settings</h1>
      <h2 className="text-xl text-white my-2">ACCOUNT</h2>
      <ToggleSwitch className="" />
    </div>
  );
}
