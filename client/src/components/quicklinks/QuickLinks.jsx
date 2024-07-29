import React from "react";
import Avatar from "../../assets/images/Main/JaneDoe.jpg";
import "../../styles/styles.css";

import { CheckCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import SocialMediaLinks from "./SocialMediaLinks";

/**
 * TO Discuss: How the Quick Links works
 */

export default function QuickLinks() {
  return (
    <div className="flex w-full py-4 rounded-xl quicklinks-bg shadow backdrop-blur-60 justify-between">
      <div className="flex flex-row items-center gap-x-2">
        <div className="relative">
          <img
            className="w-24 h-auto mx-8 rounded-lg"
            src={Avatar}
            alt="Avatar"
          />
          <PencilIcon
            className="absolute bottom-0 right-0 w-7 h-7 rounded-lg bg-black text-white p-2 cursor-pointer"
            onClick={() =>
              alert("Image change functionality to be implemented!")
            }
          />
        </div>
        {/* TODO: Retrieve Users Name and Email */}
        <div className="flex flex-col">
          <h6 className="text-lg text-white mb-2">Jane Doe</h6>
          <h6 className="text-lg text-slate-500">jane.doe@octopus.com</h6>
        </div>
      </div>
      {/* TODO: Implement feature weather social media platform is logged in */}
      <div className="px-4 py-6 mx-6 w-auto rounded-lg bg-[#0a2540] flex flex-row justify-center items-center">
        <SocialMediaLinks />
      </div>
    </div>
  );
}
