import React from "react";
import useAllApps from "../Hooks/useAllApps";
import AppCart from "../Components/AppCart";

const Apps = () => {
  const { appsData } = useAllApps();

  return (
    <div className="bg-[#D2D2D240] ">
      <div className="max-w-11/12 mx-auto">
        <div>
          <div>
            <h1 className="text-center">Our All Applications</h1>
            <p className="text-center">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex justify-between">
            <h2>( 123 ) Apps Found</h2>
            <input className="border-1" type="search" placeholder="name" />
          </div>
        </div>

        <div className="grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {appsData.map((app) => (
            <AppCart key={app.id} app={app}></AppCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
