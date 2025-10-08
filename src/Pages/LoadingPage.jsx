import React from "react";
import { SyncLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="text-xl flex justify-center items-center min-h-screen ">
      <span>
        <SyncLoader color="blue"></SyncLoader>
      </span>
    </div>
  );
};

export default LoadingPage;