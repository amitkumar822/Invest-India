import React from "react";

function TimeExperiencesPage() {
  return (
    <>
      <div className="w-full h-[400px] bg-[#211D28] text-white">
        <div className="w-[80%] mx-auto grid lg:grid-cols-2 py-10">
          {/*===👇 Clock part 👇===*/}
          <div className="grid md:grid-cols-2">
            <div>
              <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
                <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
                India This Minute
              </h1>
              <div className="border border-white py-3 px-5 mt-6 rounded-lg">
                <input type="text" readOnly placeholder="Roads & Highways" className="bg-transparent" />
              </div>
            </div>
            <div></div>
          </div>
          {/*===👇 New India Experiences part 👇===*/}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default TimeExperiencesPage;
