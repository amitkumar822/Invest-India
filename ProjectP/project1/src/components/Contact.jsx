import React from "react";
import WorldMap from "../photo/ContactUs/world-map.png";
import { MdPhoneCallback } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";

function Contact() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${WorldMap})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[rgba(27,20,14,0.7)] py-10">
          <div className="grid grid-cols-2 py-20 px-20 ">
            {/* contact section */}
            <div>
              <h1
                className="text-5xl font-worksans font-bold italic text-white"
                data-aos-duration="3000"
                data-aos="fade-down"
              >
                Feel Free To Contact Our Team
              </h1>
              <div className="flex items-center gap-5 text-white mt-10">
                <MdPhoneCallback
                  className="text-6xl bg-[#021C3F] py-2 px-2 rounded-full border-2"
                  data-aos-duration="2000"
                  data-aos="fade-right"
                />
                <div data-aos-duration="2000" data-aos="fade-left">
                  <h1 className="text-3xl font-semibold font-worksans">
                    Call Anytime
                  </h1>
                  <a
                    className="text-xl hover:text-[#dad7d7]"
                    href="tel:+91-6283048627"
                  >
                    +91-6283048627
                  </a>
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5 text-white">
                <FaMapLocationDot
                  className="text-6xl text-white bg-[#021C3F] py-2 px-2 rounded-full border-2"
                  data-aos-duration="3000"
                  data-aos="fade-right"
                />
                <div data-aos-duration="3000" data-aos="fade-left">
                  <h1 className="text-3xl font-semibold font-worksans">
                    Address
                  </h1>
                  <h2 className="text-[18px] font-semibold">
                    Alkapuri new, near krish hundai showroom, <br /> Patna,
                    Bihar 800002
                  </h2>
                </div>
              </div>
              <br />
              <br />
              <div
                className="flex items-center my-4 pl-5 py-3 rounded-l-lg gap-5 text-white bg-[#000000]"
                data-aos-duration="2000"
                data-aos="zoom-in"
              >
                <MdOutlineMessage className="text-6xl text-red-600" />
                <div>
                  <h1 className="text-3xl font-semibold font-worksans text-red-600">
                    Email Anytime
                  </h1>
                  <h2 className="text-[18px] font-semibold">
                    Support24@gmail.com
                  </h2>
                </div>
              </div>
            </div>
            {/* Form Section */}
            <div  data-aos-duration="3000" data-aos="fade-left">
              <form
                action=""
                className="w-[633px] bg-white py-4 px-4 rounded-md shadow-md shadow-pink-500"
              >
                <span className="text-4xl font-semibold italic font-worksans">
                  A Brief Overview Of The Space You Would Like To Decorate.
                </span>
                <br />
                <br />
                <span className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="bg-white border border-black py-2 px-4 text-xl font-worksans rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="bg-white border border-black py-2 px-4 text-xl font-worksans rounded-md"
                  />
                </span>
                <br />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-[91.5%] bg-white border border-black py-2 px-4 text-xl font-worksans rounded-md"
                />
                <br />
                <br />
                <textarea
                  placeholder="Your Request"
                  className="w-[91.5%] min-h-44 max-h-44 bg-white border border-black py-2 px-4 text-xl font-worksans rounded-md"
                />
                <br />
                <br />
                <button className="bg-blue-500 text-center w-[92%] py-2 text-2xl font-worksans text-white  rounded-md shadow-md shadow-black hover:bg-blue-600 hover:text-[#d8d8d8] duration-300 mb-4">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
