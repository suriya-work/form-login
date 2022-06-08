import { Routes, Route, Navigate} from "react-router-dom";
import React from "react";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate  to="/signup" />} />
      </Routes>
      
     </div>
  );
}

export default App;
