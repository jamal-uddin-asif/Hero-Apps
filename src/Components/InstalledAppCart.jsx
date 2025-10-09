import React from "react";
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const InstalledAppCart = ({ app }) => {
  return (
    // <div className="bg-[#D2D2D240]">

    //     <div className="text-center space-y-5 pt-25 mb-20">
    //         <h1 className="font-bold text-5xl">Your Installed Apps</h1>
    //         <p>Explore All Trending Apps on the Market developed by us</p>
    //     </div>
    // </div>

<>
       <div className=" bg-white flex justify-between items-center max-w-11/12 mb-2 rounded-sm p-1 mx-auto">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#D2D2D240] rounded-xl p-1" >
            <img className="w-16" src={app.image} alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold text-xl">{app.title}</h1>
            <div className="space-x-3 flex">
              <div className="flex " ><img className="w-5 h-5" src={download} alt="" /><span className="text-green-500">{app.downloads}</span></div>
              <div className="flex"><img className="w-5 h-5" src={rating} alt="" /> <span className="text-amber-500">{app.ratingAvg}</span></div>
              <div className="text-gray-500">{app.size} MB</div>
            </div>
          </div>
        </div>
        <div>
            <button  className="btn bg-[#00D390] text-white hover:scale-105 transiton ease-in-out">Uninstall</button>
        </div>
      </div> 

      {/* </div> */}
</>
  );
};

export default InstalledAppCart;
