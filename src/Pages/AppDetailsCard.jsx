import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { addAppsToLs } from "../Utility/localStorage";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Fullscreen } from "lucide";
import { toast } from "react-toastify";





const AppDetailsCard = ({ clickedApp }) => {
  console.log(clickedApp)
  const handleInstall = (id) => {
    addAppsToLs(id);
  };

  
  
  const [isDisable, setIsDisable] = useState(false)
  const handleDisable = id =>{
    
    setIsDisable(!isDisable)
    
  }
  
  
  const [appRating, setAppRating] = useState([])

  useEffect(()=>{
    const reversed = []
    const Rating = clickedApp.ratings
    console.log(Rating)
    Rating.forEach(r=> reversed.unshift(r))
    console.log(appRating) 
    setAppRating(reversed)
  },[])
  
 


  return (
    <div className="bg-[#D2D2D240] min-h-[calc(100vh-210px)]">
      <div className="md:flex gap-4 max-w-11/12 mx-auto ">
        <div>
          <img
            className="h-70 border-1 border-gray-300"
            src={clickedApp.image}
            alt=""
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{clickedApp.title}</h1>
          <p className=" pb-8  mt-3 ">
            <span className="text-gray-400">Developed by</span>{" "}
            <span className="text-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
              {clickedApp.companyName}
            </span>
          </p>

          <div className="flex gap-9 border-t-1 border-gray-400 w-full py-4">
            <div className="space-y-2">
              <img src={download} alt="" />
              <p>Downloads</p>
              <h2 className="font-bold text-2xl">{clickedApp.downloads}</h2>
            </div>

            <div className="space-y-2">
              <img src={rating} alt="" />
              <p>Average Ratings</p>
              <h2 className="font-bold text-2xl">{clickedApp.ratingAvg}</h2>
            </div>

            <div className="space-y-2">
              <img src={review} alt="" />
              <p>Total Reviews</p>
              <h2 className="font-bold text-2xl">{clickedApp.reviews}</h2>
            </div>
          </div>
          <button disabled={isDisable}
            onClick={() => {handleInstall(clickedApp.id);handleDisable();toast.success('Installed successfully')}}
            className="bg-[#00d390] text-white font-semibold p-2 rounded-sm hover:scale-110 transition ease-in-out"
          >
            {isDisable?'Installed':`Install Now (${clickedApp.size} MB)`} 
          </button>
        </div>
      </div>
 {/* Install Now */}
 {/* clickedApp.ratings  */}
      <div className="my-7 md:max-w-11/12 mx-auto">
      <h1 className="text-xl font-bold mb-2">Ratings</h1>
        <ResponsiveContainer width={'100%'} height={300}>
        <BarChart  data={appRating} layout="vertical">
              <YAxis  dataKey={'name'} type="category"></YAxis>
              <XAxis type="number"></XAxis>
              <Bar dataKey={'count'} fill={'#FF8811'}></Bar>

              <Tooltip></Tooltip>
              {/* <Bar dataKey={'Science'} fill=''></Bar> */}
        </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-11/12 mx-auto space-y-2 border-t-1 border-gray-300  py-5">
        <h1 className="font-semibold">Description</h1>
        <p className="text-gray-500 ">{clickedApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetailsCard;
