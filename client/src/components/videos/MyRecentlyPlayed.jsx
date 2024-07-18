import React from "react";
import Ex1 from "../../assets/videos/Ex1.mp4";
import MyRecentlyPlayedList from "./MyRecentlyPlayedList";

export default function MyRecentlyPlayed() {
  return (
    <div className="container flex flex-row p-8">
      <div className="p-4">
        <video src={Ex1} controls className="rounded-lg shadow-lg" />
      </div>
      <div className="p-4">
        <MyRecentlyPlayedList />
      </div>
    </div>
  );
}
