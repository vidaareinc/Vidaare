import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function MainHeader() {
  return (
    <>
      {/* Header */}
      <header className="bg-transparent sticky top-0 z-10 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-row ">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-lg font-bold uppercase mr-4 text-white">
                vidaare
              </h1>{" "}
              <h1 className="text-lg font-bold uppercase mr-4 text-white">/</h1>
              {/* Page Screen Name */}
              <h1 className="text-lg font-bold text-white">Dashboard</h1>
            </div>
            <div>
              {/* TODO: Retrieve Username and Replace "user" with actual name from DB */}
              <h1 className="text-white text-base">
                Good Afternoon Jane, Welcome to Vidaare
              </h1>
            </div>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center">
            <div className="flex flex-row relative">
              {/* TODO: Add Handle submit */}
              <MagnifyingGlassIcon className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {/* TODO: Implement Search results */}
              <input
                type="text"
                placeholder="&nbsp; &nbsp; &nbsp; Type Here..."
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none mr-8"
              />
            </div>
            {/* TODO: Add Settings Page */}
            <Cog6ToothIcon
              className="w-6 mr-8 cursor-pointer"
              onClick={() => alert("Settings functionality to be implemented!")}
            />
            {/* TODO: Add Notifications */}
            <BellIcon
              className="w-6 mr-8 cursor-pointer"
              onClick={() =>
                alert("Notifications functionality to be implemented!")
              }
            />
          </div>
        </div>
      </header>
    </>
  );
}
