import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Stagiaire from "./pages/Stagiaire";
import Encadreur from "./pages/Encadreur";
import Stage from "./pages/Stage";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stagiaire" element={<Stagiaire />} />
        <Route path="/encadreur" element={<Encadreur />} />
        <Route path="/encadreur/stage/:id" element={<Stage />} /> 
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

export default App;
