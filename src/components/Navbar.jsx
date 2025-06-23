// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes (facultatif, tu peux changer)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-400 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Sonatrach Stages</h1>

        {/* Burger menu button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:underline">Accueil</Link></li>
          <li><Link to="/stagiaires" className="hover:underline">Stagiaires</Link></li>
          <li><Link to="/encadreurs" className="hover:underline">Encadreurs</Link></li>
          <li><Link to="/admin" className="hover:underline">Admin</Link></li>
        </ul>
      </div>

      {/* Mobile links (toggle visible) */}
      {isOpen && (
        <div className="sm:hidden bg-blue-500 px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link to="/stagiaires" onClick={() => setIsOpen(false)}>Stagiaires</Link></li>
            <li><Link to="/encadreurs" onClick={() => setIsOpen(false)}>Encadreurs</Link></li>
            <li><Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
