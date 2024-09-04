import React from "react";
import logo2 from "../../Photos/Header/Logo/logo2.png";
import backgroundImage from "../../Photos/Header/Background/InvestIndiaBanner.jpg";
import { FaHome } from "react-icons/fa";
import { LatestUpdate } from "./Data/LatestUpdate";

function Header() {
  return (
    <>
      <div
        className="w-full text-white pb-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] mx-auto">
          {/*====👇 Header Section 👇===*/}
          <div className="pt-4 flex  items-center justify-between">
            {/* Logo part */}
            <div className="flex items-center gap-2">
              <img className="w-[55px]" src={logo2} />
              <span className="text-3xl font-bold">INVEST INDIA</span>
            </div>
            {/* Navbar Text part */}
            <div>
              <ul className="flex gap-7 text-[18px] font-semibold uppercase items-center">
                <li className="cursor-pointer">
                  <FaHome className="bg-red-500 text-3xl px-2 py-2" />
                </li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>

          {/*===👇 Video and Latest Updates Section 👇===*/}
          <div className="grid lg:grid-cols-2 gap-4 mt-10">
            {/* video part */}
            <div className="bg-white">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/d-71YF6vx7U?autoplay=1&mute=1&loop=1&playlist=d-71YF6vx7U"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white text-black rounded-md py-4 px-4">
              <h1 className="text-[20px] text-[#303030] font-semibold font-robotoHelvAriSan">
                Latest Updates
              </h1>
              <div className="mt-4 h-[300px] font-robotoHelvAriSan overflow-x-auto overflow-y-auto">
                {LatestUpdate.map((data, index) => (
                  <div className="py-2 border-b-2" key={index}>
                    <h1 className="text-[16px] text-[#040404] font-semibold">
                      {data.title}
                    </h1>
                    <div className="text-[#626262] text-[12px] font-semibold">
                      Today <span className="text-xl">.</span>{" "}
                      <span>{data.related}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
