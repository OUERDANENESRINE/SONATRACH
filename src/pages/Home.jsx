// src/pages/Home.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-16">
        <img src={logo} alt="Logo Sonatrach" className="w-36 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenue sur la plateforme de gestion des stages
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl">
          Cet espace est dédié aux stagiaires, encadreurs et administrateurs pour gérer les informations liées aux stages.
        </p>
        <Link
          to="/login"
          className="bg-orange-400 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition duration-300"
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
};

export default Home;
