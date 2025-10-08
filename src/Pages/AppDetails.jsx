import React from "react";
import { useNavigation, useParams } from "react-router";
import useAllApps from "../Hooks/useAllApps";


import LoadingPage from "./LoadingPage";
import AppDetailsCard from "./AppDetailsCard";

const AppDetails = () => {
  const { appId } = useParams();
  const { appsData, loading } = useAllApps();
  // console.log(appId,appsData)
  const clickedApp = appsData.find((app) => app.id === Number(appId));

  console.log(clickedApp);
  console.log(loading);

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
