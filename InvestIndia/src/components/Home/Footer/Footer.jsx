import React from "react";
import backgroundInv from "../../../Photos/Footer/backgroundInv.webp";
import { MdOutlineEmail, MdOutlineMailOutline } from "react-icons/md";


function Footer() {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${backgroundInv})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "150px",
          // width: "100%",
          // position: "fixed",
        }}
      >
        <div className="w-full h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="grid lg:grid-cols-2">
            {/* Get in touch, Information Section  */}
            <div className="text-white">
                <h1>Get in touch</h1>
                <div className="flex gap-2 items-center"> <MdOutlineMailOutline /><span>contact@investindia.org.in</span></div>
            </div>

            {/* SENSEX And NIFTY Section */}
            <div></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
