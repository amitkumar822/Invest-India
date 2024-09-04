import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import banner1 from "../photo/Banner/banner1.jpg";
import banner2 from "../photo/Banner/banner2.jpg";
import banner3 from "../photo/Banner/pexels-ivaoo-691710.jpg";
import bannerUpperTile from "../photo/Banner/bannerUpperTile.png";

const fadeImages = [
  {
    url: banner1,
    caption:
      "Our professional team will create a beautiful, comfortable, and stylish home flooring project.",
  },
  {
    url: banner2,
    caption:
      "Our team will create a custom kitchen flooring project that suits your space perfectly.",
  },
  {
    url: banner3,
    caption:
      "Our team will create a custom bathroom flooring project that looks amazing in your home.",
  },
];

function BannerMain() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (previous, next) => {
    setCurrentSlide(next);
  };

  return (
    <div className="slide-container border border-black mt-[150px]">
      <Fade onChange={handleSlideChange}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="text-center">
            <img
              className="w-full h-[450px] relative"
              src={fadeImage.url}
              alt={`Slide ${index + 1}`}
            />
            <div className="w-full flex justify-center">
              <h2
                className={`w-full h-full flex justify-center items-center absolute bg-[rgba(0,0,0,0.4)] top-0 `}
              >
                <span
                  className={`w-[80%] transform -translate-x-1/2 -translate-y-1/2 text-5xl italic font-bold font-worksans transition-opacity duration-500  bg-gradient-to-r from-gray-200 to-yellow-200 inline-block text-transparent bg-clip-text ${
                    index === currentSlide
                      ? "animate-slide-in-left"
                      : "opacity-0"
                  }`}
                >
                  {fadeImage.caption}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </Fade>
        {/* <img
          className=" absolute top-0 left-0 hidde"
          src={bannerUpperTile}
          alt=""
        /> */}
    </div>
  );
}

export default BannerMain;
