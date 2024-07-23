import React from "react";
import PropTypes from "prop-types";
import MyVideoCard from "./MyVideoCard";
import Ex1 from "../../assets/videos/Ex1.mp4";
import Ex2 from "../../assets/videos/Ex2.mp4";

export default function MyVideoList({ onVideoSelect }) {
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
    // Add more video objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {videos.length > 0 ? (
        videos.map((video) => (
          <MyVideoCard
            key={video.id}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
            onVideoSelect={onVideoSelect}
          />
        ))
      ) : (
        <p className="text-white">No videos available.</p>
      )}
    </div>
  );
}

MyVideoList.propTypes = {
  onVideoSelect: PropTypes.func.isRequired,
};
