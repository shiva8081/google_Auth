import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import { usecontext } from "./context/UserContext.jsx";
import Reset from "./pages/Reset.jsx";
import Login from "./pages/Login.jsx";
import Nav from "./pages/Nav.jsx";
import Addpost from "./pages/Addpost.jsx";

function App() {
  const { AuthUser } = usecontext();
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
        <Route
          exact
          path="/signup"
          element={AuthUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          exact
          path="/reset"
          element={AuthUser ? <Reset /> : <Navigate to="/" />}
        />
        <Route exact path="/addpost" element={AuthUser?<Addpost/>:<Navigate to="/login"/> } />
        <Route path="/*" element={<div className="">missing</div>} />
      </Routes>
    </>
  );
}

export default App;
