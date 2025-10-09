import React from "react";
import useAllApps from "../Hooks/useAllApps";
import TrendingApp from "./TrendingApp";
import { Link } from "react-router";
import LoadingPage from "../Pages/LoadingPage";

const TrendingApps = () => {
  const { appsData, loading } = useAllApps();
  const slicedApps = [...appsData].slice(0, 8);
  // console.log(slicedApps);
  return (
    <div className="bg-[#D2D2D240]">
      <div className="py-20 max-w-11/12 mx-auto ">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps  */}
        {loading ? (
          <LoadingPage></LoadingPage>
        ) : (
          <div className="grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {slicedApps.map((app) => (
              <TrendingApp key={app.id} app={app}></TrendingApp>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to={"apps"}
            className=" btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
