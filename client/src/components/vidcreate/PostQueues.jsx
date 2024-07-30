import React, { useState } from "react";
import Ex1 from "../../assets/videos/Ex1.mp4";

export default function PostQueues() {
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({
    hours: "12",
    minutes: "00",
    period: "AM",
  });
  return (
    <div className="w-full h-3/4 flex flex-col">
      <div className="text-white flex flex-row justify-between bg-[#0a2540] p-4 rounded-lg ">
        <div className="w-1/3 mr-4">
          {media ? (
            <p>{media.name}</p>
          ) : (
            <video
              className="w-full mt-2 rounded-lg"
              muted
              width="100%"
              height="auto"
              controls={false}
            >
              <source src={Ex1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="w-2/3 flex flex-col">
          <p className="mb-2 text-xl">{title || "No title provided"}</p>
          <p className="mb-2">{description || "No description provided"}</p>
          <p className="mb-2">{date.toDateString()}</p>
          <p>
            {time.hours}:{time.minutes} {time.period}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-[#0a2540] hover:bg-white hover:text-[#0a2540] p-3 rounded-xl shadow-xl mt-4 w-2/4 "
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
