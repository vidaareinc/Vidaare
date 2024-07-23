import React, { useState } from "react";
import MyRecentlyPlayedList from "./MyRecentlyPlayedList";

export default function MyRecentlyPlayed() {
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoSelect = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  return (
    <div className="p-6 w-full md:w-5/12">
      <MyRecentlyPlayedList onVideoSelect={handleVideoSelect} />
    </div>
  );
}
