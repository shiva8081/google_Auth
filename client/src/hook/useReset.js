import { usecontext } from "../context/UserContext.jsx";

const useReset = () => {
  const { getuser } = usecontext();

  const reset = async ({ oldpassword, newpassword, confirmnewpassword }) => {
    getuser();

    try {
      console.log(1);
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
      console.log(1);
      const data = await res.json();
      console.log(2);
      if (res.status === 200) {
        console.log("password reset succesfull", data);
      } else {
        console.log("password not reset");
      }
    } catch (error) {
      console.log("error in usereset ");
    }
  };

  return { reset };
};

export default useReset;
