import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./chapter/catalog/Catalog";
import SignUp from "./register/sign"


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<SignUp/>}/>
        <Route path="/global" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  );
}

export default App;
