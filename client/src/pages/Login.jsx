import React from "react";

import Left from "./Left.jsx";
import Right from "./Right.jsx";

const Login = () => {
   
  return (
    <div className=" flex  justify-center h-screen " >
      <div className="border gap-2 flex items-center justify-center p-6 rounded-lg shadow-2xl w-2/3 h-2/4 mt-36  ">
       <Left/>
        <div className=" border-black border-2 rounded-full p-2">OR</div>
        <Right/>
      </div>
    </div>
  );
};

export default Login;
