import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:3004/register")
      .then((res) => {
        // console.log(res);
        setUsers(res.data);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email + password);
    Object.keys(users).map((key) => {
      if (users[key].email === email && users[key].password === password) {
        // return alert("Login Success");
        return navigate("/dashboard", {
          state: { id: 1, first_name: users[key].first_name },
        });

        // first_name: users[key].first_name,
        // last_name: users[key].last_name,
        // email: users[key].email
      } else {
        return alert("Login Failed");
      }
    });
  };

  // const postRenderer = users.map((user) => {
  //   return (
  //     <div key={user.id}>
  //       {user.id} {user.first_name} {user.email}
  //     </div>
  //   );
  // });

  return (
    <div>
      <div>
        <Navbar user="" />
      </div>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there 👋,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form onSubmit={handleSubmit} method="post" className="mt-6">
            <label
              htmlFor="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autoComplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Login
            </button>
            <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Forgot password
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
