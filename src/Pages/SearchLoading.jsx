import React from "react";
import { SyncLoader } from "react-spinners";

const SearchLoading = () => {
  return (
    <div className="text-xl flex justify-center items-center min-h-[70vh] ">
      <span>
        <SyncLoader color="blue"></SyncLoader>
      </span>
    </div>
  );
};

export default SearchLoading;
