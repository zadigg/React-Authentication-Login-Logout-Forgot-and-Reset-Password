import React from "react";
import MainBody from "./MainBody";
import MainHeader from "./MainHeader";

function Main({ first_name }) {
  return (
    <div className="w-full">
      <div className="border-b-2 border-gray-200">
        <MainHeader first_name={first_name} />
      </div>
      <div>
        <MainBody />
      </div>
    </div>
  );
}

export default Main;
