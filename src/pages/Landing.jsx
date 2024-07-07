import React from "react";
import Header from "../components/header/Header";
import FeatureCard from "../components/features/FeatureCard";
import Feature1 from "../assets/images/LandingPage/LandingPage_Feature1.png";
import Feature2 from "../assets/images/LandingPage/LandingPage_Feature2.png";
import Feature3 from "../assets/images/LandingPage/LandingPage_Feature3.png";
import Footer from "../components/footer/Footer";

export default function Landing() {
  return (
    <>
      <div className=" w-screen h-screen bg-landing-bg bg-cover bg-center">
        <Header />
        <div className="w-[750px] h-[450px] flex flex-col ml-[75px] mt-52">
          <h1 className="text-[70px] font-bold text-white">
            Amplify your content,
            <br /> maximize your reach
          </h1>
          <p className="text-[18px] text-white mt-8">
            Schedule, track and post your videos across all platforms in one
            place, and watch your content royalty grow!
          </p>
          <button className="bg-white-500 text-white px-5 py-3 rounded border border-white w-[150px] mt-8">
            Learn More
          </button>
        </div>
      </div>
      <div className=" px-24 font-bold mt-10">
        <h1 className="text-[40px]">Features</h1>
        <div className="flex-wrap flex flex-row gap-4 justify-evenly mt-8">
          <FeatureCard
            title="Go Live from One Platform"
            description="Seamlessly broadcast live across multiple social media platforms"
            imageUrl={Feature1}
            link="Read More"
          />
          <FeatureCard
            title="Post Videos to Other Social Media Platforms"
            description="Effortlessly share your videos on various networks"
            imageUrl={Feature2}
            link="Read More"
          />
          <FeatureCard
            title="Trailer Creator for Youtube"
            description="Easily create engaging trailers for your YouTube channels"
            imageUrl={Feature3}
            link="Read More"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
