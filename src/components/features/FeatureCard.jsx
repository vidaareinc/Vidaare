const FeatureCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      <div className="m-6">
        <img className="w-[450px] h-[350px]" src={imageUrl} alt={title} />

        <div className="font-bold text-xl my-4">{title}</div>
        <p className="text-gray-700 text-base mb-8">{description}</p>
        <div className="flex justify-end">
          <button className=" text-blue-500 underline">{link}</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
