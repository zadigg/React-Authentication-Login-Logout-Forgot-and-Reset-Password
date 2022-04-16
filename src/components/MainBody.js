import React from "react";
import motivation from "../images/motivation.png";
import party from "../images/party.png";

function MainBody() {
  return (
    <div className="ml-[112px] mt-4">
      <div className="text-2xl">ደስታ: የሚሰማዎትን ይጫወቱ</div>
      <div className="text-sm">ማለቂያ የሌለው፣ ለግል የተበጀ የሚወዱት ሙዚቃ እና አዲስ ግኝቶች</div>
      {/*  */}
      <div className="flex items-center mt-5 space-x-8">
        {/*  */}
        <div className="w-[182px] h-[180px] bg-gradient-to-r from-[#B61C79] via-[#FE1F2B] to-[#B61C79] rounded-full ">
          <h1 className="flex items-center justify-center h-full text-[34px] font-bold text-white">
            flow
          </h1>
          <h1 className="flex justify-center text-gray-600 mt-1">Flow</h1>
        </div>
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              Motivation
            </h1>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              Party
            </h1>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              Chill
            </h1>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              Melancholy
            </h1>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              You and me
            </h1>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-xl">
          <div className="w-[182px] h-[180px] bg-gradient-to-r bg-gray-100 hover:bg-gray-300 rounded-full ">
            <div className="flex items-center justify-center h-full text-[34px] font-bold  ">
              <img src={motivation} className="h-28 " alt="logo" />
            </div>
            <h1 className="flex justify-center text-gray-600 mt-1 text-base">
              Focus
            </h1>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
}

export default MainBody;
