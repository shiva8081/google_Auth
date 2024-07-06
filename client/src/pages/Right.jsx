import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hook/useLogin.js";

const Right = () => {
  const { login } = useLogin();
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });

  const submit = async () => {
    await login(Input);
  };

  return (
    <div className="pr-10 pl-14 flex flex-col w-1/2 h-full justify-center">
      <label className="ml-2 mr-2">
        <span className="text-base label-text">Username :</span>
      </label>
      <input
        className="border ml-2 mr-2"
        type="text"
        placeholder="Username"
        value={Input.username}
        onChange={(e) => setInput({ ...Input, username: e.target.value })}
      />
      <label className="ml-2 mr-2 pt-5">
        <span className="text-base label-text">Password :</span>
      </label>
      <input
        className="border ml-2 mr-2"
        type="password"
        placeholder="Password"
        value={Input.password}
        onChange={(e) => setInput({ ...Input, password: e.target.value })}
      />
      <button
        className="submit border rounded-lg bg-slate-400 w-24 ml-2 mt-3"
        onClick={submit}
      >
        Login
      </button>
      <Link to="/signup">Don't have an account?</Link>
    </div>
  );
};

export default Right;
