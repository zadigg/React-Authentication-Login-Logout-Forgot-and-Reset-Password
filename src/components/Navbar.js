import React from "react";
import { Link } from "react-router-dom";
function Navbar({ user }) {
  return (
    <div className="max-w-5xl mx-6 lg:mx-auto flex justify-between my-5">
      <Link to={"/"}>
        <div className="font-bold">Home</div>
      </Link>
      <div className="flex space-x-3">
        <Link to={user !== "" ? "/dashboard" : "/login"}>
          <div>{user !== "" ? <div>{user}</div> : <div>Login</div>}</div>
        </Link>
        <Link to={user !== "" ? "/" : "/register"}>
          <div>{user !== "" ? <div>Signout</div> : <div>Register sa</div>}</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
