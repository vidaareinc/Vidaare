import React from "react";
import Avatar from "../../assets/images/Main/JaneDoe.jpg";
import "../../styles/styles.css";

import FBQuicklinks from "../../assets/images/Main/FB_quicklinks.png";
import XQuicklinks from "../../assets/images/Main/X_quicklinks.png";
import IGQuicklinks from "../../assets/images/Main/IG_quicklinks.png";
import LinkedInQuicklinks from "../../assets/images/Main/LinkedIn_quicklinks.png";
import YTQuicklinks from "../../assets/images/Main/YT_quicklinks.png";
import TwitchQuicklinks from "../../assets/images/Main/Twitch_quicklinks.png";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/solid";

const socialMediaLinks = [
  {
    name: "Facebook",
    imagePath: FBQuicklinks,
    url: "https://www.facebook.com",
  },
  {
    name: "X",
    imagePath: XQuicklinks,
    url: "https://www.twitter.com",
  },
  {
    name: "Instagram",
    imagePath: IGQuicklinks,
    url: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    imagePath: LinkedInQuicklinks,
    url: "https://www.linkedin.com",
  },
  {
    name: "YouTube",
    imagePath: YTQuicklinks,
    url: "https://www.youtube.com",
  },
  {
    name: "Twitch",
    imagePath: TwitchQuicklinks,
    url: "https://www.twitch.tv",
  },
];

export default function QuickLinks() {
  return (
    <div className="flex w-full py-4 rounded-xl quicklinks-bg shadow backdrop-blur-60 justify-between">
      <div className="flex flex-row items-center">
        <div className="relative">
          <img
            className="w-24 h-auto mx-8 rounded-lg"
            src={Avatar}
            alt="Avatar"
          />
          <PencilIcon className="absolute bottom-0 right-8 w-7 h-7 rounded-lg bg-black text-white p-2" />
        </div>
        <div className="flex flex-col">
          <h6 className="text-lg text-white mb-2">Jane Doe</h6>
          <h6 className="text-lg text-slate-500">jane.doe@octopus.com</h6>
        </div>
      </div>
      <div className="px-4 py-6 mx-6 w-auto rounded-lg bg-[#0a2540] flex flex-row justify-center items-center">
        {socialMediaLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8"
          >
            <img src={link.imagePath} alt={link.name} className="w-24 h-auto" />
          </Link>
        ))}
      </div>
    </div>
  );
}
