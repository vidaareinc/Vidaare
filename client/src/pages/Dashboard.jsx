import React from "react";
import QuickLinks from "../components/quicklinks/QuickLinks";
import VidCreate from "../components/vidcreate/VidCreate";
import SocialMediaStats from "../components/stats/SocialMediaStats";
import ProfileInfo from "../components/profile/ProfileInfo";
import PlatformSettings from "../components/settings/PlatformSettings";
import VideoGarage from "../components/quicklinks/VideoGarage";

export default function Dashboard() {
  return (
    <div className="mt-8">
      <QuickLinks />
      <div className="flex flex-row w-full mt-8 gap-8 ">
        <VidCreate />
        <SocialMediaStats />
        <ProfileInfo />
      </div>
      <div className="flex flex-row w-full mt-8 gap-8 ">
        <PlatformSettings />
        <VideoGarage />
      </div>
    </div>
  );
}
