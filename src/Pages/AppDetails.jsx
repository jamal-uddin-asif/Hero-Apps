import React from "react";
import { useNavigation, useParams } from "react-router";
import useAllApps from "../Hooks/useAllApps";


import LoadingPage from "./LoadingPage";
import AppDetailsCard from "./AppDetailsCard";
import AppNotFound from "./AppNotFound";

const AppDetails = () => {
  const { appId } = useParams();
  const { appsData, loading } = useAllApps();
  // console.log(appId,appsData)
  const clickedApp = appsData.find((app) => app.id === Number(appId));

  console.log(appId);
  // console.log(loading);
  if(!clickedApp) return <AppNotFound></AppNotFound>

  return (
    <>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : ( <AppDetailsCard clickedApp={clickedApp}></AppDetailsCard>

       
      )}
    </>
  );
};

export default AppDetails;
