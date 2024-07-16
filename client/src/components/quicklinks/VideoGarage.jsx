import React from "react";
import Educational from "../../assets/images/Main/VidGarage1.jpg";
import Entertaining from "../../assets/images/Main/VidGarage2.jpg";
import Promotional from "../../assets/images/Main/VidGarage3.jpg";
import VideoGarageCard from "./VideoGarageCard";

const vidLinks = [
  {
    title: "Educational/Informative Videos",
    description:
      "Learn something new! These videos teach, explain, or demonstrate a concept.",
    imageUrl: Educational,
  },
  {
    title: "Entertaining/Engaging Videos",
    description:
      "Fun and captivating! These videos entertain, inspire, or make you smile.",
    imageUrl: Entertaining,
  },
  {
    title: "Promotional/Marketing Videos",
    description:
      "Get to know a brand! These videos promote products, services, or events.",
    imageUrl: Promotional,
  },
];

export default function VideoGarage() {
  const handleCardClick = (title) => {
    console.log(`Open ${title}`);
  };
  return (
    <div className="w-3/4 h-[550px] bg-[#0A2540] rounded-xl">
      <h1 className="text-2xl text-white mx-8 mt-8">My Video Garage</h1>
      <h2 className="text-xl text-white mx-8 mt-2">
        Browse your selection of Videos by category. Click 'View All' to see
        more!
      </h2>
      {/* <div className="flex flex-row flex-wrap justify-evenly gap-8 mt-8"> */}
      <div className="grid grid-cols-3 gap-x-4 p-4">
        {vidLinks.map((link, index) => (
          <VideoGarageCard
            key={index}
            title={link.title}
            description={link.description}
            imageUrl={link.imageUrl}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}
