import React from "react";
import MyRecentlyPlayedCard from "./MyRecentlyPlayedCard";
import Ex1 from "../../assets/videos/Ex1.mp4";
import Ex2 from "../../assets/videos/Ex2.mp4";
import PropTypes from "prop-types";

const videos = [
  {
    id: 1,
    videoSrc: Ex1,
    title: "Video 1",
    description: "This is the first example video.",
  },
  {
    id: 2,
    videoSrc: Ex2,
    title: "Video 2",
    description: "This is the second example video.",
  },
  {
    id: 3,
    videoSrc: Ex1,
    title: "Video 1",
    description: "This is the first example video.",
  },
  {
    id: 4,
    videoSrc: Ex2,
    title: "Video 2",
    description: "This is the second example video.",
  },
];

// Pass The {Filter} props
export default function MyRecentlyPlayedList({ onVideoSelect }) {
  return (
    <div className="flex flex-col gap-y-2 h-[450px] overflow-y-auto w-full justify-evenly">
      {videos.map((video) => (
        <MyRecentlyPlayedCard
          key={video.id}
          videoSrc={video.videoSrc}
          title={video.title}
          description={video.description}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
}

MyRecentlyPlayedList.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
};
