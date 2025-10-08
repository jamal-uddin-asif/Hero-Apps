import React from "react";
import BannerHero from '../assets/hero.png'
import playStoreIcon from '../assets/playStore.png'
import appStoreIcon from '../assets/appStore.png'
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-[#D2D2D240]">
      <div className="flex flex-col justify-center items-center text-center py-20 space-y-4">
        <h1 className="text-7xl font-bold">We Build <br /> <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text ">Productive</span> Apps</h1>
        <p className="max-w-4xl text-gray-500"> At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="space-x-3">
          <Link to={'https://play.google.com/store/games?hl=en'} className="btn font-bold"><img className="w-5 " src={playStoreIcon} alt="" /> Google Play</Link>
        <Link to={'https://www.apple.com/app-store/'} className="btn font-bold"><img className="w-5 " src={appStoreIcon} alt="" /> App Store</Link> 
        </div>
        
      </div>

      {/*Banner image  */}
      <div className=" flex justify-center">
        <img className="" src={BannerHero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
