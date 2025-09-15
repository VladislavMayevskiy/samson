import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./chapter/catalog/Catalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  );
}

export default App;
