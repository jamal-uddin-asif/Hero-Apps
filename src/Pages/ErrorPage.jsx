import React from "react";
import error from "../assets/error-404.png";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-[#D2D2D240]  min-h-[calc(100vh-210px)] flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center ">
        <img className="h-50" src={error} alt="" />
       <div className="text-center space-y-4">
         <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
        <p className="text-gray-500">The page you are looking for is not available.</p>
        <button onClick={()=> navigate(-1)} className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
        Go Back
        </button>
       </div>
      </div>
    </div>
  );
};

export default ErrorPage;
