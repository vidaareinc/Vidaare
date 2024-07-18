import React, { useState } from "react";
import MyRecentlyPlayed from "../components/videos/MyRecentlyPlayed";
import MyVideoList from "../components/videos/MyVideoList";

export default function MyVideos() {
  const [filter, setFilter] = useState("all");

  const filters = [
    "all",
    "educational videos",
    "entertaining videos",
    "promotional videos",
    "live streams",
    "event/coverage videos",
    "how-to/guide videos",
    "personal/vlog videos",
    "others",
  ];

  return (
    <>
      <div className="flex flex-row justify-evenly w-full">
        {filters.map((filterItem) => (
          <h1
            key={filterItem}
            className={`text-sm cursor-pointer uppercase mr-4 text-white ${
              filter === filterItem ? "font-bold" : ""
            }`}
            onClick={() => setFilter(filterItem)}
          >
            {filterItem}
          </h1>
        ))}
      </div>
      <div className="m-4">
        <MyRecentlyPlayed filter={filter} />
      </div>
      <div className="flex flex-wrap px-8">
        <MyVideoList filter={filter} />
      </div>
    </>
  );
}
