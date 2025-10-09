import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import x from "../assets/x.png";
import facebook from "../assets/facebook.png";
import linkdin from "../assets/linkdin.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white">
        {/* <h1 className="text-center text-2xl font-bold pt-6 text-gray-400">Thanks for explore</h1> */}
        <div className="max-w-11/12 mx-auto py-8 sm:flex  items-center justify-between gap-16 md:gap-50">
          <Link className="logo flex items-center">
            <img className="max-w-[40px]" src={logo} alt="" />
            <h1 className="font-bold ">HERO.IO</h1>
          </Link>
          <div>
            <div className="flex flex-col justify-end md:w-96 ">
              <h1 className="font-semibold text-xl">Social Links</h1>
              <div className="sm:flex justify-between gap-3 mt-3">
                <div className="flex items-center ">
                  <img className="invert text-white mr-3" src={x} alt="" />
                  <p>Twitter</p>
                </div>
                <div className="flex items-center">
                  <img className="mr-3" src={linkdin} alt="" />
                  <p>Linkedin</p>
                </div>
                <div className="flex items-center">
                  <img className="invert mr-3" src={facebook} alt="" />
                  <p>facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-300">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
