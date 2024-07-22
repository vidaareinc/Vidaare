import React from "react";
import MyVideoCard from "./MyVideoCard";
import Ex1 from "../../assets/videos/Ex1.mp4";
import Ex2 from "../../assets/videos/Ex2.mp4";

// Pass The {Filter} props
export default function MyVideoList() {
  // Static for now
  const videos = [
    {
      videoSrc: Ex1,
      title: "Video 1",
      description: "This is the first example video.",
    },
    {
      videoSrc: Ex2,
      title: "Video 2",
      description: "This is the second example video.",
    },
    {
      videoSrc: Ex1,
      title: "Video 1",
      description: "This is the first example video.",
    },
    {
      videoSrc: Ex2,
      title: "Video 2",
      description: "This is the second example video.",
    },
    {
      videoSrc: Ex1,
      title: "Video 1",
      description: "This is the first example video.",
    },
    {
      videoSrc: Ex2,
      title: "Video 2",
      description: "This is the second example video.",
    },
    {
      videoSrc: Ex1,
      title: "Video 1",
      description: "This is the first example video.",
    },
    {
      videoSrc: Ex2,
      title: "Video 2",
      description: "This is the second example video.",
    },
    // Add more video objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {videos.map((video, index) => (
        <MyVideoCard
          key={index}
          videoSrc={video.videoSrc}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  );
}
