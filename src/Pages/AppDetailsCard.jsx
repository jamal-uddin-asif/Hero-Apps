import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { addAppsToLs } from '../Utility/localStorage';

const AppDetailsCard = ({clickedApp}) => {

  const handleInstall = id =>{
    addAppsToLs(id)
  }

    return (
       <div className="bg-[#D2D2D240] ">
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
                   <button onClick={()=>handleInstall(clickedApp.id)} className='bg-[#00d390] text-white font-semibold p-2 rounded-sm hover:scale-110 transition ease-in-out'>Install Now ({clickedApp.size} MB)</button>
                   </div>
                 </div>

                 <div className='max-w-11/12 mx-auto space-y-2 border-t-1 border-gray-300 my-5 pt-5'>
                    <h1 className='font-semibold'>Description</h1>
                    <p className='text-gray-500 '>{clickedApp.description}</p>
                 </div>
                
             
               </div>
    );
};

export default AppDetailsCard;