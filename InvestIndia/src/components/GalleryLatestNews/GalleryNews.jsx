import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function GalleryNews() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === YouTubeVideoLink.length - 1) {
      setSlide(0);
      return;
    }
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide - 1);
  };


  //=====👇 YouTube Filter Base on Slider Video 👇=====
  const [videoLink, setVideoLink] = useState(YouTubeVideoLink);
  const [filterVideoLink, setFilterVideoLink] = useState("");

  const handleOnClickVideo = (index) => {
    setFilterVideoLink(YouTubeVideoLink.filter((_, i) => i!== index));
  }

  console.log("Link: " + filterVideoLink);
  

  return (
    <div className="w-[80%] h-[800px] mx-auto grid lg:grid-cols-[60%_auto] gap-20 py-5">
      {/* Gallery Part */}
      <div className="h-screen">
        <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
          <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
          Gallery
        </h1>

        {/* video part */}
        <div className="w-full h-full border border-black mr-10 pt-4">
          <iframe
            width="706"
            height="415"
            src="https://www.youtube.com/embed/xuN2isLGRoU?si=SyrlFcYAdbawsNnw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // Updated from 'referrerpolicy' to 'referrerPolicy' to match JSX syntax
            allowFullScreen // Ensure that this attribute is present to enable full-screen mode
          ></iframe>
          <div>
            {/* Items or Image Section */}
            <div className="flex overflow-hidden mt-5">
              {videoLink.map((data, index) => (
                <div
                  style={{
                    //👉 slide section
                    transform: `translateX(-${slide * 95}%)`,
                  }}
                  className=" bg-gradient-to-r from-blue-300 to-yellow-300 p-2 rounded-3xl ml-4 shrink-0 cursor-pointer duration-500 border border-pink-600"
                  key={index}
                //   onClick={handleOnClickVideo(index)}    
                >
                  <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${
                      data.link.split("/").pop().split("?")[0]
                    }`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" // Updated from 'referrerpolicy' to 'referrerPolicy' to match JSX syntax
                    allowFullScreen // Ensure that this attribute is present to enable full-screen mode
                  ></iframe>
                </div>
              ))}
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
          </div>
        </div>
      </div>

      {/* News Part */}
      <div className="h-screen">
        <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
          <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
          Latest News
        </h1>
        <div className="w-full h-[80%] overflow-y-auto mt-4 rounded-md shadow-md shadow-gray-400">
          {/*  */}
          <div className="h-[670px] px-2 py-2 font-robotoHelvAriSan">
            {NewsList.map((details, index) => (
              <div
                className="flex gap-6 justify-end items-center border-b-2"
                key={index}
              >
                <img
                  className="w-[100px] h-[60px] rounded-md"
                  src={details.img}
                  alt=""
                />
                <div>
                  <h1 className="text-[#2EA35E]">{details.date}</h1>
                  <p className="text-[#171717] text-[15px] hover:text-red-500 cursor-pointer font-semibold">
                    {details.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryNews;

const YouTubeVideoLink = [
  {
    link: "https://youtu.be/xuN2isLGRoU?si=MT0Q_kDi0xk7cf2q",
  },
  {
    link: "https://youtu.be/AlPnZPyIHeA?si=ofnd8SWH_eSQriBL",
  },
  {
    link: "https://youtu.be/40upClQCMCI?si=o38zFQSuATVgRK3F",
  },
  {
    link: "https://www.youtube.com/live/q4-jfcIox8o?si=NJlrpiTbSyx1A8_B",
  },
  {
    link: "https://youtu.be/egKukvYELWQ?si=ZbhXH2AFeqmDkQ0x",
  },
  {
    link: "https://youtu.be/xuN2isLGRoU?si=MT0Q_kDi0xk7cf2q",
  },
  {
    link: "https://youtu.be/AlPnZPyIHeA?si=ofnd8SWH_eSQriBL",
  },
  {
    link: "https://youtu.be/40upClQCMCI?si=o38zFQSuATVgRK3F",
  },
  {
    link: "https://www.youtube.com/live/q4-jfcIox8o?si=NJlrpiTbSyx1A8_B",
  },
  {
    link: "https://youtu.be/egKukvYELWQ?si=ZbhXH2AFeqmDkQ0x",
  },
];

const NewsList = [
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123053.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_125253.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123549.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/tcs.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_121344.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123053.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_125253.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123549.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/tcs.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_121344.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123053.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_125253.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_123549.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/tcs.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
  {
    img: "https://static.investindia.gov.in/s3fs-public/2024-09/screenshot_2024-09-04_121344.png",
    date: "Sep 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero non tellus consectetur fermentum.",
  },
];
