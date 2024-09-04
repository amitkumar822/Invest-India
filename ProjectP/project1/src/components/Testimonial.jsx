import React, { useState, useEffect, useRef } from "react";

import test1 from "../photo/Testimonial/test1.png";
import test2 from "../photo/Testimonial/test2.png";

import { PiTreeStructureThin } from "react-icons/pi";

const colors = ["#f9989f", "#fff07a", "#50cb86"];
const delay = 2500;

function Testimonial() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % colors.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="w-full bg-orange-200 py-11">
        {/* Text Section */}
        <div className="flex justify-around text-center">
          <img
            className="w-[250px] h-[170px] animate-spin-slow lg:block hidden"
            src={test1}
            alt=""
          />
          <div className="w-[800px]">
            <div className="flex justify-center">
              <h1
                className="text-xl uppercase text-red-600 font-semibold font-serif flex items-center gap-4 border-y-2 w-[200px] border-red-600 text-center"
                // data-aos-duration="3000"
                // data-aos="fade-down"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <PiTreeStructureThin className="text-2xl" />
                Testimonial
              </h1>
            </div>
            <h2 className="text-6xl text-center font-bold italic mt-4 font-worksans"
            data-aos="zoom-in"
                data-aos-duration="3000"
            >
              What Does The Customer Have To Say?
            </h2>
          </div>
          <img
            className="w-[300px] animate-up-Down lg:block hidden"
            src={test2}
            alt=""
          />
        </div>

        {/* Reviews Section */}
        <div className="relative overflow-hidden w-full h-64 flex justify-center items-center">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${-index * 50}%)` }}
          >
            {/* {colors.map((backgroundColor, i) => (
              <div
                key={i}
                className="w-1/2 h-full flex-shrink-0"
                style={{
                  backgroundColor: 'red',
                }}
              />
            ))} */}
            <div>Hello</div>
          </div>
          <div className="absolute bottom-4 flex space-x-2">
            {colors.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  index === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
