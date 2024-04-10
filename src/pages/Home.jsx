import React from 'react';
import { HeroSection, KeyFeature } from '../components';

const Home = () => {
  return (
    <div className="bg-light-green-100 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <HeroSection />

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <KeyFeature
            title="Interact with Multiple APIs"
            description="Explore a wide range of APIs for inspiration on your own projects."
          />
          <KeyFeature
            title="Visualize Insights"
            description="Visualize data from APIs with intuitive charts and graphs for better understanding and analysis."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
