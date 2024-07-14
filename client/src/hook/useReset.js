import { Navigate } from "react-router-dom";
import { usecontext } from "../context/UserContext.jsx";

const useReset = () => {
  const { getuser } = usecontext();

  const reset = async ({ oldpassword, newpassword, confirmnewpassword }) => {
    getuser();

    try {
      
      const res = await fetch("http://localhost:3600/api/reset/pass", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldpassword,
          newpassword,
          confirmnewpassword,
        }),
      });
      
      const data = await res.json();
    
      if (data.message) {
        console.log("password reset succesfull", data);
        return { success: true, message: data.message };
      } else {
        console.log("Password not reset", data.error);
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.log("error in usereset ");
    }
  };

  return { reset };
};

export default useReset;
