import { Link, useLocation } from "react-router-dom";
import {
  UserPlus, Users, LayoutDashboard, UserCog, ShieldCheck, LogOut
} from "lucide-react";
import logo from "../assets/logo.svg"; // à adapter selon ton chemin

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/admin", label: "Créer Un Stage ", icon: <LayoutDashboard size={18} /> },
    { to: "/admin/CreateStagiaire", label: "Créer stagiaire", icon: <UserPlus size={18} /> },
    { to: "/admin/CreateEncadreur", label: "Créer encadreur", icon: <UserCog size={18} /> },
    { to: "/admin/CreateAdmin", label: "Créer admin", icon: <ShieldCheck size={18} /> },
    { to: "/admin/utilisateurs", label: "Tous les utilisateurs", icon: <Users size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-orange-600 to-orange-500 text-white p-6 fixed top-0 left-0 shadow-lg flex flex-col justify-between rounded-r-lg">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <img src={logo} alt="Sonatrach" className="w-10 h-10" />
          <span className="text-xl font-bold">Sonatrach Admin</span>
        </div>

        {/* Navigation */}
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-orange-700 ${
                  location.pathname === item.to ? "bg-orange-700 font-semibold" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Déconnexion en bas */}
      <div className="mt-10 pt-6 border-t border-orange-300">
        <Link
          to="/home"
          className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
