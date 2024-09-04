import React from "react";
import logo from "../photo/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="w-full bg-[#b3f7f6] flex fixed justify-around items-center h-[150px] text-black font-semibold z-50">
        <div>
          <img className="w-[200px]" src={logo} alt="logo" />
        </div>
        <ul className="flex gap-4">
          <li className=" cursor-pointer hover:underline hover:text-green-600">Home</li>
          <li className=" cursor-pointer hover:underline hover:text-green-600">About</li>
          <li className=" cursor-pointer hover:underline hover:text-green-600">Our Product</li>
          <li className=" cursor-pointer hover:underline hover:text-green-600">Gallery</li>
          <li className=" cursor-pointer hover:underline hover:text-green-600">Contact</li>
        </ul>
        <div className="flex gap-8 items-center">
          <span>
            <FiShoppingBag />
          </span>
          <span>
            <IoSearchOutline />
          </span>
          <button
            className="py-2 px-6 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => alert("Get a quote")}
          >
            GET A QUOTE
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
