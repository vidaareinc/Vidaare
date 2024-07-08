import PropTypes from "prop-types";

const FeatureCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-[350px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4 text-right">
          <button className="text-blue-500 underline hover:text-blue-300">
            {link}
          </button>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FeatureCard;
