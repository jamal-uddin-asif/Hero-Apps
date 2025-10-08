import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false)
  const handleMenuBar = ()=>{
    setMenu(!menu)
  }

  return (
    <div>
      <div className="flex items-center justify-between max-w-11/12 mx-auto py-4">
        <div className="flex items-center">
          <div className="relative text-xl mr-2.5 md:hidden block">
            < TiThMenu onClick={handleMenuBar}/>
            <div className={`bg-white absolute  py-3 px-1 rounded-xl ${menu? 'top-13 duration-300': '-top-35 duration-300'}`}>
              <NavLink to={"/"}>Home</NavLink><br />
              <NavLink to={"apps"}>Apps</NavLink><br />
              <NavLink to={"installation"}>Installation</NavLink>
            </div>
          </div>

          <Link to={"/"} className="logo flex items-center">
            <img className="max-w-[40px]" src={logo} alt="" />
            <h1 className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
              HERO.IO
            </h1>
          </Link>
        </div>

        <div className="space-x-4 font-semibold hidden md:block">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"apps"}>Apps</NavLink>
          <NavLink to={"installation"}>Installation</NavLink>
        </div>

        <Link to={'https://github.com/'} className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">
          <FaGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Header;
