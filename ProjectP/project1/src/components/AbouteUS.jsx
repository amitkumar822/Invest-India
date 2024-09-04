import React from "react";
import AboutImage from "../photo/About/about.png";
import Globe from "../photo/About/Globe-removebg-preview.png";
import { FcAbout } from "react-icons/fc";
import { GrBusinessService, GrServices } from "react-icons/gr";
import { MdVerified } from "react-icons/md";

function AbouteUS() {
  return (
    <>
      <div className="w-full grid grid-cols-2 py-12 px-8 overflow-hidden bg-gradient-to-r from-rose-100 to-teal-100">
        {/* Image Section */}
        <div>
          <img
            src={AboutImage}
            alt="about"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
        {/* Text Information Section */}
        <div>
          <h1
            className="text-2xl uppercase text-red-600 font-semibold font-serif flex items-center gap-4 border-y-2 w-[180px] border-red-600"
            data-aos-duration="3000"
            data-aos="fade-down"
          >
            <FcAbout />
            About Us
          </h1>
          <h2
            className="text-4xl font-bold italic font-serif my-16"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            Best Flooring Tiles Company
          </h2>
          <div className="relative">
            <img
              className="w-[220px] absolute animate-spin-slow right-0 z-0"
              src={Globe}
            />
            <p
              className=" relative text-xl font-semibold text-gray-600 text-justify z-10"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Magadh Nirman in Anisabad, Patna is known to satisfactorily cater
              to the demands of its customer base. The business came into
              existence in 2020 and has, since then, been a known name in its
              field. It stands located at New Bhikha Chak, Near Hundai Show
              Room, Bypass Road, Anisabad-800002. Near Hundai Show Room is a
              prominent landmark in the area and this establishment is in close
              proximity to the same. It has earned 50 reviews and aspires to
              develop a loyal customer base. Make every business transaction
              easy and seamless, contributing to making the entire process even
              more effective.
            </p>

            <div className="grid grid-cols-2 mt-8">
              <div className="grid grid-rows-1">
                <span className="flex items-center gap-4">
                  <GrServices
                    className="text-green-600 text-7xl"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                  <h1
                    className="text-3xl text-pink-500"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Quality Flooring Services
                  </h1>
                </span>
                <span
                  className="flex items-center gap-4 mt-4"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <MdVerified className="text-red-600 text-xl" />
                  <h1 className=" font-semibold font-serif">Helpful staff</h1>
                </span>
                <span
                  className="flex items-center gap-4 mt-4"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <MdVerified className="text-red-600 text-xl" />
                  <h1 className=" font-semibold font-serif">
                    Community involvement
                  </h1>
                </span>
                <button className="w-[150px] text-white font-bold italic py-1 px-2 mt-4 rounded-md shadow-md shadow-yellow-500 bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-pink-500 to-orange-500">
                  MORE ABOUT US
                </button>
              </div>
              <div>
                <span
                  className="flex items-center gap-4"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <GrBusinessService
                    className="text-green-600 text-7xl"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  />
                  <h1
                    className="text-3xl text-pink-500"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    No1 Flooring Services
                  </h1>
                </span>

                <span
                  className="flex items-center gap-4 mt-4"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <MdVerified className="text-red-600 text-xl" />
                  <h1 className=" font-semibold font-serif">
                    Family-owned & operated
                  </h1>
                </span>
                <span
                  className="flex items-center gap-4 mt-4"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <MdVerified className="text-red-600 text-xl" />
                  <h1 className=" font-semibold font-serif">
                    Excellent relationships
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbouteUS;
