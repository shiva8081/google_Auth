import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { useEffect, useState } from "react";

function App() {
  const [AuthUser, setAuthUser] = useState(null);
  
  useEffect(() => {
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
          if(res.status===200){
            const data = await res.json();
            console.log(data)
            // console.log(AuthUser.photos[0])
            setAuthUser(data.user);
          }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getuser();
  }, []);


  return (
    <>
      <Navbar AuthUser={AuthUser} />
      <Routes>
        <Route
          exact
          path="/"
          element={AuthUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={AuthUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/*" element={<div className="">missing</div>} />
      </Routes>
    </>
  );
}

export default App;
