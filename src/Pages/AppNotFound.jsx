import React from "react";
import notFound from "../assets/App-Error.png";
import { Link, useNavigate } from "react-router";
const AppNotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="  flex flex-col justify-center items-center space-y-4">
        <img className="" src={notFound} alt="" />
        <h1 className="text-4xl text-center mt-9">OPPS!! APP NOT FOUND</h1>
        <p className="text-center text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <button
          onClick={()=>navigate(-1)}
          className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
