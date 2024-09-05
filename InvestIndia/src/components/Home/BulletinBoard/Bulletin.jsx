import React from "react";
import first from "../../../Photos/Bulletin/9_21.png";
import { BulletinImagesDetails } from "../../../Photos/Bulletin/ExportBulletinPhoto";

function Bulletin() {
  return (
    <div className="w-full h-[550px] bg-[#31213A] text-white px-20 py-5">
      <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
        <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
        Book
      </h1>
      <div className="mt-8 flex flex-wrap gap-11">
        {BulletinImagesDetails.map((details, index) => (
          <div className="w-[310px] grid grid-cols-2 gap-2 mr-24" key={index}>
            <img
              className="w-[136px] h-[182px] shadow-md shadow-white"
              src={details.image}
              alt="book"
            />
            <div className="font-robotoHelvAriSan">
              <h1 className="text-red-600">{details.title}</h1>
              <p className="font-semibold">
                Key Highlights - Foreign Trade Policy 2023
              </p>
              <p className="text-fuchsia-400">31 March 2023</p>
              <button className="bg-white py-1 px-2 text-red-500 uppercase mt-4 rounded-md shadow-md shadow-orange-600">
                Read Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bulletin;
