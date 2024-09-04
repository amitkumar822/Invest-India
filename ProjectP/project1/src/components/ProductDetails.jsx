import React, { useEffect, useState } from "react";
import { GiAbstract052 } from "react-icons/gi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { TopTiels } from "../photo/Tiles/TopTielsProduct";
import ProductTitleBackground from "../photo/Product/ProductTitleBackground.jpg";

function ProductDetails() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === 6 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? 6 : prevSlide - 1));
  };

  // Effect for automatic slide transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-6 bg-gradient-to-tr from-violet-500 to-orange-300">
        <div className="px-10">
          <h1
            className="flex gap-4 items-center border-y-2 border-[yellow] w-[180px]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <GiAbstract052 className="text-[yellow]" />{" "}
            <span
              className="text-2xl font-semibold italic text-white"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Our Product
            </span>
          </h1>
          <p
            className="text-4xl font-semibold font-serif italic mt-4 text-[yellow]"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            Our Completest Highest Quality Product
          </p>
        </div>
        {/* Arrow Section */}
        <div className="flex my-3 items-center justify-end">
          <div
            onClick={prevSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
          >
            <FaArrowRight />
          </div>
        </div>

        {/* Items or Image Section */}
        <div className="flex overflow-hidden">
          {TopTiels.map((data) => (
            <div
              style={{
                //👉 slide section
                transform: `translateX(-${slide * 95}%)`,
              }}
              className=" bg-gradient-to-r from-blue-300 to-yellow-300 p-2 rounded-3xl ml-4 shrink-0 cursor-pointer duration-500 border border-pink-600"
              key={data.id}
            >
              <img
                src={data.image}
                alt="category image"
                className="rounded-3xl border border-black dark:border-[yellow] dark:border-[2.3px] hover:scale-95 duration-300"
              />
              <div className="text-xl font-semibold flex justify-end font-worksans">
                <div>
                  <div className="w-full text-white flex justify-end">
                    <span className="bg-black py-2 px-4 mt-2 text-[18px]">{data.title}</span>
                  </div>
                  <div className="w-[400px] bg-white z-20 py-2 px-2 rounded-md shadow-md shadow-red-500">
                    <div
                      className="w-[220px] bg-white relative"
                      style={{
                        backgroundImage: `url(${ProductTitleBackground})`,
                      }}
                    >
                      <div className="bg-[rgba(255,255,255,0.5)] py-4 px-4 font-worksans relative">
                        {data.description}
                      </div>
                      <div className="w-[30px] h-[90px] bg-red-600 absolute -top-4 -left-6">
                        <div className="border-t-[85px] border-t-transparent border-r-[30px] border-r-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
