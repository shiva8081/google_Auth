
import "./App.css";
import { Navigate, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


function App() {
  const AuthUser=true;
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={AuthUser?<Home/>:<Navigate to="/login" />} />
          <Route exact path="/login" element={AuthUser?<Navigate to="/"/>:<Login/>}/>
          <Route path="/*" element={<div className="">missing</div>} />
      </Routes>
      
    </>
  );
}

export default App;
