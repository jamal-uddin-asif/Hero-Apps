import React from "react";

const SecondBanner = () => {
  return (
    <div className="py-17 space-y-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
      <h1 className="text-center text-5xl font-semibold text-white">Trusted by Millions, Built for You</h1>
      <div className="md:flex gap-18 justify-center space-y-8">
        <div className="text-white text-center space-y-3">
          <h4 className="text-gray-300">Total Downloads</h4>
          <h2 className="text-6xl font-bold">29.6M</h2>
          <p className="text-gray-300">21% more than last month</p>
        </div>
        <div className="text-white text-center space-y-3">
          <h4 className="text-gray-300">Total Reviews</h4>
          <h2 className="text-6xl font-bold">906K</h2>
          <p className="text-gray-300">46% more than last month</p>
        </div>
        <div className="text-white text-center space-y-3">
          <h4 className="text-gray-300">Active Apps</h4>
          <h2 className="text-6xl font-bold">132+</h2>
          <p className="text-gray-300">31 more will Launch</p>
        </div>
      
      </div>
    </div>
  );
};

export default SecondBanner;
