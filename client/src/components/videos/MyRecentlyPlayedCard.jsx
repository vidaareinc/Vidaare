import React, { useState, useEffect } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Player, ControlBar, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";

export default function MyRecentlyPlayedCard({
  videoSrc,
  title,
  description,
  onVideoSelect,
}) {
  const [videoDuration, setVideoDuration] = useState("");

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = videoSrc;
    videoElement.onloadedmetadata = () => {
      const minutes = Math.floor(videoElement.duration / 60);
      const seconds = Math.floor(videoElement.duration % 60);
      setVideoDuration(`${minutes}m ${seconds}s`);
    };
    videoElement.onerror = () => {
      setVideoDuration("Unknown duration");
    };
  }, [videoSrc]);

  return (
    <div className=" rounded-lg w-full h-auto shadow-lg flex flex-row justify-start p-2">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => onVideoSelect(videoSrc)}
      >
        <video
          src={videoSrc}
          width="150px"
          height="auto"
          controls={false}
          muted
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="p-2 flex flex-col ">
          <h3 className=" text-lg font-semibold">{title}</h3>
          <p className=" text-white text-sm">{description}</p>
        </div>
        <div className="flex items-center">
          <p className=" font-medium text-sm mr-3">{videoDuration}</p>
          <button
            className=" bg-transparent text-white p-2 rounded hover:bg-[#0a2540] transition duration-200"
            onClick={() => alert("Settings functionality to be implemented!")}
          >
            <EllipsisVerticalIcon className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
