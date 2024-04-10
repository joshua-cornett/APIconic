const KeyFeature = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold text-teal-500">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default KeyFeature;
