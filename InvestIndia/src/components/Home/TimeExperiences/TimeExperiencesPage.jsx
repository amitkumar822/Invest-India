import React, { useState, useEffect } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import clock from "../../../Photos/TimeExperience/clock.png";
import now from "../../../Photos/TimeExperience/now.png";
import years from "../../../Photos/TimeExperience/years.png";
import NowBackground from "../../../Photos/TimeExperience/NowBackground.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TimeExperiencesPage() {
  // ========👇 Clock Functionality 👇========
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);
  //   ========👆 End Clock Functionality 👆======

  // ========�� Now Experience Functionality ��========
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === YouTubeVideoLink.length-1) {
        setSlide(0);
        return;
    };
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide - 1);
  };
  

  return (
    <>
      <div className="w-full h-[600px] bg-[#211D28] text-white">
        <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-4 py-10">
          {/*===👇 Clock part 👇===*/}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Clock Part */}
            <div>
              <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
                <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
                India This Minute
              </h1>

              <div className="border border-white mt-6 rounded-lg flex items-center justify-between">
                <input
                  type="text"
                  readOnly
                  placeholder="Roads & Highways"
                  className="bg-transparent py-2 text-xl border-r-2 mr-1 pl-5"
                />
                <RiArrowDownWideLine className="text-4xl pr-2" />
              </div>
              {/* Clock and india map section */}
              <div className="relative">
                <img
                  src={clock}
                  alt=""
                  className="text-white absolute w-[310px]"
                />
                {/* clock functionality */}
                <div className="relative top-16 left-7 h-20 w-20 mx-auto mt-12">
                  <div
                    className="absolute w-0.5 h-[100px] -top-5 left-5 bg-[red] rounded-md origin-bottom transform"
                    style={{
                      transform: `rotate(${time.seconds * 6}deg)`,
                    }}
                  ></div>
                  <div
                    className="absolute w-1 h-[80px] left-5 bg-yellow-500 rounded-md origin-bottom transform"
                    style={{
                      transform: `rotate(${time.minutes * 6}deg)`,
                    }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-[70px] top-3 left-5 bg-pink-500 rounded-md origin-bottom transform"
                    style={{
                      transform: `rotate(${time.hours * 30}deg)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Now and Years part Text */}
            <div>
              <img src={now} alt="" />
              <div
                className="w-full h-[150px] bg-white my-6 border"
                style={{
                  backgroundImage: `url(${NowBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="bg-[rgba(0,0,0,0.6)] w-full h-full text-center flex justify-center items-center">
                  <span>
                    <h1 className="text-2xl font-roboCondensedSan text-white font-semibold">
                      2526 kg/ha
                    </h1>
                    <h2 className="text-[18px] text-gray-300">
                      Farm Productivity of Major Cropa
                    </h2>
                  </span>
                </div>
              </div>
              <img src={years} alt="" />
              <div
                className="w-full h-[150px] bg-white my-6 border"
                style={{
                  backgroundImage: `url(${NowBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="bg-[rgba(0,0,0,0.6)] w-full h-full text-center flex justify-center items-center">
                  <span>
                    <h1 className="text-2xl font-roboCondensedSan text-white font-semibold">
                      2526 kg/ha
                    </h1>
                    <h2 className="text-[18px] text-gray-300">
                      Farm Productivity of Major Cropa
                    </h2>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* New India Experiences */}
          <div className="w-full h-full bg-[#D8CEC5] py-4 px-4">
            <div className="flex justify-between">
              <h1 className="text-[#158567] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
                <div className="w-[40px] h-[3px] bg-[#158567]" />
                New India Experiences
              </h1>
              <h1 className="pr-36 text-red-500 underline font-roboCondensedSan font-semibold">
                View All
              </h1>
            </div>

            {/* Youtube Video Section */}
            <div className="mt-4">
              <div className="flex rounded-md overflow-hidden">
                {YouTubeVideoLink.map((data, index) => (
                  <div
                    style={{
                      //👉 slide section
                      transform: `translateX(-${slide * 100}%)`,
                    }}
                    className=""
                    key={index}
                  >
                    <div className="mr-4">
                      <iframe
                        width="630"
                        height="315"
                        src={`https://www.youtube.com/embed/${
                          data.link.split("/").pop().split("?")[0]
                        }`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" // Updated from 'referrerpolicy' to 'referrerPolicy' to match JSX syntax
                        allowFullScreen // Ensure that this attribute is present to enable full-screen mode
                      ></iframe>
                      <h1 className="text-xl text-red-600 font-roboCondensedSan">
                        {data?.title}
                      </h1>
                      <p className="text-gray-500">{data?.type}</p>
                      <p className="text-green-600">{data?.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow Section */}
              <div className="flex my-3 items-center justify-start">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeExperiencesPage;

const YouTubeVideoLink = [
  {
    link: "https://youtu.be/qKfqKNPnR8M?si=4xDN6IDD9uAuhCL9",
    title: "Key Milestones1",
    type: "Nayara Energy",
    year: "Aug 30, 2022",
  },
  {
    link: "https://youtu.be/qXO5rjRb9yA",
    title: "Key Milestones2",
    type: "Waste to Wealth Technology Park - Jaffrabad",
    year: "Jun 18, 2023",
  },
  {
    link: "https://youtu.be/qKfqKNPnR8M?si=4xDN6IDD9uAuhCL9",
    title: "Key Milestones3",
    type: "Nayara Energy",
    year: "Aug 30, 2022",
  },
  {
    link: "https://youtu.be/qXO5rjRb9yA",
    title: "Key Milestones4",
    type: "Waste to Wealth Technology Park - Jaffrabad",
    year: "Jun 18, 2023",
  },
];
