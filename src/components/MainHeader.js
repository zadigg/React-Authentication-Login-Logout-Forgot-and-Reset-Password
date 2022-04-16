import React from "react";
import { BsSearch } from "react-icons/bs";
function MainHeader({ first_name }) {
  return (
    <div className="flex  justify-between items-center">
      {" "}
      <div className="flex flex-grow h-14 items-center  ">
        <div className="w-[53.27%] flex bg-white items-center pl-2">
          <BsSearch />
          <input type="text" className="w-full p-2 " placeholder="Search" />
        </div>
      </div>
      {/* <div className="mr-5">{first_name}</div> */}
      <div className="mr-5 text-xl animate-pulse">{first_name}</div>
    </div>
  );
}

export default MainHeader;
