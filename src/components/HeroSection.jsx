import React from 'react';

const HeroSection = () => {
  return (
    <div className="mb-8 overflow-hidden rounded-lg bg-teal-500">
      <div className="relative">
        <img
          src="https://source.unsplash.com/1600x900/?technology"
          alt="Hero"
          className="h-auto w-full"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-4xl font-bold text-white">
          <h1>Welcome to APIconic!</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
