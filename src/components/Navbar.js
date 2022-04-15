import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="max-w-5xl mx-6 lg:mx-auto flex justify-between my-5">
      <Link to={"/"}>
        <div className="font-bold">Home</div>
      </Link>
      <div className="flex space-x-3">
        <Link to={"/login"}>
          <div>Login</div>
        </Link>
        <Link to={"/register"}>
          <div>Sign up</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
