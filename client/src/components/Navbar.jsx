import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ AuthUser }) => {
  const logout = () => {
    console.log("1");
    window.open("http://localhost:3600/auth/logout", "_self");
    console.log("2");
  };
  return (
    <div className="bg-slate-500 text-white flex h-[50px] justify-between items-center w-full ">
      <span className="ml-5  flex space-x-5">
        <Link to="/">Lame app</Link>
        {AuthUser&& <div className="flex items-center ">
            <Link to="/addpost">New Post</Link>
          </div>}
      </span>
      {AuthUser ? (
        <>
         
          <ul className="flex space-x-5 mr-5">
            <li>
              <img
                className="w-[32px] h-[32px] rounded-full"
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
              />
            </li>
            <li>{AuthUser.name || "User"}</li>
            <li className="cursor-pointer">
              <Link to="/reset">Reset Password</Link>
            </li>
            <li className="cursor-pointer" onClick={logout}>
              Logout
            </li>
          </ul>
        </>
      ) : (
        <div className="mr-5">
          <Link to="/login">login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
