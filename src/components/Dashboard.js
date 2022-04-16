import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";
function Dashboard() {
  const location = useLocation();
  return (
    <div className="bg-[#FFFFFF]">
      <div className="flex w-full border-b-2 border-gray-200  ">
        <div className="w-[11.6%] h-[91.5vh] border-r-2 border-gray-200 ">
          <Sidebar />
        </div>
        <div className="flex flex-grow h-[91.5vh] overflow-scroll scrollbar-hide">
          <Main first_name={location.state.first_name} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
