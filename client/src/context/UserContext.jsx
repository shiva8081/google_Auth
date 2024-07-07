import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const usecontext = () => {
  return useContext(UserContext);
};

export const Authcontextprovider = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(null);
  const getuser = async () => {
  try {
    const res = await fetch("http://localhost:3600/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setAuthUser(data.user);
      }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <UserContext.Provider value={{AuthUser,getuser}}>{children}</UserContext.Provider>
  );
};
