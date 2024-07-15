import React from "react";

export default function ToggleSwitch({ isOn, handleToggle, onColor }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="h-0 w-0 visibility-hidden"
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="flex items-center justify-between cursor-pointer w-16 h-8 bg-gray-500 rounded-full relative transition-colors duration-200"
      >
        <span className="absolute top-0 left-0.5 w-8 h-8 rounded-full transition-all duration-200 bg-white shadow-sm" />
      </label>
    </>
  );
}
