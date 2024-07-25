import React from "react";

import FBQuicklinks from "../../assets/images/Main/FB_quicklinks.png";
import XQuicklinks from "../../assets/images/Main/X_quicklinks.png";
import IGQuicklinks from "../../assets/images/Main/IG_quicklinks.png";
import LinkedInQuicklinks from "../../assets/images/Main/LinkedIn_quicklinks.png";
import YTQuicklinks from "../../assets/images/Main/YT_quicklinks.png";
import TwitchQuicklinks from "../../assets/images/Main/Twitch_quicklinks.png";
import TiktokQuicklinks from "../../assets/images/Main/TT_quicklinks.png";
import { Link } from "react-router-dom";

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
    name: "TikTok",
    imagePath: TiktokQuicklinks,
    url: "https://www.tiktok.com",
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

export default function SocialMediaLinks() {
  return (
    <>
      {socialMediaLinks.map((link) => (
        <Link
          key={link.name}
          to={link.url}
          target="_blank"
          className="mx-8 cursor-pointer"
        >
          <img src={link.imagePath} alt={link.name} className="w-24 h-auto" />
        </Link>
      ))}
    </>
  );
}
