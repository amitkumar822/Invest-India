import React from "react";
import { GalleryPhotos } from "../photo/Gallery/GalleryPhotos";
import net_backgroumd from "../photo/Gallery/net-background.jpg";
import { MdArrowOutward } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

function Gallery() {
  return (
    <>
      <div
        className="w-full bg-net-background bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${net_backgroumd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-[rgba(0,0,0,0.3)] py-24 px-5">
          <div
            className="flex justify-center"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <h1
              className="text-3xl text-center font-bold uppercase border-y-2 w-[200px] border-[#08085e] text-[#08085e] italic flex gap-4 items-center justify-center"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <GrGallery />
              Gallery
            </h1>
          </div>
          {/* Add Gallery Images Here */}
          <div className="w-full flex gap-8 mt-6">
            {GalleryPhotos.map((details, index) => (
              <div
                key={index}
                className="w-[387px] bg-white rounded-md shadow-md shadow-stone-700 px-2 py-2 overflow-hidden"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <img
                  src={details.image}
                  alt=""
                  className="bg-white hover:scale-105 duration-500 rounded-md shadow-md shadow-gray-500 relative"
                />
                <div
                  className="-mt-[64px] flex absolute rounded-md overflow-hidden"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <span className="w-[215px] bg-[#021C3F] whitespace-nowrap overflow-hidden text-white font-bold italic font-serif text-[19px] pl-2 pr-32 py-4">
                    {details.title}
                  </span>
                  <span className="w-[100px] bg-white hover:bg-slate-300 duration-300 px-8 flex items-center">
                    <MdArrowOutward
                      className="text-4xl hover:scale-125 duration-300 cursor-pointer hover:text-red-600 hover:-rotate-[135deg]"
                      // data-aos="fade-up-right"
                      // data-aos-duration="2500"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
