import React, { useEffect, useState } from "react";
import { getAppsFromLS } from "../Utility/localStorage";
import useAllApps from "../Hooks/useAllApps";
import InstalledAppCart from "../Components/InstalledAppCart";

const Installation = () => {
  const { appsData, loading } = useAllApps();
  console.log(appsData);

  const [apps, setApps] = useState([]);
  console.log(apps);

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

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="bg-[#D2D2D240] pb-2">
          <div className="text-center space-y-4 pt-25 max-w-11/12 mb-4 mx-auto">
            <h1 className="font-bold text-4xl">Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">{apps.length} Apps Found</h1>
                <p>sort by size</p>
            </div>
          </div>
          {
            apps?.map(app=><InstalledAppCart key={app.id} app={app}></InstalledAppCart>)
          }
        </div>
      )}
    </div>
  );
};
// apps?.map(app=><InstalledAppCart app={app}></InstalledAppCart>

export default Installation;
