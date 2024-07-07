import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup.jsx";
import { usecontext } from "./context/UserContext.jsx";

function App() {
  const {AuthUser}=usecontext();
  return (
    <>
      <Navbar AuthUser={AuthUser} />
      {/* <Signup/> */}
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
        <Route
          exact
          path="/signup"
          element={AuthUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/*" element={<div className="">missing</div>} />
      </Routes>
    </>
  );
}

export default App;
