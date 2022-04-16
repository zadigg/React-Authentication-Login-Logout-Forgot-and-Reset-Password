import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaPlay, FaChromecast } from "react-icons/fa";
import { FiRepeat, FiVolume2 } from "react-icons/fi";
import { BsShuffle } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";

function Footer() {
  return (
    <div className="ml-9 flex items-center">
      {/*  */}
      <div className="flex h-[9vh] items-center space-x-3 w-[430px]">
        <div>
          <BsFillCaretLeftFill />
        </div>
        <div>
          <FaPlay />
        </div>
        <div>
          <BsFillCaretRightFill />
        </div>
      </div>
      {/*  */}
      <div className=" flex-grow space-y-1 ">
        <div>Good Night Rain - Nature Sounds</div>
        <div className="flex items-center space-x-2">
          <div>00:00</div>
          <div class="w-[880px] border-t border-black"></div>
          <div>03:44</div>
        </div>
      </div>
      {/*  */}
      <div className="flex mr-9 items-center space-x-8">
        <FaChromecast />
        <FiRepeat />
        <BsShuffle />
        <FiVolume2 />
        <HiAdjustments />
      </div>
      {/*  */}
    </div>
  );
}

export default Footer;
