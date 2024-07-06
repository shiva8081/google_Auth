import React from "react";
import Google from "../Img/google.png"
import Facebook from "../Img/facebook.png"
import Github from "../Img/github.png"
const Left = () => {
    const google=()=>{
        window.open("http://localhost:3600/auth/google", "_self");
    }
  return (
    <div className=" w-1/2 h-full justify-center flex flex-col gap-3 ">
      <div
        className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-red-500 text-white cursor-pointer "
        onClick={google}
      >
        <img className="  p-1" src={Google} alt="dd" />
        Google
      </div>
      <div className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-blue-600  text-white ">
        <img className="  p-1" src={Facebook} alt="" />
        facebook
      </div>
      <div className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-black text-white ">
        <img className=" p-1" src={Github} alt="" />
        github
      </div>
    </div>
  );
};

export default Left;
