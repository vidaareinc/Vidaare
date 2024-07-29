import React, { useState, useRef } from "react";
import { CalendarDaysIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SocialMediaLinks from "../components/quicklinks/SocialMediaLinks";
import Ex1 from "../assets/videos/Ex1.mp4";

export default function CreatePost() {
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({
    hours: "12",
    minutes: "00",
    period: "AM",
  });
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileUploadChange = (event) => {
    const fileUploaded = event.target.files[0];
    setMedia(fileUploaded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTime = `${time.hours}:${time.minutes} ${time.period}`;
    console.log({
      media,
      title,
      description,
      date,
      time: formattedTime,
    });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (field, value) => {
    setTime({ ...time, [field]: value });
  };

  return (
    <div className="container p-4 rounded-lg grid grid-cols-2">
      <div className="w-full p-2">
        <div className="flex flex-row gap-2 items-center mb-4">
          <CalendarDaysIcon className="w-10 text-white" />
          <h1 className="text-white text-3xl">Schedule</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="media" className="text-white">
              Select Media
            </label>
            <button
              className="text-white bg-[#0a2540] shadow-lg rounded-lg p-2 mt-2 flex justify-between"
              onClick={handleClick}
            >
              Upload File
              <ArrowUpTrayIcon className="w-6" />
            </button>
            <input
              type="file"
              onChange={handleFileUploadChange}
              ref={hiddenFileInput}
              className="hidden"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-white bg-[#0a2540] shadow-lg rounded-lg p-2 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-white">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-white bg-[#0a2540] shadow-lg rounded-lg p-2 mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-white">
              Date
            </label>
            <input
              type="text"
              id="date"
              value={date.toDateString()}
              readOnly
              className="text-white bg-[#0a2540] shadow-lg rounded-lg p-2 mt-2"
            />
            <div className="mt-2">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="bg-[#0a2540] text-white rounded-lg w-full mt-2 p-2 shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="text-white">
              Time
            </label>
            <div className="flex flex-row space-x-2 mt-2 p-2">
              <input
                type="text"
                value={time.hours}
                onChange={(e) => handleTimeChange("hours", e.target.value)}
                className="text-white bg-[#0a2540] rounded-lg p-2 w-24 h-24 text-center text-4xl hover:bg-white hover:text-[#0a2540]"
                maxLength={2}
              />
              <span className="text-white text-4xl">:</span>
              <input
                type="text"
                value={time.minutes}
                onChange={(e) => handleTimeChange("minutes", e.target.value)}
                className="text-white bg-[#0a2540] rounded-lg p-2 w-24 h-24 text-center text-4xl hover:bg-white hover:text-[#0a2540]"
                maxLength={2}
              />

              <div className="flex flex-col items-center space-y-2">
                <button
                  type="button"
                  onClick={() => handleTimeChange("period", "AM")}
                  className={`text-white bg-[#0a2540] rounded-xl p-2 w-18 text-center text-xl ${
                    time.period === "AM"
                      ? "bg-blue-600"
                      : "hover:bg-white hover:text-[#0a2540]"
                  }`}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => handleTimeChange("period", "PM")}
                  className={`text-white bg-[#0a2540] rounded-xl p-2 w-18 text-center text-xl ${
                    time.period === "PM"
                      ? "bg-blue-600"
                      : "hover:bg-white hover:text-[#0a2540]"
                  }`}
                >
                  PM
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 w-full rounded-lg bg-[#0a2540] flex flex-row justify-center items-center shadow-xl">
            <SocialMediaLinks />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-white bg-[#0a2540] hover:bg-white hover:text-[#0a2540] p-3 rounded-xl shadow-xl w-2/4"
            >
              Add to Queue
            </button>
          </div>
        </form>
      </div>

      {/* Displaying entered data */}
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
    </div>
  );
}
