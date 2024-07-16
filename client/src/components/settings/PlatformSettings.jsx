import React, { useState } from "react";
import "../../styles/styles.css";
import ToggleSwitch from "./ToggleSwitch";

export default function PlatformSettings() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <div className="w-1/4 h-[550px] bg-[#0A2540] rounded-xl flex flex-col overflow-y-auto px-8">
      <h1 className="text-2xl text-white  mt-8">Platform Settings</h1>
      <h2 className="text-base text-slate-500 my-2">ACCOUNT</h2>
      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8">
          Email me when my Post is flagged
        </h2>
      </div>

      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8 ">
          Email me when my Post is successful
        </h2>
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8">
          Email me with new Promotional offers
        </h2>
      </div>

      <h2 className="text-base text-slate-500 my-2 uppercase mt-6">
        application
      </h2>

      <div className="flex flex-row justify-between items-center mt-2">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ml-8">
          New launches and projects
        </h2>
      </div>

      <div className="flex flex-row justify-between items-center mt-4">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ">
          Monthly product updates
        </h2>
      </div>

      <div className="flex flex-row justify-between items-center mt-4">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ">
          Subscribe to newsletter
        </h2>
      </div>

      <div className="flex flex-row justify-between items-center mt-4">
        <ToggleSwitch
          isOn={isToggleOn}
          handleToggle={handleToggle}
          onColor="#00bfff"
        />
        <h2 className="text-base text-white font-semibold ">
          Receive mails weekly
        </h2>
      </div>
    </div>
  );
}
