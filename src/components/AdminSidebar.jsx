import { Link, useLocation } from "react-router-dom";
import {
  UserPlus, Users, LayoutDashboard, UserCog, ShieldCheck, LogOut,Plus} from "lucide-react";
import logo from '../assets/logo.png' 


const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/admin/CreateStage", label: "Ajouter Un Stage ", icon: <Plus size={18} /> },
    { to: "/admin/CreateStagiaire", label: "Ajouter un stagiaire", icon: <UserPlus size={18} /> },
    { to: "/admin/CreateEncadreur", label: "Ajouter un encadreur", icon: <UserPlus size={18} /> },
    { to: "/admin/CreateAdmin", label: "Ajouter un admin", icon: <UserPlus size={16} /> },
    { to: "/admin/dashboard", label: "Dashboard Utilisateurs", icon: <LayoutDashboard size={18} /> },
    { to: "/admin", label: "Créer Un Stage", icon: <LayoutDashboard size={18} /> },
    
  ];

  return (
    <div className= " w-60 h-screen bg-gradient-to-b from-gray-500 to-orange-300 text-white p-6 fixed top-0 left-0 shadow-lg flex flex-col justify-between ">
      <a href="/home" className="-m-1.5 pr-2 " >
                
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto"
                  style={{ width: "60px", height: "80px" }}
                />
              </a>
      <div>
       

        {/* Navigation */}
        <ul className="space-y-2 " id="admin-sidebar">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                id="admin-link "
                className={` text-gray-900  text-decoration-none flex items-center gap-3 px-4 py-2 
                  rounded-lg transition-all duration-200 hover:bg-white/30 hover:backdrop-blur-sm 
                   ${
                  location.pathname === item.to ? "font-semibold text-orange-900" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Déconnexion */}
      
      <div className="mt-10 pt-6 border-t border-gray-500">
        <Link
          to="/home"
          className="text-gray-800 text-decoration-none flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
