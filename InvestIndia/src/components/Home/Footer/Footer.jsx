import React, { useEffect, useState } from "react";
import backgroundInv from "../../../Photos/Footer/backgroundInv.webp";
import { MdOutlineMailOutline, MdPhoneBluetoothSpeaker } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { SlCalculator } from "react-icons/sl";
import makeInIndia from "../../../Photos/Footer/make-in-india-logo_0.png"
import startup from "../../../Photos/Footer/logo_startup_india_hub.png"
import newslogo from "../../../Photos/Footer/nsws_black_logo_2.png"
import iiglogo from "../../../Photos/Footer/iig-logo_3.png"
import odop from "../../../Photos/Footer/odop_1_0.png"
import pmglogo from "../../../Photos/Footer/pmg_logo-01_1_0.png"
import iiblogo from "../../../Photos/Footer/iilb_logo_1_0.png"

function Footer() {
  // =====👇 Current Time 👇=====
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTime = new Date().toLocaleTimeString();
      setCurrTime(updatedTime);
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  // ====👇 Current Date 👇====

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      const day = today.getDate();
      const month = today.toLocaleString("en-US", { month: "long" });
      const year = today.getFullYear();
      setCurrentDate(`${day} ${month} ${year}`);
    };

    updateDate(); // Update immediately on component mount

    // Update every time the component re-renders (optional)
    const intervalId = setInterval(updateDate, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  // ====👇 Current Days 👇====
  const [currentDay, setCurrentDay] = useState("");
  useEffect(() => {
    const updateDay = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date();
      const dayIndex = today.getDay();
      setCurrentDay(daysOfWeek[dayIndex]);
    };

    updateDay(); // Update immediately on component mount

    // Update every time the component re-renders (optional)
    const intervalId = setInterval(updateDay, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${backgroundInv})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-screen bg-[rgba(0,0,0,0.5)]">
          <div className="w-[80%] mx-auto pt-20 grid lg:grid-cols-2">
            {/* Get in touch, Information Section  */}
            <div className="text-white font-robotoHelvAriSan">
              <h1 className="text-5xl font-bold">Get in touch</h1>
              <div className="flex gap-2 items-center text-xl mt-8">
                {" "}
                <MdOutlineMailOutline />
                <div>contact@investindia.org.in</div>
              </div>
              <div className="flex gap-2 items-center text-xl mt-4">
                {" "}
                <MdPhoneBluetoothSpeaker />
                <a href="tel:+123456789">+123456789</a>
              </div>
              <p className="mt-4">
                Please drop an email or call us, <br /> our representative will
                connect with you soon.
              </p>
              <h1 className="font-robotoHelvAriSan font-bold uppercase my-8">
                Follow Us
              </h1>
              <div className="flex gap-10 items-center text-4xl">
                <RiTwitterXLine />
                <BsLinkedin className="text-[blue] bg-white rounded-md" />
                <FaSquareYoutube className="text-[red] bg-white rounded-lg" />
                <FaSquareInstagram className="text-[red] bg-white rounded-md" />
              </div>
            </div>

            {/* SENSEX And NIFTY Section */}
            <div>
              <div className="w-[519px] h-[250px] font-robotoHelvAriSan bg-white py-4 px-6 rounded-md shadow-md shadow-red-500">
                {/* sensex and nifty */}
                <div className="border-b-2 py-2 flex justify-around">
                  <div>
                    <h1 className="text-green-600 font-bold font-robotoHelvAriSan text-xl">
                      SENSEX
                    </h1>
                    <sapn className="text-[17px] font-semibold">82,244.97</sapn>{" "}
                    <sub className="text-sm">-702.36</sub>
                  </div>
                  <div>
                    <h1 className="text-green-600 font-bold font-robotoHelvAriSan text-xl">
                      NIFTY
                    </h1>
                    <sapn className="text-[17px] font-semibold">82,244.97</sapn>{" "}
                    <sub className="text-sm">-702.36</sub>
                  </div>
                </div>
                <div className=" text-xl flex gap-2 items-center mt-6 border-b-2 pb-4">
                  <GoStopwatch className="text-3xl" />
                  <p className="font-semibold uppercase">{currTime}</p>
                  <p className="text-green-600">{currentDay}</p>,
                  <p>{currentDate}</p>
                </div>
                {/* Currency Converter */}
                <div className="flex items-center justify-center gap-4 pt-5">
                  <SlCalculator className="text-4xl" />
                  <p className="text-xl font-robotoHelvAriSan font-semibold text-blue-400 underline">
                    Currency Converter
                  </p>
                </div>
              </div>

              <div className="mt-24">
                <div className="font-robotoHelvAriSan flex justify-between pb-1 border-b-2 border-pink-400">
                  <div className="text-white uppercase">Invest India</div>{" "}
                  <div className="text-yellow-300">About Us Careers Policies, Research and Reports</div>
                </div>

                <div className="font-robotoHelvAriSan flex justify-between pb-1 border-b-2 border-pink-400 mt-8">
                  <div className="text-white uppercase">Investment <br /> Opportunities</div>{" "}
                  <div className="text-yellow-300">States in India Sectors in India</div>
                </div>

                <div className="font-robotoHelvAriSan flex justify-between pb-1 border-b-2 border-pink-400 mt-8">
                  <div className="text-white uppercase">Resources</div>{" "}
                  <div className="text-yellow-300">Production Linked Incentives (PLI) Schemes in India</div>
                </div>
              </div>
            </div>
          </div>

          {/*====👇 Footer Section 👇====*/}
          <div className="w-full px-20 py-2 mx-auto flex justify-between items-center mt-[84px] bg-[rgba(255,255,255,0.8)]">
            <div className="text-sm font-robotoHelvAriSan">
              Copyright © 2024 InvestIndia. All rights reserved.
            </div>
            <div className="flex gap-10">
              <img className="w-[80px]" src={makeInIndia} alt="" />
              <img className="w-[80px]" src={startup} alt="" />
              <img className="w-[80px]" src={newslogo} alt="" />
              <img className="w-[80px]" src={iiglogo} alt="" />
              <img className="w-[80px]" src={odop} alt="" />
              <img className="w-[80px]" src={pmglogo} alt="" />
              <img className="w-[80px]" src={iiblogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
