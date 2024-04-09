import React from 'react';

const Home = () => {
  return (
    <div className="bg-light-green-100 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8 overflow-hidden rounded-lg bg-teal-500">
          <div className="relative">
            <img
              src="https://source.unsplash.com/1600x900/?technology"
              alt="Hero"
              className="h-auto w-full"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-4xl font-bold text-white">
              <h1>Welcome to APIfy!</h1>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-teal-500">
              Interact with Multiple APIs
            </h2>
            <p className="text-gray-800">
              Explore a wide range of APIs for inspiration on your own projects.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold text-teal-500">
              Visualize Insights
            </h2>
            <p className="text-gray-800">
              Visualize data from APIs with intuitive charts and graphs for
              better understanding and analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
