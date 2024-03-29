import React, { useState, useEffect } from "react";
// import header data
import { headerData } from "../../data";
// import components
import NavMobile from "./navMobile";
import Socials from "./socials";
// import icons
import { TiThMenuOutline } from "react-icons/ti";
import DropDown from "./dropDown";
import NavHome from "./navHome";
import NavProg from "./navProg";
import NavWork from "./navWork";

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[130px]"
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img className="w-[130px] h-[110px]" src={logo} alt="" />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className="hidden xl:flex">
          <NavHome />
        </div>
        <div className="hidden xl:flex">
          <DropDown />
        </div>
        <div className="hidden xl:flex">
          <NavProg />
        </div>
        <div className="hidden xl:flex">
          <NavWork />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl text-white" />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive
              ? "top-[100px] lg:top-[110px]"
              : "top-[120px] lg:top-[150px]"
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
