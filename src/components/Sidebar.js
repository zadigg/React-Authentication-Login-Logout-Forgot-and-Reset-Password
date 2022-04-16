import React from "react";
import { FaMusic } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";

function Sidebar() {
  return (
    <div>
      <div className="flex items-center justify-center mt-2 ">
        <div className="text-3xl font-bold flex items-center space-x-3 ">
          <div>
            <SiMusicbrainz />
          </div>
          <div>ሙዚቃ</div>
        </div>
      </div>
      {/*  */}
      <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-500 m-2  p-5 rounded-md ">
        አሁን በነጻ እየተተቀሙ ነው ያሉት፣ አሁኑኑ ያዘምኑና ከማስታወቂያ ነጻ ይጠቀሙ፡፡
        <div className="flex justify-center mt-2">
          <button className="rounded-full border border-white px-[30%] py-1 text-xl">
            ይመዝገቡ
          </button>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="mt-9">
        {/*  */}
        <div className="flex space-x-4 items-center pl-6 text-xl">
          <div>
            <FaMusic />
          </div>
          <div className="font-semibold">ሙዚቃ</div>
        </div>
        {/*  */}
        <div className="flex space-x-4 items-center pl-6 text-xl mt-5">
          <div>
            <FaMusic />
          </div>
          <div className="font-semibold">ፖድካስት</div>
        </div>
        {/*  */}
        <div className="flex space-x-4 items-center pl-6 text-xl mt-5">
          <div>
            <FaMusic />
          </div>
          <div className="font-semibold">ፈልግ</div>
        </div>
        {/*  */}
        <div className="flex space-x-4 items-center pl-6 text-xl mt-5">
          <div>
            <FaMusic />
          </div>
          <div className="font-semibold">ምርጥ</div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="ml-14 mt-5">
        <div>ምርጥ ዘፈን</div>
        <div className="mt-4">ቅንብር</div>
        <div className="mt-4">አልበም</div>
        <div className="mt-4">አርቲስት</div>
        <div className="mt-4">ፖድካስት</div>
      </div>
      {/*  */}
    </div>
  );
}

export default Sidebar;
