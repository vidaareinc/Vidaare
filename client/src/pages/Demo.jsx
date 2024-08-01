import React, { useState } from "react";
import BookDemo from "../components/modals/BookDemo";

export default function Demo() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  return (
    <>
      <div className=" bg-landing-bg bg-cover bg-center flex flex-col justify-between">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center items-start text-white h-screen ">
          <hr className="w-24 border-8 mb-4 sm:w-18 " />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Amplify your content,
            <br /> maximize your reach
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Schedule, track and post your videos across all platforms in one
            place, and watch your content royalty grow!
          </p>
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="bg-transparent text-white mt-8 px-4 py-2 rounded border border-white hover:text-slate-500 md:w-[150px] md:mt-6 lg:mt-8"
          >
            Book A Demo
          </button>
          {/* Book Demo Modal */}
          <BookDemo
            isOpen={isEmailModalOpen}
            onClose={() => setIsEmailModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
