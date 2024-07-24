import React from "react";
import PropTypes from "prop-types";

export default function VideoGarageCard({
  title,
  description,
  imageUrl,
  onClick,
}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-4">
      <div className="h-auto overflow-hidden">
        <img
          className="w-42 h-auto object-cover rounded-xl mt-4"
          src={imageUrl}
          alt={title}
        />
      </div>
      <h1 className="font-bold text-xl mb-2 text-white mt-2">{title}</h1>
      <p className="text-gray-700 text-base">{description}</p>
      <div className="mt-4 ">
        <button
          className="text-white border text-base rounded-lg border-slate-500 hover:text-slate-500 p-2"
          onClick={() =>
            alert("Another Screen functionality to be implemented!")
          }
        >
          View All
        </button>
      </div>
    </div>
  );
}

VideoGarageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
