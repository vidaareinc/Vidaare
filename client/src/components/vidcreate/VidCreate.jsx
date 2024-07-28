import React from "react";
import "../../styles/styles.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function VidCreate() {
  return (
    <div className="w-1/4 h-96 vid-bg rounded-xl flex flex-col justify-between">
      <div>
        <h1 className="text-2xl text-white mx-8 mt-8">Welcome Back!</h1>
        <p className="text-white text-xl mx-8">Nice to see you, Jane Doe!</p>
      </div>
      <div className="mb-8 mx-8">
        <Link
          className=" px-4 py-2 bg-transparent text-white rounded-lg flex flex-row justify-between gap-2 items-center cursor-pointer"
          // onClick={() => alert("Create Video Screen to be implemented!")}
          to="/createpost"
        >
          Create Video <ArrowRightIcon className="w-5 h-auto cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
