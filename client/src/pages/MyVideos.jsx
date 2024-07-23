import React, { useState } from "react";
// import MyRecentlyPlayed from "../components/videos/MyRecentlyPlayed";
import MyVideoList from "../components/videos/MyVideoList";
import MyRecentlyPlayedList from "../components/videos/MyRecentlyPlayedList";
// import Ex1 from "../assets/videos/Ex1.mp4";

export default function MyVideos() {
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoSelect = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  return (
    <>
      <div className="flex flex-row justify-evenly w-full">
        {/* Filters are removed */}
      </div>
      <div className="m-4">
        <div className="container flex flex-row ">
          <div className="p-2 w-7/12">
            <video
              src={currentVideo}
              controls
              className="rounded-lg shadow-lg w-full h-[475px]"
            />
          </div>

          <div className="p-6 w-full md:w-5/12">
            <MyRecentlyPlayedList onVideoSelect={handleVideoSelect} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-8">
        <MyVideoList onVideoSelect={setCurrentVideo} />
      </div>
    </>
  );
}
