// src/pages/Home.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; 

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <img src={logo} alt="Logo Sonatrach" style={{ width: "150px" }} className="mb-4" />

      <h1 className="mb-3">Bienvenue sur la plateforme de gestion des stages</h1>
      <p className="mb-4">
        Cet espace est dédié aux stagiaires, encadreurs et administrateurs pour gérer
        efficacement les informations relatives aux stages.
      </p>

      <div className="d-flex gap-3">
        <Link to="/login" className="btn btn-primary px-4">
          Se connecter
        </Link>
        <Link to="/signup" className="btn btn-outline-secondary px-4">
  Créer un profil
</Link>

      </div>
    </div>
  );
}

export default Home;
