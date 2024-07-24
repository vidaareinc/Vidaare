import React, { useState, useEffect } from "react";
import MyVideoList from "../components/videos/MyVideoList";
import MyRecentlyPlayedList from "../components/videos/MyRecentlyPlayedList";
import "video-react/dist/video-react.css";

// const initialVideos = [
//   {
//     id: 1,
//     videoSrc: "../../assets/videos/Ex1.mp4",
//     title: "Video 1",
//     description: "This is the first example video.",
//   },
//   {
//     id: 2,
//     videoSrc: "../../assets/videos/Ex2.mp4",
//     title: "Video 2",
//     description: "This is the second example video.",
//   },
//   {
//     id: 3,
//     videoSrc: "../../assets/videos/Ex1.mp4",
//     title: "Video 1",
//     description: "This is the first example video.",
//   },
//   {
//     id: 4,
//     videoSrc: "../../assets/videos/Ex2.mp4",
//     title: "Video 2",
//     description: "This is the second example video.",
//   },
// ];

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
    setRecentlyPlayed((prev) => {
      const videoExists = prev.find((v) => v.id === video.id);
      if (videoExists) {
        return prev;
      }
      const updatedList = [video, ...prev];
      localStorage.setItem("recentlyPlayed", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const clearRecentlyPlayed = () => {
    setRecentlyPlayed([]);
    localStorage.removeItem("recentlyPlayed");
  };

  return (
    <>
      <div className="flex flex-row justify-evenly w-full"></div>
      <div className="m-4">
        <div className="container flex flex-row">
          <div className="flex p-2 w-7/12 justify-center">
            <video
              src={currentVideo}
              controls
              className="rounded-lg shadow-lg w-full h-[475px]"
              autoPlay
            />
          </div>
          <div className="p-6 w-full md:w-5/12">
            <MyRecentlyPlayedList
              recentlyPlayed={recentlyPlayed}
              onVideoSelect={handleVideoSelect}
              onClear={clearRecentlyPlayed}
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
