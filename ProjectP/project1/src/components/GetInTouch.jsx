import React from "react";
import Tiles from "../photo/pexels-ivaoo-691710.jpg";
import cat1 from "../photo/cta-1.jpg";
import cat2 from "../photo/cta-2.jpg";

function GetInTouch() {
  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${Tiles})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexWrap: "wrap",
          // padding: "50px",
          color: "white",
        }}
      >
        <div className=" w-full flex py-10 justify-around items-center bg-[rgba(0,0,0,0.5)]">
          {/* Image Part */}
          <div className="flex">
            <span>
              <img
                className="max-w-[200px] bg-white p-3"
                src={cat1}
                alt="cat1"
              />
            </span>
            <span className="mt-14 -ml-24">
              <img
                className="max-w-[200px] bg-white p-3"
                src={cat2}
                alt="cat2"
              />
            </span>
          </div>
          {/*  */}
          <div>
            <h1
              className="text-5xl font-bold font-serif italic"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Best Internal Tiles Flooring Solution
            </h1>
            <button className="text-xl bg-blue-600 hover:bg-blue-700 hover:text-[#e8e5e5] py-2 px-2 font-semibold rounded-md shadow-md shadow-yellow-400 mt-6">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
