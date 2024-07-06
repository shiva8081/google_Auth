import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hook/useSignup";

const Signup = () => {
  const{signup} =useSignup();
    const [Input, setInput] = useState({
        fullname:"",
        username:"",
        phone:"",
        password:"",
        confirmpassword:""
    });
     

  const create = async(e) => {
    e.preventDefault();
    await signup(Input)
  };
  return (
    <div className="op h-screen w-screen flex justify-center ">
      <div className=" w-1/2 h-fit top-32 relative border-2 shadow-2xl rounded-lg ">
        <form onSubmit={create} className="flex flex-col gap-5 p-5">
          <div className="flex flex-col">
            <label>fullname : </label>
            <input className="border" type="text" placeholder="fullname" value={Input.fullname} onChange={(e)=>setInput({...Input,fullname:e.target.value})} />
          </div>
          <div  className="flex flex-col">
            <label>Username : </label>
            <input className="border" type="text" placeholder="Username" value={Input.username} onChange={(e)=>setInput({...Input,username:e.target.value})} />
          </div>
          <div className="flex flex-col">
            <label>phone no. :</label>
            <input
              className="border"
              type="tel"
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits"
              placeholder="Phone number"
              value={Input.phone} onChange={(e)=>setInput({...Input,phone:e.target.value})}
            />
          </div>
          <div  className="flex flex-col">
            <label>Password : </label>
            <input className="border" type="password" placeholder="password" value={Input.password} onChange={(e)=>setInput({...Input,password:e.target.value})} />
          </div>
          <div  className="flex flex-col">
            <label>confirm password : </label>
            <input
              className="border"
              type="password"
              placeholder="confirm password"
              value={Input.confirmpassword} onChange={(e)=>setInput({...Input,confirmpassword:e.target.value})}
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-slate-400 border rounded-md p-1">
              Signup
            </button>
            <span className="cursor-pointer ">
              <Link to="/login">already have a account ?</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
