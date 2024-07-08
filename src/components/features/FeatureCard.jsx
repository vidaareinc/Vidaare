const FeatureCard = ({ title, description, imageUrl, link }) => {
  return (
<<<<<<< HEAD
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-[350px] overflow-hidden">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 text-right">
          <button className="text-blue-500 underline">{link}</button>
=======
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      <div className="m-6">
        <img className="w-[450px] h-[350px]" src={imageUrl} alt={title} />

        <div className="font-bold text-xl my-4">{title}</div>
        <p className="text-gray-700 text-base mb-8">{description}</p>
        <div className="flex justify-end">
          <button className=" text-blue-500 underline  hover:text-blue-300">
            {link}
          </button>
>>>>>>> 841cfa36225dfff563479e93f93dc506b1afe57e
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
