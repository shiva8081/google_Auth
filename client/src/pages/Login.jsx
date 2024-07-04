import React from "react";
import Google from "../Img/google.png"
import Facebook from "../Img/facebook.png"
import Github from "../Img/github.png"

const Login = () => {
    const google=()=>{
        window.open("http://localhost:3600/auth/google", "_self");
    }
  return (
    <div className=" flex  justify-center h-screen ">
      <div className="border gap-2 flex items-center justify-center p-6 rounded-lg shadow-2xl w-2/3 h-2/4 mt-36  ">
        <div className=" w-1/2 h-full justify-center flex flex-col gap-3 ">
          <div className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-red-500 text-white cursor-pointer " onClick={google}><img className="  p-1" src={Google} alt="dd" />Google</div>
          <div className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-blue-600  text-white "><img className="  p-1" src={Facebook} alt="" />facebook</div>
          <div className="ml-10 gap-5 border flex items-center w-1/3 rounded-lg bg-black text-white "><img className=" p-1" src={Github} alt="" />github</div>
        </div>
        <div className=" border-black border-2 rounded-full p-2">OR</div>
        <div className=" pr-10 pl-14 flex flex-col w-1/2 h-full justify-center  ">
          <label className="ml-2 mr-2">
            <span className="text-base label-text">Username :</span>
          </label>
          <input className="border ml-2 mr-2" type="text" placeholder="Username" />
          <label className="ml-2 mr-2 pt-5">
            <span className="text-base label-text">Password :</span>
          </label>
          <input className="border ml-2 mr-2" type="text" placeholder="Password" />
          <button className="submit border rounded-lg bg-slate-400 w-24 ml-2 mt-3 ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
