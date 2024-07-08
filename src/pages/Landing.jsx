import Header from "../components/header/Header";
import FeatureCard from "../components/features/FeatureCard";
import Feature1 from "../assets/images/LandingPage/LandingPage_Feature1.png";
import Feature2 from "../assets/images/LandingPage/LandingPage_Feature2.png";
import Feature3 from "../assets/images/LandingPage/LandingPage_Feature3.png";
import Footer from "../components/footer/Footer";

export default function Landing() {
  return (
    <>
<<<<<<< HEAD
      <div className="w-screen h-screen bg-landing-bg bg-cover bg-center flex flex-col justify-between">
        <Header />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col items-start text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Amplify your content,
            <br /> maximize your reach
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Schedule, track and post your videos across all platforms in one
            place, and watch your content royalty grow!
          </p>
          <button className="bg-transparent text-white mt-8 px-4 py-2 rounded border border-white">
=======
      <div className=" w-screen h-[70vh] bg-landing-bg bg-cover bg-center p-8">
        <Header />
        <div
          className="w-max-[750px] w-min-[400px] h-max-[450px] flex flex-col ml-[75px] 
        my-32 xl:my-40 "
        >
          <hr className="w-24 border-8 mb-4" />
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-bold text-white">
            Amplify your content,
            <br /> maximize your reach
          </h1>
          <p className="sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] text-white mt-4 md:mt-6 lg:mt-8">
            Schedule, track and post your videos across all platforms in one
            place, and watch your content royalty grow!
          </p>
          <button className=" text-white px-4 py-2 md:px-5 md:py-3 rounded-lg border border-white w-[120px]  hover:text-slate-500 md:w-[150px] mt-4 md:mt-6 lg:mt-8">
>>>>>>> 841cfa36225dfff563479e93f93dc506b1afe57e
            Learn More
          </button>
        </div>
      </div>
<<<<<<< HEAD
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 font-bold">
        <h1 className="text-3xl md:text-4xl">Features</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-evenly gap-8 mt-8">
=======
      <div className=" px-4 md:px-12 lg:px-24 font-bold mt-8 md:mt-10">
        <h1 className="text-[30px] md:text-[35px] lg:text-[40px]">Features</h1>
        <div className="flex flex-wrap justify-evenly mt-6 ">
>>>>>>> 841cfa36225dfff563479e93f93dc506b1afe57e
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
