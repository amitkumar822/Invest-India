import React from "react";
import { AiFillOpenAI, AiOutlineCluster } from "react-icons/ai";
import { FaServicestack } from "react-icons/fa6";
import ManBanner from "../photo/ManBanner.png";
import ManBackground from "../photo/Banner/ManBackground.png";

function TrustyServices() {
  return (
    <>
      <div className="grid grid-cols-2 bg-[#FBEFE2] py-14 px-8 overflow-hidden">
        {/* Text  Trusty Services Section */}
        <div>
          <h1 className="text-xl uppercase text-red-600 font-semibold font-serif flex items-center gap-4 border-y-2 w-[300px] border-red-600">
            <FaServicestack
              data-aos-duration="1200"
              data-aos-easing="linear"
              data-aos="fade-right"
            />
            <span
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos="fade-left"
            >
              Trusty Services
            </span>
          </h1>
          <h2
            className="text-5xl font-bold italic font-serif mt-10 tracking-wide leading-snug"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos="fade-down-right"
          >
            We offer Dependable Tiles Flooring Services
          </h2>
          <p
            className="text-2xl font-semibold italic mt-10 text-gray-600"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos="fade-up-left"
          >
            Magadh Nirman company with over 15 years experience and have built a
            great reputation from our previous customers.
          </p>
          <div className="grid grid-cols-2 mt-10 text-2xl font-semibold font-serif text-[#5c2d2d]">
            <div className="flex items-center gap-4">
              <AiFillOpenAI className="text-6xl text-green-600" />{" "}
              <span
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos="fade-left"
              >
                Interior & Exterior Flooring
              </span>
            </div>
            <div className="flex items-center gap-4">
              <AiOutlineCluster className="text-7xl text-green-600" />{" "}
              <span
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos="fade-left"
              >
                Modern & luxurious Flooring interior
              </span>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div
          className=" flex justify-end"
          style={{
            height: "400px",
            width: "400px",
            marginLeft: "100px",
            backgroundImage: `url(${ManBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <img
            src={ManBanner}
            alt=""
            data-aos-duration="1500"
            data-aos-easing="linear"
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
}

export default TrustyServices;
