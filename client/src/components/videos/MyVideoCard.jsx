import React, { useState, useEffect } from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

export default function MyVideoCard({ videoSrc, title, description }) {
  const [videoDuration, setVideoDuration] = useState("");

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = videoSrc;
    videoElement.onloadedmetadata = () => {
      const minutes = Math.floor(videoElement.duration / 60);
      const seconds = Math.floor(videoElement.duration % 60);
      setVideoDuration(`${minutes}m ${seconds}s`);
    };
  }, [videoSrc]);

  return (
    <div className=" rounded-lg w-80 shadow-lg">
      <Player playsInline src={videoSrc} width="100%" height="auto">
        <ControlBar autoHide={true} disableDefaultControls={true} />
      </Player>
      <div className="p-4">
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="mt-2 font-medium">{videoDuration}</p>
          <button
            className="mt-4 bg-transparent text-white px-4 py-2 rounded hover:bg-[#0a2540] transition duration-200"
            onClick={() => alert("Share functionality to be implemented!")}
          >
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
}
