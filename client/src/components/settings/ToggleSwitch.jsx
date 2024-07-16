import React from "react";

export default function ToggleSwitch({ isOn, handleToggle, onColor }) {
  return (
    <>
      {/* TODO: make toggle switched independant */}
      <input
        checked={isOn}
        onChange={handleToggle}
        className="hidden"
        type="checkbox"
        id="toggle-switch"
      />
      <label
        style={{ backgroundColor: isOn ? onColor : "gray" }}
        htmlFor="toggle-switch"
        className="flex items-center justify-between cursor-pointer w-16 h-6 bg-gray-500 rounded-full relative transition-colors duration-200"
      >
        <span
          className={`absolute top-0 left-0.5 w-6 h-6 rounded-full transition-transform duration-200 bg-white shadow-sm ${
            isOn ? "transform translate-x-8" : ""
          }`}
        />
      </label>
    </>
  );
}
