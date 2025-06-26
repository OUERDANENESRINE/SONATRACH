import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import "./index.css";
import ScrollDown from "./components/ScrollDown";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Stagiaire from "./pages/Stagiaire";
import Encadreur from "./pages/Encadreur";
import Stage from "./pages/Stage";
import Signup from "./pages/Signup";

import CreateAdmin from "./pages/CreateAdmin";
import CreateStagiaire from "./pages/CreateStagiaire";
import CreateEncadreur from "./pages/CreateEncadreur";
import CreateStage from "./pages/CreateStage";


import Dashboard from "./pages/Dashboard"; // ✅ Le nom doit être exactement comme dans le fichier

function App() {
  return (
    <div className="page-container">
        <Router>
      <ScrollDown />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stagiaire" element={<Stagiaire />} />
        <Route path="/encadreur" element={<Encadreur />} />
        <Route path="/encadreur/stage/:id" element={<Stage />} /> 
        <Route path="/encadreur/stage/:id" element={<Stage />} /> 
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/Admin/CreateStage" element={<CreateStage />} />
        <Route path="/Admin/CreateAdmin" element={<CreateAdmin />} />
        <Route path="/Admin/CreateStagiaire" element={<CreateStagiaire />} />
        <Route path="/Admin/CreateEncadreur" element={<CreateEncadreur />} />
         <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      
   </Router>
      
    </div>
  );
}

export default App;
