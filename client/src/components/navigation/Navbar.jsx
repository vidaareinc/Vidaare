import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  VideoCameraIcon,
  CalendarIcon,
  UserIcon,
  ChartBarIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import "../../styles/styles.css";

export default function Navbar() {
  return (
    <>
      {/* Sidebar bg-[#0A2540] */}
      <div className="w-1/6 min-w-64 nav-bg shadow sticky top-0 h-screen rounded-lg p-8 backdrop-blur-60">
        {/* Sidebar Links */}
        <h1 className="uppercase py-8 text-center text-xl mt-4 text-white">
          vidaare dashboard
        </h1>
        <hr className="mb-8" />
        <Link
          to="/dashboard"
          className="flex items-center justify-start p-4 m-4  text-gray-300 text-base hover:text-white"
        >
          <HomeIcon className="w-6 mr-8" />
          Dashboard
        </Link>

        {/* My Videos Link */}
        <Link
          to="/myvideos"
          className="flex items-center justify-self p-4 mx-4 mb-2 text-gray-300 text-base hover:text-white"
        >
          <VideoCameraIcon className="w-6 mr-8" />
          My Videos
        </Link>

        {/* Analytics Link */}

        <Link
          to="/analytics"
          className="flex items-center justify-start p-4 mx-4 mb-2 text-gray-300 text-base hover:text-white"
        >
          <ChartBarIcon className="w-6 mr-8" />
          Analytics
        </Link>

        {/* Book Link Demo Link */}
        <Link
          to="/demo"
          className="flex items-center justify-start p-4 mx-4 mb-2 text-gray-300 text-base hover:text-white"
        >
          <CalendarIcon className="w-6 mr-8" />
          Book a Demo
        </Link>

        {/* My Account Link */}
        <h1 className="flex items-center p-4 mb-4 text-gray-300 text-base mt-6">
          My Account
        </h1>
        <Link
          href="#"
          className="flex items-center justify-start p-4 mx-4 mb-2 text-gray-300 text-base hover:text-white"
        >
          <UserIcon className="w-6 mr-8" />
          My Profile
        </Link>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-[80%]">
          <hr className="mb-8" />
          <Link
            to="/logout"
            className="flex items-center justify-start p-4 mx-4 mb-2 text-gray-300 text-base hover:text-white"
          >
            <ArrowRightEndOnRectangleIcon className="w-6 mr-8" />
            Logout
          </Link>

          {/* Company Details */}
          <div className="w-full h-40 rounded-lg navlogo-bg flex flex-col ">
            <h1 className="text-white text-xl ml-2 mt-4 font-bold">
              Need Help?
            </h1>
            <h2 className="text-white ml-2 font-semibold">
              Email us at: Vidaare@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
