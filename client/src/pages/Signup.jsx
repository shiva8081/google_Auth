import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hook/useSignup";

const Signup = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, seterror] = useState("");
  const [emailvalid, setemailvalid] = useState(true);
  const { signup } = useSignup();
  const [Input, setInput] = useState({
    fullname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const create = async (e) => {
    e.preventDefault();
    const result = emailRegex.test(email);
    console.log(result);

    if (result) {
      setemailvalid(true)
      const data = await signup(Input);
      if (data?.error) {
        console.log(data);
        seterror(data.error);
      }
    } else {
      setemailvalid(false);
    }
  };
  return (
    <div className="op h-screen w-screen flex justify-center ">
      <div className=" w-1/2 h-fit top-32 relative border-2 shadow-2xl rounded-lg ">
        <p>{error}</p>
        <form onSubmit={create} className="flex flex-col gap-5 p-5">
          <div className="flex flex-col">
            <label>fullname : </label>
            <input
              id="fullname"
              name="fullname"
              className="border"
              type="text"
              placeholder="fullname"
              value={Input.fullname}
              onChange={(e) => setInput({ ...Input, fullname: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Username : </label>
            <input
              className="border"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={Input.username}
              onChange={(e) => setInput({ ...Input, username: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Email : </label>
            <input
              className="border"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={Input.email}
              onChange={(e) => setInput({ ...Input, email: e.target.value })}
              required
            />
            {!emailvalid&& <p className="text-red-500">Enter a valid email</p>}
          </div>
          <div className="flex flex-col">
            <label>phone no. :</label>
            <input
              className="border"
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits"
              placeholder="Phone number"
              value={Input.phone}
              onChange={(e) => setInput({ ...Input, phone: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Password : </label>
            <input
              className="border"
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={Input.password}
              onChange={(e) => setInput({ ...Input, password: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>confirm password : </label>
            <input
              className="border"
              id="confirm"
              name="confirm"
              type="password"
              placeholder="confirm password"
              value={Input.confirmpassword}
              onChange={(e) =>
                setInput({ ...Input, confirmpassword: e.target.value })
              }
              required
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
