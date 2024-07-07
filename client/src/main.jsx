import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authcontextprovider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authcontextprovider>

    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    </Authcontextprovider>
   </React.StrictMode>
);
