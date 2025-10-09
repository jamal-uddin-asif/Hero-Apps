import React, { useEffect, useState } from "react";
import { getAppsFromLS, removeAppFromLS } from "../Utility/localStorage";
import useAllApps from "../Hooks/useAllApps";
import InstalledAppCart from "../Components/InstalledAppCart";
import LoadingPage from "./LoadingPage";

const Installation = () => {
  const { appsData, loading } = useAllApps();
  // console.log(appsData);

  const [apps, setApps] = useState([]);


  useEffect(() => {
    const findApps = [];
    const storedApps = getAppsFromLS();
    // console.log(storedApps)

    storedApps.forEach((id) => {
      const matchedApps = appsData?.find(
        (app) => Number(app.id) === Number(id)
      );
      if (matchedApps) {
        // console.log(matchedApps)
        findApps.push(matchedApps);
      }
    });
    setApps(findApps);
  }, [appsData]);


  
  const [sort, setSort] = useState('')
  useEffect(()=>{
    // console.log(sort);
    if(sort === 'low-high'){
    const sorted = [...apps].sort((a,b)=> a.downloads - b.downloads)
    setApps(sorted)
  }
  else if(sort === "high-low"){
    const sorted = [...apps].sort((a,b)=> b.downloads - a.downloads)
    setApps(sorted)
  }
 },[sort])


  const handleUninstall = id =>{
    const remining = apps.filter(app=>app.id !== id)
    setApps(remining)
    removeAppFromLS(id)
  }

  return (
    <div>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="bg-[#D2D2D240] pb-2 min-h-[calc(100vh-210px)]">
          <div className="text-center space-y-4 pt-25 max-w-11/12 mb-4 mx-auto">
            <h1 className="font-bold text-4xl">Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">{apps.length} Apps Found</h1>
                <select onChange={(e)=> setSort(e.target.value)} className="border border-gray-300 text-gray-500" defaultValue={'Sort by download'} name="" id="">
                  <option  disabled={true} value="Sort by size">Srot by size</option>
                  <option value="high-low">Hing-low</option>
                  <option value="low-high">Low-High</option>
                </select>
            </div>
          </div>
          {
            apps?.map(app=><InstalledAppCart key={app.id} app={app} apps={apps} handleUninstall={handleUninstall}></InstalledAppCart>)
          }
        </div>
      )}
    </div>
  );
};
// apps?.map(app=><InstalledAppCart app={app}></InstalledAppCart>

export default Installation;
