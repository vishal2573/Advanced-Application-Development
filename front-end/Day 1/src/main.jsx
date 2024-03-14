import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import Signup from "./pages/Signup.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
