import { usecontext } from "../context/UserContext.jsx";

const useSignup = () => {
    
  const { getuser } = usecontext();
  const signup = async ({
    fullname,
    username,
    password,
    email,
    confirmpassword,
    phone,
  }) => {
    try {
      const res = await fetch("http://localhost:3600/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          phone,
          email,
        }),
      });

      const data = await res.json();
    //   console.log(data);
      if (res.status === 201) {
        getuser();
        // console.log(data);
      }
      return data;
    } catch (error) {
    //   console.log(8);
      console.log("error in signup page", error.message);
    }
  };

  return { signup };
};

export default useSignup;
