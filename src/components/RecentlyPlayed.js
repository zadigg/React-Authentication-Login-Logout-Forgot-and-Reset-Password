import React from "react";
import teddyafro from "../images/teddyafro.jpg";
import eyob from "../images/eyob.jpg";
import tsedi from "../images/tsedi.jpg";
import yohana from "../images/yohana.jpg";
import { RiPlayMiniFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";

function RecentlyPlayed() {
  return (
    <div className="mt-14 font-bold text-2xl">
      <div className="mb-6">RecentlyPlayed</div>
      <div className="flex space-x-9">
        {/*  */}
        <div className="hover:bg-gray-200 hover:opacity-75 relative ">
          <img
            src={teddyafro}
            className="w-[265px] h-[265px] rounded-lg "
            alt=""
          />
          <div className="flex absolute top-[83%] left-[5%] space-x-3 ">
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <RiPlayMiniFill className="h-14 w-5 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <AiFillHeart className="h-14 w-3" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <GoKebabHorizontal className="h-14 w-3" />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="hover:bg-gray-200 hover:opacity-75 relative ">
          <img src={eyob} className="w-[265px] h-[265px] rounded-lg " alt="" />
          <div className="flex absolute top-[83%] left-[5%] space-x-3 ">
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <RiPlayMiniFill className="h-14 w-5 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <AiFillHeart className="h-14 w-3" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <GoKebabHorizontal className="h-14 w-3" />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="hover:bg-gray-200 hover:opacity-75 relative ">
          <img src={tsedi} className="w-[265px] h-[265px] rounded-lg " alt="" />
          <div className="flex absolute top-[83%] left-[5%] space-x-3 ">
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <RiPlayMiniFill className="h-14 w-5 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <AiFillHeart className="h-14 w-3" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <GoKebabHorizontal className="h-14 w-3" />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="hover:bg-gray-200 hover:opacity-75 relative ">
          <img
            src={yohana}
            className="w-[265px] h-[265px] rounded-lg "
            alt=""
          />
          <div className="flex absolute top-[83%] left-[5%] space-x-3 ">
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <RiPlayMiniFill className="h-14 w-5 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <AiFillHeart className="h-14 w-3" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <GoKebabHorizontal className="h-14 w-3" />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="hover:bg-gray-200 hover:opacity-75 relative ">
          <img
            src={teddyafro}
            className="w-[265px] h-[265px] rounded-lg "
            alt=""
          />
          <div className="flex absolute top-[83%] left-[5%] space-x-3 ">
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <RiPlayMiniFill className="h-14 w-5 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <AiFillHeart className="h-14 w-3" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center">
              <GoKebabHorizontal className="h-14 w-3" />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default RecentlyPlayed;
