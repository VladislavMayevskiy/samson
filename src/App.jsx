import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./chapter/catalog/Catalog";
import Header from "./chapter/big/Header"; 

function App() {
  const [sort, setSort] = useState("price");
  const [selected, setSelected] = useState([]);

  return (
    <Router>
      {/* Header завжди на всіх сторінках */}
      <Header 
        sort={sort} 
        setSort={setSort} 
        selected={selected} 
        setSelected={setSelected} 
      />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog sort={sort} selected={selected} />} />
      </Routes>
    </Router>
  );
}

export default App;
