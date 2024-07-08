import Header from "../components/header/Header";
import FeatureCard from "../components/features/FeatureCard";
import Feature1 from "../assets/images/LandingPage/LandingPage_Feature1.png";
import Feature2 from "../assets/images/LandingPage/LandingPage_Feature2.png";
import Feature3 from "../assets/images/LandingPage/LandingPage_Feature3.png";
import Footer from "../components/footer/Footer";

export default function Landing() {
  return (
    <>
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
            Learn More
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 font-bold">
        <h1 className="text-3xl md:text-4xl">Features</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-evenly gap-8 mt-8">
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