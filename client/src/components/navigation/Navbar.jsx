import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  VideoCameraIcon,
  CalendarIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-1/6 min-w-64 bg-[#0A2540] shadow sticky top-0 h-screen rounded-lg p-8">
        {/* Sidebar Links */}
        <h1 className="uppercase py-8 text-center text-2xl mt-4 text-white">
          vidaare dashboard
        </h1>
        <hr className="mb-8" />
        <Link
          href="#"
          className="flex items-center justify-start p-4 m-4 text-gray-300 text-xl hover:text-white"
        >
          <HomeIcon className="w-8 mr-8" />
          Dashboard
        </Link>

        {/* My Videos Link */}
        <Link
          href="#"
          className="flex items-center justify-self p-4 m-4 text-gray-300 text-xl hover:text-white"
        >
          <VideoCameraIcon className="w-8 mr-8" />
          My Videos
        </Link>

        {/* Analytics Link */}

        <Link
          href="#"
          className="flex items-center justify-start p-4 m-4 text-gray-300 text-xl hover:text-white"
        >
          <ChartBarIcon className="w-8 mr-8" />
          Analytics
        </Link>

        {/* Book Link Demo Link */}
        <Link
          href="#"
          className="flex items-center justify-start p-4 m-4 text-gray-300 text-xl hover:text-white"
        >
          <CalendarIcon className="w-8 mr-8" />
          Book a Demo
        </Link>

        {/* My Account Link */}
        <h1 className="flex items-center p-4 mb-4 text-gray-300 text-xl mt-6">
          My Account
        </h1>
        <Link
          href="#"
          className="flex items-center justify-start p-4 m-4 text-gray-300 text-xl hover:text-white"
        >
          <UserIcon className="w-8 mr-8" />
          My Profile
        </Link>
      </div>
    </>
  );
}
