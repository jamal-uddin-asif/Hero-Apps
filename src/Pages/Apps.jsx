import React, { useEffect, useState } from "react";
import useAllApps from "../Hooks/useAllApps";
import AppCart from "../Components/AppCart";
import LoadingPage from "./LoadingPage";
import AppNotFound from "./AppNotFound";
import { Link } from "react-router";

const Apps = () => {
  const { appsData, loading, setAppsData } = useAllApps();
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase();
  // console.log('termed',term)

 
    const filteredApps = term? appsData.filter(app=>app.title.toLocaleLowerCase().includes(term)): appsData;
    // console.log(filteredApps)
    // setAppsData(filteredApps)

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="bg-[#D2D2D240] ">
          <div className="max-w-11/12 mx-auto">
            <div>
              <div className="py-13">
                <h1 className="text-center text-5xl font-bold mb-4">Our All Applications</h1>
                <p className="text-center text-gray-500">
                  Explore All Apps on the Market developed by us. We code for
                  Millions
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-bold text-2xl">( {filteredApps.length} ) Apps Found</h2>
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
              </div>
            </div>

            <div className="grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {loading && <LoadingPage></LoadingPage>} { filteredApps.length != 0? filteredApps.map((app) => (
                <AppCart key={app.id} app={app}></AppCart>
              )):<Link className="col-span-full" to={'/appNotFound'}> <AppNotFound></AppNotFound></Link>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
  // {filteredApps.length != 0? filteredApps.map((app) => (
  //               <AppCart key={app.id} app={app}></AppCart>
  //             )):<Link className="col-span-full" to={'/appNotFound'}> <AppNotFound></AppNotFound></Link>}

export default Apps;
