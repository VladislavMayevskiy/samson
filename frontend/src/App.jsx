import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./chapter/catalog/Catalog";
import SignUp from "./register/sign"
import LogIn from "./register/logIn";
import LoginAdmin from "./admin/registartion";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/login" element={<LogIn/>}/>
       <Route path="/" element={<SignUp/>}/>
        <Route path="/global" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/admin" element={<LoginAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
