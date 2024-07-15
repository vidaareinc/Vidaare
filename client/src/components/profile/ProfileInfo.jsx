import React from "react";

export default function ProfileInfo() {
  return (
    <div className="w-1/4 h-96 bg-[#0A2540] rounded-xl flex flex-col ">
      <h1 className="text-2xl text-white mx-8 mt-8">Profile Informations</h1>
      <p className="mt-4 text-base text-white mx-8">
        Hi, I'm Jane Doe! I create engaging content that inspires and educates.
        Join me for stories, tips, and insights on my blog, videos, and social
        media. Let's learn and grow together!
      </p>
      <hr className="w-[80%] mx-auto my-4" />
      <div className="mx-8 ">
        <p className="text-white text-base">Full Name: Jane Doe</p>
        <p className="text-white text-base my-2">Mobile: (1) 437 995 1419</p>
        <p className="text-white text-base">Email: jane.doe@octopus.com</p>
        <p className="text-white text-base my-2">Location: ON, Canada</p>
      </div>
    </div>
  );
}
