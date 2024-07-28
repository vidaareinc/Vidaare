import React, { useState, useEffect } from "react";
import MyVideoList from "../components/videos/MyVideoList";
import MyRecentlyPlayedList from "../components/videos/MyRecentlyPlayedList";
import "video-react/dist/video-react.css";

export default function MyVideos() {
  const [currentVideo, setCurrentVideo] = useState("");
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const storedRecentlyPlayed = localStorage.getItem("recentlyPlayed");
    if (storedRecentlyPlayed) {
      setRecentlyPlayed(JSON.parse(storedRecentlyPlayed));
    }
  }, []);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video.videoSrc);

    const videoExists = recentlyPlayed.some((v) => v.id === video.id);
    if (!videoExists) {
      const updatedList = [video, ...recentlyPlayed];
      setRecentlyPlayed(updatedList);
      localStorage.setItem("recentlyPlayed", JSON.stringify(updatedList));
    }
  };

  const clearRecentlyPlayed = () => {
    setRecentlyPlayed([]);
    localStorage.removeItem("recentlyPlayed");
  };

  return (
    <>
      <div className="m-4">
        <div className="container flex flex-row">
          <div className="flex p-2 w-7/12 justify-center">
            {currentVideo ? (
              <video
                src={currentVideo}
                controls
                className="rounded-lg shadow-lg w-full h-[475px]"
                autoPlay
              />
            ) : (
              <div className="w-full h-[475px] flex items-center justify-center bg-black rounded-lg shadow-lg">
                <p className="text-center text-white text-2xl">
                  Select a video to play
                </p>
              </div>
            )}
          </div>
          <div className="p-6 w-full md:w-5/12">
            <MyRecentlyPlayedList
              recentlyPlayed={recentlyPlayed}
              onVideoSelect={handleVideoSelect}
              onClear={clearRecentlyPlayed}
              currentVideo={currentVideo}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-8">
        <MyVideoList onVideoSelect={handleVideoSelect} />
      </div>
    </>
  );
}
