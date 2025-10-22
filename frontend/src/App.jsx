import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./chapter/catalog/Catalog";
import SignUp from "./register/sign"
import LogIn from "./register/logIn";
import LoginAdmin from "./admin/registartion";
import { AdminPage } from "./admin/adminPage";
import ProtectedRoute from "./admin/protectedRoute";
import Profile from "./user/Profile";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/login" element={<LogIn/>}/>
       <Route path="/" element={<SignUp/>}/>
        <Route path="/global" element={<ProtectedRoute> <Home/> </ProtectedRoute>} /> 
        <Route path="/catalog" element={<ProtectedRoute> <Catalog/> </ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute> <LoginAdmin/> </ProtectedRoute>}/>
        <Route path="/admin/adminPage" element={<ProtectedRoute> <AdminPage/> </ProtectedRoute>}></Route>
        <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
