import React from "react";
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'


const AppCart = ({app}) => {
    const {title, image, downloads,ratingAvg} = app
  return (
    <div className=" p-3 bg-white space-y-5">
      <div className="bg-[#d9d9d9] rounded-xl">
        <img className="" src={image} alt="" />
      </div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="flex justify-between">
        <div className="bg-[#D2D2D240] flex items-center text-green-400 text-2xl font-semibold p-3 rounded-xl">
          <img className="w-7 h-7 mr-2" src={download} alt="" />
          {downloads}
        </div>
        <div className="bg-[#FFF0E1] text-[#FF8811] flex items-center text-2xl p-3 rounded-xl">
          <img className="w-7 h-7 mr-2" src={rating} alt="" />
          {ratingAvg}
        </div>
      </div>
    </div>
  );
};

export default AppCart;
