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
import Admin from "./pages/Admin/Admin";
import Stagiaire from "./pages/Stagiaire";
import Encadreur from "./pages/Encadreur";
import Stage from "./pages/Stage";
import Signup from "./pages/Signup";

import CreateAdmin from "./pages/Admin/Creation/CreateAdmin";
import CreateStagiaire from "./pages/Admin/Creation/CreateStagiaire";
import CreateEncadreur from "./pages/Admin/Creation/CreateEncadreur";
import CreateStage from "./pages/Admin/Creation/CreateStage";

import ModifierAdmin from "./pages/Admin/Modification/ModifierAdmin";
import ModifierStagiaire from "./pages/Admin/Modification/ModifierStagiaire";
import ModifierEncadreur from "./pages/Admin/Modification/ModifierEncadreur";
import ModifierStage from "./pages/Admin/Modification/ModifierStage";

import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import DashboardStagiaire from "./pages/Admin/DashboardStagiaire";
import DashboardStage from "./pages/Admin/DashboardStage";
import DashboardEncadreur from "./pages/Admin/DashboardEncadreur";


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

        <Route path="/Admin/ModifierAdmin" element={<ModifierAdmin />} />
        <Route path="/Admin/ModifierStagiaire" element={<ModifierStagiaire />} />
        <Route path="/Admin/ModifierEncadreur" element={<ModifierEncadreur />} />
        <Route path="/Admin/ModifierStage" element={<ModifierStage />} />

        <Route path="/admin/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/admin/dashboardStage" element={<DashboardStage />} />
        <Route path="/admin/dashboardStagiaire" element={<DashboardStagiaire />} />
        <Route path="/admin/dashboardEncadreur" element={<DashboardEncadreur />} />
        
      </Routes>
      
   </Router>
      
    </div>
  );
}

export default App;
